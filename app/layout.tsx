import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import "@fontsource/lato/300.css";
import "@fontsource/dm-serif-text";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

export const metadata: Metadata = {
    title: "Superfluid Ecosystem - Hunter's Workshop",
    description: "Tools you can use to interact with Superfluid.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="min-h-screen bg-astryd-mobile md:bg-astryd-desktop bg-cover bg-top-right bg-no-repeat">
                <ThemeProvider attribute="class" defaultTheme="dark">
                    <nav className="p-2">
                        <p className="text-xs text-stone-50 tracking-wide leading-[15.12px] uppercase font-bold">
                            Hunter&apos;s <br /> Workshop
                        </p>
                    </nav>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
