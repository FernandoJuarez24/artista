const enlaces = document.querySelectorAll('ul li a');
const boton = document.querySelector('.btnMenu');
const menu = document.querySelector('.menuLista');
let on_off = true;

enlaces.forEach((link) => {

	var links = link.innerText;
	link.dataset.text = links;

	link.addEventListener('mouseover', () =>{
		menu.style.background = "white";
	});

	link.addEventListener('mouseout', () =>{
		menu.style.background = "rgba(255, 255, 255, 0.6)";
	});

});


boton.addEventListener('click', () => {

	document.querySelector('.btnMenu i').classList.toggle('fa-times');

	if(on_off){
		menu.style.left = "0";
		menu.style.transition = '300ms'

		on_off = false;
	}else{
		on_off = false;

		menu.style.left = "-100%";
		menu.style.transition = '300ms'

		on_off = true;
	}
});


window.onscroll = () => {
    //HOME
    if (window.pageYOffset >= 400) {
    	document.querySelector('.home').style.right = '20px';
    }else{
    	document.querySelector('.home').style.right = '-100%';
    }

    document.querySelector('.home').addEventListener('click', () => {
    	document.body.scrollTop = '0';
    	document.documentElement.scrollTop = '0';
    });
}