---
---
In this we will create a video calling app for 2 people using IPFS and WebRTC. << consider explaing IPFS and WebRTC here >>

To complete this tutorial, you need to download Agregore Browser. You will be able to complete the whole tutorial right in the browser. You can find the most recent version [here](https://github.com/AgregoreWeb/agregore-browser/releases), version 2.3.0 was used for this tutorial, but a later version should also work.

We will use [this](https://agregore.mauve.moe/docs/examples/browser-devenv/) self-contained website template & development environment. It's very basic, but enough for this tutorial. If you're interested, you can look at the [tutorial](https://agregore.mauve.moe/docs/tutorials/ipfs-browser-devenv/part-1) where we've build it.

This tutorial will start with some basic HTML, move onto using IPFS PUB/SUB to share data and finally using webRTC to establish a video call with one other participant.

Open [the template](https://agregore.mauve.moe/docs/tutorials/ipfs-browser-devenv/part-1) in the Agregore Browser and click start. It might take a few moment while Agregore starts up an IPFS node that will be used to store your files for this site.

This is what you'll see:

<< insert screenshot >>

If you click on "Edit", an editor modal should open. On the left hand side are all the files that are part of the site, currently only `index.html` and `lib.js`. If you click on one of these two filenames, it will open the file for you to edit. When you click on "Save" at the bottom, your updated content will be saved in a new IPFS folder and the site will reload to display you the updated website.

Before we get to the app itself, let's make a few small changes to the editor. We don't want the "Edit" button to be part of our site, but we still want to be able to open the editor. Click on 'lib.js' and add the following code at the end of the file:

```javascript
window.addEventListener('load', e => {
    document.addEventListener('keydown', e => {
        if( e.ctrlKey && e.key == 'i' ){
            showEditor().catch(console.error)
        }
    })
})
```

This code will execute when the document loads (line 1), add an event listener for key events (line 2) and if the `Ctrl` and `i` are both pressed at the same time, we open up the editor (line 3 & 4). Save the file and test opening up the editor by pressing Ctrl and i at the same time. Now we can remove the button whenever we want.

Now lets update the HTML for the app and remove that button. Open `index.html` and update the content accordingly:

```html
<!DOCTYPE html>
<html>
  <head><title>Editor Example</title></head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <body>
    <div id="container">
      <h1>IPFS WebRTC Caller</h1>
      <input id="channelName" placeholder="Pick a room name" />
      <p><button id="setName">Set name</button></p>
    </div>
    <script src="lib.js"></script>
  </body>
</html>
```

Save. Now we have the basic elements, let's update the way they are displayed by creating a style sheet. Open the editor, but instead of opening a file, type `style.css` in the filename field and add the following content.

```css
html, body {
    height: 100%;
    margin: 0;
}
#container {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
}
```

Once you've saved this, you'll notice it didn't have any effect. We need to add a link to the CSS in the `index.html`. Add the following code right after the `meta` tag:

```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
```

Now we have something that looks like our first mockup! Next we'll start adding some functionality. When a user enters a room name and clicks the button, we want to start an IPFS PUBSUB channel with the given name. << explain more about PUBSUB >>

Create a new file `pubsub.js` and add the following content

```javascript
window.addEventListener('load', (event) => {
    const button = document.getElementById('setName')
    button.addEventListener('click', event => {
        const channelName = document.getElementById('channelName')
        console.log('start pubsub', channelName)
    })
})
```

<< hide button and input >>

We will now create a class for PubSub that will setup and handle the connection for us.

```
class PubSub {
    constructor(channelName){
        this.channelName=channelName
    }
}
```

In Agregore PUBSUB works by using the EventSource interface. The EventSource establishes a connection with the IPFS node and gives you callbacks `onopen`, `onmessage` and `onerror`. << link to MDN and agregore docs >>. To create the event source and listen for emssages, add the following methods to the PubSub class

```
   async listenForMsg() {
        let es = new EventSource(`pubsub://${this.channelName}/?format=base64`)
        es.onmessage = this.onmessage
        es.onopen = this.onopen
        es.onerror = this.onerror
    }

    onopen(e) {
        console.log('onOpen', e)
    }

    onmessage(e) {
        console.log('onmessage', e)
    }

    onerror(e) {
        console.log('onmessage', e)
    }
```

This creates an EventSource with the channelName we've chosen and then installs callbacks for each of the different callbacks. 

Send a message, in the console
```javascript
fetch('pubsub://AGREGORE/', {method: 'POST', body: 'test'})
```

If you look at e.data, this is the message structure

```json
{ 
    "from":"12D3KooWRerqXAocomr2RC9otQAhRUzuG7YsMLs3FgKnoJ8UJDPX",
    "data":"dGVzdA=="
}
```

That data is weird, what is going on? Remember the 'format=base64' querystring when creating the EventSource? Let's decode the base64 using [atob](https://developer.mozilla.org/en-US/docs/Web/API/atob) and see what we get?

```js
atob('dGVzdA==')
//> 'test'
```

There is also another problem, we're receiving our own messages. We need a way to determine what our address is. One way to do this is to generate a random value and send it in a message once the connection is established. Let's do so now:

```js
class PubSub {
    ...

    onopen(e) {
        console.log('onOpen', e)
        this.myRand = Math.random()
        let message = {msg: "hello", rnd: this.myRand}
        fetch(`pubsub://AGREGORE/', {
            method: 'POST', 
            body: JSON.stringify(message),
        }).catch(console.error)
    }

    ...
}
```

Now when we receive a message, we can check if it's us sending the message and save the from address. Let's update the `onmessage` callback to save our own address and filter these messages.

```js
class PubSub {
    ...

    onmessage(e) {
        let data = JSON.parse(e.data)
        try {
            let msg = JSON.parse(atob(data.data))
            if (!this.whoami && msg.rnd && msg.rnd == this.myRand){
                console.log('Hello from myself. Yay!')
                this.whoami = data.from
            } else if (this.whoami && this.whoami == data.from){
                console.log('Message from me. Ignoring')
            } else {
                // TODO handle messages from a peer
            }
        }
    }
```

After we wrestle the data from the event and decode our base64 encoded data, we test if we already know who we are, if not, we compare the random value in the message to the value we generated, if that matches, then we can safe the from address as our address. If we already know what our address is, we can simply skip any message that comes from us.

Now that we have the basic plumbing set up to send messages, we can link it up to the interface to create a basic messaging application!
