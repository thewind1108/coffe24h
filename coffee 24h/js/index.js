document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("#menu-button");
    const menuPopup = document.querySelector(".menu-popup");
    let isMenuOpen = false; // Biến theo dõi trạng thái của menu

    // Hiển thị popup và giữ màu khi hover vào "Thực Đơn"
    menuButton.addEventListener("mouseenter", () => {
        if (!isMenuOpen) {
            menuPopup.style.display = "block";
            menuButton.classList.add("active"); // Giữ màu khi hover
        }
    });

    // Giữ popup hiển thị khi hover vào chính popup
    menuPopup.addEventListener("mouseenter", () => {
        menuPopup.style.display = "block";
    });

    // Khi chuột rời khỏi popup và menuButton, ẩn popup và bỏ màu
    menuButton.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!menuPopup.matches(":hover")) {
                menuPopup.style.display = "none";
                menuButton.classList.remove("active");
                isMenuOpen = false; // Đánh dấu menu đã bị đóng
            }
        }, 200);
    });

    // Giữ popup hiển thị khi hover vào menuButton và ẩn khi chuột rời khỏi menu
    menuPopup.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!menuButton.matches(":hover")) {
                menuPopup.style.display = "none";
                menuButton.classList.remove("active");
                isMenuOpen = false; // Đánh dấu menu đã bị đóng
            }
        }, 200);
    });

    // Thêm sự kiện click ra ngoài để ẩn menu
    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !menuPopup.contains(event.target)) {
            menuPopup.style.display = "none";
            menuButton.classList.remove("active");
            isMenuOpen = false; // Đánh dấu menu đã bị đóng
        }
    });
});