import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script id="google-analytics" strategy="lazyOnload">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
            </Script>
            <NextSeo
                title="Mehul | Software Engineer Intern"
                titleTemplate="Mehul | Software Engineer Intern"
                defaultTitle="Mehul | Software Engineer Intern"
                description="Hey! I'm Mehul, A Software Enginner and a Student!"
                openGraph={{
                    url: "https://mehulrao.com",
                    title: "Mehul | Software Engineer Intern",
                    description:
                        "Hey! I'm Mehul, A Software Enginner and a Student!",
                    images: [
                        {
                            url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
                            width: 800,
                            height: 420,
                            alt: "Mehul | Software Engineer Intern",
                        },
                    ],
                }}
                twitter={{
                    handle: "@mehulrao13",
                    site: "@mehulrao13",
                    cardType: "summary_large_image",
                }}
                additionalMetaTags={[
                    {
                        property: "keywords",
                        content:
                            "Frontend Developer, anurag, anuragkr, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
                    },
                ]}
            />
            <Head>
                <link rel="icon" type="image/svg" href="/assests/avatar.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
