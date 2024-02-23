function layout(){
  mobile = window.visualViewport.width < 678
  const gallery = document.querySelector('.gallery')
  for (const row of gallery.querySelectorAll('.row')){
    let images = Array.from(row.querySelectorAll('img'))
    if (images.length > 0)
    {
        if (mobile) {
            row.style = `aspect-ratio: unset; transition-property: aspect-ratio; transition-duration: 1.5s; flex-direction: column`
        } else {
            const ratioHeight = images[0].naturalHeight
            let ratioWidth = images[0].naturalWidth
            images.shift()
            while (images.length > 0){
                let image = images.shift()
                ratioWidth += image.naturalWidth*ratioHeight/image.naturalHeight
            }
            console.log(`aspect-ratio: ${ratioWidth}/${ratioHeight};`)
            row.style = `aspect-ratio: ${ratioWidth}/${ratioHeight}; transition-property: aspect-ratio; transition-duration: 1.5s;`
        }
    }
  }
}

let newImages = [];
const columns = 4;

async function addFileToGallery(file){
    document.getElementById("idSaveGalleryForm").classList.remove('hidden')
    newImages.push(file)
    const image = await createImageBitmap(file)
    console.log(`${image.width}/${image.height}`)
    const img = document.createElement("img")
    img.classList.add('new')
    img.dataset.fileName = file.name
    img.src = URL.createObjectURL(file);
    img.width = image.width
    img.height = image.height
    //img.file = file
    
    const gallery = document.querySelector('.gallery')
    if (gallery.querySelectorAll('.row.stock').length > 0){
        for (const stockRow of gallery.querySelectorAll('.row.stock')){
            gallery.removeChild(stockRow)
        }
        const div = document.createElement('div')
        div.classList.add('row')
        gallery.appendChild(div)
    }
    
    let imgDiv = document.createElement('div')
    imgDiv.appendChild(img)
    
    if (gallery.querySelectorAll('.row:last-child img').length < columns){
        gallery.querySelector('.row:last-child').appendChild(imgDiv)
    } else {
        const div = document.createElement('div')
        div.classList.add('row')
        div.appendChild(imgDiv)
        gallery.appendChild(div)
    }
    setTimeout(layout, 500)
}

async function saveGallery(e){
    e.preventDefault()
    console.log("saveGallery")
    e.preventDefault()
    console.log("saveGallery")
    let formData = new FormData()
    for (const image of newImages){
        formData.append('file', image)
    }
    
    const index = await fetch('index.html')
    const txt = await index.text()
    const parser = new DOMParser()
    let newDoc = parser.parseFromString(txt, 'text/html')
    newDoc.querySelector('.gallery').replaceWith(document.querySelector('.gallery').cloneNode(true))
    for (const imgEl of newDoc.querySelectorAll('.gallery img.new')){
        imgEl.src = imgEl.dataset.fileName
        delete imgEl.dataset.fileName
        imgEl.classList.remove('new')
    }
    console.log(newDoc.documentElement.innerHTML)
    
    formData.append('file', new File([newDoc.documentElement.innerHTML], 'index.html'))
    
    const resp = await fetch(window.origin, {method: 'put', body: formData})
    newCid = new URL(resp.headers.get('location')).origin
    console.log(`Uploaded ${newImages.length} files to ${newCid}`)
    
    // TODO show CID for user to follow
    document.querySelector("#idGalleryUrl").classList.remove('hidden')
    document.querySelector("#idGalleryUrl a").href = newCid
    
}

async function imageHandler(e){
    e.preventDefault()
    const file = document.getElementById("idPhotoUploadForm").querySelector('input[type="file"]').files.item(0)
    await addFileToGallery(file)
}

function dragListener(e){
    e.preventDefault()
    console.log('dragover')
    console.log(e.dataTransfer)
    console.log(e.dataTransfer.files)
    console.log(e.dataTransfer.items)
    console.log(e.dataTransfer.types)
    return true;
}
    
function dropListener(e){
    console.log('drop')
    console.log(e.dataTransfer)
    console.log(e.dataTransfer.files)
    console.log(e.dataTransfer.items)
    console.log(e.dataTransfer.types)

    e.preventDefault()
    const { dataTransfer } = e
    if(!dataTransfer) return
    // use webkitGetAsEntry to see which files are directories
    const files = Array.from(dataTransfer.files)
    console.log(files)
    for (const file of files){
        addFileToGallery(file).catch(console.log)
    }
    document.querySelector('.helpOverlay').style = "display:none;"
    return true
    const queue = []
    for (let i=0; i<dataTransfer.items.length; ++i){
        let entry = dataTransfer.items[i].webkitGetAsEntry()
        console.log(entry)
        queue.push(entry)
    }
    console.log(queue)
}

async function handleHelpClick(e){
    e.stopPropagation()
    const opts = {
        types: [
            {
                description: "Images",
                accept: {
                    "image/*": [".png", ".gif", ".jpeg", ".jpg"],
                },
            },
        ],
        excludeAcceptAllOption: true,
        multiple: true,
        startIn: "pictures",
    }
    let result = await showOpenFilePicker(opts)
    for (const fileHandle of result){
        let file = await fileHandle.getFile()
        await addFileToGallery(file)
    }
    document.querySelector('.helpOverlay').style = "display:none;"
}

window.addEventListener('load', e => {
  layout()
  
  //document.getElementById("idPhotoUploadForm").addEventListener("submit", imageHandler)
  document.getElementById("idSaveGalleryForm").addEventListener("submit", saveGallery)
  document.querySelector(".gallery").addEventListener("dragover", dragListener)
  document.querySelector(".gallery").addEventListener("drop", dropListener)
  document.querySelector(".helpOverlay button").addEventListener("click", handleHelpClick)
  document.querySelector(".helpOverlay").addEventListener('click', e => {
      document.querySelector('.helpOverlay').style = "display:none;"
  })
  
  for (const img of document.querySelectorAll('.gallery img')){
      img.addEventListener('click', e => { img.parentElement.classList.toggle('selected')} )
  }

})
