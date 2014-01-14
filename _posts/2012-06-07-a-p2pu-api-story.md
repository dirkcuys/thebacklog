---
title: A P2PU API story
author: dirk
layout: post
permalink: /2012/06/07/a-p2pu-api-story/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2012/06/p2pu-api-story.html
categories:
  - p2pu
---
We&#8217;ve had some thoughts, talk and [implementation][1] for a P2PU API. It seems like everyone agrees that it&#8217;s a good idea and something that we need, but we are lacking concrete use cases. Maybe because we don&#8217;t have the complete API yet &#8211; the classic chicken and egg problem.

So I propose that we start by building a few prototypes of what we would like to use an API for. A prototype doesn&#8217;t need to be a running program, although a running prototype would be great! We just need something a little bit more tangible to help us think about the ideal API that we want for P2PU.

A prototype may look something like this:

Lets say you want to build something to run a MOOC, you will need to use the following parts of P2PU: 
*   Authentication
*   User profiles
*   Activity
*   Notifications
*   Messaging
*   Badges

### User story

So lets think up a little about a user story:

You go to mooc.org and see a mooc that you like &#8211; &#8220;The study of geographic and temporal art as encountered in urban environments &#8211; SOGTA&#8221;. You decide to sign up for the MOOC. When you click on sign-up you get redirected to P2PU to sign-in to your P2PU profile. Once you signed in, you are asked by P2PU if you want to allow mooc.org to send you notifications and publish activities to your activity feed?

Once you confirm you are redirected back to mooc.org. You am now signed up for SOGTA with your P2PU profile. On mooc.org you can participate in group discussions. Whenever you get a reply to a message that you posted in a discussion, you receive an email in your inbox. When you reply to the email, your message is also posted in the group discussion thread.

Every week you receive an email from the MOOC organizer that informs you what&#8217;s happening with SOGTA.

On mooc.org there is a list of courses that is relevant to SOGTA. You can participate in these courses together with other people that is also signed up for SOGTA. There is also lots of references to other learning resources like coursera.

Finally, after participating in the MOOC, you receive a SOGTA participation badge to show that you completed the MOOC. This badge is shown on your profile at P2PU, but it&#8217;s stored in your open badge backpack.

### Prototype

Interaction between mooc.org and p2pu.org may look like this.

When someone at mooc.org creates a new MOOC, the MOOC gets published to the course register at p2pu.org:

<span>https://api.p2pu.org/courses PUT {&#8216;title&#8217;: &#8216;The study of geographic and temporal art as encountered in urban environments&#8217;, &#8216;shortcode&#8217;: &#8216;SOGTA&#8217;, &#8216;signup-url&#8217;:'mooc.org/sogta/sign-up&#8217;, &#8216;course-style&#8217;:'MOOC&#8217;,  &#8216;tags&#8217;:['art','geo-art'], &#8230; }</span>

Now the &#8220;The study of geographic and temporal art as encountered in urban environments&#8221; will show up when someone searches for &#8220;geographic art&#8221; on the P2PU course register!

<span><span>https://api.p2pu.org/courses</span> <span>also support GET,POST and DELETE to query, update and delete courses from the course register</span></span>

When a user signs up for a MOOC on mooc.org, the browser will be redirected to https://p2pu.org/login. After the user successfully logged in, they get a token and user profile from p2pu.org and that is passed onto mooc.org (handled by javascript without the user knowing anything about it). mooc.org then does a post to

<span>https://api.p2pu.org/user/verify-login POST {&#8216;user-profile&#8217;:'https://p2pu.org/username&#8217;, &#8216;token&#8217;:'bd46c283195c0aefaffb179f6197f18d184d38b8&#8242;}</span>

which respons with 200 OK to indicate that the user is logged in and that the token is valid. 

mooc.org can now safely add https://p2pu.org/username to the list of users that signed up for the MOOC. mooc.org also sends a message to https://p2pu.org/username to give the user instructions about SOGTA

<span>https://api.p2pu.org/send-message POST {&#8216;user-profile&#8217;:'https://p2pu.org/username&#8217;, &#8216;subject&#8217;:'Welcome to SOGTA&#8217;, &#8216;content&#8217;:'We are glad that you joined SOGTA &#8230;&#8217; }</span>

p2pu.org automatically add &#8216;app&#8217;:'mooc.org&#8217; to the data and depending on the user&#8217;s preferences is sent a message to the email address registered with p2pu.org

Whenever a significant action is performed in SOGTA by a user, mooc.org does the following:

<span>https://api.p2pu.org/activity PUT {&#8216;subject&#8217;:'https://p2pu.org/username&#8217;, &#8216;verb&#8217;:'post&#8217;, &#8216;object&#8217;:'https://mooc.org/sogta&#8217;, &#8216;verb-url&#8217;:'https://mooc.org/sogta/comment/135&#8242;, &#8216;message&#8217;:'user posted a comment in the MOOC SOGTA&#8217;}</span>

This is only allowed if user gave permission to mooc.org to post activity. If this failed mooc.org may choose to do

<span>https://api.p2pu.org/activity PUT {&#8216;verb&#8217;:'post&#8217;, &#8216;object&#8217;:'https://mooc.org/sogta&#8217;, &#8216;verb-url&#8217;:'https://mooc.org/sogta/comment/135&#8242;, &#8216;message&#8217;:'A new comment was posted in the MOOC SOGTA&#8217;}</span>

<span>https://api.p2pu.org/activity GET {&#8216;noun&#8217;:'https://p2pu.org/user&#8217;}</span> &#8211; will return all activities involving user

<span>https://api.p2pu.org/activity GET {&#8216;noun&#8217;:'https://mooc.org/sogta&#8217;}</span> &#8211; will return all activities involving SOGTA

When a user makes a comment and receives a reply, something like this can happen:

<span>https://api.p2pu.org/notification PUT {&#8216;profile&#8217;:'https://p2pu.org/username&#8217;, &#8216;subject&#8217;:&#8217;[SOGTA] reply to comment&#8217;, &#8216;message&#8217;:'Someone replied to your comment&#8217;, &#8216;email-reply-possible&#8217;:'True&#8217;}</span>

This call returns {&#8216;reply-token&#8217;:&#8217;005f035e7d1b1c2ff6de0d4a73cc2f040d5b4127&#8242;} to mooc.org

The user receives an email if notifications are allowed for mooc.org. The email look like this:

> From: reply+005f035e7d1b1c2ff6de0d4a73cc2f040d5b4127@reply.p2pu.org  
> Subject: \[mooc.org\] \[SOGTA\] reply to comment  
> Message:   
> Someone replied to your comment.
> 
> You can respond by replying to this email with your text:  
> <here>  
> </here> 

When the user replies to the email, mooc.org gets a post from p2pu.org at the URL that mooc.org had to supply when registering to use the P2PU API:

<span>https://mooc.org/api/message-in PUT {&#8216;from&#8217;:'https://p2pu.org/user&#8217;, &#8216;reply-token&#8217;:&#8217;005f035e7d1b1c2ff6de0d4a73cc2f040d5b4127&#8242;, &#8216;message&#8217;:'???&#8217;}</span>

I haven&#8217;t yet thought through the badge API for this scenario.

So start thinking about how you would like to use an API to interact with P2PU and what you will build and send it to us at <p2pu-dev@lists.p2pu.org>

 [1]: https://github.com/josmas/lernanta/tree/api