import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import bookRoutes from "./routes/bookroutes.js";

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API route
app.use("/api/books", bookRoutes);

// 📁 Phục vụ file giao diện (frontend)
const clientPath = path.join(__dirname, "../client");
app.use(express.static(clientPath));

// 📄 Trả về index.html khi người dùng truy cập trang bất kỳ (SPA hoặc tĩnh)
app.get("/", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Kết nối MongoDB và khởi động server
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI, { dbName: "QLTV" })
  .then(() => {
    console.log("✅ Kết nối MongoDB thành công");
    app.listen(PORT, () =>
      console.log(`🚀 Server chạy tại: http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));
