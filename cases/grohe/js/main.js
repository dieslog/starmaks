let GroheQuiz = {
    array_question: [
        {
            'title': 'Більш за все я хочу:',
            'question':
                [
                    'Масажний режим у душі',
                    'Можливість пити воду з-під крана. І не боятися наслідків',
                    'Просто платити за воду у 2 рази менше'
                ],
            'image':
                [
                    '2-1.jpg',
                    '2-2.jpg',
                    '2-3.jpg'
                ]
        },
        {
            'title': 'З переліку нижче найважливішим для мене є:',
            'question':
                [
                    'Мийка золотистого кольору на кухні',
                    'Змішувач показує точну температуру на великому, гарному екрані',
                    'Безшумний змив унітазу, який ще й контролює запахи навколо'
                ],
            'image':
                [
                    '3-1.jpg',
                    '3-2.jpg',
                    '3-3.jpg'
                ]
        },
        {
            'title': 'На вашу думку, гігієнічний душ – це',
            'question':
                [
                    'Дуже зручний пристрій, тому і має бути у кожного',
                    'Можливість зекономити на туалетному папері та піклування про здоров’я',
                    'Те, що можна використовувати лише в тропічних країнах'
                ],
            'image':
                [
                    '4-1.jpg',
                    '4-2.jpg',
                    '4-2.jpg'
                ]
        },
        {
            'title': 'І на завершення. У вашому домі точно знадобиться:',
            'question':
                [
                    'Новий кран у ванну, який не тече',
                    'Зручний кран на кухню, який може витягуватися у довжину чи міняти нахил',
                    'Мийка, на якій не лишається слідів і з якою готувати легко',
                    'Пристрій, якій захистить від перепадів температури води',
                    'Душова система із розслабляючими та масажними режимами',
                    'Унітаз без шуму, розбризкування води чи складного прибирання',
                    'Я купив квартиру/будую новий дім, тому знадобиться усе',
                ],
            'image':
                [
                    '5-1.jpg',
                    '5-2.jpg',
                    '5-3.jpg',
                    '5-4.jpg',
                    '5-4.jpg',
                    '5-4.jpg',
                    '5-4.jpg'
                ]
        },
    ],

    quiz_carousel: document.querySelector('#quiz-carousel'),
    carousel: null,
    carousel_prev: document.querySelector('.carousel-custom-control .prev'),
    carousel_next: document.querySelector('.carousel-custom-control .next'),
    btn_quiz: document.getElementById('btn-quiz'),
    btn_finish_quiz: document.getElementById('finish-quiz'),
    question_counter: document.querySelector('.quiz-question__counter'),
    question_title: document.querySelector('.quiz-question__title'),
    question_list: document.querySelector('.quiz-question-list form'),
    page_quiz: document.querySelector('.page-quiz'),
    page_finish_quiz: document.querySelector('.page-finish-quiz'),
    page_spin_wheel: document.querySelector('.page-spin-wheel'),
    carousel_inner: document.querySelector('.carousel-inner'),
    carousel_indicators: document.querySelector('.carousel-indicators'),


    init: function () {
        // patch all methods
        seamless.polyfill();

        if (this.quiz_carousel) {
            this.carousel = new bootstrap.Carousel(this.quiz_carousel, {
                wrap: true,
                ride: false,
                interval: 20000,
            });
        }

        if (this.btn_quiz) {
            this.btn_quiz.addEventListener('click', function () {
                GroheQuiz.doQuiz();
            });
        }

        if (this.btn_finish_quiz) {
            this.page_finish_quiz.addEventListener('click', function () {
                GroheQuiz.page_finish_quiz.style.display = 'none';
                GroheQuiz.page_spin_wheel.style.display = 'flex';
            });
        }

        this.controlBtn();
        this.showImageCarousel();
    },

    controlBtn: function () {
        if (this.carousel_prev) {
            this.carousel_prev.addEventListener('click', function () {
                GroheQuiz.carousel.prev();
            });
        }

        if (this.carousel_next) {
            this.carousel_next.addEventListener('click', function () {
                GroheQuiz.carousel.next();
            });
        }
    },

    doQuiz: function () {
        if (this.checkAnswer()) {
            let number_question = parseInt(this.question_counter.dataset.item);

            if (number_question === 1) {
                this.btn_quiz.innerText = 'ДАЛІ';
            } else if (number_question === 4) {
                this.btn_quiz.innerText = 'ВІДПРАВИТИ ВІДПОВІДІ';
            } else if (number_question === 5) {
                this.page_quiz.style.display = 'none';
                this.page_spin_wheel.style.display = 'flex';
                document.getElementById('quiz').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                return;
            }

            this.question_title.innerText = this.array_question[number_question - 1].title;

            //формирование карусели //формирование крошек
            this.carousel_indicators.innerHTML = '';
            this.carousel_inner.innerHTML = '';
            let btn = document.createElement('button');
            let div_img = document.createElement('div');
            let img = document.createElement('img');
            btn.type = 'button';
            btn.dataset.bsTarget = '#quiz-carousel';
            btn.classList.add('active');
            div_img.classList.add('carousel-item', 'active');
            img.classList.add('d-block', 'w-100');

            for (let i = 0; i < this.array_question[number_question - 1].image.length; i++) {
                div_img.innerHTML = '';
                if (i !== 0) {
                    btn.classList.remove('active');
                    div_img.classList.remove('active');
                }
                btn.dataset.bsSlideTo = i.toString();
                img.src = './images/quiz/' + this.array_question[number_question - 1].image[i];

                div_img.append(img.cloneNode(true));

                this.carousel_indicators.append(btn.cloneNode(true));
                this.carousel_inner.append(div_img.cloneNode(true));
            }


            //формирование вопросов
            this.question_list.innerHTML = '';
            let div_group = document.createElement('div');
            let input = document.createElement('input');
            let label = document.createElement('label');

            div_group.classList.add('form-group');
            input.type = 'checkbox';

            for (let i = 0; i < this.array_question[number_question - 1].question.length; i++) {
                div_group.innerHTML = '';
                let id = 'q_' + number_question + '_' + i;
                input.id = id;
                label.setAttribute('for', id);
                label.innerText = this.array_question[number_question - 1].question[i];

                div_group.append(input.cloneNode(true), label.cloneNode(true));
                this.question_list.append(div_group.cloneNode(true));
            }

            //ап
            this.question_counter.dataset.item = (++number_question).toString();

            this.question_counter.innerHTML = '0' + number_question + '/<span>05</span>';
            this.showImageCarousel();
        } else {
            toastr.options.timeOut = 2500;
            toastr.options.preventDuplicates = true;
            toastr.error('Не вибрано жодної відповіді')
        }
    },

    checkAnswer: function () {
        let answer = this.question_list.querySelectorAll('input:checked');
        return !!answer.length;
    },

    showImageCarousel: function () {
        let inp = this.question_list.querySelectorAll('input');
        if (inp.length) {
            for (let i = 0; i < inp.length; i++) {
                inp[i].addEventListener('click', function () {
                    GroheQuiz.carousel.to(i);
                });
            }
        }
    },
};

