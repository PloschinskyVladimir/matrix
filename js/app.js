

/// Ссылки на элементы DOM

let element_wrapper2 = document.getElementById('element2'); // "Технические системы безопасности"
let element_line_short = document.getElementsByClassName('Line_short')[0];
let element_line_short3 = document.getElementsByClassName('Line_short_3')[0];
let element_wrapper3 = document.getElementById('element3'); // Повышение квалификации
let element_Picture = document.getElementsByClassName('Picture')[0];
let element_Picture_2 = document.getElementsByClassName('Picture_2')[0];
let element_Text = document.getElementsByClassName('Text')[0];
let element_Text_2 = document.getElementsByClassName('Text_2')[0];
let element_header = document.getElementsByClassName('Uslygi');

/// Ссылки на элементы боксов с услугами

let box_list_1 = document.getElementById('list_1'); // Проектирование систем видеонаблюдения....
let box_list_2 = document.getElementById('list_2'); // Внедрение систем видеонаблюдения....
let box_list_3 = document.getElementById('list_3'); // Внедрение систем охранной и пожарной....
let box_list_4 = document.getElementById('list_4'); // Техническое обслуживание охранной, пожарной....

// Ссылки на стили боксов (боксы во вкладке Технические системы безопасности больше)
let box_list_style = document.getElementsByClassName('box_list')[0];
let list_Text_style = document.getElementsByClassName('list_text_2')[0];

/// Новые изображение включая теги для вкладок

let newImg = document.createElement('img');

newImg.src='./Picture2.png';
newImg.classList.add('Picture_2');

let newImg2 = document.createElement('img');
newImg2.src='./Picture3.svg';
newImg2.classList.add('Picture_3');

let Text_TSB = 'Реализовываем комплекс организационных и технических мероприятий (аттестационных испытаний) для документального подтверждения соответствия систем защиты информации требованиям, которые были заявлены в ходе ее создания, и нормам действующего законодательства.'

let isElement_wrapper2 = false;
let isElement_wrapper3 = false;


/// Переключение линии при направлении мыши на Технические системы безопасности

element_wrapper2.addEventListener('mouseover', function () {

    isElement_wrapper2 = true;
    element_line_short.classList.remove('Line_short');
    element_line_short.classList.add('Line_short_2');
    element_Picture.classList.remove('Picture');
    element_Text_2.classList.remove('Text_2');
    //element_Picture.style.display = 'none';
    element_Picture.parentNode.appendChild(newImg);
    //element_Picture.parentNode.appendChild(textDivImg);
    //element_Text.classList.remove('Text');
    element_Picture_2.classList.remove('Picture_2');
    element_Text.style.display = 'none';

   
    /// Изменение контента во вкладке Технические системы безопасности

    box_list_1.innerHTML = 'Проектирование систем видеонаблюдения и систем охранной и пожарной сигнализации';
    box_list_style.classList.remove('box_list');
    box_list_1.classList.add('box_list_style_2');
    box_list_1.classList.add('list_text_2');

    

    // Переменование заголовка на Услуги
    /*let elementHeader_renaim = element_header[0];
    elementHeader_renaim.innerHTML = 'Услуги';
    elementHeader_renaim.style.cssText = `margin-left: 55%`
*/

})

/// Возвращение на исходную при отвода курсора

element_wrapper2.addEventListener('mouseout', function () {
    
    isElement_wrapper2 = false;
 

    element_line_short.classList.remove('Line_short_2')
    element_line_short.classList.add('Line_short');

    element_Picture.parentNode.removeChild(newImg);
    element_Picture.classList.add('Picture');
    element_Text.style.display = 'block';

    let elementHeader_renaim = element_header[0];
    elementHeader_renaim.innerHTML = 'Наши услуги';
    elementHeader_renaim.style.cssText = `margin-left: 50%`
    element_Text.classList.add('Text');

   box_list_1.classList.remove('box_list_style_2');
   box_list_style.classList.add('box_list');
    box_list_1.innerHTML = 'Аттестация объектов информатизации';
    box_list_1.classList.remove('list_text_2');
    box_list_1.classList.add('list_text');

})

/// Работа с 3 wrapper "Повышение квалификации"
element_wrapper3.addEventListener('mouseover', function () {
    isElement_wrapper3 = true;
    element_line_short.classList.remove('Line_short')
    element_line_short.classList.remove('Line_short_2')
    element_line_short.classList.add('Line_short_3')
    element_Picture.classList.remove('Picture');
    element_Picture.parentNode.appendChild(newImg2);
    element_Text.style.display = 'none'; 

   /* let elementHeader_renaim = element_header[0];
    elementHeader_renaim.innerHTML = 'Услуги';
    elementHeader_renaim.style.cssText = `margin-left: 55%`
    */
        

})

element_wrapper3.addEventListener('mouseout', function () {
    isElement_wrapper3 = false;

    element_line_short.classList.remove('Line_short_3')
    element_line_short.classList.remove('Line_short_2')
    element_line_short.classList.add('Line_short')
    element_Picture.parentNode.removeChild(newImg2);
    element_Text.style.display = 'none';
    element_Text.classList.remove('Text');
    

})














