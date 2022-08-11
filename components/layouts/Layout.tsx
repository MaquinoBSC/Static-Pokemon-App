import { FC, PropsWithChildren } from "react";
import Head from "next/head";

interface Props {
    children: JSX.Element;
    title?: string;
}

export const Layout: FC <Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || "Pokemon App" }</title>
                <meta name="author" content="Maquino Hernandez" />
                <meta name="description" content={ `Información sobre algun pokemon ${title}`} />
                <meta name="keywords" content={ `${title}, pokemon, pokedex` } />
            </Head>

            {/* Navbar */}
            <main>
                { children }
            </main>
        </>
    )
};