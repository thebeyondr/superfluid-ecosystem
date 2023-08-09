import Link from "next/link";

export default function Home() {
    const links = {
        toDeployer: "https://deploy-supertoken-deployment.vercel.app/",
        toWizard: "https://supertoken-wizard.huntersworkshop.xyz/",
    };
    return (
        <main className="flex min-h-full flex-col items-center justify-between p-6 lg:p-24 space-y-2">
            <h1 className="text-stone-50 text-[40px] font-normal">Astryd</h1>
            <p className="text-sm text-stone-50/60 font-medium">
                Supertoken Merchant
            </p>
            <Link
                href={links.toDeployer}
                target={"_blank"}
                className="p-6 flex flex-col items-center justify-center w-full bg-stone-800 hover:bg-stone-600 transition"
            >
                Wrap token
            </Link>
            <Link
                href={links.toWizard}
                target={"_blank"}
                className="p-6 flex flex-col items-center justify-center w-full bg-stone-800 hover:bg-stone-600 transition"
            >
                Spawn pure token
            </Link>
            <div className="p-6 flex flex-col items-center justify-center w-full bg-stone-800 hover:bg-stone-600 transition">
                Donate
            </div>
        </main>
    );
}
