WEBSITE GIỚI THIỆU QUẢN LÍ THƯ VIỆN - THÊM, TÌM KIẾM, XÓA SÁCH

---

## 🌐 Giới thiệu

Dự án **Web Quản Lý Thư Viện** giúp người dùng:
- Quản lý danh sách sách trong thư viện
- Tìm kiếm sách theo **thể loại**
- Xóa sách có xác nhận  
- Dữ liệu được lưu trữ trên **MongoDB Atlas**

Giao diện đơn giản, trực quan, dễ sử dụng.  
Phù hợp cho sinh viên hoặc học viên muốn học **Node.js, Express và MongoDB**.

---

## 🏗️ Cấu trúc dự án

```plaintext
WEBQLTV/
│
├── client/ # Frontend (HTML/CSS + Java Script)
│ |__ index.html # Trang chính (Thêm, Hiển thị, xóa sách)
| |__ script.js # Logic frontend
│ |__ style.css # Giao diện (CSS)
│ |__ styleTK.css # Giao diện trang tìm kiếm (CSS)
│ |__ TK.js # Logic tìm kiếm frontend
| |__ styleTK.css # Giao diện tìm kiếm (CSS)
│
├── server/ # Backend (Node.js + Express)
│ |__ server.js # File khởi động server
│ |__ routes/ # Định nghĩa route API
│ |__ controller/ # Xử lý logic cho API
│ |__ models/ # Mô hình dữ liệu MongoDB
│ |__ .env # Thông tin kết nối MongoDB
|
└── README.md/ # Tài liệu dự án

---

## ⚙️ Cài đặt và chạy project

### 1️⃣ Clone project
```bash
git clone https://github.com/Nguyen-Dat-03/webQLTV.git
cd webQLTV

2️⃣ Cài đặt dependencies
cd server
npm install

3️⃣ Tạo file .env trong thư mục server/
⚠️ Lưu ý: KHÔNG public file này lên GitHub!
MONGO_URI=mongodb+srv://<tên_user>:<mật_khẩu>@cluster0.mongodb.net/webQLTV
PORT=3000

4️⃣ Chạy server
npm start
Server sẽ chạy tại:
👉 http://localhost:3000/

5️⃣ Chạy giao diện
Mở file client/index.html trực tiếp bằng trình duyệt
hoặc dùng Live Server trong VS Code.

🧩 Các chức năng chính
        Tính năng	                                            Mô tả
➕ Thêm sách	                     Nhập thông tin (tên, tác giả, thể loại) và lưu vào MongoDB
📜 Hiển thị danh sách sách	                Tự động hiển thị tất cả sách đã thêm
🔍 Tìm kiếm theo thể loại	                  Lọc sách theo thể loại nhập vào
❌ Xóa sách	                                Có hộp thoại xác nhận trước khi xóa
☁️ Kết nối MongoDB Atlas	             Dữ liệu lưu trữ trên cloud, an toàn và nhanh

🛠️ Công nghệ sử dụng
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB Atlas
Công cụ hỗ trợ: Visual Studio Code, Git, GitHub

🧠 Kinh nghiệm đạt được
Hiểu và áp dụng mô hình RESTful API
Sử dụng Express Router và Controller Pattern
Kết nối và thao tác dữ liệu bằng Mongoose
Quản lý project với Git & GitHub
Triển khai frontend/backend rõ ràng, tách biệt

🧑‍💻 Tác giả
Nguyễn Đạt
📅 Phiên bản đầu tiên: Tháng 10 / 2025
- Link xem dữ liệu dã nhập vào: https://cloud.mongodb.com/v2/68e5e3b59e41a210c8dfa81e#/metrics/replicaSet/68e5e5de1a1aef050ef47a72/explorer/QLTV/books/find
- Link xem các dự án khác: https://github.com/Nguyen-Dat-03/webQLTV.git

💬 Liên hệ
Nếu bạn muốn đóng góp hoặc báo lỗi, vui lòng tạo Issue hoặc Pull Request tại:
👉 https://github.com/Nguyen-Dat-03/webQLTV