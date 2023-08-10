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

const projectId = "7648cbccc7d7417fcbe198a6ed627c1b";
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
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                <SuperfluidWidget
                    {...data}
                    tokenList={superTokenList}
                    type="dialog"
                    walletManager={walletManager}
                    eventListeners={eventListeners}
                >
                    {({ openModal }) => (
                        <button onClick={() => openModal()}>
                            Open Superfluid Widget
                        </button>
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
