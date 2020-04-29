// Default Value
document.documentElement.setAttribute('data-theme', 'light');

const slider = document.querySelector('#theme-slider');

slider.addEventListener('change', function() {

    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})
