---
title: Writing Django apps for humans
layout: post
categories: [thoughts]
tags: [technology, django]
---
The last two years a big part of my work have been to write Django apps for online learning. I’ve learned a lot and feel that it was successful. But there is one thing I didn’t get right and that is writing applications that are easy for non software developers to configure run and customize. I’m not talking about deploying the application or setting up and configuring the database, I’m talking about simple tasks like updating copy and changing settings.

There are three things that I think can be done to improve this in Django!

The first thing to do is run a check for all the required settings and letting the user know when something isn’t set. It is no fun to set up an application only to get an internal server error! This can be done using middleware in Django. Check the essential variables on every request that goes to a URL other than /admin and if the variables aren’t set, redirect the user to a page telling them that the application isn’t set up properly and tell them how to correct that.

The second part is to load settings from the database and allow the admin user to specify the settings using a web interface. There is no need for to know git, the command line and heroku simply because they want to change the SMTP server credentials. Putting these settings in the database also ensure that you are backing them up - you are backing up your db, right? How many people are backing up that lone little settings_local.py file in addition to the user uploaded files?

Some settings will still need to be done beforehand like the database settings, but this can be kept to a minimum. Hopefully only the database settings.

The third thing is storing templates in the database. Create the base templates on disc, but create a custom template loader that loads templates from the database if they exist there. This way the user of the application can make changes to the copy, layout, etc without having to jump into code, git, deploying, etc. Maybe this doesn’t make sense for all applications, but for many it does.

So, does any of this sounds familiar? That is because it is. The inspiration comes from the way Discourse handles configuration and the flexibility a Wordpress user have.

While the changes I’m suggesting won’t be appropriate for every Django app, I believe that this can go a long way to enable the user/owner of the application to get more out of it. Things can go wrong - you are now allowing the user to author templates - but things can also go right. That, or we get to use Wordpress and navigate the ocean of half baked freemium plugins that comes with that!
