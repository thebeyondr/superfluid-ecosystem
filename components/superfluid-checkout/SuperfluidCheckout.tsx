"use client";
import data from "./widget.json";
import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { useWeb3Modal, Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import SuperfluidWidget, {
    EventListeners,
    supportedNetworks,
} from "@superfluid-finance/widget";
import superTokenList from "@superfluid-finance/tokenlist";
import { useMemo } from "react";
import ActionItem, { ActionItemProps } from "../ActionItem";
import { siteConfig } from "@/config/site";

const projectId = siteConfig.walletConnectProjectId;
const { publicClient } = configureChains(supportedNetworks, [
    w3mProvider({ projectId }),
]);
const wagmiConfig = createConfig({
    autoConnect: false,
    connectors: w3mConnectors({
        projectId,
        chains: supportedNetworks,
    }),
    publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, supportedNetworks);

const SuperfluidCheckout = () => {
    const { open, isOpen } = useWeb3Modal();

    const walletManager = useMemo(
        () => ({
            open,
            isOpen,
        }),
        [open, isOpen]
    );

    const eventListeners: EventListeners = useMemo(
        () => ({
            onSuccess: () => console.log("success!"),
            onSuccessButtonClick: () =>
                console.log("button clicked successfully!"),
        }),
        []
    );

    const donateInfo: ActionItemProps = {
        title: "Donate to us",
        description: "Support Hunters Workshop in making more tools",
        graphic: "hw-logo.svg",
        id: "donate",
    };

    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <SuperfluidWidget
                    {...data}
                    paymentDetails={{
                        paymentOptions: [
                            {
                                receiverAddress:
                                    "0xf26ce9749f29e61c25d0333bce2301cb2dfd3a22",
                                chainId: 137,
                                superToken: {
                                    address:
                                        "0xcaa7349cea390f89641fe306d93591f87595dc1f",
                                },
                            },
                        ],
                    }}
                    theme={{
                        ...data.theme,
                        palette: {
                            mode: "dark",
                            primary: {
                                main: "#EA8A0C",
                                contrastText: "#fff",
                            },
                            secondary: {
                                main: "#fff",
                            },
                        },
                    }}
                    tokenList={superTokenList}
                    type="dialog"
                    walletManager={walletManager}
                    eventListeners={eventListeners}
                >
                    {({ openModal }) => (
                        <ActionItem
                            key={donateInfo.id}
                            {...donateInfo}
                            clickHandler={openModal}
                        />
                    )}
                </SuperfluidWidget>
            </WagmiConfig>
            <Web3Modal
                themeMode="dark"
                projectId={projectId}
                ethereumClient={ethereumClient}
            />
        </>
    );
};

export default SuperfluidCheckout;
