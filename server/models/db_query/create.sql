drop database db_ktpm;

create database db_ktpm;

use db_ktpm;

CREATE TABLE
    `user` (
        `id` int PRIMARY KEY AUTO_INCREMENT,
        `username` VARCHAR(50),
        `password` VARCHAR(50),
        `soCCCD` int,
        `role` VARCHAR(50),
        `token` VARCHAR(50),
        `refeshtoken` VARCHAR(50)
    );

CREATE TABLE
    `sohokhau` (
        `soHoKhau` int PRIMARY KEY,
        `soNha` int,
        `duongPho` VARCHAR(50),
        `phuong` VARCHAR(50),
        `quan` VARCHAR(50),
        `ngayTao` VARCHAR(50)
    );

CREATE TABLE
    `nhankhau` (
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

CREATE TABLE
    `giaytamvang` (
        `id` int PRIMARY KEY,
        `diaChiThuongChu` VARCHAR(50),
        `hoKhauTamVang` int,
        `soCCCD` int,
        `ngayBatDau` Date,
        `ngayKetThuc` Date,
        `ngayDangKi` Date,
        `lyDoTamVang` VARCHAR(50)
    );

CREATE TABLE
    `giaytamtru` (
        `id` int PRIMARY KEY,
        `diaChiThuongChu` VARCHAR(50),
        `hoKhauTamTru` int,
        `soCCCD` int,
        `ngayBatDau` Date,
        `ngayKetThuc` Date,
        `ngayDangKi` Date,
        `lyDoTamTru` VARCHAR(50)
    );

CREATE TABLE
    `thaydoinhankhau` (
        `id` int,
        `soCCCD` int,
        `loaiThayDoi` VARCHAR(50),
        `ngayThayDoi` Date,
        `chiTietThayDoi` VARCHAR(50)
    );

CREATE TABLE
    `thaydoihokhau` (
        `soHoKhau` int,
        `loaiThayDoi` VARCHAR(50),
        `ngayThayDoi` Date,
        `chiTietThayDoi` VARCHAR(50)
    );

CREATE TABLE
    `thuoc` (
        `soHoKhau` int,
        `soCCCD` int,
        primary key (`soHoKhau`, `soCCCD`)
    );

CREATE TABLE
    `chuho` (
        `soHoKhau` int,
        `soCCCD` int,
        primary key (`soHoKhau`, `soCCCD`)
    );

CREATE TABLE
    `hoptodanpho` (
        `id` int primary key,
        `thoiGianBatDau` Date,
        `diaDiem` VARCHAR(50)
    );

CREATE TABLE
    `hothamgia` (
        `id` int primary key,
        `soHoKhau` int
    );

ALTER TABLE `hothamgia`
ADD
    FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `hothamgia`
ADD
    FOREIGN KEY (`id`) REFERENCES `hoptodanpho` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thuoc`
ADD
    FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thuoc`
ADD
    FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `chuho`
ADD
    FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `chuho`
ADD
    FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thaydoinhankhau`
ADD
    FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamvang`
ADD
    FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamvang`
ADD
    FOREIGN KEY (`hoKhauTamVang`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamtru`
ADD
    FOREIGN KEY (`soCCCD`) REFERENCES `nhankhau` (`soCCCD`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `giaytamtru`
ADD
    FOREIGN KEY (`hoKhauTamTru`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `thaydoihokhau`
ADD
    FOREIGN KEY (`soHoKhau`) REFERENCES `sohokhau` (`soHoKhau`) ON DELETE CASCADE ON UPDATE CASCADE;

-- fake data

use db_ktpm;

INSERT INTO
    nhankhau (
        soCCCD,
        hoTen,
        biDanh,
        gioiTinh,
        ngayThangNamSinh,
        noiSinh,
        nguyenQuan,
        danToc,
        quocTich,
        ngheNghiep,
        noiLamViec,
        ngayCap,
        noiCap,
        quanHeVoiChuHo,
        createdAt,
        updatedAt
    )
VALUES (
        123456789,
        'Nguyen Van A',
        'A',
        'Nam',
        '1990-01-01',
        'Hanoi',
        'Hanoi',
        'Kinh',
        'Vietnamese',
        'Engineer',
        'ABC Company',
        '2020-01-01',
        'Hanoi',
        'Chu Ho',
        NOW(),
        NOW()
    ), (
        987654321,
        'Nguyen Thi B',
        'B',
        'Nữ',
        '1995-05-05',
        'Hanoi',
        'Hanoi',
        'Kinh',
        'Vietnamese',
        'Teacher',
        'XYZ School',
        '2018-06-01',
        'Hanoi',
        'Con',
        NOW(),
        NOW()
    ), (
        555555555,
        'Tran Van C',
        NULL,
        'Nam',
        '1985-12-15',
        'Hanoi',
        'Hanoi',
        'Kinh',
        'Vietnamese',
        'Doctor',
        'Hospital X',
        '2010-03-10',
        'Hanoi',
        'Anh Em',
        NOW(),
        NOW()
    ), (
        111111111,
        'Le Thi D',
        'D',
        'Nữ',
        '1992-08-20',
        'Hanoi',
        'Hanoi',
        'Kinh',
        'Vietnamese',
        'Accountant',
        'ABC Corporation',
        '2015-09-25',
        'Hanoi',
        'Con',
        NOW(),
        NOW()
    ), (
        1202011008,
        'Đào Xuân Minh',
        'minh',
        'Nam',
        '2014-08-31 17:00:00',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Sinh viên',
        'Hà Nội',
        '2020-06-27 13:44:20',
        'Hà Nội',
        'Chủ hộ',
        '2023-07-02 10:56:29',
        '2023-07-02 10:56:29'
    ), (
        999999999,
        'Pham Van E',
        NULL,
        'Nam',
        '1998-03-30',
        'Hanoi',
        'Hanoi',
        'Kinh',
        'Vietnamese',
        'Student',
        'University Y',
        '2019-12-05',
        'Hanoi',
        'Anh Em',
        NOW(),
        NOW()
    );

INSERT INTO
    sohokhau (
        soHoKhau,
        soNha,
        duongPho,
        phuong,
        quan,
        createdAt,
        updatedAt
    )
VALUES (
        1,
        37,
        'LacTung',
        'VinhTuy',
        'HaiBaTrung',
        NOW(),
        NOW()
    ), (
        2,
        52,
        'CayDa',
        'CoLoa',
        'DongAnh',
        NOW(),
        NOW()
    );

INSERT INTO
    thuoc (
        soHoKhau,
        soCCCD,
        createdAt,
        updatedAt
    )
VALUES (1, 123456789, NOW(), NOW()), (2, 987654321, NOW(), NOW()), (1, 555555555, NOW(), NOW()), (2, 111111111, NOW(), NOW()), (2, 1202011008, NOW(), NOW()), (1, 999999999, NOW(), NOW());

INSERT INTO
    chuho (
        soHoKhau,
        soCCCD,
        createdAt,
        updatedAt
    )
VALUES (
        1,
        123456789,
        2023 -07 -02,
        2023 -07 -02
    ), (
        2,
        1202011008,
        2023 -07 -02,
        2023 -07 -02
    );

INSERT INTO
    giaytamtru (
        diaChiThuongChu,
        hoKhauTamTru,
        soCCCD,
        ngayBatDau,
        ngayKetThuc,
        ngayDangKi,
        lyDoTamTru,
        createdAt,
        updatedAt
    )
VALUES (
        '123 ABC Street',
        1,
        123456789,
        '2023-07-01',
        '2023-07-15',
        '2023-06-30',
        'Vacation',
        NOW(),
        NOW()
    ), (
        '456 XYZ Avenue',
        2,
        987654321,
        '2023-07-05',
        '2023-07-20',
        '2023-07-04',
        'Business Trip',
        NOW(),
        NOW()
    );

INSERT INTO
    giaytamvang (
        diaChiThuongChu,
        hoKhauTamVang,
        soCCCD,
        ngayBatDau,
        ngayKetThuc,
        ngayDangKi,
        lyDoTamVang,
        createdAt,
        updatedAt
    )
VALUES (
        '123 ABC Street',
        1,
        123456789,
        '2023-07-01',
        '2023-07-15',
        '2023-06-30',
        'Traveling',
        NOW(),
        NOW()
    ), (
        '456 XYZ Avenue',
        2,
        987654321,
        '2023-07-05',
        '2023-07-20',
        '2023-07-04',
        'Vacation',
        NOW(),
        NOW()
    );

INSERT INTO
    hoptodanpho (
        id,
        thoiGianBatDau,
        thoiGianKetThuc,
        diaDiem,
        noiDung,
        createdAt,
        updatedAt
    )
VALUES (
        1,
        '2023-07-01',
        '2023-07-01',
        'Phuong A, Quan B',
        'Noi dung hop to 1',
        NOW(),
        NOW()
    ), (
        2,
        '2023-07-02',
        '2023-07-02',
        'Phuong C, Quan D',
        'Noi dung hop to 2',
        NOW(),
        NOW()
    ), (
        3,
        '2023-07-03',
        '2023-07-03',
        'Phuong E, Quan F',
        'Noi dung hop to 3',
        NOW(),
        NOW()
    ), (
        4,
        '2023-07-04',
        '2023-07-04',
        'Phuong G, Quan H',
        'Noi dung hop to 4',
        NOW(),
        NOW()
    ), (
        5,
        '2023-07-05',
        '2023-07-05',
        'Phuong I, Quan J',
        'Noi dung hop to 5',
        NOW(),
        NOW()
    );

INSERT INTO
    hothamgia (
        id,
        soHoKhau,
        createdAt,
        updatedAt
    )
VALUES (1, 1, NOW(), NOW()), (2, 2, NOW(), NOW()), (3, 1, NOW(), NOW()), (4, 2, NOW(), NOW()), (5, 1, NOW(), NOW());