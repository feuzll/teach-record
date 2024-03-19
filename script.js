
async function fetchExternalThenUpdate() {
    sketchfabTemplate = document.getElementById("sketchfab")
    
    loadFlatIcons()
    loadSketchfabFrames()
}

var sketchfabTemplate = null
var sketchfabBaseURL = "https://sketchfab.com"
async function loadSketchfabFrames() {
    let frame = document.querySelector("sketchfab")
    var sketchfabEntry = sketchfabTemplate.cloneNode(true).content
    frame.appendChild(sketchfabEntry)
    let creator = frame.getAttribute("creator")
    let title = frame.title
    let hash = frame.getAttribute("hash")
    frame.firstElementChild.innerHTML = frame.title
    frame.firstElementChild.href = `${sketchfabBaseURL}/${title}-${hash}`
    frame.lastElementChild.innerHTML = creator
    frame.lastElementChild.href = `${sketchfabBaseURL}/${creator}`
    frame.appendChild(document.createElement("br"))
    let embed = frame.appendChild(document.createElement("iframe"))
    embed.frameborder = 0
    embed.width = 320
    embed.height = 240
    embed.src = `${sketchfabBaseURL}/models/${hash}/embed?ui_theme=dark&dnt=1`
}

async function loadFlatIcons() {
    let flatIcons = document.querySelectorAll("img")
    flatIcons.forEach(img => loadFlatIcon(img));

}

async function loadFlatIcon(img)
{
    let rawResponse = await fetch(img.getAttribute("page")); // Gets a promise
    let textResponse = await rawResponse.text();
    let parser = new DOMParser();
    let domResponse = parser.parseFromString(textResponse, "text/html");
    let imgSource = domResponse.querySelector(".main-icon-without-slide").firstElementChild.src
    img.src = imgSource
}


window.addEventListener("load", fetchExternalThenUpdate)