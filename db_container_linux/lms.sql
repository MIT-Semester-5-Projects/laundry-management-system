CREATE DATABASE IF NOT EXISTS laundry_management;
USE laundry_management;

CREATE TABLE IF NOT EXISTS `student_data` (
  `reg_no` CHAR(9) PRIMARY KEY,
  `laundry_id` CHAR(32) UNIQUE,
  `card_id` INTEGER UNIQUE,
  `student_name` VARCHAR(100) NOT NULL,
  `remaining_cycles` INTEGER NOT NULL DEFAULT 30,
  `password` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS `admin` (
  `name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS `laundry` (
  `laundry_id` CHAR(32) UNIQUE PRIMARY KEY,
  `status` VARCHAR(10) NOT NULL COMMENT 'Collected->Processing->Ready->Delivered',
  `weight` DECIMAL(4, 1) NOT NULL DEFAULT 0,
  `pieces` INTEGER NOT NULL DEFAULT 0,
  `date` DATETIME NOT NULL,
  FOREIGN KEY (`laundry_id`) REFERENCES `student_data`(`laundry_id`) ON DELETE CASCADE
);

-- INSERT SAMPLE DATA
INSERT INTO `admin` (name, password) VALUES ('Nived', 'meow@9876');


INSERT INTO `student_data` (reg_no, laundry_id, card_id, student_name, remaining_cycles, password)
VALUES
('202300001', 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6', 1234, 'Alice Johnson', 25, 'password123'),
('202300002', 'q1w2e3r4t5y6u7i8o9p0a1s2d3f4g5h6', 5678, 'Bob Smith', 15, 'passw0rd!'),
('202300003', 'z9x8c7v6b5n4m3a2s1d0f9g8h7j6k5l4', 2345, 'Charlie Davis', 30, 'securePass2024'),
('202300004', 'm1n2b3v4c5x6z7a8s9d0f1g2h3j4k5l6', 7890, 'Diana Evans', 20, 'laundryPass#'),
('202300005', 'o1p2q3w4e5r6t7y8u9i0o1p2q3w4e5r6', 3456, 'Edward Franklin', 10, 'qwerty987');

-- CREATE TABLE IF NOT EXISTS`staff_roles` (
--   `staff_id` char(12) PRIMARY KEY,
--   `staff_role` char(5) NOT NULL COMMENT 'Staff or Admin'
-- );

-- CREATE TABLE IF NOT EXISTS`staff_data` (
--   `id` char(12) PRIMARY KEY,
--   `staff_name` varchar(100) NOT NULL,
--   `staff_password` char(32) NOT NULL COMMENT 'bcrypt salted password'
-- );

-- CREATE TABLE IF NOT EXISTS`analytics_daily` (
--   `business_date` date PRIMARY KEY,
--   `laundry_count` integer NOT NUlL DEFAULT 0,
--   `turnaround_time` decimal(4,2) NOT NULL COMMENT 'recieved time - given time',
--   `avg_weight` decimal(4,2) NOT NULL,
--   `avg_no_pieces` integer NOT NULL
-- );
--
-- CREATE TABLE IF NOT EXISTS`analytics_weekly` (
--   `week` integer PRIMARY KEY,
--   `laundry_count` integer NOT NULL DEFAULT 0,
--   `avg_weight` decimal(4, 2) NOT NULL DEFAULT 0,
--   `avg_pieces` integer NOT NULL DEFAULT 0
-- );

-- ALTER TABLE `staff_roles` ADD FOREIGN KEY (`staff_id`) REFERENCES `staff_data` (`id`);
--
-- ALTER TABLE `staff_roles` ADD CONSTRAINT CHECK ( staff_role in ('ADMIN', 'STAFF') ); 
--
-- ALTER TABLE `laundry` ADD FOREIGN KEY (`laundry_id`) REFERENCES `student_data` (`id`);
