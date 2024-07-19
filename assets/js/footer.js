const footerElement = document.createElement('footer');
footerElement.innerHTML = `
    <div style="background-image: url(assets/img/fot-background.png); background-size: cover; background-repeat: no-repeat;">
        <div class="information">
            <div class="web-mpk">
                <div class="logo-footer">
                    <img src="assets/img/logo.png">
                    <p>MPK SMAN 16 Surabaya</p>
                </div>
                <a>Halaman ini merupakan situs resmi milik MPK SMA Negeri 16 Surabaya</a>
            </div>
            <div class="lokasi-mpk">
                <p>Lokasi</p>
                <div class="line"></div>
                <a>Jl. Raya Prapen No.59, Panjang Jiwo, Kec. Tenggilis Mejoyo, Kota SBY, Jawa Timur 60299</a>
            </div>
            <div class="hub-mpk">
                <p>Hubungi Kami</p>
                <div class="line"></div>
                <div class="hub-line"><i class="fa-light fa-envelope logo-hub"></i><a href="mailto:mpksman16@gmail.com" style="text-decoration: none;color:inherit;">mpksman16@gmail.com</a></div>
                <div class="hub-line"><i class="fa-brands fa-instagram logo-hub"></i><a>mpksman16sby</a></div>
                <div class="hub-line"><i class="fa-brands fa-tiktok logo-hub brands"></i><a>mpksman16sby</a></div>
            </div>
        </div>
        <div class="hak-cipta">
            <div class="line"></div>
            <a>Hak Milik <i class="fa-regular fa-copyright"></i> MPK SMAN 16 Surabaya 2023/2024 All Rights Reserved.</a>
        </div>
    </div>
    <!-- Develop by MPK SMAN 16 Surabaya X Rii-Project -->
    <!-- Rii-Project Github: https://github.com/NekoFathari -->
    `;

document.body.appendChild(footerElement);