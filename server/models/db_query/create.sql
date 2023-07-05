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
        'Nguyễn Quang Trường',
        'Trường',
        'Nam',
        '1990-01-01',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Kĩ sư CNTT',
        'Công ty GMSoltion',
        '2015-01-01',
        'Hà Nội',
        'Chủ hộ',
        NOW(),
        NOW()
    ), (
        987654320,
        'Nguyễn Tuấn Thành',
        'Thành',
        'Nữ',
        '1995-02-02',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Giáo Viên',
        'Đại học Bách Khoa Hà Nội',
        '2019-02-02',
        'Hà Nội',
        'Con',
        NOW(),
        NOW()
    ), (
        123456780,
        'Đào Xuân Minh',
        'Minh',
        'Nam',
        '1990-01-01',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Đầu bếp',
        'Nhà Hàng Sơn Thiên',
        '2020-01-01',
        'Hà Nội',
        'Chủ hộ',
        NOW(),
        NOW()
    ), (
        987654327,
        'Trần Tiến Ngọc',
        'Ngọc',
        'Nữ',
        '1995-02-02',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Giáo viên',
        'Trường Amsterdam',
        '2019-02-02',
        'Hà Nội',
        'Chu Ho',
        NOW(),
        NOW()
    ), (
        246813579,
        'Trần Minh Tuấn',
        'Tuấn',
        'Nam',
        '1985-03-03',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Y tá',
        'Bệnh viện y Hà Nội',
        '2018-03-03',
        'Hà Nội',
        'Vợ',
        NOW(),
        NOW()
    ), (
        135792468,
        'Vũ Anh Quân',
        'Quân',
        'Nữ',
        '1992-04-04',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Học sinh',
        'Trường THPT Sư phạm Hà Nội',
        '2021-04-04',
        'Hà Nội',
        'Con',
        NOW(),
        NOW()
    ), (
        246813578,
        'Phạm Quang Nhật',
        'Nhật',
        'Nam',
        '1988-05-05',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Nội trợ',
        'Nhà',
        '2017-05-05',
        'Hà Nội',
        'Vợ',
        NOW(),
        NOW()
    ), (
        987654321,
        'Hoàng Như Nghĩa',
        'Nghĩa',
        'Nữ',
        '1997-06-06',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Học sinh',
        'Trường Amsterdam',
        '2016-06-06',
        'Hà Nội',
        'Con',
        NOW(),
        NOW()
    ), (
        987654323,
        'Nguyễn Hùng Tiến',
        'Tiến',
        'Nữ',
        '1997-06-06',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Học sinh',
        'Trường đại học Kinh tế quốc dân',
        '2016-06-06',
        'Hà Nội',
        'Con',
        NOW(),
        NOW()
    ), (
        246813570,
        'Hoàng Danh Quân',
        'Quân',
        'Nam',
        '1985-03-03',
        'Hà Nội',
        'Hà Nội',
        'Kinh',
        'Việt Nam',
        'Bác sĩ',
        'Bệnh viện Bạch Mai',
        '2018-03-03',
        'Hà Nội',
        'Vợ',
        NOW(),
        NOW()
    );

INSERT INTO
    SoHoKhau (
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
        10,
        'Trần Đại Nghĩa',
        'Phường Đồng Tâm',
        'Quận Hai Bà Trưng',
        NOW(),
        NOW()
    ), (
        2,
        20,
        'Phạm Văn Đồng',
        'Phường Cầu Giấy',
        'Quận Cầu Giấy',
        NOW(),
        NOW()
    ), (
        3,
        30,
        'Lê Đại Hành',
        'Phường Bà Triệu',
        'Quận Hai Bà Trưng',
        NOW(),
        NOW()
    );

INSERT INTO
    thuoc (soHoKhau, soCCCD,
        createdAt,
        updatedAt)
VALUES (1, 123456780,now(),now()), (1, 246813578,now(),now()), (1, 987654320,now(),now()), (2, 123456789,now(),now()), (2, 246813579,now(),now()), (2, 135792468,now(),now()), (3, 987654327,now(),now()), (3, 987654321,now(),now()), (3, 987654323,now(),now()), (3, 246813570,now(),now());

INSERT INTO
    chuho (
        soHoKhau,
        soCCCD,
        createdAt,
        updatedAt
    )
