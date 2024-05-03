import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import type { TextBoxProps } from ".";
import { css } from "@emotion/react";
import { MediaQuery } from "@styles/mediaQuery";

export const TextBotStyed = styled.div<{
    $variant: TextBoxProps["variant"];
}>`
    padding: 30px;
    border-radius: 10px;
    background: ${Theme.primary};
    box-shadow: 0 0 10px rgb(123 123 123 / 30%);
    display: block;
    height: 100%;
    color: ${Theme.secondary};
    border-radius: 15px;

    ${(props) =>
        props.$variant === "background-text" && TextBoxBackgroundTextVariant};
`;

export const TextBoxLinkStyled = TextBotStyed.withComponent("a");

export const TextBotBgText = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;

    font-size: 90px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -7px;
    z-index: 1;
    color: ${Theme.primary};
    opacity: 0.5;

    ${MediaQuery.max("xxl")} {
        font-size: 80px;
    }

    ${MediaQuery.max("xl")} {
        font-size: 60px;
        letter-spacing: -3px;
    }
`;

export const TextBotTextWrapper = styled.div`
    position: relative;
    z-index: 2;

    ${MediaQuery.max("md")} {
        max-width: 80%;
    }
`;

const TextBoxBackgroundTextVariant = css`
    position: relative;
    overflow: hidden;
    padding: 20px;

    h2,
    h3,
    h4 {
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.2;

        &:after {
            content: none;
        }
    }

    h4,
    p {
        position: relative;
        z-index: 2;
    }

    p {
        line-height: 1.2;
    }
`;
