# Тестовое задание 66 bit

### [Ознакомиться можно по ссылке](https://waaliad.github.io/news-feed/)

### Stack
##### Main: React + typescript + redux toolkit
Additionally: axios + styled-components + react-router-dom + react-intersection-observer + react-simple-pull-to-refresh + normalize.css

### Техническое задание
Необходимо написать SPA приложение на React, которое будет получать новости и изменять внешний вид (тему) при нажатии соответствующих кнопок.

API для мобильного приложения содержит 2 метода:

Метод на получение новостей:  
- https://frontappapi.dock7.66bit.ru/api/news/get?page=1&count=10

Метод на получение темы приложения:
- https://frontappapi.dock7.66bit.ru/api/theme/get?name=dark
- https://frontappapi.dock7.66bit.ru/api/theme/get?name=light
- https://frontappapi.dock7.66bit.ru/api/theme/get?name=blue

Приложение должно содержать 2 экрана:
- На первом экране должна быть представлена лента новостей. Новости должны обновляться посредством механизма pull-to-refresh (swipe-to-refresh) а также по нажатию соответствующей кнопки. При большом количестве новостей, они должны подгружаться по мере прокрутки
- На втором экране должны располагаться 3 кнопки, содержащие разные темы. При нажатии на кнопку необходимо «подтягивать» соответствующую тему через API и изменять цветовую схему приложения. Настройки темы должны сохраняться при перезапуске.
- Плюсом будет возможность просматривать уже загруженные новости в режиме оффлайн.