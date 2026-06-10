import "./globals.css";
import Script from "next/script";
import Footer from "@/layout-components/footer/footer";

export const metadata = {
    metadataBase: new URL("https://bateriasrichard.com"),
    title: `Baterías Richard ¡Baterías Nuevas desde $1360 mxn!`,
    description:
        "Venta e instalación de baterías para autos, camionetas, camiones y motos. Diagnóstico gratis, instalación a domicilio gratis, pagas al recibir y garantía de hasta 60 meses.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: `Baterías Richard ¡Baterías Nuevas desde $1360 mxn!`,
        description:
            "Venta e instalación de baterías para autos, camionetas, camiones y motos. Diagnóstico gratis, instalación a domicilio gratis, pagas al recibir y garantía de hasta 60 meses.",
        images: [
            {
                type: "website",
                url: "/portada_v2_baterias_richard.png",
                width: 820,
                height: 360,
                alt: "Baterías Richard",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "AutoPartsStore",
        name: "Baterías Richard",
        url: "https://bateriasrichard.com",
        image: "https://bateriasrichard.com/portada_v2_baterias_richard.png",
        telephone: "+52-844-101-3314",
        description:
            "Venta e instalación de baterías para autos, camionetas, camiones y motos. Diagnóstico gratis, instalación a domicilio gratis, pagas al recibir y garantía de hasta 60 meses.",
        areaServed: "México",
        address: {
            "@type": "PostalAddress",
            streetAddress:
                "Blvd. Los Fundadores 4875, San José de los Cerritos",
            addressLocality: "Saltillo",
            addressRegion: "Coahuila",
            postalCode: " 25294",
            addressCountry: "MX",
        },
    };
    return (
        <html lang="en">
            <head>
                <Script
                    id="schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5B6X4KFN');
          `}
                </Script>

                <Script
                    src="https://kit.fontawesome.com/c4ecc9e304.js"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                    key="fontawesome-kit" // Clave única para evitar recargas
                />
            </head>
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5B6X4KFN"
                        height="0"
                        width="0"
                        style={{
                            display: "none",
                            visibility: "hidden",
                        }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
                <Footer />
            </body>
        </html>
    );
}
