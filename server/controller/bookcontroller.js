import Book from "../models/bookmodel.js";

// Lấy tất cả sách
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server" });
  }
};

// Thêm sách mới
export const addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: "Thêm sách thất bại" });
  }
};

// Xóa sách
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa sách" });
  } catch (error) {
    res.status(500).json({ message: "Xóa thất bại" });
  }
};

// Tìm sách theo thể loại (dành cho /search/genre)
export const getBooksByGenre = async (req, res) => {
  try {
    const { genre } = req.query;
    const books = await Book.find({ genre: { $regex: genre, $options: "i" } });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi tìm sách theo thể loại" });
  }
};
