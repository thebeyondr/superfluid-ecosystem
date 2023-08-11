import ActionItem, { ActionItemProps } from "@/components/ActionItem";
import SuperfluidCheckout from "@/components/superfluid-checkout/SuperfluidCheckout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const actionItems: ActionItemProps[] = [
        {
            title: "Wrap token",
            description:
                "Wrap an existing ERC20 into a supertoken with Superfluid",
            link: "https://deploy-supertoken-deployment.vercel.app/",
            graphic: "wrap-st.png",
            icon: "",
            id: "wrap",
        },
        {
            title: "Spawn pure token",
            description: "Start a supertoken from scratch on Superfluid",
            link: "https://supertoken-wizard.huntersworkshop.xyz/",
            graphic: "new-st.png",
            icon: "",
            id: "spawn",
        },
    ];
    return (
        <main className="min-h-full">
            <div className="bg-stone-800/80 backdrop-blur-sm px-3 py-4 flex flex-col space-y-2 absolute bottom-0 h-max rounded-t-lg">
                <h1 className="text-stone-50 text-4xl font-normal">Astryd</h1>
                <p className="text-sm text-stone-50/70 font-medium">
                    Supertoken Merchant
                </p>
                <blockquote className="text-sm text-stone-50 font-medium">
                    “Hey there, looking to make a supertoken or give us a
                    donation to fund the workshop’s efforts?”
                </blockquote>
                {actionItems.map((item) => (
                    <ActionItem key={item.id} {...item} />
                ))}
                <SuperfluidCheckout />
            </div>
        </main>
    );
}
