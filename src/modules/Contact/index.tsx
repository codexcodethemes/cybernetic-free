import { type FC } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                    <FadeIn delay={0.1}>
                        <TextBox
                            variant="background-text"
                            bgText="Phone"
                            boxAsLink={true}
                            href="tel:+52 123 233 421"
                            target="_blank"
                        >
                            <h3>+52 123 233 421</h3>
                            <p>
                                you can call me if you have any questions or
                                just want to say hi
                            </p>
                        </TextBox>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <TextBox
                            variant="background-text"
                            bgText="Email"
                            boxAsLink={true}
                            href="mailto:youremail@gmail.com"
                            target="_blank"
                        >
                            <h3>youremail@gmail.com</h3>
                            <p>
                                also you can write me an email if you have any
                                questions
                            </p>
                        </TextBox>
                    </FadeIn>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        <h3>Address</h3>
                        <p>Some street 123, 12345 City, Country</p>
                        <p>Office: Mystr street 321, 54321 City, Country</p>
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};
