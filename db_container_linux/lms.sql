CREATE DATABASE IF NOT EXISTS laundry_management;

USE laundry_management;

CREATE TABLE IF NOT EXISTS `student_data` (
  `id` char(32) PRIMARY KEY,
  `card_id` integer NOT NULL,
  `reg_no` char(9) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `remaining_cycles` integer NOT NULL DEFAULT 30
);

CREATE TABLE IF NOT EXISTS`staff_data` (
  `id` char(12) PRIMARY KEY,
  `staff_name` varchar(100) NOT NULL,
  `staff_password` char(32) NOT NULL COMMENT 'bcrypt salted password'
);

CREATE TABLE IF NOT EXISTS`staff_roles` (
  `staff_id` char(12) PRIMARY KEY,
  `staff_role` char(5) NOT NULL COMMENT 'Staff or Admin'
);

CREATE TABLE IF NOT EXISTS`laundry` (
  `laundry_id` char(32) PRIMARY KEY,
  `laundry_status` varchar(10) NOT NULL COMMENT 'Collected->Processing->Ready',
  `laundry_weight` decimal(2,1) NOT NULL DEFAULT 0,
  `laundry_pieces` integer NOT NULL DEFAULT 0,
  `given_date` datetime NOT NULL,
  `recieved_date` datetime NOT NULL
);

CREATE TABLE IF NOT EXISTS`analytics_daily` (
  `business_date` date PRIMARY KEY,
  `laundry_count` integer NOT NULL DEFAULT 0,
  `turnaround_time` decimal(4,2) NOT NULL COMMENT 'recieved time - given time',
  `avg_weight` decimal(4,2) NOT NULL,
  `avg_no_pieces` integer NOT NULL
);

CREATE TABLE IF NOT EXISTS`analytics_weekly` (
  `week` integer PRIMARY KEY,
  `laundry_count` integer NOT NULL DEFAULT 0,
  `avg_weight` decimal(4, 2) NOT NULL DEFAULT 0,
  `avg_pieces` integer NOT NULL DEFAULT 0
);

ALTER TABLE `staff_roles` ADD FOREIGN KEY (`staff_id`) REFERENCES `staff_data` (`id`);

ALTER TABLE `staff_roles` ADD CONSTRAINT CHECK ( staff_role in ('ADMIN', 'STAFF') ); 

ALTER TABLE `laundry` ADD FOREIGN KEY (`laundry_id`) REFERENCES `student_data` (`id`);
