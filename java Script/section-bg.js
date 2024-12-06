// change section BG when click on sectionBG
//  const arrColor = ["#F0CEA0" , "#DB2B39" , "#F2C06B", "#A0E7E5", "#ffafcc" ] 
// let i = 0
// const sectionBg = document.getElementById("sectionBG")
// sectionBg.addEventListener("click", (eo) => {
//     const allSection = document.querySelectorAll("section")
//     allSection.forEach(item => {
//         item.style.backgroundColor = arrColor[i]
//     });
//     i++
//     if (i > arrColor.length -1 ) {
//         i = 0
//     }
    // the same action withe if else 
    // if (i < arrColor.length ) {
    //     i++
    // } else { i = 0}
// })

// second way to chnage section color when click sectionBG
const random255 = () => {
    return Math.round(Math.random() * 255)
    
}

const sectionBg = document.getElementById("sectionBG")
sectionBg,addEventListener("click", (eo) => {
    const allSection = document.querySelectorAll("section")
    const rgb1 = random255 ()
    const rgb2 = random255 ()
    const rgb3 = random255 ()
    allSection.forEach(item => {
        item.style.backgroundColor =`rgb(${rgb1}, ${rgb2}, ${rgb3})`
    }); 
})
// same code withe for 
// for (let i = 0; i < allSection.length; i++) {
//     const item = allSection[i];
    
// }








