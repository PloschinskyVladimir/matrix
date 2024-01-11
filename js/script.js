let horisontScroll = document.querySelector('.container');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');


leftBtn.addEventListener('click', ()=> {
    horisontScroll.scrollLeft-= 682;
});
rightBtn.addEventListener('click', ()=> {
    horisontScroll.scrollLeft+= 682;
});