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
        nav.addEventListener('wheel',(e)=>{
            var a;
            if(e.deltaY>0)
                a = '-25';
            else 
                a ='25';
            nav.querySelectorAll('.nav-pic').forEach((f)=>{
                // var margin = getComputedStyle(f).marginTop;
                // margin=parseInt(margin, 10);
                // f.style.marginTop=(margin+a);
            });
        });
    };
}
