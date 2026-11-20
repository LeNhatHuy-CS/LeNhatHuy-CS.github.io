# Le Nhat Huy - Personal website

Trang cá nhân dựng bằng React + Vite, tự động deploy lên GitHub Pages bằng GitHub Actions.

## Đưa trang lên GitHub Pages

1. Tạo repo **public** mới trên GitHub với tên chính xác là `LeNhatHuy-CS.github.io`.
2. Đẩy toàn bộ nội dung thư mục này lên nhánh `main`:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/LeNhatHuy-CS/LeNhatHuy-CS.github.io.git
   git push -u origin main
   ```

   Nếu kéo thả file lên web, nhớ kéo cả thư mục ẩn `.github` (macOS Finder ẩn thư mục này, nhấn `Cmd + Shift + .` để hiện).
3. Vào **Settings → Pages**, ở mục **Source** chọn **GitHub Actions**.
4. Vào tab **Actions**, chờ workflow "Deploy to GitHub Pages" chạy xong (khoảng 1-2 phút).
5. Mở https://lenhathuy-cs.github.io

Từ lần sau, mỗi lần `git push` lên `main` thì trang tự cập nhật.

## Chỉnh nội dung

Gần như mọi chữ trên trang nằm trong **`src/data.js`**: giới thiệu, dự án, kỹ năng, kinh nghiệm, liên hệ.

| Muốn làm gì | Sửa ở đâu |
| --- | --- |
| Thêm link LinkedIn | `links.linkedin` trong `src/data.js` |
| Hiện nút CV | Bỏ file vào `public/cv.pdf`, rồi đặt `cvUrl: '/cv.pdf'` trong `src/data.js` |
| Thêm, sửa, xóa dự án | mảng `projects` trong `src/data.js` |
| Thêm mô tả cho MindX | `points` của mục MindX trong `experience` |
| Đổi ảnh đại diện | Thay `public/avatar.jpg` (tỉ lệ 4:5 là đẹp nhất) |
| Đổi màu chủ đạo, font | khối `:root` ở đầu `src/styles.css` và thẻ font trong `index.html` |

## Chạy trên máy (tuỳ chọn)

Cần Node 20.19+ hoặc 22.12+.

```bash
npm install
npm run dev      # xem thử tại http://localhost:5173
npm run build    # build ra thư mục dist
```
