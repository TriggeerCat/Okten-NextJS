'use client'

import {HeaderComponent} from "@/components/Header/HeaderComponent";
import {FooterComponent} from "@/components/Footer/FooterComponent";
import {GenreContext} from "@/context/GenreContext";
import {useCallback, useState} from "react";
import "./globals.css";

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    const [genreFilter, setGenreFilter] = useState<number[]>([])

    return (
        <>
            <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Vite + React + TS</title>
            </head>
            <body>

            <GenreContext.Provider value={{
                genres: genreFilter,
                clickGenre: useCallback((genre: number) => {
                    const newGenres = [...genreFilter];
                    const index = newGenres.indexOf(genre);
                    if (index === -1) {
                        newGenres.push(genre);
                    } else newGenres.splice(newGenres.indexOf(genre), 1);
                    setGenreFilter(newGenres);
                }, [genreFilter]),
                clearAllGenres: useCallback(() => {
                    setGenreFilter([]);
                }, [])
            }}>
                <HeaderComponent/>
                <main>{children}</main>
            </GenreContext.Provider>
            <FooterComponent/>

            </body>
            </html>
        </>
    );
};