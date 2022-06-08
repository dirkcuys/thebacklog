---
title: Thoughts on web components
---

I recently built [this app](https://github.com/dirkcuys/ipmb). In short, it is a markdown blog that writes data to a local IPFS node when using [this browser](https://github.com/AgregoreWeb/agregore-browser).

Additionally we (it was developed as part of [this project](https://github.com/ipfs/devgrants/blob/ef3ac96d6aab4d498b2ecd4cd9f7d99fb29ba2a1/open-grants/open-proposal-agregore-mobile.md#milestone-4-example-app-showcasing-sharing-data)) wanted to make the app as simple as possible, so simple that you could possibly just edit the code in said browser and write the results back to IPFS.

This is very doable using web components and JavaScript!

What are web components? Two things really, the ability to create custom tags like `<this-is-my-tag>` implemented by extending `HTMLElement` and the shadow DOM. Since my attention suffers some deficit, I jumped into code before/while reading all the docs and learned some things.

The shadow DOM is overrated and you probably don't need it if you're writing a single page app. The main benefit of the shadow DOM is that it keeps things separate which can be handy if you want to keep things separate. But if you want to share styles or use `document.querySelector` on nested elements, the shadow DOM just creates extra work.

Components might seem like they are declarative if you're used to something like React, but they're not. Whenever state changes, it is up to you to update the HTML. You'll typically be watching for changes by adding a custom event handler:

```javascript
connectedCallback () {
  this.querySelector('#create-post-dialog').addEventListener('onSubmit', this.onPostAdd.bind(this))
}
```

Or by 'registering' some observed attributes and handing changes when `attributeChangedCallback` is called:

```javascript
static get observedAttributes () { return ['cid'] }

async attributeChangedCallback (name, oldValue, newValue) {
  this._files = await loadContent(newValue)
  this._render()
}
```

And then update the HTML in a somewhat tedious manner:

```javascript
_render(){
    this.querySelector('#create-post-dialog').classList.add('hidden')
}
```

Or maybe propagate the update to a child component:

```javascript
_render(){
    this.querySelector('#postList').setAttribute('cid', this.newCid)
}
```

Overall I enjoy that there are no dependencies, no build commands, no package.lock files, no npm shenanigans and deploying the app is as simple as uploading the files to IPFS. Which, if you ignore the IPFS part of that for a moment is pretty simple. And not ignoring it is not that complex, but hey, IPFS wasn't in the title.

Templates and slots deserve an honourable mention - I mostly ignore them. Maybe they provide some better mechanism for updating parts of a component, but they didn't seem super useful in this app.

There are lots of frameworks using web components and I'm sure there will be several more in the future, but web components on their own are quite usable and refreshing. Managing state in a larger application would be trickier to do without using a framework or ending up creating your own. I hope to use them more in the future!
