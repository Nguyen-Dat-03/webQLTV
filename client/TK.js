const API_URL = "http://localhost:3000/api/books";

const searchBtn = document.getElementById("searchBtn");
const exitBtn = document.getElementById("exitBtn");
const resultTable = document.getElementById("resultTable");

// 🧩 Sự kiện tìm kiếm
searchBtn.addEventListener("click", async () => {
  const genre = document.getElementById("genreSearch").value.trim();

  if (!genre) {
    alert("Vui lòng nhập thể loại!");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/search/genre?genre=${encodeURIComponent(genre)}`);
    const books = await res.json();

    // Xóa bảng cũ
    resultTable.innerHTML = `
      <tr>
        <th>Tên sách</th>
        <th>Tác giả</th>
        <th>Thể loại</th>
        <th>Năm xuất bản</th>
      </tr>
    `;

    if (books.length === 0) {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="4" style="text-align:center;">Không tìm thấy sách nào</td>`;
      resultTable.appendChild(row);
      return;
    }

    books.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
        <td>${book.year}</td>
      `;
      resultTable.appendChild(row);
    });
  } catch (err) {
    console.error("❌ Lỗi khi tìm kiếm:", err);
    alert("Không thể tìm sách. Kiểm tra lại kết nối server.");
  }
});

// 🧩 Sự kiện thoát
exitBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
