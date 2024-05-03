import { Swiper } from "swiper/react";
import styled from "@emotion/styled";
import "swiper/css";

export const SwiperStyled = styled(Swiper)<{
    slidesPerView: any;
}>`
    overflow: hidden;
    width: 100%;
`;
