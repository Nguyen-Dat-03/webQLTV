const API_URL = "http://localhost:3000/api/books";

const addBtn = document.getElementById("addBtn");
const searchPageBtn = document.getElementById("searchPageBtn");
const bookTable = document.getElementById("bookTable");

// 🧩 Lấy danh sách sách khi load trang
window.onload = fetchBooks;

// 🧱 Thêm sách mới
addBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const genre = document.getElementById("genre").value.trim();
  const year = document.getElementById("year").value.trim();

  if (!title || !author || !genre || !year) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, genre, year }),
    });

    if (res.ok) {
      alert("✅ Thêm sách thành công!");
      fetchBooks(); // cập nhật danh sách
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("genre").value = "";
      document.getElementById("year").value = "";
    } else {
      alert("❌ Lỗi khi thêm sách!");
    }
  } catch (err) {
    console.error(err);
    alert("Không thể kết nối đến server.");
  }
});

// 🧭 Chuyển đến trang tìm kiếm
searchPageBtn.addEventListener("click", () => {
  window.location.href = "TK.html";
});

// 📘 Lấy danh sách sách
async function fetchBooks() {
  try {
    const res = await fetch(API_URL);
    const books = await res.json();

    // Xóa bảng cũ (chỉ giữ hàng tiêu đề)
    bookTable.innerHTML = `
      <tr>
        <th>Tên sách</th>
        <th>Tác giả</th>
        <th>Thể loại</th>
        <th>Năm xuất bản</th>
        <th>Hành động</th>
      </tr>
    `;

    books.forEach((book) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.year}</td>
        <td><button class="delete-btn" data-id="${book._id}">Xóa</button></td>
      `;
      bookTable.appendChild(row);
    });

    // Gắn sự kiện xóa cho các nút
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", handleDelete);
    });
  } catch (err) {
    console.error("❌ Lỗi khi lấy sách:", err);
  }
}

// ❌ Xử lý xóa sách
async function handleDelete(e) {
  const id = e.target.getAttribute("data-id");
  const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sách này không?");

  if (!confirmDelete) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("✅ Đã xóa sách!");
      fetchBooks(); // Cập nhật lại danh sách
    } else {
      alert("❌ Không thể xóa sách!");
    }
  } catch (err) {
    console.error("Lỗi khi xóa:", err);
  }
}
