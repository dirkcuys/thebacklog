---
title: Archiving an old etherpad server
layout: post
---

I've had to backup/archive data on an [etherpad](https://etherpad.org/) server more than once, so it's probably worth documenting and sharing.

Requirements:

- you're running linux and can use the command line
- docker is installed on your local machine
- the server is still running and you have ssh access

Get a copy of the database. Eg, run this on your server:

    ssh you@your-server.net
    mysqldump -A -u$DB_USER -p$DB_PASS > etherpad.sql
    exit
    scp you@your-server.net:etherpad.sql .

Start a mysql server locally using docker

    docker run --name=etherpad-db -d mysql/mysql-server:5.7

Get the password that was generated. It might take a while for the server to start

    docker logs etherpad-db 2>&1 | grep GENERATED

Change the root password (you're doing this locally right):

    docker exec -it etherpad-db mysql -uroot -p
    > ALTER USER 'root'@'localhost' IDENTIFIED BY 'PASSWORD';

Load the data into the db:

    docker exec -i etherpad-db mysql -uroot -ppassword < etherpad.sql

Get a list of all the etherpads on the server

    docker exec -it etherpad-db mysql -uroot -ppassword etherpad --batch -e 'select distinct substring(store.key,5,locate(":",store.key,5)-5) as "pads" from store where store.key like "pad:%"' > etherpads.txt

Download the pads from the live server

```bash

cat etherpads.txt | tr -d '\r'  | while read -r LINE
do
    curl "https://PAD.DOMAIN.NET/p/$LINE/export/txt" -o "txt/${LINE}.txt"
done
```

Remove pads that was generated using the template. Find a blank pad you downloaded and copy it to `txt/blank.txt`

```bash
#!/bin/bash
for file in `ls ./txt`
do
    if diff -q txt/$file txt/blank.txt &>/dev/null
    then
        if [ $file != "blank.txt" ]
        then
            ls -alhtr txt/$file
            rm -- "txt/$file"
        fi
    fi
done
```

And now you have the text content of all your etherpads ready to keep or host somewhere for posterity.
