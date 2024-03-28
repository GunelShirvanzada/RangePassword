const span = document.querySelector('.value');
const slider = document.querySelector('.slider');

span.innerHTML = slider.value;
slider.addEventListener('input', (e) => {
    span.innerHTML = e.target.value;
    let x = e.target.value * 5;

    slider.style.background = `linear-gradient(90deg, #54a074 ${x}%, #171718 ${x}%)`
})