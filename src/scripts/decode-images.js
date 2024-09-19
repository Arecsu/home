const messageDecode = (img) => {
	console.log("decoding ", img.src)
}

const decodeImageEvent = (e) => {
	// e.target.decode().then(messageDecode(e.target))
	e.target.decode()
	e.target.removeEventListener("load", decodeImageEvent)
}

const supportsHoverAndFinePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

document.querySelectorAll("img").forEach((img) => {
	if (!supportsHoverAndFinePointer()) return
	// if (!(screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-secondary")) return
	const isLoaded = img.complete && img.naturalHeight !== 0
	// isLoaded ? img.decode().then(messageDecode(img)) : img.addEventListener("load", decodeImageEvent)
	isLoaded ? img.decode() : img.addEventListener("load", decodeImageEvent)
})