let QuizWheel = {
    url: './get-coupon.php',
    btn_spin_wheel: document.getElementById('btn-spin-wheel'),
    wheel: document.getElementById('wheel'),
    spin_wheel: false,
    discount: 0,
    coupon: null,
    total_discount: document.querySelectorAll('.total-discount'),
    page_finish_spin_wheel: document.querySelector('.page-finish-spin-wheel'),
    coupon_div: document.getElementById('coupon'),
    use_discount: document.getElementById('use-discount'),
    check_rules: document.getElementById('check_rules'),

    init: function () {
        if (this.btn_spin_wheel) {
            this.btn_spin_wheel.addEventListener('click', function () {
                if (!QuizWheel.spin_wheel) {
                    Ajax.request(QuizWheel.url, function (response) {
                        let res = JSON.parse(response);
                        QuizWheel.discount = res['discount'];
                        QuizWheel.coupon = res['coupon'];
                        if (QuizWheel.discount && QuizWheel.coupon) {
                            QuizWheel.spin_wheel = true;
                            QuizWheel.result();
                        } else {
                            toastr.error('Помилка зв\'язку');
                        }
                    });
                }
            });
        }

        if (this.coupon_div) {
            this.coupon_div.addEventListener('click', function () {
                navigator.clipboard.writeText(QuizWheel.coupon_div.innerText);
                toastr.success('Код знижки було скопійовано');
            });
        }

        if (this.use_discount) {
            this.use_discount.addEventListener('click', function () {
                if (QuizWheel.check_rules.checked) {
                    window.open('https://kranok.ua/ua/grohe', '_blank');
                } else {
                    toastr.error('Для початку уважно ознайомтесь з умовами акції');
                }
            });
        }
    },

    result: function () {
        this.spin();
        setTimeout(function () {
            toastr.success('Вітаємо! Ви виграли ' + QuizWheel.discount + '% знижки.');
            QuizWheel.total_discount[0].innerText = QuizWheel.discount + '%';
            QuizWheel.total_discount[1].innerText = QuizWheel.discount + '%';
            QuizWheel.coupon_div.innerText = QuizWheel.coupon;
            QuizWheel.btn_spin_wheel.style.display = 'none';

            setTimeout(function () {
                // GroheQuiz.page_spin_wheel.style.display = 'none';
                QuizWheel.page_finish_spin_wheel.style.display = 'flex';
                document.getElementById('finish-spin-wheel').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 1000);
        }, 10000);

    },

    spin: function () {
        if (this.wheel) {
            switch (this.discount) {
                case 2:
                    this.wheel.classList.add('spin-2');
                    break;
                case 3:
                    this.wheel.classList.add('spin-3');
                    break;
                case 5:
                    this.wheel.classList.add('spin-5');
                    break;
                default:
                    this.wheel.classList.add('spin-8');
                    break;
            }
        }
    },
};

let Ajax = {
    /**
     * @url
     * @callback
        * @method
     * @form
     * return JSON
     */
    request: function (url, callback = () => {
    }, method = 'GET', form = null) {
        let xml = new XMLHttpRequest();
        xml.open(method, window.location.origin + '/' + url);
        if (form) {
            xml.send(form);
        } else {
            xml.send();
        }
        xml.onreadystatechange = function () {
            if (xml.readyState === 4) {
                if (xml.status === 200) {
                    callback(xml.responseText);
                }
            }
        }
    }
}


GroheQuiz.init();
QuizWheel.init();
