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
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextSeo
                title="Mehul | Software Engineer Intern"
                titleTemplate="Mehul | Software Engineer Intern"
                defaultTitle="Mehul | Software Engineer Intern"
                description="Hey! I'm Mehul, A Software Enginner and a Student!"
                openGraph={{
                    url: "https://mehulrao.dev",
                    title: "Mehul | Software Engineer Intern",
                    description:
                        "Hey! I'm Mehul, A Software Enginner and a Student!",
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
                            "Frontend Developer, mehulrao, Mehul Rao, Web Developer, web development, web developer, tech enthusiast, open source",
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
