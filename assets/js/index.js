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
// // for each of the 150 svgs
function burst(){
  document.querySelectorAll("img").forEach(img => {
    // add an event on click
    img.addEventListener("click", function () {
      var number = Math.floor(Math.random() * 2);
      this.src = `assets/images/Bubble${number}.png`
    })
  })
}
