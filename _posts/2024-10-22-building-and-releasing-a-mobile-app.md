---
title: Building and releasing on the mobile app stores
header_image: /img/2024/10/doors.png
---
![](/img/2024/10/doors.png)

I recently published an app I wrote. Why did I do this? I’ve been developing for the web for many years. And I’m not sorry about it, I chose the web for several good reasons. But I’ve always wondered, what does it take to release an app on the app stores, and is it worth it?

This has been a recurring thought, but recently I developed a need for something that could benefit from being an app. I could probably have done it as a PWAs, but this seemed like a good excuse to target the app stores and see what goes into publishing an app there.

Previously I’ve worked with react native, but in true developer spirit I figured doing only one thing at a time would be a missed opportunity, so I opted to try flutter for this project.

I intentionally decided to not start with market research. Too often have I had ideas that never realized since almost everything has been done and once I look around it I lose motivation to get started. This was more of a screw it, let's do it type of thing.

Getting the basic code up and running was pretty straight forward. Flutter has sufficient documentation to help you and plenty of 3rd party packages that would make most web developers dealing with npm feel right at home.

## Android

Since my daily driver is Ubuntu linux, I went for Android first. Getting things up and running wasn’t too difficult and in a short time I had code running on an emulator. I spun up a bare bones backend service using Django and before I knew it I had a PoC!

This is typically the point where many of my side projects end - it works for my own purposes and I can move on to the next thing. But I specifically wanted to get this out on the app stores, all the schlepp included.

First steps with Android was easy - pay some money, register a developer account, pick a name, complete a whole bunch of forms about what the app uses, privacy, copyright, etc.

Once that is done, you can release to “internal testing” to get it onto devices that aren’t in dev mode. I installed the app on my partners Android device and asked a developer friend to also try it out.

But before you can release it on the Google Play store, you need to run a “closed testing” with at least 20 people for 2 weeks. The requirements aren’t super clear with the whole internet speculating and the UX for getting people into the testing group leaves a lot to be desired.

Before I set about recruiting friends and family I spent some time putting a few feedback mechanisms in place. I created a mailing list for people to sign up to, I created a survey that people could complete regardless of whether they’ve tried out the app and I made a bookable calendar for people to schedule a time to chat with me if they wanted to.

Recruiting 20 people took some messaging and follow up. It was interesting to see how different people followed up on the request. Some friends did it right away, some scheduled time in their calendar to do it and some eventually got to it when they remembered. A big thank you to everyone who helped out!

Overall I think the closed testing program is a good requirement, but I spent a lot of time helping people navigate the UX to join the testing group that could have been better spent testing out the app and talking about the problem.

It took a little over 2 weeks to get up to 20 people and then another 2 weeks for the closed test to be done. I nervously looked at the numbers on the play console each day. On at least 2 days the reported number of users dipped below 20, but it was unclear if it was counting active or installed devices. I’m still not sure what the numbers on the dashboard means exactly

Multiple people provided feedback, some utilizing the survey I created, but most people provided feedback in the medium where I initially reached out to them. I didn’t mind that, since it allowed for much better organic feedback that wasn’t led too much by the structure of something like a survey.

Asking 20 people, especially people that know me well was hard. Building a side project is operating with lots of constraints and what comes out of the process isn’t up to the same standards that other work may be. Design had to be winged. Copy was written by a programmer. DevOps is left as an exercise once the app gains traction. In short, the app wasn’t and still isn’t up to standard if you were to ask me. But I decided to ignore the part of me that cringed and powered through.

Having completed the 2 week closed test, I gained access to “production” on the Google Play store. I did the last few things that were required and hit the “Submit” button hoping to get the app release in a week or so. Very anti-climatically it got approved quickly and an hour later the app was on the Google Play store!

## iOS

Sometime while doing the closed testing I started with the process for releasing to the Apple app store. I tried creating an Apple ID through their website from Ubuntu - it didn’t go well. Eventually I managed to register an account through iTune, but then got it stuck in Apple account purgatory and I had to create a new Apple ID using a new email.

Registering for a Developer account again went off the rails. I applied, tried to pay and then the process simply got stuck without any feedback. I found an unusually good [medium article](https://medium.com/@quasaryy/setting-up-a-paid-account-in-the-apple-developer-program-in-2024-0950d7d9af62) that helped a lot. Before reading this it felt like I was simply doing everything wrong. By contacting the right support channels and waiting another week or so, I could finally give Apple $100 and wait 3 more days to join their developer program. 

It required less effort than expected to get things set up and running the app in a simulator. But to actually release the app I needed an actual apple device. I read somewhere that you can’t release without testing on a real device or ran into some other issues that required a device? I don’t remember exactly? But I decided it’s better for my sanity to acquire an Apple device to use for testing.

With some more effort and frustration I managed to get a working version on my second hand iPhone and after navigating some more blind corners I got push notifications working. Some  more small tweaks and I was ready to submit my app for review! I coerced the emulator screenshots into resolution, held my eyes closed and clicked “Send for review”.

And lo and behold, a day later the app was approved!

The whole Apple part of the process was like pulling teeth. I struggled creating an Apple ID. I struggled to sign up for the developer program. I struggled with multiple different interfaces. It felt like I was coming at each task from the angle that Apple expected least. It still feels that way! It probably feels this way for anyone having to navigate an ecosystem they’re not used to.

So, I achieved what I initially set out to do - release an app on the Google Play Store and the Apple App Store. Next stop is profit, right?

You can find the app online at [dingdongdoorbell.com](https://dingdongdoorbell.com) - it creates a QR code you can use as a doorbell.

<div style="display:flex;"><img src="/img/2024/10/dingdong-icon.png" style="margin: auto; height: 10vh; width: auto;"/></div>
