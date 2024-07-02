const decodeImageEvent = (e) => {
	e.target.decode()
	e.target.removeEventListener("load", decodeImageEvent)
}

document.querySelectorAll("img").forEach((img) => {
	const isLoaded = img.complete && img.naturalHeight !== 0
	if (
		!(
			screen.orientation.type == "landscape-primary" ||
			screen.orientation.type == "landscape-secondary"
		)
	)
		return
	console.log("decoding ", img.src)
	isLoaded ? img.decode() : img.addEventListener("load", decodeImageEvent)
})