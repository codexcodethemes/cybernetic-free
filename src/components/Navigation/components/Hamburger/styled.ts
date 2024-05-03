import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const HamburgerMenuButton = styled.button<{
    $open: boolean;
}>`
    position: relative;
    z-index: 3;

    background: ${Theme.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    width: 45px;
    height: 45px;
    border-color: transparent;

    ${MediaQuery.min("lg")} {
        display: none;
    }
`;

export const HamburgerMenuButtonLine = styled.span<{
    $open: boolean;
}>`
    background: ${Theme.secondary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${MediaQuery.max("lg")} {
        height: 2px;
    }

    ${({ $open }) =>
        $open
            ? css`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `
            : css`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({ $open }) =>
            $open
                ? css`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `
                : css`
                      top: calc(50% + 4px);
                  `}
    }
`;
