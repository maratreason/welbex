-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 20 2021 г., 09:06
-- Версия сервера: 10.3.13-MariaDB
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `welbex`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cities`
--

CREATE TABLE `cities` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `count` int(10) UNSIGNED NOT NULL,
  `distance` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `cities`
--

INSERT INTO `cities` (`id`, `title`, `count`, `distance`, `date`) VALUES
(1, 'Москва', 15000000, 800, '2021-08-11'),
(2, 'Санкт-Петербург', 5000000, 1900, '2021-08-19'),
(3, 'Владивосток', 3000000, 9000, '2021-08-18'),
(4, 'Екатеринбург', 2500000, 1100, '2021-08-19'),
(5, 'Киров', 1000000, 400, '2021-08-19'),
(6, 'Магадан', 1000000, 7000, '2021-08-19'),
(7, 'Краснодар', 1000000, 2500, '2021-08-19'),
(8, 'Красноярск', 1200000, 4000, '2021-08-19'),
(9, 'Новгород', 1000000, 2700, '2021-08-19'),
(10, 'Орел', 1000000, 1000, '2021-08-19'),
(11, 'Курск', 1000000, 950, '2021-08-19'),
(12, 'Омск', 1500000, 1700, '2021-08-18'),
(13, 'Чита', 1300000, 4100, '2021-08-17'),
(14, 'Иркутск', 1400000, 4200, '2021-08-10');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
