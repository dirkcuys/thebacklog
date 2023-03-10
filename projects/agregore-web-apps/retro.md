---
title: Retrospective
---
# What was the outcome?
- To share your app with the group, first walk us through the original goal and what you ended up making. 
    - The original goal was to bootstrap a simple development environment for a mobile website/app using only the Agregore Browser.

- Did you accomplish more or less than the original app idea? If you started out with a user story, were those aims accomplished? 
    - Yes, although the app is very basic, it has the basic components the author a site stored on IPFS and shared using IPNS.
    
- Did the idea evolve or change drastically through the process? If so, how did these changes affect the outcome?
    - It scaled back a little. Initially I hoped to use more of the browser dev tools, but that proved to be difficult to integrate into a workflow that is easy to communicate.

# What was the process like?

- Describe making the app. Link to the tutorial here.
    - I ended up making the app as I wrote the tutorial. The tutorial can be found [here](https://www.thebacklog.net/projects/agregore-web-apps/part-1)
- What else was notable about the process? Some discussion questions:
    - What went well?
        - It was really nice to not need lots of tools to get started
    - What took a lot of time?
        - I had to go back and update some parts of the tutorials several times when I decided to change things
    - Did you find anything else to be unexpected about making the app?
        - I'm a little uncertain about some of the coding in the app. The idea is to be beginner friendly, but it's easy to run into concepts like recursion and that seems out of scope for a tutorial like this.
    - If you could give yourself advice when you started making the app, what would you tell yourself?
        - Try and find someone in the target audience of the tutorial to provide feedback throughout.

# Discussion

- What would you do with this app if you kept working on it? E.g. future improvements? Demo it with users (if so, who would the users be)?  
    - I'd like to figure out a way to easily share and re-use code. With features like ES modules and import maps it might be possible to use existing libraries as is. It would be extremely useful to use a good code editor with better code editing support.

- If any technical improvements to Agregore or the underlying protocols could make development easier for this app, please describe them here.
    - Having the ability to resolve an IPNS address would be really useful! It didn't look like that is possible with the current [js-ipfs-fetch](https://github.com/RangerMauve/js-ipfs-fetch) implementation?
    - I had an issue with the AppImage version of Agregore Browser where I couldn't get the IPFS node to work between browser invocations - iow, each time I quit the browser and started it again, I had to delete the IPFS directory for the IPFS node to successfully start.

