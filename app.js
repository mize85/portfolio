const caption = document.getElementById("caption");

const toRotate = [
  "Hi, my name is Lars!",
  "Doing fun things on the web is my passion."
];

const period = 2000;
let loopNum = 0;
let isDeleting = false;
let txt = "";

const tick = () => {
  let delta = 200 - Math.random() * 100;
  if (toRotate.length) {
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];
    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
      delta /= 2;
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }

    caption.innerHTML = txt;

    if (!isDeleting && txt === fullTxt) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      loopNum++;
      delta = 500;
    }
    window.setTimeout(tick, delta);
  }
}

tick();