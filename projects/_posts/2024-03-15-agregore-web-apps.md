---
title: Building for the distributed web
---

## Context

I recently had the opportunity to build a few small distributed web applications as part of a project for [Agregore Web](https://agregore.mauve.moe/) funded by [Protocol Labs](https://protocol.ai/). 

The project was a combination of exploring what is possible, building something concrete and creating resources for other people to learn from. You can read more about the project and process [here](https://agregore.mauve.moe/docs/tutorials/process).

To keep things approachable for beginners we tried to minimize the amount of extra things required. No unneeded frameworks, build tools, packagers, etc.

The only requirement was using the [Agregore Web browser](https://github.com/AgregoreWeb/agregore-browser/releases/latest). The Agregore Web browser includes an [IPFS](https://ipfs.tech/) node that allow you to interact with the IPFS network. To interact with the node, Agregore implements special protocol handlers for the IPFS protocol allowing applications running in the browser to utilize IPFS for retrieving and storing data.

## The applications

In total I created 5 applications and tutorials.

The first application + tutorial I've built is a basic development environment. The tutorial walks you through bootstrapping the environment from the dev tools in the Agregore Browser. At the end you'll have an environment that you can further refine or use to create a site / content that you can share with other people.

The tutorial is broken up in [part 1](https://agregore.mauve.moe/docs/tutorials/ipfs-browser-devenv/part-1), [part 2](https://agregore.mauve.moe/docs/tutorials/ipfs-browser-devenv/part-2) and [part 3](https://agregore.mauve.moe/docs/tutorials/ipfs-browser-devenv/part-3).

The second application is a chat peer based chat application that uses IPFS PUB/SUB to send and receive messages.

- [app](https://agregore.mauve.moe/docs/examples/ipfs-pub-sub-chat/) (it requires [Agregore Web](https://github.com/AgregoreWeb/agregore-browser/releases/latest) to work)
- [tutorial](https://agregore.mauve.moe/docs/tutorials/ipfs-pub-sub-chat)

The third application was a continuation of the development environment mentioned above, this time adding the support for recursively uploading files to the site.

- [app](https://agregore.mauve.moe/docs/examples/browser-devenv-v2/)
- [tutorial](https://agregore.mauve.moe/docs/tutorials/ipfs-dir-upload/)

The fourth application took advantage of what was built before to add code highlighting to the editor using ACE editor.

- [app](https://agregore.mauve.moe/docs/examples/browser-devenv-v3/)
- [tutorial](https://agregore.mauve.moe/docs/tutorials/ipfs-3rd-party-dep/)


The fifth and last application for this project was an image gallery.

- [app](https://agregore.mauve.moe/docs/examples/ipfs-gallery/)
- [tutorial](https://agregore.mauve.moe/docs/tutorials/ipfs-gallery/)


## Reflection

Overall I'm impressed by how much can be done using only modern JavaScript, CSS and HTML5 combined with a decentralized web model! Even non-distributed applications can benefit for a 'return-to-basics' approach by removing complicated tooling.

Distributed protocols do work. This is stating the obvious, but there is something satisfying when you create something in your browser and then wen you ask someone half way around the globe to open the site it works!

The experience when it doesn't work needs to be improved. The nature of a decentralized network is that you're never guaranteed that a given piece of content will currently be available on the network. Waiting to see if a resource loads or times out is a very frustrating experience.

Another challenge is sharing URLs where copy-and-paste isn't an option. Being used to the web where you can either say the URL or do a web search to find a site it was unexpected to find myself in situations where I wanted to quickly share a URL and had to find workarounds like copy-and-pasting to a public site or using QR codes.

Finally, not knowing what data you have stored and being uncertain of it's persistence is challenging. I found myself feeling uncomfortable leaving code I've working on in the IPFS node and preferred backing it up to files stored on disk.


If this is something that interests you, be sure to join [Agregore on Matrix](https://matrix.to/#/#agregore:mauve.moe).
