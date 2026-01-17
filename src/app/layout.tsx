import {HeaderComponent} from "@/components/Header/HeaderComponent";
import {FooterComponent} from "@/components/Footer/FooterComponent";
import "./globals.css";
import GenreContextProvider from "@/components/Client/GenreContextProvider";

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite + React + TS</title>
            </head>
            <body>

            <GenreContextProvider>
                <HeaderComponent/>
                <main>{children}</main>
            </GenreContextProvider>
            <FooterComponent/>

            </body>
            </html>
        </>
    );
};