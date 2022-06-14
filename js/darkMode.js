function activeDarkMode() {

    const element = document.body;
    const elementMain = document.querySelector('main');
    
    const darkForest = document.querySelector('.forest');
    const darkRain = document.querySelector('.rain');
    const darkCoffee = document.querySelector('.coffee');
    const darkFireplace = document.querySelector('.fireplace');
    
    
    const svgForest = document.querySelector('.forest-select');
    const svgRain = document.querySelector('.rain-select');
    const svgCoffee = document.querySelector('.coffee-select');
    const svgFireplace = document.querySelector('.fireplace-select');

    
    element.classList.toggle("dark-mode");
    elementMain.classList.toggle("dark-mode");
    
    darkForest.classList.toggle('dark-card');
    darkRain.classList.toggle('dark-card');
    darkCoffee.classList.toggle('dark-card');
    darkFireplace.classList.toggle('dark-card');
    
    svgForest.classList.toggle('svg-darkMode');
    svgRain.classList.toggle('svg-darkMode');
    svgCoffee.classList.toggle('svg-darkMode');
    svgFireplace.classList.toggle('svg-darkMode');

    darkForest.addEventListener('click', function() {
        // darkForest.classList.add('card-selected-dark')
        darkRain.classList.remove('card-selected-dark')
        darkCoffee.classList.remove('card-selected-dark')
        darkFireplace.classList.remove('card-selected-dark')
        darkForest.classList.toggle('card-selected-dark');
    })

    darkRain.addEventListener('click', function() {
        // darkRain.classList.add('card-selected-dark')
        darkForest.classList.remove('card-selected-dark')
        darkCoffee.classList.remove('card-selected-dark')
        darkFireplace.classList.remove('card-selected-dark')
        darkRain.classList.toggle('card-selected-dark');
    })
    darkCoffee.addEventListener('click', function() {
        // darkCoffee.classList.add('card-selected-dark')
        darkRain.classList.remove('card-selected-dark')
        darkForest.classList.remove('card-selected-dark')
        darkFireplace.classList.remove('card-selected-dark')
        darkCoffee.classList.toggle('card-selected-dark');
    })
    darkFireplace.addEventListener('click', function() {
        // darkFireplace.classList.add('card-selected-dark')
        darkForest.classList.remove('card-selected-dark')
        darkRain.classList.remove('card-selected-dark')
        darkCoffee.classList.remove('card-selected-dark')
        darkFireplace.classList.toggle('card-selected-dark');
    })
    
}

    // let dark = document.querySelector('svg.dark');
    // dark.classList.add('hide')
    // light.classList.remove('hide');

    let dark = document.querySelector('svg.dark');
    let light = document.querySelector('svg.light');

    // Event-driven
    // programação imperativa
    // callback
    light.addEventListener('click', function() {
        light.classList.add('hide')
        dark.classList.remove('hide')
    })

    dark.addEventListener('click', function() {
        dark.classList.add('hide')
        light.classList.remove('hide')
    })



// https://github.com/Paru369/focustimer2