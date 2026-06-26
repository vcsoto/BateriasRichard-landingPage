"use client";
import Header from "@/layout-components/header/header";
import s from "./frontPage.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function FrontPage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function openWhats() {
        const urlResult = "https://bateriasrichard.com";
        window.open(
            `https://wa.me/528441013314?text=${urlResult}%0A%0A¡Hola!%20Me%20interesa%20cotizar%20una%20batería`,
        );
    }

    return (
        <div className="wrapper-front-page">
            <Header />
            <section>
                <div className={`${s.front_page} cmedia`}>
                    <div className={s.container_left}>
                        <span className={s.msi}>
                            CONTAMOS CON MESES SIN INTERESES
                        </span>
                        <p className={s.text_variant_1}>
                            INSTALACIÓN A<br className={s.mobileBreak} />{" "}
                            DOMICILIO {""}
                            <span className={s.text_variant_1}>GRATIS</span>
                        </p>
                        <p className={s.text_variant_2_1}>PAGAS AL RECIBIR</p>

                        <div className={s.container_title}>
                            <h1 className={s.title}>
                                BATERÍAS
                                <br />
                                NUEVAS
                            </h1>
                            <div className={s.container_price}>
                                <p className={s.text_variant_3}>DESDE</p>
                                <div className={s.container_price_child}>
                                    <span
                                        className={s.title_price}
                                        style={{ fontSize: "4rem" }}
                                    >
                                        $
                                    </span>
                                    <span className={s.title_price}>
                                        1,360
                                        <span className={s.type_coin}>mxn</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.container_right}>
                        <Image
                            className={s.aro_yellow}
                            src="/aro_yellow.svg"
                            alt="aro_yellow"
                            width={0}
                            height={0}
                        />
                        <Image
                            className={s.character_3d}
                            src="/character_bt_3d.png"
                            alt="character_3d"
                            width={500}
                            height={500}
                        />
                        <Image
                            className={s.image_lth}
                            src="/lth.png"
                            alt="lth"
                            width={500}
                            height={500}
                        />
                        <Image
                            className={s.image_gonher}
                            src="/gonher.png"
                            alt="gonher"
                            width={500}
                            height={500}
                        />
                        <Image
                            className={s.image_garanty}
                            src="/banner_garanty.svg"
                            alt="banner_garanty"
                            width={500}
                            height={500}
                        />
                        <Image
                            className={s.image_garanty_large}
                            src="/banner_garanty_large.svg"
                            alt="banner_garanty_large"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className={`${s.front_page_line} cmedia`}>
                    <div className={s.line_left}>
                        <p
                            className={s.text_variant_2}
                            style={{ fontSize: "1.6rem" }}
                        >
                            INCLUYE DIAGNÓSTICO&nbsp;
                            <span
                                className={s.addons_yellow}
                                style={{ fontSize: "1.6rem" }}
                            >
                                GRATIS
                            </span>
                        </p>
                    </div>
                    <div className={s.line_right}>
                        <p
                            className={s.text_variant_2}
                            style={{ fontSize: "1.2rem" }}
                        >
                            BATERÍAS PARA TODO TIPO DE VEHÍCULO
                        </p>
                        <div className={s.container_features}>
                            <span className={s.features}>
                                <Image
                                    className={s.image_feature}
                                    src="/motorcycle-cross-moto-bike-svgrepo-com.svg"
                                    alt="motorcycle-cross-moto-bike-svgrepo-com"
                                    width={100}
                                    height={100}
                                />
                                MOTOS
                            </span>
                            <span className={s.features}>
                                <Image
                                    className={s.image_feature}
                                    src="/car-travel-svgrepo-com.svg"
                                    alt="car-travel-svgrepo-com"
                                    width={100}
                                    height={100}
                                />
                                AUTOMÓVILES
                            </span>
                            <span className={s.features}>
                                <Image
                                    className={s.image_feature}
                                    src="/truck-pickup-svgrepo-com.svg"
                                    alt="truck-pickup-svgrepo-com"
                                    width={100}
                                    height={100}
                                />
                                CAMIONETAS
                            </span>
                            <span className={s.features}>
                                <Image
                                    className={s.image_feature}
                                    src="/public-transport-bus-svgrepo-com.svg"
                                    alt="public-transport-bus-svgrepo-com"
                                    width={100}
                                    height={100}
                                />
                                CAMIONES
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className={`end-section end-section-addon-yellow ${
                    visible ? "visible" : ""
                }`}
            >
                <button
                    id="btn-cotizar-whatsapp"
                    className={s.btn_primary}
                    onClick={openWhats}
                >
                    <span className={s.lights}></span>
                    <span className={s.lights}></span>
                    <span className={s.lights}></span>
                    <span className={s.lights}></span>
                    <span className={s.btn_text}>Cotiza aquí tu batería</span>
                </button>
            </section>
        </div>
    );
}
