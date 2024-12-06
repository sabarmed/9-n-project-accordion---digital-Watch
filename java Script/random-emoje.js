const randomEmoje = document.getElementById("randomhearts");
const containerHeart = document.getElementById("containerheart");
const randomHeartFUnc = () => {
    const parentHeart = document.createElement("div");
    containerHeart.append(parentHeart);
  
    const creatRandomHeart = setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = `&#129505;`,
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`;
  
      parentHeart.append(heart);

      const heart2 = document.createElement("div");
      heart2.classList.add("heart");
      heart2.innerHTML = `&#128155;`,
      heart2.style.left = `${Math.random() * 100}%`;
      heart2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`;
  
      parentHeart.append(heart);
      parentHeart.append(heart2);


    }, 5);
    setTimeout(() => {
      clearInterval(creatRandomHeart);
    }, 2000);
    setTimeout(() => {
      parentHeart.remove();
    }, 5000);
}


randomEmoje.addEventListener("click", (eo) => {
    randomHeartFUnc()
})
