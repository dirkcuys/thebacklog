---
---

Let's start again, but this time instead of copy and pasting the code, we'll copy some files from the web to our own site. Go to [the empty IPFS folder](ipfs://bafybeiczsscdsbs7ffqz55asqdf3smv6klcw3gofszvwlyarci47bgf354) using agregore web and open your dev console.

Now lets copy the files. First we'll create a function that takes an array of File objects and adds it to IPFS using a PUT request with the body being a FormData object containing the files. You can read the [docs](https://github.com/RangerMauve/js-ipfs-fetch#await-fetchipfsbafyaabakaieac-method-put-body-new-formdata).

```js
async function addFiles(files){
    let cid = window.location.hostname
    const formData = new FormData()
    files.forEach( (file, index) => {
       formData.append(`file-${index}`, file) 
    })
    const resp = await fetch(`ipfs://${cid}`, {method: 'put', body: formData})
    const newLocation = resp.headers.get('location')
    window.location = new URL(newLocation).origin
}
```

```js
let resp = await fetch('https://www.thebacklog.net/agregore-web-apps/amt3.js')
const libjs = await resp.text()
resp = await fetch('https://www.thebacklog.net/agregore-web-apps/amt3-index.tmpl')
const indexhtml = await resp.text()

addFiles([
    new File([indexhtml], 'index.html', {type: 'text/html'}),
    new File([libjs], 'lib.js', {type: 'text/javascript'}),
])
```































