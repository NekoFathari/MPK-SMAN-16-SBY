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

const navbarElement = document.createElement('nav');
navbarElement.className = 'nav-mpk';
navbarElement.innerHTML = `
    <div class="nav-bar">
        <div class="logo">
            <img src="assets/img/logo.png" alt="Logo MPK SMAN 16 Surabaya">
            <p>MPK SMAN 16 Surabaya</p>
        </div>
        <div class="navbar-middle">
                <ul class="navbar-pc" style="margin: 0 !important;">
                    <li><a href="">Beranda</a></li>
                    <li><a href="#">Tentang Kami</a></li>
                    <li><a href="#">Program</a></li>
                    <li><a href="#">Struktur</a></li>
                    <li><a href="#">Asix</a></li>
                    <li><a onclick="kontak(); return false;">Kontak</a></li>
                </ul>
            <div class="navbar-mobile">
                <button class="menu-btn" id="menuBtn">
                    <div class="menu-btn__burger"></div>
                </button>
            </div>
        </div>
    </div>
    <div class="under-nav">
        <nav class="mobile-nav">
            <div class="icon-nav-mobile">
                <div class="drop-container"  onclick="window.location.href = '';">
                <div class="navbar-drop">
                    <i class="fa-duotone fa-home" style="--fa-primary-color: #d4ac67; --fa-secondary-color: #d4ac67;"></i>
                    <a>Beranda</a>
                </div>
                <div class="arrow-next-button">
                    <i class="fas fa-chevron-circle-right" style="color: #015958;"></i>
                </div>
                </div>
            </div>
            <div class="icon-nav-mobile">
                <div class="drop-container"  onclick="window.location.href = '#';">
                <div class="navbar-drop">
                    <i class="fa-duotone fa-users" style="--fa-primary-color: #1167b1; --fa-secondary-color: #1167b1;"></i>
                    <a>Tentang Kami</a>
                </div>
                <div class="arrow-next-button">
                    <i class="fas fa-chevron-circle-right" style="color: #015958;"></i>
                </div>
                </div>
            </div>
            <div class="icon-nav-mobile" id="layananBtn">
                <div class="drop-container"  onclick="window.location.href = '#';">
                <div class="navbar-drop">
                    <i class="fa-duotone fa-lightbulb-gear" style="--fa-primary-color: #b27d53; --fa-secondary-color: #b27d53;"></i>
                    <a>Program</a>
                </div>
                <div class="arrow-next-button">
                    <i class="fas fa-chevron-circle-right" style="color: #015958;"></i>
                </div>
                </div>
            </div>
            <div class="icon-nav-mobile">
                <div class="drop-container"  onclick="window.location.href = '#';">
                <div class="navbar-drop">
                    <i class="fa-duotone fa-sitemap" style="--fa-primary-color: #d4ac67; --fa-secondary-color: #d4ac67;"></i>
                    <a>Struktur</a>
                </div>
                <div class="arrow-next-button">
                    <i class="fas fa-chevron-circle-right" style="color: #015958;"></i>
                </div>
                </div>
            </div>
            <div class="icon-nav-mobile">
                <div class="drop-container"  onclick="window.location.href = '#';">
                <div class="navbar-drop">
                    <i class="fa-duotone fa-phone" style="--fa-primary-color: #1167b1; --fa-secondary-color: #1167b1;"></i>
                    <a>Asix</a>
                </div>
                <div class="arrow-next-button">
                    <i class="fas fa-chevron-circle-right" style="color: #015958;"></i>
                </div>
                </div>       
            </div>
            <div class="icon-nav-mobile">
                <div class="drop-container"  onclick="window.location.href = '#';">
                <div class="navbar-drop">
                    <i class="fa-duotone fa-phone" style="--fa-primary-color: #1167b1; --fa-secondary-color: #1167b1;"></i>
                    <a>Kontak</a>
                </div>
                <div class="arrow-next-button">
                    <i class="fas fa-chevron-circle-right" style="color: #015958;"></i>
                </div>
                </div>       
            </div>
            </nav>
    </div>
`;



// Add event listener to the menu button


// Append the navbar element to the document body or any other desired element
document.body.appendChild(navbarElement);

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