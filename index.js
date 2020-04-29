// Default Value
document.documentElement.setAttribute('data-theme', 'dark');

const slider = document.querySelector('#theme-slider');

slider.addEventListener('change', function() {

    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})
