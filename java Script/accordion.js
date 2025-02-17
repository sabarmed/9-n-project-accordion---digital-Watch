// show and hide the page content 
const allPlus = document.querySelectorAll(".plus");

allPlus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const content =
      eo.target.parentElement.parentElement.getElementsByClassName("content" )[0];
    content.classList.toggle("activee");
    
    if (content.classList.contains("activee")) {
        content.style.height = `${content.scrollHeight}px`
    } else {
        content.style.height =`0`
    }
    // for + and - when click on plus change
    item.classList.toggle("hide-plus");
    if (item.classList.contains("hide-plus")) {
      item.innerText = "-";
    } else {
      item.innerText = "+";
    }
  });
});
