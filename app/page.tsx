import ActionItem, { ActionItemProps } from "@/components/ActionItem";
import SuperfluidCheckout from "@/components/superfluid-checkout/SuperfluidCheckout";
import * as motion from "@/lib/motion";

export default function Home() {
    const actionItems: ActionItemProps[] = [
        {
            title: "Wrap token",
            description: "Wrap an existing ERC20 into a supertoken.",
            link: "https://deploy-supertoken-deployment.vercel.app/",
            graphic: "wrap-st.png",
            id: "wrap",
        },
        {
            title: "Spawn pure token",
            description: "Start a supertoken from scratch.",
            link: "https://supertoken-wizard.huntersworkshop.xyz/",
            graphic: "new-st.png",
            id: "spawn",
        },
    ];
    return (
        <main className="min-h-full lg:flex lg:justify-end lg:pr-20 lg:pt-20 xl:pr-52 xl:pt-40">
            <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.4,
                        duration: 1.2,
                        ease: "easeOut",
                    },
                }}
                className="bg-stone-900/70 backdrop-blur-md px-3 lg:px-4 py-4 flex flex-col space-y-2 md:space-y-3 absolute bottom-0 lg:relative h-max rounded-t-lg lg:rounded-b-lg w-full lg:w-[438px]"
            >
                <h1 className="text-stone-50 text-4xl font-normal">Astryd</h1>
                <p className="text-xs text-stone-50/80 font-medium uppercase tracking-wider">
                    Superfluid Token Merchant
                </p>
                <blockquote className="text-sm text-stone-50 font-medium">
                    “Hey there, looking to make a supertoken or give us a
                    donation to fund the workshop’s efforts?”
                </blockquote>
                <div className="p-1"></div>
                {actionItems.map((item) => (
                    <ActionItem key={item.id} {...item} />
                ))}
                <SuperfluidCheckout />
            </motion.div>
        </main>
    );
}
