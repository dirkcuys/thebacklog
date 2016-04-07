---
title: hiking
author: dirk
layout: page
---

There is nothing like being stuck in the middle of the bush with a heavy backpack on your back, some blisters on your feet and three cans of beans for the nights chile con carne weighing on your mind and back. It is normally at this point you start having serious doubts about the whole idea in the first place. After this moment you are hiking. Every sip of water will taste sweeter, every view will be grander and after putting down your backpack you'll start floating above the ground.

Here are some hikes I've been on:

{% for hike in site.categories['hiking'] %}

- [{{hike.title}}]({{site.baseurl}}{{hike.url}})

{% endfor %}

{% comment %}
## Amatolla

## The Otter

## Torres del Paine W route

## Volcan Tajumulco

## Volcan Acatenango

## Volcan Itsa
{% endcomment %}
