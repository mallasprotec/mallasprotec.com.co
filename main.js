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



const FOOTER = ` <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <a href="index.html" class="logo">
                            <img src="assets/logo.png" style="height: 120px;" alt="logo">
                        </a>
                        <ul class="footer-contact-info">
                            <li><span>Whatsapp:</span> <a href="tel:12855">12855</a></li>
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
                        <li><a href="#" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                        <li><a href="#" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                        <li><a href="#" target="_blank"><i class='bx bxl-whatsapp'></i></a></li>
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