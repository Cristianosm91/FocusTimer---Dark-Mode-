import Sound from "./sounds.js"

// import {
//     buttonPause,
//     buttonPlay,
//     uttonIncrease,
//     buttonDecrease,
//     buttonStop,
//     minutesDisplay,
//     secondsDisplay,
//     buttonIncrease,
//   } from "./elements.js"

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');


const buttonIncrease = document.querySelector('.increase');
const buttonDecrease = document.querySelector('.decrease');
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');

let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  

function countDown() {
  timerTimeOut = setTimeout(function() {
  
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if( seconds <= 0 ) {
          seconds = 60
          if (minutes <= 0){
            sound.timeEnd()
            return
          }
      --minutes

        }
  

      updateTimerDisplay(minutes, String(seconds -1))
      countDown()

  },1000)
}

function hold() {
  clearTimeout(timerTimeOut)
}



buttonPlay.addEventListener('click', function() {
    countDown()
 })

 buttonStop.addEventListener('click', function() {
    sound.timeEnd()
    hold()
 })



 

buttonIncrease.addEventListener('click', function() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
})

buttonDecrease.addEventListener('click', function() {
    if(Number(minutesDisplay.textContent) > 5) {
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
    }
    else if (Number(minutesDisplay.textContent) <= 5) {
        minutesDisplay.textContent = String("00")
        secondsDisplay.textContent = String("00")
        alert("Tempo zerado")
    }
 })


const sound = Sound()

const cardForest = document.querySelector('.forest');
const cardRain = document.querySelector('.rain');
const cardCoffee = document.querySelector('.coffee');
const cardFireplace = document.querySelector('.fireplace');

const svgForest = document.querySelector('.forest-select');
const svgRain = document.querySelector('.rain-select');
const svgCoffee = document.querySelector('.coffee-select');
const svgFireplace = document.querySelector('.fireplace-select');


cardForest.addEventListener('click', function() {
    cardForest.classList.add('card-selected')
    cardRain.classList.remove('card-selected')
    cardCoffee.classList.remove('card-selected')
    cardFireplace.classList.remove('card-selected')

    svgForest.classList.add('svg-selected')
    svgRain.classList.remove('svg-selected')
    svgCoffee.classList.remove('svg-selected')
    svgFireplace.classList.remove('svg-selected')

    sound.pressButtonForest()

    // sound.pressButtonForest().volume = 0.1
   
  })

cardRain.addEventListener('click', function() {
    cardRain.classList.add('card-selected')
    cardForest.classList.remove('card-selected')
    cardCoffee.classList.remove('card-selected')
    cardFireplace.classList.remove('card-selected')

    svgRain.classList.add('svg-selected')
    svgForest.classList.remove('svg-selected')
    svgCoffee.classList.remove('svg-selected')
    svgFireplace.classList.remove('svg-selected')

    sound.pressButtonRain()
  })

cardCoffee.addEventListener('click', function() {
  
    cardCoffee.classList.add('card-selected')
    cardRain.classList.remove('card-selected')
    cardForest.classList.remove('card-selected')
    cardFireplace.classList.remove('card-selected')

    svgCoffee.classList.add('svg-selected')
    svgForest.classList.remove('svg-selected')
    svgRain.classList.remove('svg-selected')
    svgFireplace.classList.remove('svg-selected')

    sound.pressButtonCoffee()

    
  })

cardFireplace.addEventListener('click', function() {
    cardFireplace.classList.add('card-selected')
    cardCoffee.classList.remove('card-selected')
    cardRain.classList.remove('card-selected')
    cardForest.classList.remove('card-selected')

    svgFireplace.classList.add('svg-selected')
    svgForest.classList.remove('svg-selected')
    svgRain.classList.remove('svg-selected')
    svgCoffee.classList.remove('svg-selected')


    sound.pressButtonFireplace()
  })


//Define Volume

let sliderForest = document.querySelector("#forestVolume");
let sliderRain = document.querySelector("#rainVolume");
let sliderCoffee = document.querySelector("#coffeeVolume");
let sliderFireplace = document.querySelector("#fireplaceVolume");

let sliderValueForest = document.querySelector("#sliderForest");
let sliderValueRain = document.querySelector("#sliderRain");
let sliderValueCoffee = document.querySelector("#sliderCoffee");
let sliderValueFireplace = document.querySelector("#sliderFireplace");


sliderForest.oninput = () => {
  sound.soundControlForest(sliderForest.value);
};

sliderRain.oninput = () => {
  sound.soundControlRain(sliderRain.value);
};

sliderCoffee.oninput = () => {
  sound.soundControlCoffee(sliderCoffee.value);
};

sliderFireplace.oninput = () => {
  sound.soundControlFireplace(sliderFireplace.value);
};




// buttonAudioForest.volume = 0.3

// function setVolume(el) {
//   var newVal = el.value;
  
//   document.getElementById("volumeControl").innerHTML = newVal;
//   buttonAudioForest.volume = newVal;

//   console.log(newVal)

// }



// function setVolume(el) {
//   var newVal = el.value;
  
//   document.getElementById("volumeControl").innerHTML = newVal;
//   sound.pressButtonForest.volume = newVal;

//   console.log(newVal)

// }



// function setVolume() {
//   let audio = document.document.querySelector('.forest');
//   let audioVolume = document.querySelector('input[type="range"]')

//   audioVolume.oninput = function () {
// 	audio.volume = audioVolume.value / 100

//   sound.pressButtonForest().volume(audio.volume)
// }
// }


// function changeVolume(value){
//   audio.volume = parseFloat(value)
// }



// var audio = document.getElementById("myAudio");
// var audioVolume = document.querySelector('input[type="range"]')

// function setVolume() { 
	
//     // audio.volume = 0.2;
//     audioVolume.oninput = function () {
// 	  audio.volume = audioVolume.value / 100
// }
// }
  
// const sound = Sound()

// const cardForest = document.querySelector('.forest');



// cardForest.addEventListener('click', function() {
//     cardForest.classList.add('card-selected')
//     cardRain.classList.remove('card-selected')
//     cardCoffee.classList.remove('card-selected')
//     cardFireplace.classList.remove('card-selected')

//     svgForest.classList.add('svg-selected')
//     svgRain.classList.remove('svg-selected')
//     svgCoffee.classList.remove('svg-selected')
//     svgFireplace.classList.remove('svg-selected')

//     sound.pressButtonForest()
   
//   })








// let audioVolume = document.querySelector('input[type="range"]')
// let audio = document.querySelector('audio')
// audioVolume.min = 0;
// audioVolume.max = 100
// audioVolume.oninput = function () {
// 	audio.volume = audioVolume.value / 100
// }

// function updateVolume(card) {
//   card.volume.addEventListener('change', () => {
//     let maxVolume = card.volume.value / 100;

//     card.sound.volume = maxVolume;
//   });
// }

// // const volume = document.querySelector(".volume").volume; // 1 

// // Setting volume level
// document.querySelector(".volume").volume = 0.5;  // set volume to 50%
// //You can also listen for volume changes with the "onvolumechange" event:

// document.querySelector("video").addEventListener("onvolumechange", e => {
//     // Change your custom control UI
// });