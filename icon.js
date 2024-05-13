/*cambiar el icono por cerrar*/
let Icon = document.querySelector('#icon');
let navegacion = document.querySelector('.navegacion');

Icon.onclick = () => {
    Icon.classList.toggle('bi-x');
    navegacion.classList.toggle('active');
};
/*================  quita el menu al hacer scroll   ===============*/
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

        /*=============DESPLIEGA EL MENU==============*/
        let header = document.querySelector('header');
        /*=============DESPLIEGA EL NAV CON MENU==============*/
        header.classList.toggle('sticky', window.scrollY > 100);

        /*=============REMUEVE EL MENU AL DAR CLIC==============*/
        Icon.classList.remove('bi-x');
        navegacion.classList.remove('active');


};