VALUES (
        1,
        123456780,
        "2023-07-02",
        "2023-07-02"
    ), (
        2,
        123456789,
        "2023-06-02",
        "2023-06-02"
    ), (
        3,
        987654327,
        "2023-05-02",
        "2023-05-02"
    );


INSERT INTO
    User (
        id,
        username,
        soCCCD,
        password,
        role,
        createdAt,
        updatedAt
    )
VALUES (
        1,
        'truong@gmail.com',
        123456789,
        'admin',
        'admin',
        NOW(),
        NOW()
    ), (
        2,
        'thanh@gmail.com',
        987654320,
        'pass1',
        'user',
        NOW(),
        NOW()
    ), (
        3,
        'minh@gmail.com',
        123456780,
        'pass2',
        'user',
        NOW(),
        NOW()
    ), (
        4,
        'ngoc@gmail.com',
        987654327,
        'pass3',
        'user',
        NOW(),
        NOW()
    ), (
        5,
        'tuan@gmail.com',
        246813579,
        'pass4',
        'user',
        NOW(),
        NOW()
    ), (
        6,
        'quan@gmail.com',
        135792468,
        'pass5',
        'user',
        NOW(),
        NOW()
    ), (
        7,
        'nhat@gmail.com',
        246813578,
        'pass6',
        'user',
        NOW(),
        NOW()
    ), (
        8,
        'nghia@gmail.com',
        987654321,
        'pass7',
        'user',
        NOW(),
        NOW()
    ), (
        9,
        'tien@gmail.com',
        987654323,
        'pass8',
        'user',
        NOW(),
        NOW()
    ), (
        10,
        'dquan@gmail.com',
        246813570,
        'pass9',
        'user',
        NOW(),
        NOW()
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
        'Hà Nội',
        2,
        123456789,
        '2023-07-01',
        '2023-07-15',
        '2023-06-30',
        'Đi trị liệu',
        NOW(),
        NOW()
    ), (
        'Hà Nội',
        3,
        987654321,
        '2023-07-05',
        '2023-07-20',
        '2023-07-04',
        'Thăm gia đình',
        NOW(),
        NOW()
    ), (
        'Hà Nội',
        2,
        246813579,
        '2023-03-04',
        '2023-04-04',
        '2023-03-04',
        'Chuyển nhà',
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
        'Hà Nội',
        1,
        123456789,
        '2023-07-01',
        '2023-07-15',
        '2023-06-30',
        'Đi du lịch',
        NOW(),
        NOW()
    ), (
        'Hà Nội',
        2,
        987654321,
        '2023-07-05',
        '2023-07-20',
        '2023-07-04',
        'Đi ăn cưới',
        NOW(),
        NOW()
    ), (
        'Hà Nội',
        3,
        246813579,
        '2023-03-03',
        '2023-04-03',
        '2023-03-03',
        'Chạy deadline',
        NOW(),
        NOW()
    ), (
        'Hà Nội',
        3,
        987654327,
        '2023-03-08',
        '2023-04-09',
        '2023-03-08',
        'Đi về quê',
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
        'Phường Đồng Tâm , quận Hai Bà Trưng',
        'Dẹp làn đường vỉa hè',
        NOW(),
        NOW()
    ), (
        2,
        '2023-07-02',
        '2023-07-02',
        'Phường Bà Triệu , Quận Hai Bà Trưng',
        'Chi phí thay đổi khu phố',
        NOW(),
        NOW()
    ), (
        3,
        '2023-07-03',
        '2023-07-03',
        'Phường Đồng Tâm , quận Hai Bà Trưng',
        'Kế hoạch đón tết',
        NOW(),
        NOW()
    ), (
        4,
        '2023-07-04',
        '2023-07-04',
        'Phường Đồng Tâm , quận Hai Bà Trưng',
        'Họp thường niên theo tháng',
        NOW(),
        NOW()
    ), (
        5,
        '2023-07-05',
        '2023-07-05',
        'Phuong I, Quan J',
        'Tổ chức sinh nhật cho các cụ 80 tuổi trở lên',
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
VALUES (1, 1, NOW(), NOW()), (2, 2, NOW(), NOW()), (3, 1, NOW(), NOW()), (4, 2, NOW(), NOW()), (5, 3, NOW(), NOW());