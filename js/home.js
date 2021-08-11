//HOME
const btnMenu = document.querySelector('.btnMenu');
let on_off = true;

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