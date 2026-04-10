document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const after = document.getElementById('after');
    const conc = document.getElementById('conc');

    // Kiểm tra xem các phần tử có tồn tại không để tránh lỗi console
    if (!slider || !after || !conc) return;

    let isDragging = false;

    const startDrag = () => {
        isDragging = true;
    };

    const stopDrag = () => {
        isDragging = false;
    };

    const onMove = (e) => {
        if (!isDragging) return;

        // Lấy tọa độ X từ chuột hoặc cảm ứng (touch)
        let x = (e.pageX || (e.touches && e.touches[0].pageX));
        
        const rect = conc.getBoundingClientRect();
        
        // Tính toán vị trí chuột dựa trên vị trí của container (conc)
        let offsetX = x - rect.left;
        let percent = (offsetX / rect.width) * 100;

        // Giới hạn trong khoảng 0% đến 100%
        percent = Math.max(0, Math.min(100, percent));

        // Cập nhật giao diện
        slider.style.left = percent + '%';
        // Clip-path cho ảnh "after" (phần bên trái sẽ hiện ra)
        after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    };

    // Sự kiện chuột
    slider.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mousemove', onMove);

    // Sự kiện cảm ứng (cho điện thoại)
    slider.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', stopDrag);
    window.addEventListener('touchmove', onMove);
});
// HUU TEO
// Dữ liệu mẫu cho từng thành viên
const memberData = {
    'member1': {
        name: 'Nguyễn Viết Đạt',
        desc: 'Trùm Toán học của lớp 12A7, chuyên gia giải đề siêu tốc. Tuy vậy nhưng bạn vẫn hơi còn ấy náy và bị mn trong lớp chọc ghẹo nên xin mọi người hãy cư xử đúng mực'
    },
    'member2': {
        name: 'Nguyễn Văn Minh Thuận ',
        desc: 'Với nickname là Thuận 525, cũng như cái tên của anh, cái gì anh làm cũng thuận lợi. Không chỉ có vẻ ngoài điển trai mà còn có trí thông mình và đầu ốc siêu Việt'
    }
};

function openModal(id) {
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modal-body');
    const data = memberData[id];

    if (data) {
        body.innerHTML = `
            <h2 style="color: #ff4d4d; margin-bottom: 15px;">${data.name}</h2>
            <p style="font-size: 1.6rem; line-height: 1.6;">${data.desc}</p>
        `;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Đóng modal khi click ra ngoài vùng nội dung
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeModal();
    }
}
// Video
const video = document.getElementById("myVideo");

video.addEventListener("ended", () => {
  setTimeout(() => {
    video.currentTime = 0; // quay về đầu
    video.play();          // phát lại
  }, 5000); // đợi 5 giây
});