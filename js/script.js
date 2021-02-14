$(document).ready(function() {
    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true,
                minlength: 20,
                maxlength: 300
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            number: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            company: {
                required: "Пожалуйста, введите название компании",
            },
            textarea: {
                required: "Пожалуйста, оставьте небольшое описание Вашего предложения",
                minlength: jQuery.validator.format("Введите не менее {0} символа!"),
                maxlength: jQuery.validator.format("Введите не более {0} символа!"),
            },
            checkbox: {
                required: "Обязательное условие"
            }
        }
    });
    $('input[name=number]').mask('+7 (999) 999-99-99');


    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");


            $('form').trigger('reset');
        });
        return false;
    });
});


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});


const counters = document.querySelectorAll('.skills__progress-percent'),
      lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});