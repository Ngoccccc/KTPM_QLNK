drop database db_ktpm; 
create database db_ktpm;
use db_ktpm;
CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(50),
  `password` VARCHAR(50),
  `soCCCD` int,
  `role` VARCHAR(50),
  `token` VARCHAR(50),
  `refeshtoken` VARCHAR(50)
);

CREATE TABLE `sohokhau` (
  `soHoKhau` int PRIMARY KEY,
  `soNha` int,
  `duongPho` VARCHAR(50),
  `phuong` VARCHAR(50),
  `quan` VARCHAR(50),
  `ngayTao` VARCHAR(50)
);

CREATE TABLE `nhankhau` (
  `soCCCD` int PRIMARY KEY,
  `hoTen` VARCHAR(50),
  `biDanh` VARCHAR(50),
  `gioiTinh` VARCHAR(50),
  `ngayThangNamSinh` Date,
  `noiSinh` VARCHAR(50),
  `nguyenQuan` VARCHAR(50),
  `dantoc` VARCHAR(50),
  `quocTich` VARCHAR(50),
  `ngheNghiep` VARCHAR(50),
  `noiLamViec` VARCHAR(50),
  `ngayCap` Date,
  `noiCap` VARCHAR(50),
  `quanHeVoiChuHo` VARCHAR(50)
);

CREATE TABLE `giaytamvang` (
  `id` int PRIMARY KEY,
  `diaChiThuongChu` VARCHAR(50),
  `hoKhauTamVang` int,
  `soCCCD` int,
  `ngayBatDau` Date,
  `ngayKetThuc` Date,
  `ngayDangKi` Date,
  `lyDoTamVang` VARCHAR(50)
);

CREATE TABLE `giaytamtru` (
  `id` int PRIMARY KEY,
  `diaChiThuongChu` VARCHAR(50),
  `hoKhauTamTru` int,
  `soCCCD` int,
  `ngayBatDau` Date,
  `ngayKetThuc` Date,
  `ngayDangKi` Date,
  `lyDoTamTru` VARCHAR(50)
);

CREATE TABLE `thaydoinhankhau` (
  `id` int,
  `soCCCD` int,
  `loaiThayDoi` VARCHAR(50),
  `ngayThayDoi` Date,
  `chiTietThayDoi` VARCHAR(50)
);

CREATE TABLE `thaydoihokhau` (
  `soHoKhau` int,
  `loaiThayDoi` VARCHAR(50),
  `ngayThayDoi` Date,
  `chiTietThayDoi` VARCHAR(50)
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
  `diaDiem` VARCHAR(50)
);

CREATE TABLE `hothamgia` (
  `id` int primary key,
  `soHoKhau` int
);

ALTER TABLE `hothamgia` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `hothamgia` ADD FOREIGN KEY (`id`) REFERENCES `hoptodanpho` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thuoc` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thuoc` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `chuho` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `chuho` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thaydoinhankhau` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamvang` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamvang` ADD FOREIGN KEY (`hoKhauTamVang`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamtru` ADD FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamtru` ADD FOREIGN KEY (`hoKhauTamTru`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thaydoihokhau` ADD FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;
