import * as S from "./styled";
import type { FC } from "react";
import { Image } from "@static/images";
/**
 * Logo is a text but if there is need to use img, add two img from <Image component
 * @import
 * @example
 * import { Image } from "@static/images";
 * <Image src="logo-light" alt="logo" data-theme-el="light" />
 * when is light
 * <Image src="logo-dark" alt="logo" data-theme-el="dark" />
 */
export const Logo: FC = () => {
    return (
        <S.LogoStyled>
            <a href="/">
                <Image srcLocal="logo" alt="logo" />
            </a>
        </S.LogoStyled>
    );
};
