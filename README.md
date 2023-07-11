# KTPM_QLNK
Các bước cài đặt phần mềm quản lý nhân khẩu:<br/>
B1: git clone dự án về máy<br/>

```bash
$ https://github.com/Ngoccccc/KTPM_QLNK.git
$ cd KTPM_QLNK
```

B2: Tải phần mềm Xampp về máy, cài đặt mysql sau đó có thể khởi động apache và mysql sau đó bật php myAdmin từ màn hình Xampp<br/>
B3: Có thể thêm database có sẵn trong thư mục /server/models/db_query/create.sql  . Có thể chỉnh các config về database trong thư mục /server/models/connectDB<br/>
B4: Sau khi đảm bảo rằng database đã kết nối hoàn tất. Ta tiến hành cài đặt các thư viện cần thiết<br/>
 ```bash
 $ cd client
 $ npm install
 $ cd server
 $ npm install
```

B5: Sau khi đã tải thành công các thư viện cũng lần lượt vào client và server để khởi chạy dự án <br/>

 ```bash
 $ cd client
 $ npm start
 $ cd server
 $ npm start
```

  Như vậy là bạn đã hoàn thiện quá trình cài đặt web quản lý nhân khẩu<br/>
  Nếu như vẫn không được hãy liên hệ:
  <a href="https://www.facebook.com/tienngoc2k2">Facebook Trần Ngọc</a>
