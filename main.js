const DATA = {
    SOCIAL: {
        facebook: "https://www.facebook.com/share/1CMosqDC1M/",
        instagram: "https://www.instagram.com/mallasprotec",
        whatsapp: "https://wa.me/+573224463357",
    },
    EMAIL: "",
    PHONE: "",
    ADDRESS: "",
    WEBSITE: "",
}



const FOOTER = ` <div class="fat-btn">
        <a href="${DATA.SOCIAL.whatsapp}" target="_blank" class="box-btn">
            <span class="svgContainer">
                <svg viewBox="0 0 16 16" height="2.5em" class="svgIcon" fill="white">
                    <path
                        d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
                    </path>
                </svg>
            </span>
            <span class="BG"></span>
        </a>

    </div><footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <a href="index.html" class="logo">
                            <img src="assets/logo.png" style="height: 120px;" alt="logo">
                        </a>
                        <ul class="footer-contact-info">
                            <li><span>Whatsapp:</span> <a href="tel:${DATA.SOCIAL.whatsapp}">322 446 3357</a></li>
                            <li><span>Email:</span> <a href="mailto:info@mallasprotec"><span
                                        class="__cf_email__">info@mallasprotec</span></a>
                            </li>
                            <li><span>Dirección:</span> Bogotá, Colombia</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-4">
                        <h3></h3>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">

                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Páginas</h3>
                        <ul class="custom-links">
                            <li><a href="index.html">Inicio</a></li>
                            <li><a href="about.html">Sobre Nosotros</a></li>
                            <li><a href="services.html">Servicios</a></li> 
                            <li><a href="contact.html">Contacto</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <p>©Copyright MALLAS PROTEC Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>`

const HEADER = `<div class="top-header-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <p>Bienvenido a Mallas Protec</p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <ul>
                        <li><a href="${DATA.SOCIAL.facebook}" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                        <li><a href="${DATA.SOCIAL.instagram}" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                        <li><a href="${DATA.SOCIAL.whatsapp}" target="_blank"><i class='bx bxl-whatsapp'></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class="navbar-area">
        <div class="patoi-responsive-nav">
            <div class="container">
                <div class="patoi-responsive-menu">
                    <div class="logo">
                        <a href="index.html"><img src="assets/logo.png"
                                style="background-color: black; border-radius: 25px; width: 80px; object-fit: contain;"
                                alt="logo"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="patoi-nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="index.html"><img
                            style="background-color: black; border-radius: 25px; width: 80px; object-fit: contain;"
                            src="assets/logo.png" alt="logo"></a>
                    <div class="collapse navbar-collapse mean-menu">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link">Sobre nosotros</a></li>
                            <li class="nav-item"><a href="services.html" class="nav-link">Servicios</a></li>
                            <li class="nav-item"><a href="contact.html" class="nav-link">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div class="others-option-for-responsive">
            <div class="container">
                <div class="container">
                    <div class="option-inner">
                        <div class="others-option">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`


    document.querySelector(".header").innerHTML = HEADER;
    document.querySelector(".footer").innerHTML = FOOTER;