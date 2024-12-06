// javaScript auto writing
const websiteName = document.getElementById("websitetitle");
let counter = 1;
const autoWriting = () => {
  const title = "mohamed AB";
  websiteName.innerText = title.slice(0, counter);
  counter++;
  if (title.length < counter) {
    counter = 1;
  }
};
const stopFunc = setInterval(autoWriting, 300);
