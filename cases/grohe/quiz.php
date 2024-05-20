<!doctype html>
<html lang="ua">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>GROHE - Вікторина</title>
    <link rel="icon" href="https://assets.grohe.com/patternlab/release/0.82.0/b2x/favicon.ico" type="image/ico"/>
    <link rel="shortcut icon" href="https://assets.grohe.com/patternlab/release/0.82.0/b2x/favicon.ico"
          type="image/x-icon"/>
    <link rel="icon" href="https://assets.grohe.com/patternlab/release/0.82.0/b2x/favicon.ico" sizes="16x16 32x32 48x48"
          type="image/vnd.microsoft.icon"/>
    <link rel="icon" href="https://assets.grohe.com/patternlab/release/0.82.0/b2x/favicon-16x16.png" sizes="16x16"
          type="image/png"/>
    <link rel="icon" href="https://assets.grohe.com/patternlab/release/0.82.0/b2x/favicon-32x32.png" sizes="32x32"
          type="image/png"/>
    <link rel="icon" href="https://assets.grohe.com/patternlab/release/0.82.0/b2x/favicon-48x48.png" sizes="48x48"
          type="image/png"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="./styles/main.css">
</head>
<body>
<header id="header">
    <nav class="navbar navbar-expand-md menu navbar-dark">
        <div class="container header-nav">
            <div class="header-nav__logo">
                <a href="./index.php">
                    <img src="images/logo.svg" alt="grohe">
                </a>
            </div>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon-close"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end navbar-menu" id="navbarNavDropdown">
                <div class="navbar-collapse-body">
                    <ul class="navbar-nav w-100 justify-content-between flex-wrap">
                        <li class="nav-item p-2">
                            <a class="nav-link" href="./index.php#rules">Умови вікторини</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link" href="https://kranok.ua/ua/grohe">Застосувати знижку</a>
                        </li>
                        <li class="nav-item p-2">
                            <a class="nav-link" href="https://www.grohe.ua/uk_ua/" target="_blank">Перейти на
                                <ins>grohe.ua</ins>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</header>
<main>
    <div class="container">
        <div class="section-quiz" id="quiz">
            <div class="section-quiz-wrapper">
                <!--        page quiz        -->
                <div class="page-quiz" style="<?= $_COOKIE['discount'] ? 'display: none;' : '' ?>">
                    <div class="page-quiz-message">
                        <h2 class="message__title">
                            Вікторина
                        </h2>
<!--                        <div class="message__subtitle">-->
<!--                            Перегляньте фото до кожного з них, після чого дайте-->
<!--                            відповідь.-->
<!--                        </div>-->
                    </div>
                    <div class="quiz-questionnaire">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="quiz-question">
                                        <div class="quiz-question__counter" data-item="1">
                                            01/<span>05</span>
                                        </div>
                                        <h3 class="quiz-question__title">
                                            Чого ви хочете найбільше?
                                        </h3>
                                        <div class="quiz-question-list">
                                            <form action="" method="post">
                                                <div class="form-group">
                                                    <input type="checkbox" id="q_1_1" name="">
                                                    <label for="q_1_1">Щоб вода у ванні наповнювалася сама</label>
                                                </div>
                                                <div class="form-group">
                                                    <input type="checkbox" id="q_1_2" name="">
                                                    <label for="q_1_2">Щоб удома вода вмикалася сама, тоді коли мені
                                                        потрібно. А ще вимикалася після використання</label>
                                                </div>
                                                <div class="form-group">
                                                    <input type="checkbox" id="q_1_3" name="">
                                                    <label for="q_1_3">Щоб труба мені сама повідомляла, коли вона
                                                        протікає</label>
                                                </div>
                                            </form>
                                        </div>
                                        <button class="btn-std" id="btn-quiz">НАСТУПНЕ ПИТАННЯ</button>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="quiz-carousel-wrapper">
                                        <div class="carousel-custom-control">
                                            <div class="prev"></div>
                                            <div class="next"></div>
                                        </div>
                                        <div id="quiz-carousel" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#quiz-carousel"
                                                        data-bs-slide-to="0" class="active"
                                                        aria-current="true"></button>
                                                <button type="button" data-bs-target="#quiz-carousel"
                                                        data-bs-slide-to="1"></button>
                                                <button type="button" data-bs-target="#quiz-carousel"
                                                        data-bs-slide-to="2"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="./images/quiz/1-1.jpg" class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./images/quiz/1-2.jpg" class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="./images/quiz/1-3.jpg" class="d-block w-100" alt="...">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--        page finish quiz        -->
                <div class="page-finish-quiz" style="display: none;">
                    <div class="page-quiz-message">
                        <h2 class="message__title">
                            Успішно
                        </h2>
                        <div class="message__subtitle">
                            Дякуємо за участь. Всі Ваші відповіді зараховано. І тепер ви можете взяти участь в акції!
                        </div>
                    </div>
                    <div class="finish-quiz">
                        <div class="finish-quiz-message">
                            <h2 class="finish-quiz-message__title">
                                Крутіть барабан та отримуйте <br>знижку до 8%<br> на усю сантехніку GROHE
                            </h2>
                            <div class="finish-quiz-message__subtitle">
                                Участь у акції доступна лише один раз.
                            </div>
                            <button class="btn-std" id="finish-quiz">ОТРИМАТИ ЗНИЖКУ</button>
                        </div>

                    </div>
                </div>
                <!--        page spin wheel        -->
                <div class="page-spin-wheel" id="spin-wheel" style="display: none;">
                    <div class="page-spin-wheel__title">
                        Ваші відповіді зараховано!<br>
                        Крутіть барабан та отримуйте знижку до 8% на усю сантехніку GROHE
                    </div>
                    <div class="spin-wheel">
                        <img id="wheel" src="images/wheel.png" alt="wheel">
                        <img id="point" src="images/point.png" alt="point">
                    </div>
                    <button class="btn-std" id="btn-spin-wheel">КРУТИТИ БАРАБАН</button>
                </div>
                <!--        page finish spin wheel        -->
                <div class="page-finish-spin-wheel" id="finish-spin-wheel" style="display: <?= $_COOKIE['discount'] ?
                    'flex' : 'none' ?>;">
                    <div class="page-quiz-message">
                        <h2 class="message__title">
                            Вітаємо
                        </h2>
                        <div class="message__subtitle">
                            Ви виграли знижку <span class="total-discount"><?= $_COOKIE['discount'] ?>%</span> <br>
                            на усю сантехніку GROHE, тож збережіть ваш промокод для отримання знижки
                        </div>
                    </div>
                    <div class="finish-spin-wheel">
                        <div class="finish-spin-wheel-message">
                            <div class="finish-spin-wheel-message__info">
                                Ви виграли <span class="total-discount"><?= $_COOKIE['discount'] ?>%</span>
                            </div>
                            <h2 class="finish-spin-wheel-message__title">
                                Код: <span id="coupon"><?= $_COOKIE['coupon'] ?></span>
                            </h2>
                            <div class="finish-spin-wheel-message__rules">
                                <div class="form-group">
                                    <input type="checkbox" id="check_rules" name="">
                                    <label for="check_rules">
                                        Я ознайомився з умовами акції та погоджуюсь з ними
                                    </label>
                                </div>
                                <a href="./index.php#rules" target="_blank">
                                    Переглянути умови вікторини
                                </a>
                            </div>
                            <button class="btn-std" id="use-discount">Перейти в інтернет-магазин</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!--by @Dieslog and @Luda-->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js"></script>
<script src="./js/main.js"></script>
<script>

</script>
</body>
</html>