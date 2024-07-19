window.onload=function(){
    const menuBtn = document.querySelector('.menu-btn');
    const btn = document.getElementById('menuBtn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            $('.menu-btn').addClass('open');
            $('.mobile-nav').addClass('null');
            setTimeout(() => {
            $('.mobile-nav').addClass('show');
            }, 200)
            menuOpen = true;
        } else {
            $('.menu-btn').removeClass('open');
            $('.mobile-nav').removeClass('show');
            setTimeout(() => {
            $('.mobile-nav').removeClass('null');
            }, 500);
            menuOpen = false;
        }
    });
}

function kontak() {
    Swal.fire({
        title: 'Kontak Kami',
        html: `
        <p>MPK SMAN 16 Surabaya</p>                    
        <div class="line"></div>
        <div class="hub-line"><i class="fa-light fa-envelope logo-hub"></i><a href="mailto:mpksman16@gmail.com" style="text-decoration: none;color:inherit;">mpksman16@gmail.com</a></div>
        <div class="hub-line"><i class="fa-brands fa-instagram logo-hub"></i><a>mpksman16sby</a></div>
        <div class="hub-line"><i class="fa-brands fa-tiktok logo-hub brands"></i><a>mpksman16sby</a></div>
    
        `,
        showCloseButton: true,
    });
}