-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2023 at 12:10 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sowapp_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `membership_tab`
--

CREATE TABLE `membership_tab` (
  `sn` int(11) NOT NULL,
  `mem_id` varchar(100) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `mobile` varchar(50) DEFAULT NULL,
  `country_id` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mem_type_id` int(11) NOT NULL,
  `position_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `staff_id` varchar(100) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  `created_time` datetime NOT NULL,
  `updated_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment_tab`
--

CREATE TABLE `payment_tab` (
  `sn` int(11) NOT NULL,
  `transaction_id` varchar(50) NOT NULL,
  `gateway_id` varchar(100) NOT NULL,
  `mem_id` varchar(100) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `fund_method_id` varchar(10) NOT NULL,
  `currency_id` varchar(100) NOT NULL,
  `amount_paid` double(10,2) NOT NULL,
  `payment_purpose_id` varchar(20) NOT NULL,
  `status_id` varchar(50) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `setup_backend_settings_tab`
--

CREATE TABLE `setup_backend_settings_tab` (
  `sn` int(11) NOT NULL,
  `backend_setting_id` varchar(10) NOT NULL,
  `smtp_host` varchar(100) NOT NULL,
  `smtp_username` varchar(100) NOT NULL,
  `smtp_password` varchar(100) NOT NULL,
  `smtp_port` int(11) NOT NULL,
  `sender_name` varchar(100) NOT NULL,
  `support_phonenumber` varchar(20) NOT NULL,
  `support_email` varchar(255) NOT NULL,
  `software_engr_mail` varchar(255) NOT NULL,
  `afootech_email` varchar(255) NOT NULL,
  `support_address` varchar(255) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `account_name` varchar(100) NOT NULL,
  `account_number` varchar(100) NOT NULL,
  `payment_key` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_backend_settings_tab`
--

INSERT INTO `setup_backend_settings_tab` (`sn`, `backend_setting_id`, `smtp_host`, `smtp_username`, `smtp_password`, `smtp_port`, `sender_name`, `support_phonenumber`, `support_email`, `software_engr_mail`, `afootech_email`, `support_address`, `bank_name`, `account_name`, `account_number`, `payment_key`, `date`) VALUES
(1, 'BK_ID001', 'mail.compeermedicalinstitute.com', 'admin@compeermedicalinstitute.com', '$CMi@2022.', 465, ' RCCG Breakthrough Parish ', '08023358800', 'rccgbreakthroughparish@gmail.com', 'afolabitaiwoabayomi112@gmail.com', 'afootechglobal@gmail.com', 'BREAKTHROUGH PARISH, OKE OLA, ODE REMO, OGUN STATE', 'ACCESS BANK', 'AFOOTECH GLOBAL', '0096540100', 'pk_test_2c6df6d5a7b837ab3b3152750562b1b139155ffd', '2023-04-10 17:29:04');

-- --------------------------------------------------------

--
-- Table structure for table `setup_counter_tab`
--

CREATE TABLE `setup_counter_tab` (
  `sn` int(11) NOT NULL,
  `counter_id` int(11) NOT NULL,
  `counter_description` varchar(500) NOT NULL,
  `counter_value` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_counter_tab`
--

INSERT INTO `setup_counter_tab` (`sn`, `counter_id`, `counter_description`, `counter_value`) VALUES
(1, 1, 'count number of staff', '0'),
(2, 2, 'count number of membership', '0'),
(3, 3, 'count number of membership payment', '0');

-- --------------------------------------------------------

--
-- Table structure for table `setup_currency_tab`
--

CREATE TABLE `setup_currency_tab` (
  `sn` int(11) NOT NULL,
  `currency_id` varchar(50) NOT NULL,
  `currency_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `setup_currency_tab`
--

INSERT INTO `setup_currency_tab` (`sn`, `currency_id`, `currency_name`) VALUES
(1, 'NGN', 'NGN');

-- --------------------------------------------------------

--
-- Table structure for table `setup_fund_method_tab`
--

CREATE TABLE `setup_fund_method_tab` (
  `sn` int(11) NOT NULL,
  `fund_method_id` varchar(50) NOT NULL,
  `fund_method_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_fund_method_tab`
--

INSERT INTO `setup_fund_method_tab` (`sn`, `fund_method_id`, `fund_method_name`) VALUES
(1, 'FM001', 'CREDIT/DEBIT CARD'),
(2, 'FM002', 'BANK TRANSFER');

-- --------------------------------------------------------

--
-- Table structure for table `setup_membership_type_tab`
--

CREATE TABLE `setup_membership_type_tab` (
  `sn` int(11) NOT NULL,
  `mem_type_id` int(11) NOT NULL,
  `membership_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `setup_membership_type_tab`
--

INSERT INTO `setup_membership_type_tab` (`sn`, `mem_type_id`, `membership_type_name`) VALUES
(1, 1, 'FULL MEMBER');

-- --------------------------------------------------------

--
-- Table structure for table `setup_payment_purpose_tab`
--

CREATE TABLE `setup_payment_purpose_tab` (
  `sn` int(11) NOT NULL,
  `payment_purpose_id` varchar(50) NOT NULL,
  `payment_purpose_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_payment_purpose_tab`
--

INSERT INTO `setup_payment_purpose_tab` (`sn`, `payment_purpose_id`, `payment_purpose_name`) VALUES
(1, 'PP001', 'TITHE'),
(2, 'PP002', 'OFFERING'),
(3, 'PP003', 'BUILDING');

-- --------------------------------------------------------

--
-- Table structure for table `setup_position_tab`
--

CREATE TABLE `setup_position_tab` (
  `sn` int(11) NOT NULL,
  `position_id` int(11) NOT NULL,
  `position_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `setup_position_tab`
--

INSERT INTO `setup_position_tab` (`sn`, `position_id`, `position_name`) VALUES
(1, 1, 'PASTOR'),
(2, 2, 'CHOIR');

-- --------------------------------------------------------

--
-- Table structure for table `setup_role_tab`
--

CREATE TABLE `setup_role_tab` (
  `sn` int(10) UNSIGNED NOT NULL,
  `role_id` int(100) NOT NULL,
  `role_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_role_tab`
--

INSERT INTO `setup_role_tab` (`sn`, `role_id`, `role_name`) VALUES
(1, 1, 'STAFF'),
(2, 2, 'ADMIN'),
(3, 3, 'SUPER ADMIN');

-- --------------------------------------------------------

--
-- Table structure for table `setup_status_tab`
--

CREATE TABLE `setup_status_tab` (
  `sn` int(10) UNSIGNED NOT NULL,
  `status_id` varchar(100) NOT NULL,
  `status_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `setup_status_tab`
--

INSERT INTO `setup_status_tab` (`sn`, `status_id`, `status_name`) VALUES
(1, '1', 'ACTIVE'),
(2, '2', 'SUSPEND'),
(3, '3', 'PENDING'),
(4, '4', 'SUCCESSFUL'),
(5, '5', 'CANCELED');

-- --------------------------------------------------------

--
-- Table structure for table `staff_tab`
--

CREATE TABLE `staff_tab` (
  `sn` int(11) NOT NULL,
  `access_key` varchar(100) NOT NULL,
  `staff_id` varchar(100) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `country_id` varchar(100) NOT NULL,
  `mem_type_id` int(11) NOT NULL,
  `position_id` int(11) NOT NULL,
  `password` varchar(100) NOT NULL,
  `otp` varchar(100) NOT NULL,
  `passport` varchar(100) NOT NULL,
  `role_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `create_time` datetime NOT NULL,
  `updated_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `staff_tab`
--

INSERT INTO `staff_tab` (`sn`, `access_key`, `staff_id`, `fullname`, `mobile`, `email`, `address`, `country_id`, `mem_type_id`, `position_id`, `password`, `otp`, `passport`, `role_id`, `status_id`, `create_time`, `updated_time`) VALUES
(1, 'fe0aab7f0dd1a3aae35b71dd400f6dd7', 'STF0000', 'AFOLABI TAIWO ABAYOMI', '09021947874', 'afolabitaiwoabayomi112@gmail.com', '12, KOTCO ROAD, ODE REMO, OGUN STATE', 'C191', 0, 1, '36b233405285c282990f0fee2e3ba0e9', '595257', 'friends.png', 3, 1, '2023-05-04 11:52:41', '2023-05-04 10:08:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `membership_tab`
--
ALTER TABLE `membership_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `payment_tab`
--
ALTER TABLE `payment_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_backend_settings_tab`
--
ALTER TABLE `setup_backend_settings_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_counter_tab`
--
ALTER TABLE `setup_counter_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_currency_tab`
--
ALTER TABLE `setup_currency_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_fund_method_tab`
--
ALTER TABLE `setup_fund_method_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_membership_type_tab`
--
ALTER TABLE `setup_membership_type_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_payment_purpose_tab`
--
ALTER TABLE `setup_payment_purpose_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_position_tab`
--
ALTER TABLE `setup_position_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_role_tab`
--
ALTER TABLE `setup_role_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `setup_status_tab`
--
ALTER TABLE `setup_status_tab`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `staff_tab`
--
ALTER TABLE `staff_tab`
  ADD PRIMARY KEY (`sn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `membership_tab`
--
ALTER TABLE `membership_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_tab`
--
ALTER TABLE `payment_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `setup_backend_settings_tab`
--
ALTER TABLE `setup_backend_settings_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `setup_counter_tab`
--
ALTER TABLE `setup_counter_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `setup_currency_tab`
--
ALTER TABLE `setup_currency_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `setup_fund_method_tab`
--
ALTER TABLE `setup_fund_method_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `setup_membership_type_tab`
--
ALTER TABLE `setup_membership_type_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `setup_payment_purpose_tab`
--
ALTER TABLE `setup_payment_purpose_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `setup_position_tab`
--
ALTER TABLE `setup_position_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `setup_role_tab`
--
ALTER TABLE `setup_role_tab`
  MODIFY `sn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `setup_status_tab`
--
ALTER TABLE `setup_status_tab`
  MODIFY `sn` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `staff_tab`
--
ALTER TABLE `staff_tab`
  MODIFY `sn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
