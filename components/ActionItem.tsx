"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ActionItemProps {
    icon: string;
    graphic: string;
    link?: string;
    title: string;
    description: string;
    id: string;
    clickHandler?: () => void;
    children?: React.ReactNode;
}

const ActionItem = ({
    icon,
    graphic,
    link,
    title,
    description,
    id,
    clickHandler,
}: ActionItemProps) => (
    <Wrapper link={link} clickHandler={clickHandler}>
        <div className="flex items-center justify-center w-full p-4 space-x-4 rounded-xl bg-stone-900">
            <Image
                src={`/assets/graphics/${graphic}`}
                alt={title}
                width={60}
                height={60}
            />
            <div className="flex flex-col space-y-1">
                <h2 className="text-stone-50 text-lg font-normal">{title}</h2>
                <p className="text-sm text-stone-50/60 font-medium">
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
