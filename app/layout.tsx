import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import "@fontsource/lato/300.css";
import "@fontsource/dm-serif-text";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    metadataBase: siteConfig.url,
    openGraph: {
        title: siteConfig.title,
        siteName: siteConfig.title,
        description: siteConfig.description,
        locale: "en_US",
        type: "website",
        url: siteConfig.url,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="h-screen flex flex-col bg-astryd-mobile md:bg-astryd-desktop bg-cover bg-top-right md:bg-center bg-no-repeat">
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <div className="h-screen flex flex-col overflow-hidden">
                        <header className="p-6 lg:p-12 flex space-x-2 lg:space-x-3 items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 relative">
                                <Image
                                    src={"/assets/graphics/hw-logo-white.svg"}
                                    alt="Hunters Workshop Logo"
                                    fill
                                />
                            </div>
                            <p className="text-xs lg:text-sm text-stone-50 tracking-wider leading-[15.12px] lg:leading-tight uppercase font-bold">
                                Hunter&apos;s <br /> Workshop
                            </p>
                        </header>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
