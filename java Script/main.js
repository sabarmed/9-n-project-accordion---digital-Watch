// toggele the light & dark mode
const body = document.getElementById("body")
const dark = document.getElementById("dark")

dark.addEventListener("click", () => {
  body.classList.toggle("dark");
});
// when hover on header => change color (show and hide)
const hiddenUl = document.getElementById("hiddenul");
const changeColor = document.getElementById("changecolor");

changeColor.addEventListener("mousemove", (eo) => {
  hiddenUl.style.display = "block";
});

changeColor.addEventListener("mouseout", (eo) => {
  hiddenUl.style.display = "none";
});
// i called the header and li element to change BG when click on header BG
const headerBg = document.getElementById("headerBG")
const headerr = document.getElementById("header")

headerBg.addEventListener("click", (eo) => {
  // this code give an automatic number and regular withe nothing
  const random = Math.round(Math.random()  * 360)
  headerr.style.backgroundColor = ` hsl( ${random},44%, 55%)`
// this code for change page title code
  const websiteTitle = document.getElementById("websitetitle")
   websiteTitle.style.backgroundColor = ` hsl( ${random},44%, 55%)`
  //  this code for dark mode to change like the header but different color
  dark.style.backgroundColor = ` hsl( ${Math.round(Math.random()  * 360)},44%, 55%)`
})
// this codes for change BG color for h1 or titles when click on title BG
const tiltleBg = document.getElementById("titleBG")
tiltleBg.addEventListener("click", (eo) => {
  // this code => ("h1:not(#websitetitle)") for select a specific element id
  const allTitle = document.querySelectorAll("h1:not(#websitetitle)")
  allTitle.forEach(item => {
    item.style.backgroundColor = ` hsl( ${Math.round(Math.random()  * 360)},44%, 55%)`
  });

})
// this for change title color when click on change color
const changeCol = () => {
  return Math.round(Math.random()  * 360)
}
const titleColor = document.getElementById("titlecolor")
titleColor.addEventListener("click", (eo) => {
  const allColor = document.querySelectorAll("h1:not(#websitetitle)")
  allColor.forEach(item => {
    item.style.color = ` hsl( ${changeCol()},44%, 55%)`
    console.log(allColor);
  });
  
})



