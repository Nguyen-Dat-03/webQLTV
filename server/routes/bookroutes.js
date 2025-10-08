import express from "express";
import {
  getAllBooks,
  addBook,
  deleteBook,
  getBooksByGenre
} from "../controller/bookcontroller.js";
import Book from "../models/bookmodel.js"; // ✅ Cần import model để dùng Book.find()

const router = express.Router();

// 📚 Lấy tất cả sách hoặc lọc theo thể loại (nếu có ?genre=)
router.get("/", async (req, res) => {
  try {
    const { genre } = req.query;

    let filter = {};

    // Nếu có genre, lọc chính xác (không phải "chứa")
    if (genre && genre.trim() !== "") {
      filter.genre = { $regex: new RegExp(`^${genre.trim()}$`, "i") };
    }

    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    console.error("❌ Lỗi khi lấy danh sách sách:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
});


// ➕ Thêm sách mới
router.post("/", addBook);

// ❌ Xóa sách theo ID
router.delete("/:id", deleteBook);

// 🔍 Route riêng: tìm sách theo thể loại
router.get("/search/genre", getBooksByGenre);

export default router;
