
const TamTru = [{
    "diaChiThuongChu": "số 37 61/15 phố Lạc Trung",
    "hoKhauTamTru": 456,
    "soCCCD": 1202011001,
    "ngayBatDau": "2023-06-20",
    "ngayKetThuc": "2023-06-29",
    "ngayDangKi": "2023-06-19",
    "lyDoTamTru": "đi du lịch"
},
{
    "diaChiThuongChu": "số 37 61/15 phố Lạc Trung",
    "hoKhauTamTru": 456,
    "soCCCD": 1202011001,
    "ngayBatDau": "2023-06-20",
    "ngayKetThuc": "2023-06-29",
    "ngayDangKi": "2023-06-19",
    "lyDoTamTru": "đi du lịch"
},
{
    "diaChiThuongChu": "số 10 Đường ABC",
    "hoKhauTamTru": 123,
    "soCCCD": 1202011002,
    "ngayBatDau": "2023-07-01",
    "ngayKetThuc": "2023-07-10",
    "ngayDangKi": "2023-06-30",
    "lyDoTamTru": "đi công tác"
},
{
    "diaChiThuongChu": "số 20 Đường XYZ",
    "hoKhauTamTru": 789,
    "soCCCD": 1202011003,
    "ngayBatDau": "2023-07-05",
    "ngayKetThuc": "2023-07-15",
    "ngayDangKi": "2023-07-04",
    "lyDoTamTru": "đi học"
},
{
    "diaChiThuongChu": "số 30 Đường MNO",
    "hoKhauTamTru": 321,
    "soCCCD": 1202011004,
    "ngayBatDau": "2023-07-12",
    "ngayKetThuc": "2023-07-20",
    "ngayDangKi": "2023-07-11",
    "lyDoTamTru": "thăm gia đình"
},
{
    "diaChiThuongChu": "số 40 Đường KLM",
    "hoKhauTamTru": 678,
    "soCCCD": 1202011005,
    "ngayBatDau": "2023-07-18",
    "ngayKetThuc": "2023-07-25",
    "ngayDangKi": "2023-07-17",
    "lyDoTamTru": "đi du lịch"
},
{
    "diaChiThuongChu": "số 50 Đường PQR",
    "hoKhauTamTru": 910,
    "soCCCD": 1202011006,
    "ngayBatDau": "2023-07-22",
    "ngayKetThuc": "2023-07-31",
    "ngayDangKi": "2023-07-21",
    "lyDoTamTru": "đi công tác"
},
]

const jsonStrings = TamTru.map(item => JSON.stringify(item))
const listData = jsonStrings.map((s) => JSON.parse(s))

export default listData
