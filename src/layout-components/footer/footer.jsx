"use client";
import Link from "next/link";
export default function Footer() {
    return (
        <footer>
            <div className="cmedia">
                <div className="column-1">
                    <img src="/logotipo_baterias_richard_white.svg" alt="" />
                </div>
                <div className="container-columns">
                    <div className="column-2">
                        <div className="container-column">
                            <div className="container-title">
                                <p className="title">
                                    <span className="title-menu">
                                        Sucursal Saltillo Matriz
                                    </span>
                                </p>
                                <a
                                    className="networks-pc"
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=61568204606393"
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a
                                    className="networks-pc"
                                    target="_blank"
                                    href="https://www.instagram.com/bateriasrichard/"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                            <p>
                                Blvd. Los Fundadores{" "}
                                <span className="number">#4875</span>, San José
                                de los Cerritos, Saltillo Coahuila
                            </p>
                            <p>
                                <span className="number">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    &nbsp;&nbsp;844 101 33 14
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="number">
                                    <i className="fa-solid fa-phone"></i>
                                    &nbsp;&nbsp;844 541 7454
                                </span>
                            </p>
                        </div>
                        <div className="container-networks">
                            <a
                                className="networks-sm"
                                target="_blank"
                                href="https://www.facebook.com/profile.php?id=61568204606393"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a
                                className="networks-sm"
                                target="_blank"
                                href="https://www.instagram.com/bateriasrichard/"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="container-column">
                            <div className="container-title">
                                <p className="title">
                                    <span className="title-menu">
                                        Sucursal Ramos Arizpe
                                    </span>
                                </p>
                                <a
                                    className="networks-pc"
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=61588508066951"
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </div>
                            <p>
                                Blvd. Plan de Guadalupe{" "}
                                <span className="number">#650</span>, Zona
                                Centro Plaza San Nicolás, Ramos Arizpe Coahuila
                            </p>
                            <p>
                                <span className="number">
                                    <i className="fa-brands fa-whatsapp"></i>
                                    &nbsp;&nbsp;844 206 6871
                                </span>
                            </p>
                        </div>
                        <div className="container-networks">
                            <a
                                className="networks-sm"
                                style={{ transform: "translateX(-16px)" }}
                                target="_blank"
                                href="https://www.facebook.com/profile.php?id=61588508066951"
                            >
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row-bottom">
                    {/*
                    <a href="" className="faqs">
                        Aviso de privacidad
                    </a>*/}
                    <span>
                        © 2026 Baterías Richard. Desarrollado por{" "}
                        <a
                            href="https://azteckweb.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="supplier"
                        >
                            Azteckweb
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
