"use client"
import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

type AnimatedCounterTypes = {
    from: number;
    to: number;
    animationOptions?: KeyframeOptions;
};

export default function AnimatedCounter({ from, to, animationOptions }: AnimatedCounterTypes) {
    const ref = useRef<HTMLDivElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useIsomorphicLayoutEffect(() => {
        const element = spanRef.current;
        if (!element || !inView) return;

        element.textContent = String(from);

        const controls = animate(from, to, {
            duration: 2.5,
            ease: "easeInOut",
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(0);
            }
        });

        return () => {
            controls.stop();
        };
    }, [from, to, inView]);

    return (
        <div ref={ref}>
            <span ref={spanRef} />
        </div>
    );
}
