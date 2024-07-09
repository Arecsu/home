const messageDecode = (img) => {
	console.log("decoding ", img.src)
}

const decodeImageEvent = (e) => {
	e.target.decode().then(messageDecode(e.target))
	e.target.removeEventListener("load", decodeImageEvent)
}

document.querySelectorAll("img").forEach((img) => {
	const isLoaded = img.complete && img.naturalHeight !== 0
	if (!(screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary")) return
	isLoaded ? img.decode().then(messageDecode(img)) : img.addEventListener("load", decodeImageEvent)
})