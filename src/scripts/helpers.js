const imagesLoadedInElement = async (element) => {
	const images = element.querySelectorAll("img")
	const imagePromises = []

	const onImageLoadEvent = (img) => {
		return new Promise((resolve) => {
			if (img.complete && img.naturalHeight !== 0) {
				resolve()
			} else {
				img.addEventListener("load", function onLoad() {
					img.removeEventListener("load", onLoad)
					resolve()
				})
			}
		})
	}

	images.forEach((img) => {
		imagePromises.push(onImageLoadEvent(img))
	})

	await Promise.all(imagePromises)

	// All images have finished loading
	return true
}

const setClassInElementWhenImagesLoad = (element, className) => {
	imagesLoadedInElement(element)
		.then(() => {
         element.classList.add(className)
		})
		.catch((error) => {
			console.error("Error while loading images:", error)
		})
}

export { setClassInElementWhenImagesLoad }