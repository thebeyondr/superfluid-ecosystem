"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ActionItemProps {
    graphic: string;
    link?: string;
    title: string;
    description: string;
    id: string;
    clickHandler?: () => void;
    children?: React.ReactNode;
}

const ActionItem = ({
    graphic,
    link,
    title,
    description,
    clickHandler,
}: ActionItemProps) => (
    <Wrapper link={link} clickHandler={clickHandler}>
        <div className="flex items-center justify-start w-full px-3 py-5 space-x-4 rounded-xl bg-stone-950/60 transition ring-1 ring-stone-600 hover:ring-orange-300 active:ring-orange-300 focus:ring-orange-200">
            <div className="w-10 h-10 md:h-14 md:w-14 relative">
                <Image
                    src={`/assets/graphics/${graphic}`}
                    alt={title}
                    fill
                    role="presentation"
                />
            </div>

            <div className="flex flex-col">
                <h2 className="text-stone-50 text-lg font-normal">{title}</h2>
                <p className="text-sm text-stone-300 font-medium">
                    {description}
                </p>
            </div>
        </div>
    </Wrapper>
);

const Wrapper = ({
    link,
    clickHandler,
    children,
}: Partial<ActionItemProps>) => {
    if (link) {
        return (
            <Link href={link} target="_blank" className="cursor-pointer">
                {children}
            </Link>
        );
    } else if (clickHandler) {
        return (
            <div onClick={() => clickHandler()} className="cursor-pointer">
                {children}
            </div>
        );
    } else {
        return <>{children}</>;
    }
};

export default ActionItem;
