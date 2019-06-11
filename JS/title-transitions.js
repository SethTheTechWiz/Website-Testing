const getElement = function(ele) {
  return document.getElementById(ele);
}

let second = 1000;
let transitions = [];

transitionCalc = function() {
  for (let i = 1; i <= 25; i++) {
    let currentTransition = "transition" + i.toString();

    if (getElement(currentTransition) != null) {
      transitions.push(getElement(currentTransition));
    }
  }

  return transitions;
}

setTimeout(transitionCalc, 0);

const getScrollPixels = function(scroll) {
  return (scroll - 1) * 500;
}

setTimeout(function() { getElement("transition1").style.opacity = 1; }, 0);

const transition = function(transition) {
  let transitionNum = "";
  for (let i = 0; i < transition.id.length; i++) {
    let currentSubStr = transition.id.substring(i, i + 1);
    if (!isNaN(currentSubStr)) {
      transitionNum += currentSubStr;
    }
  }

  transitionNum = Number(transitionNum);
  console.log(transitionNum)

  if (document.body.scrollTop > getScrollPixels(transitionNum) || document.documentElement.scrollTop > getScrollPixels(transitionNum)) {
    getElement(transition.id).style.transition = "2s";
    getElement(transition.id).style.opacity = 1;
    getElement(transition.id).animationPlayState = "running";
  } else {
    getElement(transition.id).style.transition = "0.5s";
    getElement(transition.id).style.opacity = 0;
  }
}

setInterval(window.onscroll = function() {
  for (let i = 1; i < transitions.length; i++) {
    transition(transitions[i]);
  }
}, 100);
