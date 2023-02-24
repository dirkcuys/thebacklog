---
layout: page
---

# Describe the idea briefly

A simple development environment for p2p web apps in Agregore Browser / Mobile

# Create at least (at most?) one user story

Sammy wants to create a simple website. They wish to share this website with other people and periodically update it.

# Outline your concept. This could be the app ux, architecture, a description, a wireframe or mockups;

- The final product will be a simple landing page and an edit page.
- The edit page will allow you to select any text file on site and edit it or to create a new text file
- The logic for the edit page will all be part of the same site and implemented using javascript
- The site can be published to IPNS for sharing
- How do I prevent accidentally breaking the site when updating the edit side of things?

# Get feedback from the team
# If there are any blockers, discuss what you need with the team to move forward.
# If no blockers remain, make the app!

## Part 1

Lets start with a clean slate so we can introduce things step for step

(TODO: download & run agregore web)

Go to ipfs://bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354 (empty IPFS dir)

(TODO: open dev tools)

Lets create a basic HTML file - Hello World:

```javascript
let newPageContent = `<html>
  <head><title>Page title</title></head>
  <body><h1>Hello world</h1></body>
</html>`
let cid = window.location.hostname
const resp = await fetch(`ipfs://${cid}/index.html`, {method: 'put', body: newPageContent})
const newLocation = resp.headers.get('location')
window.location = newLocation
```

Okay, now we have our very first website! We can easily update the content of the site by doing the same. Let's turn that into a function that we can reuse!

```js
async function updateSite(newPageContent){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/index.html`, {method: 'put', body: newPageContent})
    const newLocation = resp.headers.get('location')
    window.location = newLocation
}
let newPageContent = `<html>
  <head><title>Page title</title></head>
  <body><h1>Hello world</h1><p>And hello darkness, you're still a friend.</p></body>
</html>`
updateSite(newPageContent)
```

Now try it again
```js
let newPageContent = `<html>
  <head><title>Page title</title></head>
  <body><h1>Hello world</h1><p>And hello darkness, you're still a friend.</p></body>
</html>`
updateSite(newPageContent)
```

Mmm, that didn't work. The problem is that we loose the `updateSite` function when we load the new page. Let's save the function to a file that is part of our site:
```js
let jsContent = `async function updateSite(newPageContent){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/index.html`, {method: 'put', body: newPageContent})
    const newLocation = resp.headers.get('location')
    window.location = newLocation
}`
let cid = window.location.hostname
const resp = await fetch(`ipfs://${cid}/lib.js`, {method: 'put', body: jsContent})
const newLocation = resp.headers.get('location')
window.location = newLocation
```

That didn't quite work. The problem is the first line:
```js
let jsContent = `async function updateSite(newPageContent){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/index.html`, {method: 'put', body: newPageContent})
    const newLocation = resp.headers.get('location')
    window.location = newLocation
}`
```

We could fix this, but there is actually an easier way to get the text body of an function. Let's define the function and then get the body using `.toString`

