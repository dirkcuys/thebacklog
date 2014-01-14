---
title: Learning Lernanta
author: dirk
layout: post
permalink: /2012/05/24/learning-lernanta/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2012/05/learning-lernanta.html
categories:
  - lernanta
  - p2pu
---
I recently took a dive into the source code of a project called <a href="https://github.com/p2pu/lernanta" target="_blank">Lernanta</a>. Lernanta is the Django based software platform that is used by Peer 2 Peer University to facilitate peer learning on the web! You can see it in action at [p2pu.org][1]

While trying to figure out how the code base comes together to form the final web application, I was presented with many challenges. One of those challenges was that I didn&#8217;t know about everything that Lernanta does. Another challenge was (and still is) that terminology used in the source code differs from the terminology used on p2pu.org.

In this post I intend to outline the relevant top level entities of Lernanta. I will also try to explain how these entities corresponds to the source code.  
### 

### 

###  

### Users

Users are probably the most important entity on P2PU. Without users no peer learning will be possible and everyone working on P2PU will probably get very lonely and depressed.

Lernanta uses [django.contrib.auth][2] for authentication and profiles are managed by the [users app][3].  
### 

### 

###  

### Courses

On the P2PU website a course may be know as either a **course**, **challenge** or a **study group**. Courses, challenges and study groups provides different ways for users to interact with learning material, but they have a lot of features and functionality in common.

On the source code side of things we have [projects][4]. Projects stores the [category][5] of the course. The category indicates if a given project is a course, challenge or a study group.

Users can participate in a project. If the project is a course or challenge the uses is taking the challenge and if it&#8217;s a study group, the user joins the group.

Users can also follow a project. In this case the user does not participate, but rather observers.

One or more users will also be course facilitators. These users are responsible for running the course.

On the software side of things participation is indicated by a [Participation][6] entity. Participation is also used to indicate if a participant is also a course facilitator using the organizing property.

Users following courses are indicated using a [Relationship][7] entity. A relationship entity is automatically create for an participant, thus a participant is also a follower.

Course content is created by adding tasks to a course. In the source code tasks are represented by [Pages][8] that are part of the [content][9] application in Lernanta. Pages are versioned to preserve their history.  
### 

### Schools

Schools are used to group together courses that are about a similar topic. Currently there are the [School of Webcraft][10], the [School of Education][11], the [School of Social Innovation][12] and the [School of Mathematical Future][13]. As I am speaking, the [School of Data][14] is being launched!

Schools each have a dedicated page with more information about the school and sets of courses associated with the school. Schools can also have specific sets of courses that they want to be displayed on their landing page.

In Lernanta, schools are implemented using the [schools app][15]. Courses can be associated with a school using the [school][16] property. Sets of courses are managed by [schools.models.ProjectSet][17]. Users doesn&#8217;t need to belong to a school in order to participate in a course offered by a school.  
### 

### Badges

Users can earn badges to show what they have learned. Badges are OBI compliant and users can push a badge to their [Open Badge Backpack][18].

On p2pu.org there are several different types of badges. The first type of badge is a project completion badge. This badge gets automatically awarded to a user whenever they complete the challenge associated with a badge.

Another type of badge is a skill badge. To get this badge, a user must apply for the badge and submit proof that they satisfied all the criteria for the badge. The submission then needs to be reviewed by other users and assessed according to the rubrics associated with the badge. Once enough users assessed the submission, the badge can be awarded to the applicant

Finally there are community badges. Community badges can be awarded by any user doing a course by another user doing the course.

In Lernanta, the [badges][19] application is used to implement the above mentioned badges. Badges are represented by [badges.models.Badge][20]. Associated with a badge is [badges.models.Rubrics][21] and [badges.models.Logic][22]. Rubrics are used to indicate what rubrics should be considered for a skill badge, while Logic indicates how many assessments are necessary and what the average rating for a rubric should be.

<table align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <a href="http://4.bp.blogspot.com/-Pk3K24v8b_E/T79ZUFwDUDI/AAAAAAAAAJI/fx8KYWDlacc/s1600/badges_diagram.jpg" imageanchor="1"><img border="0" height="293" src="http://4.bp.blogspot.com/-Pk3K24v8b_E/T79ZUFwDUDI/AAAAAAAAAJI/fx8KYWDlacc/s320/badges_diagram.jpg" width="320" /></a>
    </td>
  </tr>
  
  <tr>
    <td>
      The relevant entities for badges
    </td>
  </tr>
</table>

When a user apply for a badge, [badges.models.Submission][23] is used. When a user reviews a badge, [badges.models.Assessment][24] is used. [badges.models.Rating][25] is associated with an assessment and a rubric to indicate the rating that the user gave corresponding to the assessment and the rubric.  
### 

###  

### A final word

If you would like to get involved with the development of Lernanta, I recommend that you proceed by setting up your development environment by following [this][26] guide.

 [1]: https://p2pu.org/
 [2]: https://docs.djangoproject.com/en/dev/topics/auth/
 [3]: https://github.com/p2pu/lernanta/tree/master/lernanta/apps/users
 [4]: https://github.com/p2pu/lernanta/tree/master/lernanta/apps/projects
 [5]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/projects/models.py#L60
 [6]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/projects/models.py#L479
 [7]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/relationships/models.py#L21
 [8]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/content/models.py#L25
 [9]: https://github.com/p2pu/lernanta/tree/master/lernanta/apps/content
 [10]: https://p2pu.org/en/schools/school-of-webcraft/
 [11]: https://p2pu.org/en/schools/school-of-ed-pilot/
 [12]: https://p2pu.org/en/schools/school-of-social-innovation/
 [13]: https://p2pu.org/en/schools/school-of-the-mathematical-future/
 [14]: http://schoolofdata.org/
 [15]: https://github.com/p2pu/lernanta/tree/master/lernanta/apps/schools
 [16]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/projects/models.py#L81
 [17]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/schools/models.py#L102
 [18]: http://beta.openbadges.org/
 [19]: https://github.com/p2pu/lernanta/tree/master/lernanta/apps/badges
 [20]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/badges/models.py#L50
 [21]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/badges/models.py#L248
 [22]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/badges/models.py#L256
 [23]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/badges/models.py#L284
 [24]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/badges/models.py#L320
 [25]: https://github.com/p2pu/lernanta/blob/master/lernanta/apps/badges/models.py#L395
 [26]: https://github.com/p2pu/lernanta/wiki/Lernanta%27s-Setup-Install