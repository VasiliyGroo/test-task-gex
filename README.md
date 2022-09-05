# Тестовое задание

## Реализация frontend части сервиса сокращения ссылок

![](https://user-images.githubusercontent.com/84619098/188457865-05970681-3386-42e5-935c-0d222b4122c7.gif)
![](https://user-images.githubusercontent.com/84619098/188456949-e6960059-9642-4cd2-b7e7-ba25873dafbf.gif)

Реализован следующий функционал:
<ol>
<li>Страница регистрации</li>
<li>Страница авторизации</li>
<li>Основная страница, реализующая следующую функциональность:</li>
<ol>
<li>Просмотр статистики по созданным ссылкам в виде таблицы</li>
<li>Таблица содержит четыре столбца - "ID", "Короткая ссылка", "Исходная ссылка" и "Количество переходов по короткой ссылке"</li>
<li>Таблица имеет offset-based пагинацию, работающую на стороне сервера</li>
<li>Таблица имеет возможность сортировки по столбцам</li>
<li>Таблица имеет возможность фильтрации показов данных их API в таблице</li>
<li>Так же реализован функционал копирования сокращенных ссылок при клике из таблицы</li>
</ol>
</ol>

## Для запуска проекта, выполните команды ниже:

Для начала создайте папку в которой вы хотите клонировать проект:
```git
mkdir my-dir
```
Перейдите в созданную папку
```git
cd my-dir
```
Затем выполните команду:
```git
git clone https://github.com/VasiliyGroo/test-task-gex
```
Перейдите в клонированную папку test-task-gex
```git
cd test-task-gex
```
Выполните команду запуска проекта в режиме dev
```git
npm run dev
```
После загрузки локального сервера перейдите на localhost
```terminal
 > Local: http://localhost:3000/
```
