//form-feedback

var formName = document.getElementByName("mail");

formName.addEventListener("input", function (event) {
    if (formName.validity.typeMismatch) {
        formName.setCustomValidity("I expect an e-mail, darling!");
    } else {
        formName.setCustomValidity("");
    }
});

//Существует много способов выбрать DOM узел; здесь мы получаем форму и электронную почту
//поле ввода, а также элемент span, в который мы поместим сообщение об ошибке.
var form = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
    // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
    // является ли корректным поле электронной почты.
    if (email.validity.valid) {
        // В случае появления сообщения об ошибке, если поле
        // является корректным, мы удаляем сообщение об ошибке.
        error.innerHTML = ""; // Сбросить содержимое сообщения
        error.className = "error"; // Сбросить визуальное состояние сообщения
    }
}, false);
form.addEventListener("submit", function (event) {
    // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
    // валидность поля электронной почты.
    if (!email.validity.valid) {

        // Если поле невалидно, отображается пользовательское
        // сообщение об ошибке.
        error.innerHTML = "I expect an e-mail, darling!";
        error.className = "error active";
        // И мы предотвращаем отправку формы путем отмены события
        event.preventDefault();
    }
}, false);


/*	<button onclick="myGeeks()"> 
        Click Here!
    </button>
    <p id="GFG" style="font-size:20px;color:green;"></p>
        <!-- Script to use Input Email pattern Property -->
        <script>
            function myGeeks() {
                var em = document.getElementById("email").pattern; 
                document.getElementById("GFG").innerHTML = em;  
            }
      </script>*/

/* 
            План действий таков.

            <button onclick="Имя_Функции()"></button>

            <script>
                function Имя_функции() {
                    Переменная 1 = Проверяет 1 строку по паттерну, вернуть True/False
                    Переменная 2 = Проверяет 2 строку по паттерну, вернуть True/False
                    Переменная 3 = Проверяет 3 строку по паттерну, вернуть True/False

                    Паттерн 1,
                    Паттерн 2
                    Паттерн 3
                    
                    Если (Переменная 1 == true){
                        Отправляем форму
                    } иначе {
                        Сань хуй соси, всплывающая ошибка
                    }

                    Если (Переменная 2 == true){
                        Отправляем форму
                    } иначе {
                        Сань хуй соси, всплывающая ошибка
                    }

                    Если (Переменная 3 == true){
                        Отправляем форму
                    } иначе {
                        Сань хуй соси, всплывающая ошибка
                    }
                }
            </script>
*/