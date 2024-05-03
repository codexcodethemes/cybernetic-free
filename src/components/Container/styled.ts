import styled from "@emotion/styled";
import { MediaQuery } from "@styles/mediaQuery";

export const StyledContainer = styled.div`
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    max-width: 540px;

    ${MediaQuery.between("md", "lg")} {
        max-width: 720px;
    }

    ${MediaQuery.between("lg", "xl")} {
        max-width: 960px;
    }

    ${MediaQuery.between("xl", "xxl")} {
        max-width: 1140px;
    }

    ${MediaQuery.min("xxl")} {
        max-width: 1320px;
    }
`;
