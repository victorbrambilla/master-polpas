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
        window.scrollTo(0, 2472);
    }
        
    
}

function scroll2(){
    if (window.matchMedia("(max-width: 1920px)").matches) {
        window.scrollTo(0, 3121);  
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        window.scrollTo(0, 2654);
    }

    if (window.matchMedia("(max-width: 375px)").matches) {
        window.scrollTo(0, 2825);
    }
}


function scroll3(){
    if (window.matchMedia("(max-width: 1920px)").matches) {
        window.scrollTo(0, 3661);
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        window.scrollTo(0, 2928);
    }

    if (window.matchMedia("(max-width: 375px)").matches) {
        window.scrollTo(0, 3754);
    }
    
}


if(window.matchMedia("(max-width: 480px)").matches){
    document.querySelector('#mobileimg1').setAttribute('src', 'assets/images/bgmobile.jpg')
    document.querySelector('#mobileimg2').setAttribute('src', 'assets/images/bgmobile2.jpg')
    document.querySelector('#mobileimg3').setAttribute('src', 'assets/images/bgmobile2.jpg')
}
