import React, { useEffect, useRef, type FC } from "react";
import * as S from "./styled";

type FadeInProps = {
    children: React.ReactNode | string | TrustedHTML;
    delay?: number | string;
};

/**
 * Convert delay to seconds
 */
const convertToSeconds = (delay: number | string) => {
    return Number(delay) * 1000;
};

export const FadeIn: FC<FadeInProps> = ({ children, delay }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("visible");
                        }, convertToSeconds(delay ? delay : 0));
                    }
                });
            },
            {
                root: null,
                rootMargin: "-50px",
                threshold: 0.1,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <S.FadeInStyled ref={elementRef}>
            {children as React.ReactNode}
        </S.FadeInStyled>
    );
};
