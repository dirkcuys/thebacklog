---
---

# Tutorial

In this tutorial we will be adding a 3rd party dependency to an app hosted on IPFS. The specific 3rd party dependency we'll be adding is the [ACE editor](https://ace.c9.io/) and we will use it to improve editing of JavaScript, HTML and CSS code in the development environment we've previously built.

In the Agregore browser, open the [development environment bootstrap app](https://agregore.mauve.moe/docs/examples/browser-devenv/) and click on the "start" button. Once your site has been created, you can click on the "edit" button to open up the editor.

# Using ACE for code editing

We can get going quickly by loading ACE hosted by [jsDelivr](https://www.jsdelivr.com/package/npm/ace-builds). Open up `index.html` and add:

```html
<script src=" https://cdn.jsdelivr.net/npm/ace-builds@1.31.2/src-min-noconflict/ace.min.js "></script>
<link href=" https://cdn.jsdelivr.net/npm/ace-builds@1.31.2/css/ace.min.css " rel="stylesheet">
```

Now, to use the editor, replace the `showEditor()` and `loadFile()` function in `lib.js` with

```js

async function loadFile(filename){
    const resp = await fetch(filename)
    const content = await resp.text()
    document.getElementById('idFilenameInput').value = filename
    window.editor.setValue(content)
    if (filename.match(/\.js/)){
        editor.session.setMode("ace/mode/javascript");
    } else if (filename.match(/\.html/)){
        editor.session.setMode("ace/mode/html");
    }
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
    const editorStyle = document.createElement('style')
    editorStyle.innerHTML = `
        #idForm pre {
            flex-grow: 1;
            margin: 0;
        }
    `
    document.body.appendChild(editorStyle)
    editorDiv.innerHTML = `<div style="display: flex; flex-grow: 1; padding: 1em">
        <div id="idSidebar" style="padding-right: 1em; min-width: 20vw;"><h2>Files</h2>
        </div>
        <form id="idForm" style="flex-grow: 1; display: flex; flex-direction: column;" spellcheck="false">
            <label for="idFilenameInput">Filename</label>
            <input type="text" name="filename" id="idFilenameInput"></input>
            <label for="idContentInput">Content</label>
            <textarea id="idContentInput"></textarea>
            <input type="submit" value="Save"></input>
        </form>
    </div>`
    document.body.appendChild(editorDiv)

    window.editor = ace.edit("idContentInput")

    const form = document.getElementById('idForm')
    form.onsubmit = e => {
        e.preventDefault()
        const filename = document.getElementById('idFilenameInput').value
        const content = window.editor.getValue()
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

Adding `window.editor = ace.edit("idContentInput")` will load the editor, but that alone doesn't work. The editor doesn't get sized properly and appears to be missing. To solve this, we also had to add the following styling to make sure the element that replaces the `textarea` input is size appropriately

```js
editorStyle.innerHTML = `
    #idForm pre {
        flex-grow: 1;
        margin: 0;
    }
`
```

In the `loadFile` function and the form submit handler we had to update how we're setting and getting the text from the editor:
```
    window.editor.setValue(content)
    if (filename.match(/\.js/)){
        editor.session.setMode("ace/mode/javascript");
    } else if (filename.match(/\.html/)){
        editor.session.setMode("ace/mode/html");
    }
```

That's it. Now we can use the ACE library and editing should be more pleasant!

## Hosting the dependency

We can now use the ACE library to edit the code for our site, but to load the library, we require an internet connection to download the files. Why don't we rather host the files together with our site on IPFS to ensure that we can use the editor without relying on an internet connection or the availability of a specific library on a CDN.



