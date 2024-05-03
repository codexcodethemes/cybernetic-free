import { Logo } from "@components/Logo";
import * as S from "./styled";
import { Navigation } from "@components/Navigation";
import { useEffect, type FC } from "react";

export const Header: FC = () => {
    // on scroll header needs to get class of "scrolled" and change its background color
    useEffect(() => {
        const header = document.querySelector("header");

        // add class to header when user scrolls
        const handleScroll = () => {
            if (window.scrollY > 0) {
                header?.classList.add("scrolled");
            } else {
                header?.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // if there is any listener, remove it to clean up
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <S.HeaderStyled>
            <S.ContainerStyled>
                <Logo />
                <Navigation />
            </S.ContainerStyled>
        </S.HeaderStyled>
    );
};
