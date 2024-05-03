import React, { type FC } from "react";

import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { Container } from "@components/Container";
import { FadeIn } from "@utils/animations/FadeIn";

type ServiceCards = {
    title?: string;
    description?: string;
    cards?: {
        title: string;
        description: string;
    }[];
};

export const ServiceCards: FC<ServiceCards> = ({
    cards,
    description,
    title,
}) => {
    // do not render if there are no cards

    if (!cards || !cards.length) {
        return null;
    }

    const cardsElements = cards.map((card, index) => {
        return (
            <FadeIn key={index}>
                <TextBox>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </TextBox>
            </FadeIn>
        );
    });

    return (
        <S.ServiceCardsStyled>
            <Container>
                {title && description && (
                    <FadeIn>
                        <S.ServiceCardsHeading>
                            {description && <p>{description}</p>}
                            {title && <h2>{title}</h2>}
                        </S.ServiceCardsHeading>
                    </FadeIn>
                )}
                <S.ServiceCardsGrid>{cardsElements}</S.ServiceCardsGrid>
            </Container>
        </S.ServiceCardsStyled>
    );
};
