const infsec = ['att.png', 'project.png', 'szi.png', 'help.png', 'si.png', 'escort.png'];
const tsoMass = ['projecttso.png', 'integration.png', 'secure.png', 'escort.png'];
const educateMass = ['prp'];

const tabs = document.querySelectorAll('.tabs_btn');
const content = document.querySelectorAll('.ourservices__list');
const lists = document.querySelectorAll('.box_list');
let tabsAct = document.getElementsByClassName('tabs_btn__active');
let pictureId = document.getElementById('img_ourservices');

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
        content.forEach(content=>content.classList.remove('ourservices__list_active'));
        content[index].classList.add('ourservices__list_active');
        identification ();
    })
    identification ();
});
lists.forEach((list, index) => {
    list.addEventListener('click', function () {
        identification ();
        lists.forEach(list => list.classList.remove('box_list__active'));
        list.classList.add('box_list__active');
        if (identification ()==='ib') {
            let newArray=[];
            newArray.push(infsec);
            switch (list) {
                case lists[0]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + infsec[0];
                    break;
                case lists[1]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + infsec[1];
                    break;
                case lists[2]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + infsec[2];
                    break;
                case lists[3]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + infsec[3];
                    break;
                case lists[4]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + infsec[4];
                    break;
                case lists[5]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + infsec[5];
                    break;
            }
        } else if (identification ()==='tso') {
            let newArray=[];
            newArray.push(tsoMass);
            identification ();
            switch (list) {
                case lists[0]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + newArray[0];
                    console.log(pictureId)
                    break;
                    
                case lists[1]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + newArray[1];
                    break;
                case lists[2]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + newArray[2];
                    break;
                case lists[3]:
                    pictureId.src='/image/ourservices/'+ identification () + '/' + newArray[3];
                    break;
            }
        } else {
            let newArray=[];
            newArray.push(educateMass);
            console.log(newArray);
        }
    })
})

