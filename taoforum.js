// Chờ cho toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {

    console.log('Trang Tạo nhóm đã tải xong!');

    // --- Lấy các phần tử cần tương tác ---
    
    // Từ form bên trái
    const form = document.getElementById('create_forum_form');
    const forumNameInput = document.getElementById('forum_name');
    const imageUploadInput = document.getElementById('forum_image_upload');
    
    // Từ khung xem trước bên phải
    const previewNameTarget = document.getElementById('preview_name_target');
    const previewImageTarget = document.getElementById('preview_image_target');
    const previewPlaceholderText = document.getElementById('preview_placeholder_text');

    
    // --- Thêm các trình lắng nghe sự kiện ---

    // 1. Cập nhật TÊN FORUM khi người dùng gõ
    forumNameInput.addEventListener('input', () => {
        // Lấy giá trị từ ô input
        const newName = forumNameInput.value;
        
        // Cập nhật text xem trước
        // Nếu ô input rỗng, quay lại text mặc định "Tên forum"
        if (newName) {
            previewNameTarget.textContent = newName;
        } else {
            previewNameTarget.textContent = 'Tên forum';
        }
    });

    // 2. Cập nhật ẢNH NỀN khi người dùng chọn file
    imageUploadInput.addEventListener('change', (event) => {
        // Lấy file đầu tiên người dùng chọn
        const file = event.target.files[0];

        if (file) {
            // Tạo một đối tượng FileReader để đọc file
            const reader = new FileReader();
            
            // Định nghĩa việc cần làm khi đọc file xong
            reader.onload = (e) => {
                // Đặt nguồn (src) của thẻ <img> xem trước bằng dữ liệu file
                previewImageTarget.src = e.target.result;
                // Hiển thị thẻ <img>
                previewImageTarget.style.display = 'block';
                // Ẩn chữ "ảnh" đi
                previewPlaceholderText.style.display = 'none';
            };
            
            // Bắt đầu đọc file (biến nó thành một URL base64)
            reader.readAsDataURL(file);
        }
    });

    // 3. Xử lý khi bấm nút "Tạo"
    form.addEventListener('submit', (event) => {
        // Ngăn form gửi đi và tải lại trang
        event.preventDefault(); 
        
        // Bạn có thể thêm logic gửi dữ liệu lên server ở đây
        alert('Đã tạo nhóm thành công.');
    });

});
