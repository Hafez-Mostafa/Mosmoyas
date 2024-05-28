-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Erstellungszeit: 26. Mai 2024 um 21:38
-- Server-Version: 10.4.27-MariaDB
-- PHP-Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `social`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `postId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `comments`
--

INSERT INTO `comments` (`id`, `content`, `createdAt`, `updatedAt`, `userId`, `postId`) VALUES
(6, 'Melks lkndaläknd älkäjndädlasd4', '2024-05-26 16:12:59', '2024-05-26 16:12:59', 1, 1),
(7, 'Req.params might not work as expected. Instead, you should directly destructure the id from req.params.', '2024-05-26 16:13:33', '2024-05-26 16:13:33', 2, 2),
(8, 'This should resolve the EagerLoadingError by correctly referencing the associated models using their aliases.', '2024-05-26 16:14:48', '2024-05-26 16:14:48', 2, 2),
(9, 'really!.', '2024-05-26 16:21:43', '2024-05-26 16:21:43', 2, 2),
(10, 'gedden!.', '2024-05-26 16:23:11', '2024-05-26 16:23:11', 1, 1),
(11, 'Haqiqy!.', '2024-05-26 16:25:54', '2024-05-26 16:25:54', 1, 1),
(12, 'Mollas!.', '2024-05-26 16:26:31', '2024-05-26 16:26:31', 2, 2),
(13, 'node.jssequelize.js or ask your own question. Not the answer you\'re looking for? Browse other questions tagged tagged node.jssequelize.js or ask your own question.\r\n', '2024-05-26 19:18:39', '2024-05-26 19:18:39', 3, 13);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '5GHz WiFi', 'Traditionally WiFi runs on the 2.4 GHz frequency range, but that\'s not the only frequency it can work on. You can see a brief overview of WiFi generations in the image below.', '2024-05-26 11:36:49', '2024-05-26 13:06:09', 1),
(2, 'MDK5', 'MDK5 is a Wi-Fi testing tool from E7mer, ASPj of k2wrlz, it uses the osdep library from the aircrack-ng project to inject frames on several operating systems.', '2024-05-26 11:37:16', '2024-05-26 11:37:16', 1),
(4, 'MDK6', 'MDK6 is a Wi-Fi testing tool from E7mer, ASPj of k2wrlz, it uses the osdep library from the aircrack-ng project to inject frames on several operating systems.', '2024-05-26 11:39:34', '2024-05-26 11:39:34', 1),
(7, 'MDK6', 'the aircrack-ng project to inject frames on several operating systems.', '2024-05-26 11:53:29', '2024-05-26 11:53:29', 2),
(9, 'MDK9', 'the aircrack-ng project to inject frames on several operating systems.', '2024-05-26 12:03:16', '2024-05-26 12:03:16', 2),
(10, 'MDK10', 'the aircrack-ng project to inject frames on several operating systems.', '2024-05-26 12:14:48', '2024-05-26 12:14:48', 2),
(12, 'MDK7', 'the aircrack-ng project to inject frames on several operating systems.', '2024-05-26 13:53:28', '2024-05-26 13:53:28', 2),
(13, 'Shami', 'Not the answer you\'re looking for? Browse other questions tagged node.jssequelize.js or ask your own question.\r\n', '2024-05-26 19:16:46', '2024-05-26 19:16:46', 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'mostafa', 'mostafa@gmail.com', '$2b$10$Nha9pZdtD941voa3yAmdveOxaO1fwexU7EYNoyp5CKuXkSqjjoPC.', '2024-05-26 11:36:26', '2024-05-26 11:36:26'),
(2, 'ali', 'ali@gmail.com', '$2b$10$AzTRdnu3YyZyR2h.Ll2elOJNDAnO2amYuD4r8P8BYZ0euRz0BvdO.', '2024-05-26 11:53:23', '2024-05-26 11:53:23'),
(3, 'Malek', 'malek@gmail.com', '123456', '2024-05-26 19:16:16', '2024-05-26 19:16:16');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `postId` (`postId`);

--
-- Indizes für die Tabelle `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indizes für die Tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT für Tabelle `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT für Tabelle `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints der Tabelle `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
