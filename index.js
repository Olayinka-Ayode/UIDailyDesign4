let basic = document.querySelector('.basic');
let standard = document.querySelector('.standard');
let premium = document.querySelector('.premium');


let arr = [basic, standard, premium];



function makeActive(element) {
    element.classList.toggle('active');
    // alert('Ensure to fucking unclick before you click another 😭')
}