import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import "@fontsource/lato/300.css";
import "@fontsource/dm-serif-text";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Superfluid Ecosystem - Hunters Workshop",
    description: "Tools you can use to interact with Superfluid.",
    metadataBase: new URL("https://superfluid-ecosystem.vercel.app"), // TODO: Change for prod
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-astryd-mobile md:bg-astryd-desktop bg-cover bg-top-right md:bg-center bg-no-repeat">
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <nav className="p-6 lg:p-12 flex space-x-2 lg:space-x-3 items-center">
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
                    </nav>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
