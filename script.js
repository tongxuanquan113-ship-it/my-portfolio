
document.addEventListener('DOMContentLoaded', function () {

    console.log('Portfolio đã tải thành công!');

    // Xử lý form liên hệ
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;

            alert('Cảm ơn ' + name +
                  '! Bạn đã gửi lời nhắn thành công.');

            form.reset();
        });
    }

});
