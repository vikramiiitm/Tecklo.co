import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

function cn(...inputs: (string | undefined)[]) {
    return twMerge(clsx(inputs));
}

interface Item {
    name: string;
    svg: string;
}

interface InfiniteMovingCardProps {
    items: Item[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteMovingCard: React.FC<InfiniteMovingCardProps> = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scrollerRef = useRef<HTMLUListElement | null>(null);

    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });
            console.log(scrollerRef.current.children);  
            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-5xl mx-auto overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start ? "animate-scroll" : "",
                    pauseOnHover ? "hover:[animation-play-state:paused]" : "",
                )}
            >
                {items.map((item) => (
                    <li
                        className="relative rounded border bg-white border-slate-200 px-8 py-2"
                        key={item.name}
                    >
                        <div className="relative z-20">
                            <span className="flex gap-2 items-center">
                                <Image width={100} height={100} src={item.svg} className="w-8" alt={item.name} />
                                <span className="text-sm text-center text-gray-500 font-normal">
                                    {item.name}
                                </span>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