```js
async function updateSite(newPageContent){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/index.html`, {method: 'put', body: newPageContent})
    const newLocation = resp.headers.get('location')
    window.location = newLocation
}
updateSite.toString()
```

Okay, we have the content, now lets have a go:
```js
updateSite(updateSite.toString())
```

Mmm, that wasn't exactly what we wanted. The content was written to the index.html file rather than the lib.js file. Lets update the function to fix that:

```js
async function updateSite(filename, content){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/${filename}`, {method: 'put', body: content})
    const newLocation = resp.headers.get('location')
    window.location = newLocation
}
updateSite('lib.js', updateSite.toString())
```

Okay, now we have the content saved in `lib.js`, but maybe we don't want to navigate to `lib.js` or whatever other file we update each time. Let's update the function again using the [URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin):

```js
async function updateSite(filename, content){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/${filename}`, {method: 'put', body: content})
    const newLocation = resp.headers.get('location')
    window.location = new URL(newLocation).origin
}
updateSite('lib.js', updateSite.toString())
```

Oops, that's better - Agregore automatically loads the index.html file, but the content of that file is still the function body we accidentally overwritten it with. Lets fix that:
```js
updateSite('index.html', `<html>
  <head><title>Page title</title></head>
  <body><h1>Hello world</h1></body>
</html>`)
```

Doh, `updateSite` is defined in `lib.js`, but we're not loading it. Let's try by doing this:
```js
let script = document.createElement('script')
script.src = 'lib.js'
document.head.appendChild(script)
updateSite.toString()
```

Okay, that's good, we have the function loaded. Let's try updating index.html again, but lets include the script tag so we don't need to inject it into the live page each time:
```js
updateSite('index.html', `<html>
  <head><title>Page title</title></head>
  <body>
    <h1>Hello world</h1>
    <script src="lib.js"></script>
  </body>
</html>`)
```

Great, we're back to hello world, let's see if `updateSite` is available:
```js
updateSite('index.html', `<html>
  <head><title>Page title</title></head>
  <body>
    <h1>Hello world</h1>
    <p>O, hey darkness, you're still there?</p>
    <script src="lib.js"></script>
  </body>
</html>`)
```

Awesome, now we have a minimum viable site that we can update!!

Let's take a moment to recap, if we take out all the indirection and take the direct approach we can get here with:

Start with a blank site:
```js
window.location = 'ipfs://bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354'
```

Define and save the `updateSite` function:
```js
async function updateSite(filename, content){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/${filename}`, {method: 'put', body: content})
    const newLocation = resp.headers.get('location')
    window.location = new URL(newLocation).origin
}
updateSite('lib.js', updateSite.toString())
```

Load the script and create `index.html`:
```js
let script = document.createElement('script')
script.src = 'lib.js'
document.head.appendChild(script)
setTimeout( () => updateSite('index.html', `<html>
  <head><title>Page title</title></head>
  <body>
    <h1>Hello world</h1>
    <script src="lib.js"></script>
  </body>
</html>`), 1000)
```

So we've used only the dev tools in Agregore to create a basic web page. We've started making it a little easier to build on this, but it's still tedious to update content. But we can improve this using the tools we have!

## Part II

To edit content, there are many options! We could load content into a textarea, use content-editable, or directly manipulate the page content using either javascript or dev tools. We could also use another editor and upload the content if we wanted to, but lets focus on options that doesn't require any other tools.

Let's start by arbitrarily adding a list, we'll stay in the console and use javascript, but you can also use the dev tools for the editing part.

```js
let ul = document.createElement('ul')
let i1 = document.createElement('li')
i1.innerHTML='Item 1'
ul.appendChild(i1)
document.body.appendChild(ul)
let i2 = document.createElement('li')
i2.innerHTML='Item 2'
ul.appendChild(i2)
```

You should see a list appear with 'Item 1' and then 'Item 2' be added. 

Now lets save this updated page:

```js
updateSite('index.html', document.getElementsByTagName('html')[0].innerHTML)
```

This works for the current page, but to edit JavaScript or other files, we're going to need some editing interface.

Let's start with a textarea:

```js
let editorDiv = document.createElement('div')
editorDiv.id = 'editor'
editorDiv.innerHTML = `<form id="idForm">
    <label for="idFilenameInput">Filename</label>
    <input type="text" name="filename" id="idFilenameInput"></input>
    <label for="idContentInput">Content</label>
    <textarea id="idContentInput"></textarea>
    <input type="submit" value="Save"></input>
</form>`
document.body.appendChild(editorDiv)
```

Now we have a text area! And if you click save it disappears. If you've done that, just add it again using the code above. 

Now let's add an event listener to make it do something useful:

```js
const form = document.getElementById('idForm')
form.onsubmit = e => {
    e.preventDefault()
    const filename = document.getElementById('idFilenameInput').value
    const content = document.getElementById('idContentInput').value
    updateSite(filename, content)
}
```

We're going to use this editor to save the logic for a text area to a JavaScript function stored in a file called `edit.js`.

So in the 'Filename' field, put 'edit.js'

And in the 'Content' field, the following:

```js
function edit(){
    let editorDiv = document.createElement('div')
    editorDiv.id = 'editor'
    editorDiv.innerHTML = `<form id="idForm">
        <label for="idFilenameInput">Filename</label>
        <input type="text" name="filename" id="idFilenameInput"></input>
        <label for="idContentInput">Content</label>
        <textarea id="idContentInput"></textarea>
        <input type="submit" value="Save"></input>
    </form>`
    document.body.appendChild(editorDiv)
    const form = document.getElementById('idForm')
    form.onsubmit = e => {
        e.preventDefault()
        const filename = document.getElementById('idFilenameInput').value
        const content = document.getElementById('idContentInput').value
        updateSite(filename, content)
    }
}
```

We should now see the page without the editor. We need to load the `edit.js` script before we can use the edit function:

```js
let script = document.createElement('script')
script.src = 'edit.js'
document.head.appendChild(script)
edit()
```

Okay, let's load an existing file into the edit form:

```js
async function loadFile(filename){
    const resp = await fetch(filename)
    const content = await resp.text()
    document.getElementById('idFilenameInput').value = filename
    document.getElementById('idContentInput').value = content
}
```

And now update edit.js by adding the following to the end of the textarea:

```js
async function loadFile(filename){
    const resp = await fetch(filename)
    const content = await resp.text()
    document.getElementById('idFilenameInput').value = filename
    document.getElementById('idContentInput').value = content
}

async function editFile(filename){
    edit()
    loadFile(filename)
}
```

Again we'll have to load the script manually, but lets fix that now, load the script:

```js
let script = document.createElement('script')
script.src = 'edit.js'
document.head.appendChild(script)
```

We could update 'index.html' to load 'edit.js', but to keep it simple, we'll add the code in 'edit.js' to 'lib.js':

```js
editFile('lib.js')
```

And then in the textarea add the contents of edit.js to the end:
```js
function edit(){
    let editorDiv = document.createElement('div')
    editorDiv.id = 'editor'
    editorDiv.innerHTML = `<form id="idForm">
        <label for="idFilenameInput">Filename</label>
        <input type="text" name="filename" id="idFilenameInput"></input>
        <label for="idContentInput">Content</label>
        <textarea id="idContentInput"></textarea>
        <input type="submit" value="Save"></input>
    </form>`
    document.body.appendChild(editorDiv)
    const form = document.getElementById('idForm')
    form.onsubmit = e => {
        e.preventDefault()
        const filename = document.getElementById('idFilenameInput').value
        const content = document.getElementById('idContentInput').value
        updateSite(filename, content)
    }
}

async function loadFile(filename){
    const resp = await fetch(filename)
    const content = await resp.text()
    document.getElementById('idFilenameInput').value = filename
    document.getElementById('idContentInput').value = content
}

async function editFile(filename){
    edit()
    loadFile(filename)
}

```

Now we have an easy way to update any file in our site, run `editFile('somefile')` in the console and edit it. 

There are several improvements to be made. For ex. what happens when the file doesn't exist? Try it. Or what happens if you run `edit('lib.js')` and then decide you actually wanted to edit index.html and then run `edit('index.html')` ...

```js
async function updateSite(filename, content){
    let cid = window.location.hostname
    const resp = await fetch(`ipfs://${cid}/${filename}`, {method: 'put', body: content})
    const newLocation = resp.headers.get('location')
    window.location = new URL(newLocation).origin
}

function edit(){
    let editorDiv = document.createElement('div')
    editorDiv.id = 'editor'
    editorDiv.innerHTML = `<form id="idForm" style="display: flex; flex-direction: column;">
        <label for="idFilenameInput">Filename</label>
        <input type="text" name="filename" id="idFilenameInput"></input>
        <label for="idContentInput">Content</label>
        <textarea id="idContentInput" rows="20"></textarea>
        <input type="submit" value="Save"></input>
    </form>`
    document.body.appendChild(editorDiv)
    const form = document.getElementById('idForm')
    form.onsubmit = e => {
        e.preventDefault()
        const filename = document.getElementById('idFilenameInput').value
        const content = document.getElementById('idContentInput').value
        updateSite(filename, content)
    }
}

async function loadFile(filename){
    const resp = await fetch(filename)
    const content = await resp.text()
    document.getElementById('idFilenameInput').value = filename
    document.getElementById('idContentInput').value = content
}

async function editFile(filename){
    edit()
    loadFile(filename)
}
```
