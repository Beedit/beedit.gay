VANTA.HALO({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: false,
    gyroControls: false,
    baseColor: "#dd18a5",
    backgroundColor: "#1e1e1e",
    size: 2
  })

let ind = 0;

const flags = ["🇬🇧", "🇩🇪", "🇩🇰"]
const pronouns = ["she/her", "sie/ihr", "hun/hende"]
// const languages = ["English", "Deutsch", "Dansk"]
const titles = ["Hi, I'm beedit.", "Hey, ich bin beedit.", "Hej, jeg er beedit."]
const text = ["You can find links for my stuff here.", "Du kann finder Links zu meinen Sachen hier.", "Du kan finde links til mine ting her."]
const apologies = ["", "Entschuldigung, mein Deustch ist nicht sehr gut.", "Undskyld, jeg taler ikke så godt dansk."]

let pronounBox = document.getElementById("pronouns");
let titleText = document.getElementById("box_title");
let boxText = document.getElementById("text");
let apologyText = document.getElementById("apology");
let flag = document.getElementById("flag");
let c = 0;

function change(){
  ind = (ind + 1 ) % 3
  c++;
  titleText.innerHTML = titles[ind]
  pronounBox.innerHTML = pronouns[ind]
  boxText.innerHTML = text[ind]
  apologyText.innerHTML = apologies[ind]
  if (c < 10){
    flag.innerHTML = flags[ind]
  } else {
    flag.innerHTML = "🐱"
  }
}
