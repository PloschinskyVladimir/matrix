const infsec = ['att.png', 'project.png', 'szi.png', 'help.png', 'si.png', 'escort.png'];
let mass;
const tabs = document.querySelectorAll('.tabs_btn');
const content = document.querySelectorAll('.ourservices__content');
const lists = document.querySelectorAll('.box_list');
let tabsAct = document.getElementsByClassName('tabs_btn__active')[0];
let tabsAct2 = document.getElementsByClassName('tabs_btn__active')[1];
let tabsAct3 = document.getElementsByClassName('tabs_btn__active')[2];
let idIb = document.getElementById('ib');
let idTso = document.getElementById('tso');
let idEducate = document.getElementById('educate');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        tabs.forEach(tab => tab.classList.remove('tabs_btn__active'));
        tab.classList.add('tabs_btn__active');

        content.forEach(content=>content.classList.remove('ourservices__content_active'));
        content[index].classList.add('ourservices__content_active'); 
        
    })
});
lists.forEach((list, index) => {
    list.addEventListener('click', function () {
        lists.forEach(list => list.classList.remove('box_list__active'));
        list.classList.add('box_list__active');
    })


})

