-- 
drop database db_ktpm; 
create database db_ktpm;
use db_ktpm;
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `soCCCD` int NOT NULL,
  `username` VARCHAR(255),
  `password` VARCHAR(255),
  `role` VARCHAR(255)
);

CREATE TABLE `sohokhau` (
  `soHoKhau` int PRIMARY KEY,
  `soNha` int,
  `duongPho` VARCHAR(255),
  `phuong` VARCHAR(255),
  `quan` VARCHAR(255),
  `ngayTao` VARCHAR(255)
);

CREATE TABLE `nhankhau` (
  `soCCCD` int PRIMARY KEY,
  `hoTen` VARCHAR(255),
  `biDanh` VARCHAR(255),
  `gioiTinh` VARCHAR(255),
  `ngayThangNamSinh` Date,
  `noiSinh` VARCHAR(255),
  `nguyenQuan` VARCHAR(255),
  `dantoc` VARCHAR(255),
  `quocTich` VARCHAR(255),
  `ngheNghiep` VARCHAR(255),
  `noiLamViec` VARCHAR(255),
  `ngayCap` Date,
  `noiCap` VARCHAR(255),
  `quanHeVoiChuHo` VARCHAR(255)
);

CREATE TABLE `giaytamvang` (
  `id` int PRIMARY KEY,
  `diaChiThuongChu` VARCHAR(255),
  `hoKhauTamVang` int,
  `soCCCD` int,
  `ngayBatDau` Date,
  `ngayKetThuc` Date,
  `ngayDangKi` Date,
  `lyDoTamVang` VARCHAR(255)
);

CREATE TABLE `giaytamtru` (
  `id` int PRIMARY KEY,
  `diaChiThuongChu` VARCHAR(255),
  `hoKhauTamTru` int,
  `soCCCD` int,
  `ngayBatDau` Date,
  `ngayKetThuc` Date,
  `ngayDangKi` Date,
  `lyDoTamTru` VARCHAR(255)
);

CREATE TABLE `thaydoinhankhau` (
  `id` int,
  `soCCCD` int,
  `loaiThayDoi` VARCHAR(255),
  `ngayThayDoi` Date,
  `chiTietThayDoi` VARCHAR(255)
);

CREATE TABLE `thaydoihokhau` (
  `soHoKhau` int,
  `loaiThayDoi` VARCHAR(255),
  `ngayThayDoi` Date,
  `chiTietThayDoi` VARCHAR(255)
);

CREATE TABLE `thuoc` (
  `soHoKhau` int,
  `soCCCD` int,
  primary key (`soHoKhau`,`soCCCD`)
);

CREATE TABLE `chuho` (
  `soHoKhau` int,
  `soCCCD` int,
  primary key (`soHoKhau`,`soCCCD`)
);

CREATE TABLE `hoptodanpho` (
  `id` int primary key,
  `thoiGianBatDau` Date,
  `diaDiem` VARCHAR(255)
);

CREATE TABLE `hothamgia` (
  `id` int primary key,
  `soHoKhau` int
);

ALTER TABLE `hothamgia` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`);

ALTER TABLE `hothamgia` ADD FOREIGN KEY (`id`) REFERENCES `hoptodanpho` (`id`);

ALTER TABLE `thuoc` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`);

ALTER TABLE `thuoc` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`);

ALTER TABLE `chuho` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`);

ALTER TABLE `chuho` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`);

ALTER TABLE `thaydoinhankhau` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`);

ALTER TABLE `giaytamvang` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`);

ALTER TABLE `giaytamvang` ADD FOREIGN KEY (`hoKhauTamVang`) REFERENCES `sohokhau` (`soHoKhau`);

ALTER TABLE `giaytamtru` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`);

ALTER TABLE `giaytamtru` ADD FOREIGN KEY (`hoKhauTamTru`) REFERENCES `sohokhau` (`soHoKhau`);

ALTER TABLE `thaydoihokhau` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`);
