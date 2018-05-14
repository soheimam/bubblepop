const duplicateHtml = (element, quantity) => {
  // make a new array of quantity size
  // make all the parts of the array the current HTML
  // join them together
  const html = new Array(quantity)
    .fill('')
    .map(() => element.innerHTML)
    .join('');
  
  // change the current HTML to the one above
  element.innerHTML = html
}

// dupe things 150 times
duplicateHtml(document.querySelector('.svg-images'), 150)

// NOW we do stuff
// for each of the 150 svgs
document.querySelectorAll("svg").forEach(svg => {
  // add an event on click
  svg.addEventListener("click", function () {
    
    // for THAT SVG
    // find the image tag in there and set opacity to 0
    // note: this is an <image> tag due to being in a SVG, not <img> which is HTML
    this.querySelector("image").style.opacity = 0
    
    // find the rect at the bottom of the SVG and make it visible
    this.querySelector("rect").style.opacity = 1
  })
})






