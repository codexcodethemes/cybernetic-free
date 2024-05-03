import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const ContentSectionStyled = styled.section`
    padding: 100px 0;

    ${MediaQuery.max("lg")} {
        padding: 60px 0;
    }
`;

export const ContentSectionWrapper = styled.div`
    text-align: center;

    h2,
    h3,
    h4,
    h5 {
        margin-bottom: 70px;
        font-weight: 200;
    }

    figure {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        &,
        img {
            border-radius: 10px;

            width: 100%;
            height: auto;
            object-fit: cover;
            max-width: 970px;
            margin: 0 auto;
        }
    }
`;
