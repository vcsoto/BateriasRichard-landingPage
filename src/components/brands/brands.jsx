"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import s from "./brands.module.css";

export default function Brands() {
    const brands = [
        "/brands-1.svg",
        "/brands-2.svg",
        "/brands-3.svg",
        "/brands-4.svg",
        "/brands-5.svg",
        "/brands-6.svg",
        "/brands-7.svg",
        "/brands-8.svg",
        "/brands-9.png",
    ];

    return (
        <>
            <section className={`${s.bg_dark_blue} allcont`}>
                <h2 className={s.title_brands}>MANEJAMOS TODAS LAS MARCAS </h2>
            </section>
            <section className={`allcont`} style={{ paddingTop: "45px" }}>
                <div className={s.brands}>
                    <div className={s.track}>
                        {/* Primera copia */}
                        {brands.map((brand, index) => (
                            <img
                                key={`a-${index}`}
                                src={brand}
                                alt=""
                                className={s.img_brands}
                            />
                        ))}

                        {/* Segunda copia para crear el loop */}
                        {brands.map((brand, index) => (
                            <img
                                key={`b-${index}`}
                                src={brand}
                                alt=""
                                className={s.img_brands}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
