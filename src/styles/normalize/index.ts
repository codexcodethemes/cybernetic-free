import { css } from "@emotion/react";
import { Theme, ThemeVar } from "@styles/colors";
import { FontFace, Fonts } from "@styles/fonts";
import { MediaQuery } from "@styles/mediaQuery";

export const NormalizeCSS = css`
    ${FontFace};
    ${ThemeVar};

    :root {
        color-scheme: light only;
    }

    body,
    html {
        font-family: ${Fonts.primary};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
    }

    * {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;

        color: ${Theme.tertiary};
        background: ${Theme.primary};
        position: relative;

        &:before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${Theme.secondary};
            z-index: 20;
            transition: transform 0.5s;
            transition-delay: 0.2s;
        }

        &::-webkit-scrollbar {
            width: 17px;
            background: ${Theme.secondary};
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
        }

        &::-webkit-scrollbar-thumb {
            background-color: #7c2a04;
        }

        &.hide-overflow {
            &:before {
                transform: translateY(-100%);
            }
        }
    }

    main {
        display: block;
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    img {
        border-style: none;
        object-fit: cover;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button {
        padding: 0;
    }

    figure {
        margin: 0;
        line-height: 0;
    }

    strong {
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 30px;

        &:last-child {
            margin: 0;
        }
    }

    h1 {
        font-size: 50px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
        }
    }

    h2 {
        font-size: 45px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 35px;
        }
    }

    h3 {
        font-size: 35px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 30px;
        }
    }

    h4 {
        font-size: 25px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 25px;
        }
    }

    h5 {
        font-size: 20px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 20px;
        }
    }

    h6 {
        font-size: 18px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 15px;
        }
    }

    p {
        margin: 0 0 10px;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 1px;
        color: ${Theme.tertiary};

        &:last-child {
            margin: 0;
        }
    }

    .page-404 {
        background-color: ${Theme.secondary};
        height: 100dvh;
        color: ${Theme.primary};

        p {
            color: ${Theme.primary};
        }
    }
`;
