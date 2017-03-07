
var btnKaeys = document.querySelectorAll("button");// берем все кнопки
var operation = ["+","-","/","*"]; // все операторы в мсасиве
var decimalAdded = false;


for ( var i = 0; i<btnKaeys.length; i++ ){

    // когда мы нажимаем на одку из кнопок  колекции запускаем  function

    btnKaeys[i].onclick = function (e) {

        //var value = parseInt(this.innerHTML);// строку  возвратили в видe цифры

        var screen = document.querySelector(".calc_screen_field");
        var screenValu = screen.innerHTML;
        var btnVal = this.innerHTML;

        //screen[0].innerHTML += value+ ' '; // просто вывод


        // добавление содержимого каждой кнопки
        // при нажатии на  очистку очищаем поле  с переменной "screen"


        if(btnVal == "C"){
            screen.innerHTML =" ";
            decimalAdded = false;
        }


        else if(btnVal == "="){
            console.log("gvgfgfg");

            var equation = screenValu;
            var lastChar = equation[equation.length - 1];  // берем последний елемент
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            if(operation.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');
            if(equation)
                screen.innerHTML = eval(equation);
                decimalAdded = false;
        }



        else if(operation.indexOf(btnVal) > -1) {
           // Отслеживаем последний элемент делаем проверку
            var lastChar = screenValu[screenValu.length - 1];

            // проверяем пустое поле или нет и потом добавляем оператор
            if(screenValu != '' && operation.indexOf(lastChar) == -1)
                screen.innerHTML += btnVal;

            // проверка оператора если пустая  то втсаляем -------------------------------
            else if(screenValu == '' && btnVal == '-')

                screen.innerHTML += btnVal;
            // проверка оператора
            if(operation.indexOf(lastChar) > -1 && screenValu.length > 1) {
                //проверка оператора и его подмена
                screen.innerHTML = screenValu.replace(/.$/, btnVal);
                   // презапись строки
                console.log(screen.innerHTML = screenValu.replace(/.$/, btnVal)," след значение ");
            }
            decimalAdded =false;
        }
        else if(btnVal == '.') {
            if(!decimalAdded) {
                screen.innerHTML += btnVal;
                decimalAdded = true;
            }
        }
        else {
            screen.innerHTML += btnVal;
            //  выводим в поле символы и операторы
            console.log(screen.innerHTML += btnVal);
        }
        // Отменя действий по умолчанию
        e.preventDefault();
    }
}








