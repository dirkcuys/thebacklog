---
title: Sending email using SMTP and TLS from the command line
layout: post
---

Here is a script you can use to send email from a linux command line if you need to use TLS (Transport Layer Security).

{% highlight Python %}
import smtplib
server = smtplib.SMTP('stmp.example.net')
server.starttls()
server.login('username', 'password')
msg = "Subject: Test\r\nFrom: from@mail.com\r\nTo: to@mail.com\r\n\r\nThis is a test\r\n"
server.sendmail('from@mail.com', 'to@mail.com', msg)
server.quit()
{% endhighlight %}

Just copy and past this into a file and then run it using python: `python test_smtp.py`.

I just needed to test SMTP credentials without installing a mail client or something worse, so the script is pretty basic.
