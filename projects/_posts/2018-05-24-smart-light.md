---
title: Smart light (disco doughnut)
author: dirk
layout: page
---

## Smart light

Waking up in the dark is no fun, so the obvious solution is to learn how to use a laser cutter. No, seriously. I didn't want to buy an expensive smart light like the Philips hue, so I decided to build my own.

I settled on a doughnut-shaped design with an LED strip on the inside and outside. For the 'smart' part of the light, I used a Raspberry Pi Zero Wireless. After drawing the design in Inkscape, I headed to [Maker station](http://makerstation.co.za/), a local maker space I recently joined, and did the laser cutting.

![picture of laser cut parts]({{site.baseurl}}/img/projects/smart-light/1-parts.jpg)

Before I could start prototyping, I had to solder a header onto the Raspberry Pi. I was quite nervous about this step, but with a proper soldering iron from the maker space and some clips to assist holding things in place, I managed to do a tidy job and not damage the Pi.

![picture of pi soldering]({{site.baseurl}}/img/projects/smart-light/2-soldering.jpg)

The next step was to wire up the LEDs. Adafruit has a good [tutorial](https://learn.adafruit.com/neopixels-on-raspberry-pi/wiring) to help you. Unfortunately I couldn't find the level converter chip mentioned in the tutorial. After shopping around a bit, I found something similar, although a little clunky.

![picture of prototyping]({{site.baseurl}}/img/projects/smart-light/3-wiring.jpg)

After I was happy that I wired everything correctly, I tidied up a bit so that I won't need to use a bread board. I cut a project board to size and soldered the level converter and wires onto it.

![picture of cleanup]({{site.baseurl}}/img/projects/smart-light/wire-cleanup.jpg)

For the 'smart' part, I installed Raspbian on the Raspberry Pi and used the [rpi_ws281x library](https://github.com/jgarff/rpi_ws281x) to control the LEDs. I had to [fix a small issue](https://github.com/jgarff/rpi_ws281x/commit/e4a05d6538c02bb9714f2efc6630f2bfdcf35bf6) with the test script. I adapted the [neopixelclock example](https://github.com/jgarff/rpi_ws281x/blob/master/python/examples/neopixelclock.py) to display only the hour. To make sure my script starts when the Raspberry PI reboots, I added a systemd task to run the script.

<p><video controls src="{{site.baseurl}}/img/projects/smart-light/disco.mp4" style="max-width:100%"></video></p>

There is still a lot to do. I need to implement alarm functionality, figure out a way to set the alarm from my phone and do some final cleaning up. But for now I have a faint red light shows me the hour. Not done, but it helps me to know if I can roll over and continue sleeping, or if I should be getting up!

ps. I've been sitting on this idea for some time and couldn't help feeling guilty for procrastinating. It is easy to assume other people are pumping out projects without effort and feel guilty for not doing so yourself. Firstly, no need to feel guilty, secondly, chances are they did take a while, but *that* part of the story doesn't get told.
