function menu(){
    let menuArea=document.querySelector(".menu--dropdown");
        menuArea.style.width= '300px';
    }


document.querySelector('.close').addEventListener('click', function close(){
    let menuArea=document.querySelector(".menu--dropdown");
    menuArea.style.width= '0px';
});




function scroll1(){
    if (window.matchMedia("(max-width: 1920px)").matches) {
        window.scrollTo(0, 2340);
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        window.scrollTo(0, 2057);
    }

    if (window.matchMedia("(max-width: 375px)").matches) {
        window.scrollTo(0, 2415);
    }
        
    
}

function scroll2(){
    if (window.matchMedia("(max-width: 1920px)").matches) {
        window.scrollTo(0, 3180);  
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        window.scrollTo(0, 2654);
    }

    if (window.matchMedia("(max-width: 375px)").matches) {
        window.scrollTo(0, 2997);
    }
}

function scroll4(){
    if (window.matchMedia("(max-width: 1920px)").matches) {
        window.scrollTo(0, 4703);
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        window.scrollTo(0, 3691);
    }

    if (window.matchMedia("(max-width: 375px)").matches) {
        window.scrollTo(0, 3954);
    }
    
}


function scroll3(){
    if (window.matchMedia("(max-width: 1920px)").matches) {
        window.scrollTo(0, 5466);
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        window.scrollTo(0, 4225);
    }

    if (window.matchMedia("(max-width: 375px)").matches) {
        window.scrollTo(0, 4754);
    }
    
}




if(window.matchMedia("(max-width: 480px)").matches){
    document.querySelector('#mobileimg1').setAttribute('src', 'assets/images/bgmobile.jpg')
    document.querySelector('#mobileimg2').setAttribute('src', 'assets/images/bgmobile2.jpg')
    document.querySelector('#mobileimg3').setAttribute('src', 'assets/images/polpa.jpg')

    document.querySelector('#product-mobile1').setAttribute('src', 'assets/images/produto1mobile.png')
    document.querySelector('#product-mobile2').setAttribute('src', 'assets/images/produto2mobile.png')
    document.querySelector('#product-mobile3').setAttribute('src', 'assets/images/produto3mobile.png')
    
}


