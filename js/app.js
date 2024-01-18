const tso = ['projecttso.png', 'integration.png', 'secure.png', 'escort.png'];
const infsec = ['att.png', 'project.png', 'szi.png', 'help.png', 'si.png', 'escort.png'];
const educate = ['prp'];
const tabs = document.querySelectorAll('.tabs_btn');
const content = document.querySelectorAll('.ourservices__content');
const lists = document.querySelectorAll('.box_list');
let tabsAct = document.getElementsByClassName('tabs_btn__active');
let picture = document.getElementsByClassName('Picture');
let pictureId = document.getElementById('img__ib');

function identification () {
    let ident = document.querySelector(".tabs_btn__active").getAttribute("id");
    return ident;
}

function defaultPicture () {
    pictureId.src='/image/ourservices/'+ identification () + '/' + infsec[0];
}
defaultPicture();
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
        if (identification ()==='ib') {
            pictureId=document.getElementById('img__ib');
            switch (list) {
                case lists[0]:  
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + infsec[0];
                    console.log(pictureId);
                    break;
                case lists[1]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + infsec[1];
                    console.log(pictureId);
                    break;
                case lists[2]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + infsec[2];
                    break;
                case lists[3]:
                        pictureId.src='/image/ourservices/'+ identification ()+ '/' + infsec[3];
                    break;
                case lists[4]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + infsec[4];
                    break;
                case lists[5]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + infsec[5];
                    break;  
            }
        } else if (identification ()=== 'tso') {
            pictureId=document.getElementById('img__tso');
            console.log(pictureId);
            switch (list) {
                case lists[0]:  
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + tso[0];
                    break;
                case lists[1]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + tso[1];
                    break;
                case lists[2]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + tso[2];
                    break;
                case lists[3]:
                        pictureId.src='/image/ourservices/'+ identification ()+ '/' + tso[3];
                    break;
            }
        }
        else {
            pictureId=document.getElementById('img__educate');
            switch (list) {
                case lists[0]:  
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + educate[0];
                    break;
                case lists[1]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + educate[1];
                    break;
                case lists[2]:
                    pictureId.src='/image/ourservices/'+ identification ()+ '/' + educate[2];
                    break;
            }
        }
    })
})

