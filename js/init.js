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