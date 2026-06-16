"use client";
import s from "./header.module.css";
import Image from "next/image";

export default function Header() {
    function openWhatsShared() {
        const urlResult = "https://bateriasrichard.com";
        window.open(`https://wa.me/?text=${urlResult}`);
    }
    return (
        <header>
            <div className="cmedia">
                <Image
                    className={s.logo}
                    src="/logotipo_baterias_richard.png"
                    alt="Batería Richard"
                    width={800}
                    height={600}
                />
                <button
                    id="btn-shared"
                    className="btn-type-1"
                    onClick={openWhatsShared}
                >
                    <i className="fa-solid fa-share"></i> compartir
                </button>
            </div>
        </header>
    );
}
