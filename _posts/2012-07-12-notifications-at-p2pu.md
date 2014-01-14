---
title: Notifications at P2PU
author: dirk
layout: post
permalink: /2012/07/12/notifications-at-p2pu/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2012/07/notifications-at-p2pu.html
geo_latitude:
  - 52.519171
geo_longitude:
  - 13.4060912
geo_address:
  - Berlin, Germany
categories:
  - p2pu
---
Over at [P2PU][1] we recently revised how we do notifications. A mayor part of the update is allowing people to reply directly to a notification by email.

Any module in P2PU can send a notification to a user. If the module supports receiving a reply to the notification, it passes a callback URL to the notification module when it sends a notification.

<span>   notify(user, &#8216;subject&#8217;, &#8216;notification text&#8217;, &#8216;/comments/4/reply&#8217;) </span>

The callback URL get saved together with a response token that is then attached to the email address the notification is sent from.

   reply+<token><response token=""><response token="">@reply.p2pu.org</response></response></token>

We make use of sendgrid for sending and receiving email. Sendgrid provides a API called parse that handles receiving email. The parse API calls a specific URL on P2PU whenever a reply is received.

The reply then gets handled by the notification module where the token is verified and the user sending the reply is determined.

The notification module then uses the callback URL to let the original module know that a user responded and passes along the user and the reply text.

   POST /comments/4/reply user=&#8217;Bob&#8217;, text=&#8217;The reply text comes here&#8217; 

<div>
  <a href="http://2.bp.blogspot.com/-t2VOhv6HUpM/T_7JG9NeL0I/AAAAAAAAALI/N0H-IbZq2oc/s1600/notifications.png" imageanchor="1"><img border="0" height="160" src="http://2.bp.blogspot.com/-t2VOhv6HUpM/T_7JG9NeL0I/AAAAAAAAALI/N0H-IbZq2oc/s640/notifications.png" width="640" /></a>
</div>

 [1]: https://p2pu.org/