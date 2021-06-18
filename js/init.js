function setNavPic(){
        document.querySelectorAll('.nav-pic').forEach(element => {
            var img = element.getElementsByClassName('nav-pic-source')[0];
            img.onmouseover=()=>{
                var banner = element.getElementsByClassName('nav-pic-baner');
                banner[0].style.visibility='visible';
                banner[0].classList.add('animation');
            };
            img.onmouseout =()=>{
                var banner = element.getElementsByClassName('nav-pic-baner');
                banner[0].style.visibility='hidden';
                banner[0].classList.remove('animation');
            };
    });
}

function initNav(){
    var nav = document.querySelectorAll('.nav-main')[0];
    nav.onmouseover=()=>{
        nav.querySelectorAll('.nav-pic')[0].style.bottom='15px'; 
        nav.addEventListener('wheel',(e)=>{
            var a
            if(e.deltaY>0)
                a = '-25px';
                else 
                a ='25px';
            
        });
    };
}