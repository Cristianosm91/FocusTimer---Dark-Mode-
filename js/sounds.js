export default function() {
  
  const buttonAudioCoffee = new Audio("./sons/Cafeteria.wav")
  const buttonAudioRain = new Audio("./sons/Chuva.wav")
  const buttonAudioForest = new Audio("./sons/Floresta.wav")
  const buttonAudioFireplace = new Audio("./sons/Lareira.wav")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  // const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  

  buttonAudioCoffee.loop = true
  buttonAudioRain.loop = true
  buttonAudioForest.loop = true
  buttonAudioFireplace.loop = true

 

  // let progressBar = document.querySelector("progress");
  // let sliderValue = document.querySelector(".sliderValue");
  let sliderValueForest = document.querySelector("#sliderForest");
  let sliderValueRain = document.querySelector("#sliderRain");
  let sliderValueCoffee = document.querySelector("#sliderCoffee");
  let sliderValueFireplace = document.querySelector("#sliderFireplace");
  
  // function soundControl(volume) {
  //   // progressBar.value = volume;
  //   // sliderValue.innerHTML = volume;
  //   sliderValueForest.innerHTML = volume;
  //   sliderValueRain.innerHTML = volume;
  //   sliderValueCoffee.innerHTML = volume;
  //   sliderValueFireplace.innerHTML = volume;
  //   buttonAudioForest.volume = volume / 100;
  //   buttonAudioCoffee.volume = volume / 100;
  //   buttonAudioRain.volume = volume / 100;
  //   buttonAudioFireplace.volume = volume / 100;
  // }

  function soundControlForest(volume) {
    // progressBar.value = volume;
    // sliderValue.innerHTML = volume;
    sliderValueForest.innerHTML = volume;
    // card.innerHTML = volume;
    buttonAudioForest.volume = volume / 100;
    
  }
  function soundControlRain(volume) {
 
    sliderValueRain.innerHTML = volume;
    buttonAudioRain.volume = volume / 100;
    
  }
  function soundControlCoffee(volume) {
 
    sliderValueCoffee.innerHTML = volume;
    buttonAudioCoffee.volume = volume / 100;
    
  }
  function soundControlFireplace(volume) {
 
    sliderValueFireplace.innerHTML = volume;
    buttonAudioFireplace.volume = volume / 100;
    
  }



  function pressButtonCoffee() {
    buttonAudioCoffee.play()
    buttonAudioRain.pause()
    buttonAudioForest.pause()
    buttonAudioFireplace.pause()
  }

  function pressButtonRain() {
    buttonAudioRain.play()
    buttonAudioCoffee.pause()
    buttonAudioForest.pause()
    buttonAudioFireplace.pause()
    buttonAudioCoffee.volume()

  }

  function pressButtonForest() {
    buttonAudioForest.play()
    buttonAudioCoffee.pause()
    buttonAudioRain.pause()
    buttonAudioFireplace.pause()

    // buttonAudioForest.volume = 1
}


  function pressButtonFireplace() {
    buttonAudioFireplace.play()
    buttonAudioCoffee.pause()
    buttonAudioRain.pause()
    buttonAudioForest.pause()
  }
  
  

  function timeEnd() {
    kitchenTimer.play()
    buttonAudioFireplace.pause()
    buttonAudioCoffee.pause()
    buttonAudioRain.pause()
    buttonAudioForest.pause()
  }



  return {
    pressButtonCoffee,
    pressButtonRain,
    pressButtonForest,
    pressButtonFireplace,
    timeEnd,
    // soundControl,
    soundControlForest,
    soundControlRain,
    soundControlCoffee,
    soundControlFireplace

    // bgAudio
  }

}