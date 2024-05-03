import styled from "@emotion/styled";
import { Theme } from "@styles/colors";
import { MediaQuery } from "@styles/mediaQuery";

export const FullPageSliderStyled = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;
    position: relative;

    height: 100dvh;
    min-height: 550px;

    background: ${Theme.secondary};
    position: relative;
    overflow: hidden;

    .swiper-pagination {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%) translate3d(0, 0, 0);
        display: flex;
        justify-content: flex-start;
        z-index: 1;
        width: 100%;
        height: auto;
        background: ${Theme.tertiary};
        max-width: 500px;
        height: 15px;
        text-align: center;
        transition: 300ms opacity;
        pointer-events: none;

        ${MediaQuery.max("xl")} {
            left: 20px;
            transform: translate3d(0, 0, 0);
        }

        ${MediaQuery.max("lg")} {
            max-width: 200px;
            left: 50%;
            bottom: 20px;
            transform: translateX(-50%) translate3d(0, 0, 0);
        }

        span {
            background: ${Theme.primary};
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            transform: scale(0);
            transform-origin: left top;
        }
    }

    .swiper {
        height: 100%;
    }

    .blog-content & {
        h1 {
            font-size: 90px;
            line-height: 95px;

            ${MediaQuery.max("lg")} {
                font-size: 40px;
                line-height: 50px;
            }
        }
    }
`;

export const FullPageSliderSlide = styled.div<{
    $bgImage: string;
}>`
    height: 100%;
    position: relative;
    overflow: hidden;
    padding: 0 40px;
    display: flex;
    align-items: center;

    ${MediaQuery.max("lg")} {
        padding: 0 20px;
    }

    .swiper-slide-drag {
        transition: none; /* Add this line */
    }

    .swiper-backface-hidden .swiper-slide {
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .swiper-slide {
        height: 100%;
        overflow: hidden;
    }
`;

export const FullPageSliderSlideImg = styled.figure`
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 0;
        left: -1px;
        background-color: transparent;
        background-image: radial-gradient(
            at center right,
            #00000038 50%,
            #000000b8 100%
        );
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const FullPageSliderSlideContent = styled.div`
    position: relative;
    z-index: 2;
    color: ${Theme.primary};

    h1 {
        font-size: 180px;
        line-height: 130px;
        text-transform: uppercase;
        font-weight: 900;
        margin-left: -15px;
        margin-bottom: 50px;

        ${MediaQuery.max("xl")} {
            font-size: 90px;
            line-height: 95px;
            margin-bottom: 20px;
        }

        ${MediaQuery.max("lg")} {
            font-size: 40px;
            line-height: 50px;
            margin-bottom: 20px;
            margin-left: 0;
        }
    }

    h1 + p {
        max-width: 700px;
        color: ${Theme.primary};
        font-size: 18px;
        line-height: 25px;
        font-weight: 300;

        ${MediaQuery.max("lg")} {
            font-size: 14px;
            line-height: 18px;
        }
    }
`;

export const FullPageSliderSlideContentSubtitle = styled.p`
    text-transform: uppercase;
    font-size: 25px;
    line-height: 30px;
    font-weight: 900;
    letter-spacing: -1px;
    color: ${Theme.primary};
    margin-bottom: 40px;

    ${MediaQuery.max("xl")} {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 20px;
    }

    ${MediaQuery.max("lg")} {
        font-size: 18px;
        line-height: 20px;
        margin-bottom: 20px;
    }
`;

export const FullPageSliderTextToSlide = styled.span`
    position: absolute;
    right: 40px;
    bottom: 40px;
    transform: translateX(-50%);
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: -1px;
    line-height: 25px;
    color: ${Theme.primary};
    z-index: 1;

    display: flex;
    align-items: center;
    pointer-events: none;

    ${MediaQuery.max("lg")} {
        font-size: 14px;
        line-height: 18px;
        left: 50%;
        right: unset;
        bottom: 45px;
        transform: translateX(-50%);
        justify-content: center;
        width: 100%;
    }

    img {
        margin-left: 10px;
    }
`;
