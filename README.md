# Описание проекта

## Цель проекта
Создание веб-приложения для просмотра и управления фотографиями
## Демо
Вы можете посмотреть демо-версию приложения, развернутую на VPS  
[Demo 212.193.63.211](http://212.193.63.211)  
[Directus 212.193.63.211/directus](http://212.193.63.211/directus)  
login: gneff@yandex.ru  
password: d1r3ctu5  
## Технологический стек
- **Языки:** JavaScript
- **Библиотеки и фреймворки:** React, React Router, MobX, Material-UI (MUI)
- **Инструменты:** Yarn (монорепозиторий), Vite, Axios, ESLint, Prettier, Docker, Docker Compose
- **API:** Directus REST API

## Основные особенности

1. **Монорепозиторий:**  
   Проект организован как монорепозиторий с использованием Yarn для разделения клиентских и серверных пакетов.

2. **Архитектура:**  
   В проекте используется Feature-Sliced Design (FSD).

3. **Интеграция провайдеров через HOC:**  
   Провайдеры MobX Store, MUI Theme и React Router включены в проект с помощью Higher-Order Components (HOC).

4. **Работа с Directus:**  
   Для взаимодействия с системой управления контентом Directus используется REST API.
    
## Решенные задачи
![Альбомы](https://github.com/user-attachments/assets/5bd6f3de-1df9-452b-abc9-4458812756ee)  
![Галерея](https://github.com/user-attachments/assets/10fb65d4-1092-4d02-a669-e9a2e22cfacf)  
![Модальное окно](https://github.com/user-attachments/assets/ea921f4d-3544-4e68-bb42-b3875a4bc854)  
![Адаптив](https://github.com/user-attachments/assets/d847f857-0452-4e00-a1d4-624d4564c078)  

**1. Поддержка любых размеров изображений**
    Поддержка любых размеров изображений обеспечивается за счет использования возможностей MUI, CSS-свойства `background-size: cover`, `aspect-ratio: 16/9`, а также контроля размеров через `vh` и `vw`.  

**2. Адаптивная верстка:** Реализована с помощью media queries. В зависимости от устройства меняется отображение сетки  фотографий и поведение модальных окон:
     - **Десктоп:** Фотографии отображаются по три в ряд, с возможностью открытия в модальном окне.
     - **Планшеты:** Сетка представлена двумя фотографиями в ряд.
     - **Мобильные устройства:** Всплывающие окна заменяются на отдельные страницы для просмотра фотографий.

**3. Админка Directus:**  
   Административная панель Directus доступна по адресу `/directus`.
   - В dev-режиме это реализовано с помощью proxy-настроек в Vite (vite.config.js).
   - В продакшене это решено через конфигурацию Nginx.

**4. Пагинация:**  
   Реализована пагинация в списке фотографий с лимитом 6 фотографий на одну страницу. Механизм пагинации обеспечен с search параметров

**5. Механизм альбомов:**  
   В Directus настроены две коллекции - альбомы и фотографии, связанные отношением One-to-Many.

**6. Переключение фото в альбомах:**  
   Пользователь может переключаться между фотографиями внутри альбома с помощью стрелок, не закрывая всплывающее окно.

**7. Роутинг:**  
    Реализован динамический роутинг с использованием путей формата `/album/:albumId/photo/:photoIndex?page=1`. Пользователь может прокручивать историю просмотров, не теряя текущую сессию.

**8 Поддержка превьюшек:**  
    Для оптимизации загрузки реализована поддержка превью изображений через параметры `?fit=cover&width=470&height=270&quality=80`. Превью для альбомов обрабатываются с использованием ключа `system-large-cover`.

**9. Docker и деплой:**  
    Frontend-приложение завернуто в Docker-контейнер. Для разработки используется файл `docker-compose-dev.yml`, а для деплоя на сервер — `docker-compose.yml`, обеспечивающие разворачивание всех необходимых сервисов, включая Directus.  
    
**10. Задеплоить проект на собственный VPS сервер:**  
   [212.193.63.211](http://212.193.63.211) 


## Разворачивание проекта в dev режиме

1. **Клонирование репозитория**  
   Склонируйте репозиторий проекта на ваш локальный компьютер:  
   ```bash
   git clone https://github.com/gineff/photo-album.git

2. **Переход в папку проекта** 
   ```bash
   cd photo-album

3. **Установка зависимостей**  
Убедитесь, что у вас установлен Yarn. Если Yarn не установлен, установите его с помощью npm: 

   ```bash
   npm install --global yarn  

  Затем установите зависимости проекта:

  yarn  

 
4. **Настройка и запуск Directus**  
   ```bash  
   docker compose -f docker-compose-dev.yml up -d
  
5. **Запуск приложения в режиме разработки**  
   ```bash  
   yarn dev
Приложение будет доступно по адресу localhost:5173

6. **Остановка контейнеров **  
   ```bash  
   docker docker compose -f docker-compose-dev.yml down

## Разворачивание проекта в production режиме

1. **Клонирование репозитория**  
   Склонируйте репозиторий проекта на ваш локальный компьютер:  
   ```bash
   git clone https://github.com/gineff/photo-album.git

2. **Переход в папку проекта** 
   ```bash
   cd photo-album

3. **Расширение прав на базу данных**  
   ```bash  
   sudo chmod -R 777 ./packages/server/directus
   
4. **Настройка и запуск Directus в фоновом режиме**  
   ```bash  
   docker-compose up --build -d

