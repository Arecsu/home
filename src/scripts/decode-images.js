const decodeImageEvent = (e) => {
    e.target.decode()
    e.target.removeEventListener('load', decodeImageEvent)
}

document.querySelectorAll("img").forEach((img) => {
    const isLoaded = img.complete && img.naturalHeight !== 0;
    isLoaded ? img.decode() : img.addEventListener('load', decodeImageEvent)
})