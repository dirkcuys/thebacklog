---
---
# Tutorial

This tutorial will walk you through adding a 3rd party JavaScript dependency to an IPFS site. It will require that you use the command line interface (CLI), a package manager (npm) and a JavaScript build tool (rollup). It is assumed that you already have node.js and npm installed on your system. If you are completely new to the CLI and installing development tools like NodeJS, << TODO insert link to an appropriate tutorial >>

The aim is to add the dependency in a way that it can be used in an application without requiring a build step each time the application is changed. In other words, adding the dependency will require a build step, but once it is done, applications can be developed using the dependency without further relying on build tooling!

Using the CLI create a new directory. In the directory run `npm init` to get the project up and running. This will create a file called `package.json`.a

## Prepare the dependency

Install dependencies

```
npm i codemirror @codemirror/lang-javascript @codemirror/lang-html @codemirror/lang-css
npm i rollup` TODO add npm modules thingamagic
```

Codemirror is modular and requires several dependencies. While `rollup` and `@rollup/plugin-node-resolve` is required to build the dependency into a single usable file.

Create a file `codemirror.js` and add:

```javascript
export * from "codemirror"
export * as state from "@codemirror/state"
export * as javascript from "@codemirror/lang-javascript"
export * as html from "@codemirror/lang-html"
export * as css from "@codemirror/lang-css"
```

This is the special wrapper we need to export the desired interface for CodeMirror to the application we will be creating.

Now use rollup to create a JavaScript bundle that contains all the info in a single JavaScript file:

```shell
npx rollup codemirror.mjs -f esm -o modules/codemirror.bundle.js --no-treeshake -p @rollup/plugin-node-resolve
```

To make it easier to build the dependency, add the following to `package.json`:

```json
    "script": {
        "run": "",
        "build": "npx rollup codemirror.mjs -f esm -o modules/codemirror.bundle.js --no-treeshake -p @rollup/plugin-node-resolve"
    }
```

Now the dependency can be built by running `npm run build`!

We want to use this dependency in client side JavaScript code. To do so using ESM (ECMA Script Modules) an `importmap` should be defined. An `importmap` makes it possible to use statements like `import {EditorView} from "codemirror"` by defining what file the browser should load for that module. It is a relatively new JavaScript feature. You can read more about [using importmaps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps).

Create a file `index.html` and add the following:

```html
<!doctype html>
<html lang="en">
<meta charset=utf8>
<script type="importmap">
  {
    "imports": {
      "codemirror": "/modules/codemirror.bundle.js"
    }
  }
</script>

<h1>CodeMirror editor</h1>

<script src="editor.js" type="module"/>
```

The code above references `editor.js` which doesn't exist (yet). That will contain the client side code that will use the `codemirror` dependency. 

Create `editor.js` with the following content.

```javascript
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "codemirror"
import {state} from "codemirror"
const {EditorState} = state

let startState = EditorState.create({
  extensions: [
    basicSetup, 
    html.html(),
  ],
  doc: "console.log('boo')"
})

let editor = new EditorView({
  state: startState,
  parent: document.body
})

function printState(){
  console.log(editor.state.doc.text)
  setTimeout(printState, 5000)
}
printState()
```

This is a very basic CodeMirror editor.

To test that everything is working, install and run the [serve](https://www.npmjs.com/package/serve) package to locally host the code we've written.

```
npm i serve
npx run serve
```

When you follow the URL, you should see a code editor with the code `console.log('boo')` in it.

## Using the codemirror dependency


