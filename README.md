# Каталог фильмов на React

## Описание

Это небольшой петпроект каталога фильмов, созданный с использованием React и Vite. Для получения данных о фильмах используется API The Movie Database (TMDb). Проект демонстрирует основные возможности работы с внешними API и состояниями.

## Основной функционал

- Фильтрация фильмов по типу (tv, movie, persons).
- Просмотр списка популярных фильмов.
- Поиск фильмов по названию.

## Используемые технологии

- **React**: Для построения пользовательского интерфейса.
- **Vite**: Для быстрой сборки и разработки проекта.
- **Fetch**: Для работы с API.
- [**MaterializeCSS**]((https://materializecss.com/about.html)): Для стилизации компонентов.
- [**TMDb API**](https://developer.themoviedb.org/docs/getting-started): Для получения данных о фильмах.

## Установка и запуск

### Предварительные требования

- Установленный **Node.js**.
- Менеджер пакетов (**npm** или **yarn**).

### Инструкция

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/hrmvlg/MovieCatalog.git
   ```
2. Перейдите в папку проекта:
   ```bash
   cd MovieCatalog
   ```
3. Установите зависимости:
   ```bash
   npm install
   # или
   yarn install
   ```

4. Создайте файл `.env` в корневой директории и добавьте ваш API-ключ TMDb:
   ```
   VITE_TMDB_API_KEY=ваш_ключ
   ```

5. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   # или
   yarn dev
   ```

6. Откройте localhost в вашем браузере.

## Сборка для продакшена

Для сборки приложения выполните:
```bash
npm run build
# или
yarn build
```

Собранные файлы будут находиться в папке `build`.

## Контакты

Если у вас есть вопросы или предложения, вы можете связаться со мной:

- **Email**: olya.hrmvlg@gmail.com
- **GitHub**: [hrmvlg](https://github.com/hrmvlg)


## **Посестить сайт вы можете [здесь](https://hrmvlg.github.io/MovieCatalog/)**
Если вы находитесь в России, рекомендую включить VPN.
