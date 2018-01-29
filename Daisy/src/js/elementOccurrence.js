// плагин, который проходится по всем заданным элементам
// добавляет класс, который скрывает эти элементы,
// при скроле элементы появляются

function Occurence() {
    // список объектов опций (список всех переданных объектов которые хранят опции)
    var listObjectsOptions = arguments;

    //  задать всем DOM элементам имеющим класс selector класс хронящейся в свойстве effectName с модификатором (--start)
    for (var i = 0; i < listObjectsOptions.length; i++) {
        setStartClass.call(listObjectsOptions[i]);
    }

    document.addEventListener('scroll', addEffect);

    function addEffect(event) {
        for (var i = 0; i < listObjectsOptions.length; i++) {
            var elementList = document.querySelectorAll(listObjectsOptions[i].selector);
            for (var j = 0; j < elementList.length; j++) {
                if (distanceToBottomLess(elementList[j], listObjectsOptions[i].distanceToAction)) {
                    setFinishClass(elementList[j], listObjectsOptions[i].effectName);
                }
            }
        }
    }

    // если пользователь доскролил до нижнего край страницы,
    // то удалить финишный класс и событие добавления эффекта
    if (isPageBottom()) {
        for (i = 0; i < listObjectsOptions.length; i++) {
            if (distanceToBottomLess.call(listObjectsOptions[i])) {
                removeFinishClass.call(listObjectsOptions[i]);
            }
        }
        document.removeEventListener('scroll', addEffect);
    }

    // функция добавляющая к каждому элементу класс эффекта с модификатором --start
    function setStartClass() {
        var elementList = document.querySelectorAll(this.selector);
        for (var i = 0; i < elementList.length; i++) {
            addClassWithMod(elementList[i], this.effectName, '--start');
        }

    }

    //  задать всем DOM элементам имеющим класс selector класс хронящейся в свойстве effectName с модификатором (--finish)
    function setFinishClass(element, effectName) {
        removeClassWithMod(element, effectName, '--start');
        addClassWithMod(element, effectName, '--finish');
    }

    function removeClassWithMod(element, effectName, classModificator) {
        var elementList = document.querySelectorAll(this.selector);
        classModificator = classModificator || '';
        element.classList.remove(effectName + classModificator);
    }

    function removeFinishClass() {
        var elementList = document.querySelectorAll(this.selector);
        for (var i = 0; i < elementList.length; i++) {
            removeClassWithMod(elementList[i], this.effectName, '--finish');
        }
    }

    function addClassWithMod(element, effectName, classModificator) {
        classModificator = classModificator || '';
        element.classList.add(effectName + classModificator);
    }

    // функция, на основе заданных опций расчитывает количество пикселей
    // от нижнего края окна до элементов с селектороми, заданными вызывающей программой в опциях
    // и если количество пикселей меньше заданного, возвращает true
    function distanceToBottomLess(element, distanceToAction) {
        if (element.getBoundingClientRect().top - document.documentElement.clientHeight < distanceToAction) {
            return true;
        }
    }

    function isPageBottom() {
        return window.pageYOffset + document.documentElement.clientHeight == document.documentElement.offsetHeight
            ? true
            : false;
    }
}
