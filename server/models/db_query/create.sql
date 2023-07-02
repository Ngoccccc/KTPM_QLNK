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

-- fake data
use db_ktpm;
INSERT INTO nhankhau (
  soCCCD, hoTen, biDanh, gioiTinh, ngayThangNamSinh,
  noiSinh, nguyenQuan, danToc, quocTich, ngheNghiep,
  noiLamViec, ngayCap, noiCap, quanHeVoiChuHo, createdAt, updatedAt
)
VALUES
  (123456789, 'Nguyễn Quang Trường', 'Trường', 'Nam', '1990-01-01', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Kĩ sư CNTT', 'Công ty GMSoltion', '2015-01-01', 'Hà Nội', 'Chủ hộ'),
  (987654320, 'Nguyễn Tuấn Thành', 'Thành', 'Nữ', '1995-02-02', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Giáo Viên', 'Đại học Bách Khoa Hà Nội', '2019-02-02', 'Hà Nội', 'Con'),
  (123456780, 'Đào Xuân Minh', 'Minh', 'Nam', '1990-01-01', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Đầu bếp', 'Nhà Hàng Sơn Thiên', '2020-01-01', 'Hà Nội', 'Chủ hộ'),
  (987654327, 'Trần Tiến Ngọc', 'Ngọc', 'Nữ', '1995-02-02', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Giáo viên', 'Trường Amsterdam', '2019-02-02', 'Hà Nội', 'Chu Ho'),
  (246813579, 'Trần Minh Tuấn', 'Tuấn', 'Nam', '1985-03-03', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Y tá', 'Bệnh viện y Hà Nội', '2018-03-03', 'Hà Nội', 'Vợ'),
  (135792468, 'Vũ Anh Quân', 'Quân', 'Nữ', '1992-04-04', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Học sinh', 'Trường THPT Sư phạm Hà Nội', '2021-04-04', 'Hà Nội', 'Con'),
  (246813578, 'Phạm Quang Nhật', 'Nhật', 'Nam', '1988-05-05', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Nội trợ', 'Nhà', '2017-05-05', 'Hà Nội', 'Vợ'),
  (987654321, 'Hoàng Như Nghĩa', 'Nghĩa', 'Nữ', '1997-06-06', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Học sinh', 'Trường Amsterdam', '2016-06-06', 'Hà Nội', 'Con'),
  (987654323, 'Nguyễn Hùng Tiến', 'Tiến', 'Nữ', '1997-06-06', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Học sinh', 'Trường đại học Kinh tế quốc dân', '2016-06-06', 'Hà Nội', 'Con'),
  (246813570, 'Hoàng Danh Quân', 'Quân', 'Nam', '1985-03-03', 'Hà Nội', 'Hà Nội', 'Kinh', 'Việt Nam', 'Bác sĩ', 'Bệnh viện Bạch Mai', '2018-03-03', 'Hà Nội', 'Vợ');

INSERT INTO SoHoKhau (soHoKhau, soNha, duongPho, phuong, quan, ngayTao)
VALUES
  (1, 10, 'Trần Đại Nghĩa', 'Phường Đồng Tâm', 'Quận Hai Bà Trưng', '2022-01-01'),
  (2, 20, 'Phạm Văn Đồng', 'Phường Cầu Giấy', 'Quận Cầu Giấy', '2022-02-02'),
  (3, 30, 'Lê Đại Hành', 'Phường Bà Triệu', 'Quận Hai Bà Trưng', '2022-03-03');

INSERT INTO thuoc (soHoKhau, soCCCD)
VALUES
  (1, 123456780),
  (1, 246813578),
  (1, 987654320),
  (2, 123456789),
  (2, 246813579),
  (2, 135792468),
  (3, 987654327),
  (3, 987654321),
  (3, 987654323),
  (3, 246813570);

INSERT INTO chuho (soHoKhau, soCCCD, createdAt, updatedAt)
VALUES
  (1,123456780,2023-07-02,2023-07-02),
  (2,123456789,2023-06-02,2023-06-02),
  (3,987654327,2023-05-02.2023-05-02);

INSERT INTO giaytamtru (diaChiThuongChu, hoKhauTamTru, soCCCD, ngayBatDau, ngayKetThuc, ngayDangKi, lyDoTamTru, createdAt, updatedAt)
VALUES
  ('Hà Nội', 2, 123456789, '2023-07-01', '2023-07-15', '2023-06-30', 'Đi trị liệu', NOW(), NOW()),
  ('Hà Nội', 3, 987654321, '2023-07-05', '2023-07-20', '2023-07-04', 'Thăm gia đình', NOW(), NOW()),
  ('Hà Nội', 1, 246813579, '2023-03-03', '2023-04-03', '2023-03-03', 'Đi công tác', NOW(), NOW()),
  ('Hà Nội', 2, 246813579, '2023-03-04', '2023-04-04', '2023-03-04', 'Chuyển nhà', NOW(), NOW());

INSERT INTO giaytamvang (diaChiThuongChu, hoKhauTamVang, soCCCD, ngayBatDau, ngayKetThuc, ngayDangKi, lyDoTamVang, createdAt, updatedAt)
VALUES
  ('Hà Nội', 1, 123456789, '2023-07-01', '2023-07-15', '2023-06-30', 'Đi du lịch', NOW(), NOW()),
  ('Hà Nội', 2, 987654321, '2023-07-05', '2023-07-20', '2023-07-04', 'Đi ăn cưới', NOW(), NOW()),
  ('Hà Nội', 3, 246813579, '2023-03-03', '2023-04-03', '2023-03-03', 'Chạy deadline',NOW(), NOW()),
  ('Hà Nội', 3, 987654327, '2023-03-08', '2023-04-09', '2023-03-08', 'Đi về quê', NOW(), NOW());


INSERT INTO hoptodanpho (id,thoiGianBatDau, thoiGianKetThuc, diaDiem, noiDung, createdAt, updatedAt)
VALUES
  (1,'2023-07-01', '2023-07-01', 'Phường Đồng Tâm , quận Hai Bà Trưng', 'Dẹp làn đường vỉa hè', NOW(), NOW()),
  (2,'2023-07-02', '2023-07-02', 'Phường Bà Triệu , Quận Hai Bà Trưng', 'Chi phí thay đổi khu phố', NOW(), NOW()),
  (3,'2023-07-03', '2023-07-03', 'Phường Đồng Tâm , quận Hai Bà Trưng', 'Kế hoạch đón tết', NOW(), NOW()),
  (4,'2023-07-04', '2023-07-04', 'Phường Đồng Tâm , quận Hai Bà Trưng', 'Họp thường niên theo tháng', NOW(), NOW()),
  (5,'2023-07-05', '2023-07-05', 'Phuong I, Quan J', 'Noi dung hop to 5', 'Tổ chức sinh nhật cho các cụ 80 tuổi trở lên', NOW(), NOW());


INSERT INTO hothamgia (id, soHoKhau, createdAt, updatedAt)
VALUES
  (1, 1, NOW(), NOW()),
  (2, 2, NOW(), NOW()),
  (3, 1, NOW(), NOW()),
  (4, 2, NOW(), NOW()),
  (5, 3, NOW(), NOW());
