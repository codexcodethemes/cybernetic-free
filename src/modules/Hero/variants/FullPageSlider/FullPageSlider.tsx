import React, { type FC } from "react";

import * as S from "./styled";
import { SwiperSlider } from "@components/SwiperSlider";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@static/icons";
import { FadeIn } from "@utils/animations/FadeIn";
import { Button } from "@components/Button";

export type FullPageSliderProps = {
    // content treated as HTML output
    content?: {
        background: string;
        subtitle?: string;
        title: string;
        paragraph?: string;
        button?: {
            text: string;
            link: string;
        };
    }[];
};

export const FullPageSlider: FC<FullPageSliderProps> = ({ content }) => {
    // do not render if there are no elements
    if (!content || content.length === 0) {
        return null;
    }

    /**
     * All slides are generated here based on the content prop
     * @param slide - slide content
     */
    const slides = content.map((slide, index) => (
        <S.FullPageSliderSlide key={index} $bgImage={slide.background}>
            {slide.background && (
                <S.FullPageSliderSlideImg data-swiper-parallax="70%">
                    <img src={slide.background} alt={slide.title} />
                </S.FullPageSliderSlideImg>
            )}
            <FadeIn>
                <S.FullPageSliderSlideContent data-swiper-parallax="-40%">
                    {slide.subtitle && (
                        <S.FullPageSliderSlideContentSubtitle>
                            {slide.subtitle}
                        </S.FullPageSliderSlideContentSubtitle>
                    )}
                    {slide.title && <h1>{slide.title}</h1>}
                    {slide.paragraph && <p>{slide.paragraph}</p>}
                    {slide.button && slide.button.text && slide.button.link && (
                        <Button
                            variant="primary"
                            showIcon={true}
                            link={slide.button.link}
                        >
                            {slide.button.text}
                        </Button>
                    )}
                </S.FullPageSliderSlideContent>
            </FadeIn>
        </S.FullPageSliderSlide>
    ));

    return (
        <S.FullPageSliderStyled>
            <SwiperSlider
                modules={[Parallax, Pagination, Autoplay]}
                options={{
                    slidesPerView: 1,
                    parallax: true,
                    speed: 1000,
                    spaceBetween: 0,
                    effect: "slide",
                    loop: false,
                    grabCursor: true, // Add this line
                    pagination: {
                        // Add this option
                        el: ".swiper-pagination",
                        type: "progressbar",
                    },
                    autoplay: {
                        delay: 5000,
                    },
                }}
            >
                {slides}
            </SwiperSlider>
            {slides.length > 1 ? (
                <>
                    <S.FullPageSliderTextToSlide>
                        Swipe to slide
                        <Icon iconData="arrowRight" alt="arrow icon" />
                    </S.FullPageSliderTextToSlide>
                    <div className="swiper-pagination"></div>
                </>
            ) : (
                <S.FullPageSliderTextToSlide>
                    Scroll down
                    <Icon iconData="arrowDown" alt="arrow icon" />
                </S.FullPageSliderTextToSlide>
            )}
        </S.FullPageSliderStyled>
    );
};
