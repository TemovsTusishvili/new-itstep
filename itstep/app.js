


var scrolledValue = 0;
window.onscroll = (event) => {

    let nav = document.querySelector("nav");
    let arrow = document.querySelector('.arrow');
    if(scrolledValue > document.documentElement.scrollTop){
        console.log('scrolled Top');
        nav.classList = 'down'
        arrow.style.top = '10px';
    }else{
        console.log('scrolled bottom');
        nav.classList = 'up';
    }

     scrolledValue = document.documentElement.scrollTop

    
}
