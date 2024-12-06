// change video when click on next button 
const nextRandom = document.getElementById("randamvideo");
let i = 0
nextRandom.addEventListener("click", (eo) => {
    const videoArr = [
`<iframe  id="myframe" width="700" height="500" src="https://www.youtube.com/embed/Xihkuwc12wE?si=vIyXma68_tezSQZR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700" height="500" src="https://www.youtube.com/embed/hKrSDNQy6UI?si=BDjBPAV7s1Yhg3mW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe"  width="700" height="500" src="https://www.youtube.com/embed/ZaXM65SEPAM?si=SF0Yl3JzQlew2DfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700 height="500" src="https://www.youtube.com/embed/tc8XqTvE5wk?si=XPUrxQrL4p7oEhlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700 height="500" src="https://www.youtube.com/embed/tc8XqTvE5wk?si=XPUrxQrL4p7oEhlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700 height="500" src="https://www.youtube.com/embed/98Gf7zTwl-Y?si=Q5pEBfEvjtZkGmSO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700 height="500" src="https://www.youtube.com/embed/98Gf7zTwl-Y?si=Q5pEBfEvjtZkGmSO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700 height="500" src="https://www.youtube.com/embed/GoTUlfWGeoo?si=PtGOlgv75Sy8DFjD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700 height="500" src="https://www.youtube.com/embed/KlSw1ipTSQM?si=TVh768d5f91DHi2u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
`<iframe  id="myframe" width="700 height="500" src="https://www.youtube.com/embed/Hs4xK0TvIkg?si=wjLj77vG2gQsQ4C9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
]
//   parenFrame.innerHTML = videoArr[Math.floor(Math.random() * videoArr.length)]
parenFrame.innerHTML =  videoArr [i]
i++

if (i == (videoArr.length)) {
    i = 0
}
randomHeartFUnc()
});
// // those two code for calline emoje celbrate

// const randomEmoje = document.getElementById("randomhearts")
// const containerHeart = document.getElementById("containerheart")
// when click next quote show you new quote
const quotParen = document.getElementById("quoteparent")
const randomQuotes = document.getElementById("randoquotes")
let index = 0
randomQuotes.addEventListener("click", (eo) => {
    const quotesArr =[
        `<div id="myquot" class="div">
        <h2 id="quotH1">Don't give up</h2>
        <p> It’s a good place when all you have is hope and not expectations.</p>
        <h5 align="right"> mohamed AB</h5>
    </div>`,
     `<div id="myquot" class="div">
        <h2 id="quotH1">Don't give up</h2>
        <p> Be yourself; everyone else is already taken</p>
        <h5 align="right">mohamed AB</h5>
    </div>`,
    `<div id="myquot" class="div">
    <h2 id="quotH1" >Don't give up</h2>
    <p> don't give up your team mate can steal recall you</p>
    <h5 align="right">mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p> I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best</p>
<h5 align="right">mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p>So many books, so little time</p>
<h5 align="right">Mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</p>
<h5 align="right">Mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p>A room without books is like a body without a soul</p>
<h5 align="right">Mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p>Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind</p>
<h5 align="right">Mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p>So You only live once, but if you do it right, once is enough</p>
<h5 align="right">Mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p>Be the change that you wish to see in the world</p>
<h5 align="right">Mohamed AB</h5>
</div>`,
`<div id="myquot" class="div">
<h2 id="quotH1">Don't give up</h2>
<p>So Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend</p>
<h5 align="right">Mohamed AB</h5>
</div>`,
        
    ]

    quotParen.innerHTML = quotesArr [index]
    index++
  

    if (index == quotesArr.length) {
        index = 0
    }
    randomHeartFUnc()
})




