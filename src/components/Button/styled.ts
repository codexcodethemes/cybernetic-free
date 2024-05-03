import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const ButtonWrapper = styled.div<{
    $align?: "left" | "center" | "right";
}>`
    display: flex;
    justify-content: ${({ $align }) => $align || "flex-start"};
    margin-top: 20px;
`;

export const ButtonLink = styled.a<{
    $variant: "primary" | "secondary";
}>`
    text-transform: uppercase;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    position: relative;
    z-index: 2;

    ${({ $variant }) => $variant === "primary" && PrimaryVariant};
    ${({ $variant }) => $variant === "secondary" && SecondaryVariant};
`;

export const Button = ButtonLink.withComponent("button");

const PrimaryVariant = css`
    display: inline-flex;
    align-items: center;
    font-size: 25px;
    line-height: 30px;
    padding: 10px;
    margin-top: 40px;
    transition: color 0.5s;
    transition-delay: 0.2s;

    ${MediaQuery.max("lg")} {
        font-size: 14px;
        line-height: 18px;
        margin-top: 20px;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0%;
        background: ${Theme.primary};
        z-index: -1;
        transition: width 0.5s;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${Theme.primary};
        transition: width 0.5s;
    }

    &:hover {
        color: ${Theme.secondary};

        &:before {
            width: 100%;
        }

        &:after {
            width: 0%;
        }

        img {
            margin-right: 30px;
            opacity: 1;
        }
    }

    img {
        transition-delay: 0.2s;
        filter: invert(1);
        opacity: 0;
        margin-right: -20px;
        transition: all 0.5s;
    }
`;

const SecondaryVariant = css`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${Theme.tertiary};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    background: ${Theme.tertiary};
    color: ${Theme.primary};

    &:hover {
        background: transparent;
        color: ${Theme.secondary};
    }
`;
