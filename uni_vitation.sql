-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2023 at 05:12 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uni_vitation`
--

-- --------------------------------------------------------

--
-- Table structure for table `qrcode`
--

CREATE TABLE `qrcode` (
  `id` int(11) NOT NULL,
  `linkqr` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `qrcode`
--

INSERT INTO `qrcode` (`id`, `linkqr`, `status`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(29, 'https://www.uni.vitation.com/?sa=X&ved=0ahUKEwj47-zJuYz6AhWMcGwGHSjdC5wQOwgC', 'Hadir', NULL, '2023-01-20 07:36:22', '2023-01-20 07:36:22'),
(30, 'https://www.uni.vitation.com/?sa=X&ved=0ahUKEwj47-zJuYz6AhWMcGwGHSjdC5wSRwd', 'Hadir', NULL, '2023-01-20 07:38:50', '2023-01-20 07:38:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(20, 'Angel', 'angel@gmail.com', '$2b$10$9yGnh8gxT9llyGkqA.2NZ.lqjB5r1B/4OmWA.0.F4ifXlvnAgtOHO', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJuYW1lIjoiQW5nZWwiLCJlbWFpbCI6ImFuZ2VsQGdtYWlsLmNvbSIsImlhdCI6MTY3NDY2MzExMywiZXhwIjoxNjc0NzQ5NTEzfQ.vj7pQ-GSIDGo58kiLhu-qWXaGf4wjJM0ruByzVYqJm0', '2023-01-12 02:44:14', '2023-01-25 16:11:53'),
(22, 'Admin', 'admin@gmail.com', '$2b$10$pTIeiAqMlQM1LZdmLByYrOcjP27mr/nWDTne0lgK.1vIJO0fayol2', NULL, '2023-01-17 17:07:19', '2023-01-17 17:17:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `qrcode`
--
ALTER TABLE `qrcode`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `qrcode`
--
ALTER TABLE `qrcode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
