import { Container } from "@components/Container";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Image } from "@static/images";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const TextImageStyled = styled.div`
    width: 100%;
    text-align: left;
    margin: 50px 0;
    align-items: center;
    background: ${Theme.primary};
`;

export const TextImageContainer = styled(Container)<{
    $switchPlaces: boolean;
}>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;

    ${MediaQuery.max("lg")} {
        grid-template-columns: 1fr;
        text-align: center;
    }

    ${({ $switchPlaces }) =>
        $switchPlaces &&
        css`
            > div:first-of-type {
                order: 2;
            }
        `}
`;

export const TextImageFigure = styled.figure`
    width: 100%;
    position: relative;
`;

export const TextImage = styled(Image)`
    width: 100%;
    margin-bottom: 30px;
    min-height: 450px;

    object-fit: contain;

    ${MediaQuery.max("lg")} {
        min-height: auto;
    }
`;

export const TextImageContent = styled.div`
    ${MediaQuery.max("lg")} {
        max-width: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    h1 {
        margin-bottom: 20px;
        font-size: 80px;
        line-height: 84px;
        letter-spacing: -1px;

        ${MediaQuery.max("xl")} {
            font-size: 60px;
            line-height: 64px;
        }

        ${MediaQuery.max("sm")} {
            font-size: 50px;
            line-height: 45px;
            letter-spacing: -0.5px;
        }
    }

    p {
        ${MediaQuery.min("lg")} {
            max-width: 400px;
        }
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;

    ${MediaQuery.min("lg")} {
        gap: 30px;
    }

    ${MediaQuery.max("lg")} {
        flex-direction: column;
        align-items: center;
    }
`;
