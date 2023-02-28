---
---

If you haven't already, take a look at [part 1 and 2]({{site.baseurl}}/projects/agregore-web-apps/part-1/) and [part 3]({{site.baseurl}}/projects/agregore-web-apps/part-3/).

Let's start again, but this time instead of copy and pasting the code, we'll copy some files from the web to our own site. Go to [the empty IPFS folder](ipfs://bafyaabakaieac/) using agregore web and open your dev console.

First we'll create a function that takes an array of File objects and adds it to our IPFS site. To add multiple files at once, we need to use a PUT request with a Formdata instance as the body. The FormData object will contain all the files we're adding. You can read the [docs](https://github.com/RangerMauve/js-ipfs-fetch#await-fetchipfsbafyaabakaieac-method-put-body-new-formdata) for more info.

```js
async function addFiles(files){
    const formData = new FormData()
    files.forEach( (file, index) => {
       formData.append(`file-${index}`, file) 
    })
    const resp = await fetch(window.origin, {method: 'put', body: formData})
    const newLocation = resp.headers.get('location')
    window.location = new URL(newLocation).origin
}
```

And now let's get the files from the web and add them using the function we just defined.

```js
let resp = await fetch('https://www.thebacklog.net/projects/agregore-web-apps/amt3.js')
const libjs = await resp.text()
resp = await fetch('https://www.thebacklog.net/projects/agregore-web-apps/amt3-index.tmpl')
const indexhtml = await resp.text()

addFiles([
    new File([indexhtml], 'index.html', {type: 'text/html'}),
    new File([libjs], 'lib.js', {type: 'text/javascript'}),
])
```

The biggest piece that we are still missing about creating a website is giving it an address. You've probably noticed that each time we've made a change to our site, the address changed to a new address in the format `ipfs://blahblahtoolongandunreadabletoreallypayattentionlinknoteveninthebio`. If we want to share our site with other people, we need an unchanging URL to share with other people.

To do that, we can publish our site using a key and obtain an IPNS address that stays the same!!


Lets create the key:

```js
let resp = await fetch('ipns://localhost/?key=mysite', {method: 'POST'})
const key = resp.headers.get('location')
```

Now, lets post our site to the key

```js
resp = await fetch(key, {method: 'POST', body: window.origin})
```

This can take a while (~30s) so be patient.

Once that is done, visit your published site by going to the ipns://... URL or by running `window.location = key` in your development console.

You can also use an IPFS capable browser on a different device to view the site.

Lets see if we can update the site from the IPNS URL. Run `showEditor()` in the console, make an edit to index.html and see what happens.

That took a while and didn't succeed. The error is on line 3 of the updateSite function, we hardcoded the protocol part of the URL we're using in fetch. 
Lets fix that now. Since we can't save, we need to go back to the last version with an `ipfs://...` URL. Then change the updateSite function as follows:

```js
async function updateSite(filename, content){
    const resp = await fetch(`${window.origin}/${filename}`, {method: 'put', body: content})
    const newLocation = resp.headers.get('location')
    window.location = new URL(newLocation).origin
```

Before we publish the site again, lets add that functionality to 'lib.js'. Add the following function:

```js
async function publishSite(){
    let resp = await fetch('ipns://localhost/?key=mysite', {method: 'POST'})
    const key = resp.headers.get('location')
    resp = await fetch(key, {method: 'POST', body: window.origin})
    window.location = new URL(resp.headers.get('location')).origin
}
```

Now run `publishSite()` in your devtools console, again it will take some time to work. But now once you're redirected to your site you should be able to update the ipns site!

And lastly, lets add a button to publish our site. Add the following code to the showEditor function:

```js
if (window.origin.startsWith('ipfs://')){
    const button = document.createElement('button')
    button.innerHTML = 'Publish site'
    button.onclick = e => {
        e.preventDefault()
        publishSite()
    }
    sidebar.appendChild(button)
}
```

Here is the final code of lib.js:

```js
async function publishSite(){
    let resp = await fetch('ipns://localhost/?key=mysite', {method: 'POST'})
    const key = resp.headers.get('location')
    resp = await fetch(key, {method: 'POST', body: window.origin})
    window.location = new URL(resp.headers.get('location')).origin
}

async function updateSite(filename, content){
    const resp = await fetch(`${window.origin}/${filename}`, {method: 'put', body: content})
    const newLocation = resp.headers.get('location')
    window.location = new URL(newLocation).origin
}

async function loadFile(filename){
    const resp = await fetch(filename)
    const content = await resp.text()
    document.getElementById('idFilenameInput').value = filename
    document.getElementById('idContentInput').value = content
}

async function listDir(path){
    const resp = await fetch(window.origin + '?noResolve')
    const files = await resp.json()
    return files
}

async function showEditor(){
    let editorDiv = document.getElementById("editor")
    if (!editorDiv){
        editorDiv = document.createElement('div')
        editorDiv.id = 'editor'
    }
    editorDiv.style = `display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(233 233 233 / 95%);
    `
    editorDiv.innerHTML = `<div style="display: flex; flex-grow: 1; padding: 1em">
        <div id="idSidebar" style="padding-right: 1em; min-width: 20vw;"><h2>Files</h2>
        </div>
        <form id="idForm" style="flex-grow: 1; display: flex; flex-direction: column;">
            <label for="idFilenameInput">Filename</label>
            <input type="text" name="filename" id="idFilenameInput"></input>
            <label for="idContentInput">Content</label>
            <textarea id="idContentInput" style="flex-grow: 1;" rows="20"></textarea>
            <input type="submit" value="Save"></input>
        </form>
    </div>`
    document.body.appendChild(editorDiv)
    const form = document.getElementById('idForm')
    form.onsubmit = e => {
        e.preventDefault()
        const filename = document.getElementById('idFilenameInput').value
        const content = document.getElementById('idContentInput').value
        updateSite(filename, content)
    }
    const sidebar = document.getElementById('idSidebar')
    const files = await listDir(window.origin)
    const list = document.createElement('ul')
    list.style =  "list-style: none; padding-inline-start: 0;"
    files.map( file => {
        let li = document.createElement('li')
        li.innerHTML = `<a href="#">${file}</a>`
        li.querySelector('a').onclick = e => loadFile(file)
        list.appendChild(li)
    })
    sidebar.appendChild(list)
    if (window.origin.startsWith('ipfs://')){
        const button = document.createElement('button')
        button.innerHTML = 'Publish site'
        button.onclick = e => {
            e.preventDefault()
            publishSite()
        }
        sidebar.appendChild(button)
    }
}
```
