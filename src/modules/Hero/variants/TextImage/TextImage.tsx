import { type FC } from "react";
import * as S from "./styled";
import { Button } from "@components/Button";
import { FadeIn } from "@utils/animations/FadeIn";
import type { ImageProps } from "@static/images";

export type TextImageProps = {
    title?: string;
    paragraph?: string;
    switchPlaces?: boolean;
    buttons?: {
        text: string;
        link: string;
        variant?: "primary" | "secondary";
    }[];
    image?: ImageProps;
};

export const TextImage: FC<TextImageProps> = ({
    title,
    paragraph,
    buttons,
    image,
    switchPlaces = false,
}) => {
    // do not render this component if there is no title or image
    if (!title && !paragraph && !image) {
        return null;
    }

    // image can be from local source or from external source
    const displayImage =
        image && image.srcLocal ? (
            <S.TextImage
                srcLocal={image.srcLocal}
                alt={image.alt}
                width={image.width}
                height={image.height}
            />
        ) : (
            image && (
                <S.TextImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
            )
        );
    return (
        <S.TextImageStyled>
            <S.TextImageContainer $switchPlaces={switchPlaces}>
                <FadeIn delay={0.2}>
                    <S.TextImageContent>
                        {title && (
                            <h1 dangerouslySetInnerHTML={{ __html: title }} />
                        )}
                        {paragraph && (
                            <p
                                dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                        )}

                        {buttons && buttons.length > 0 && (
                            <S.ButtonsWrapper>
                                {buttons.map((button, index) => {
                                    return (
                                        <Button
                                            key={index}
                                            link={button.link}
                                            variant={button.variant}
                                        >
                                            {button.text}
                                        </Button>
                                    );
                                })}
                            </S.ButtonsWrapper>
                        )}
                    </S.TextImageContent>
                </FadeIn>
                {image && (
                    <FadeIn>
                        <S.TextImageFigure>{displayImage}</S.TextImageFigure>
                    </FadeIn>
                )}
            </S.TextImageContainer>
        </S.TextImageStyled>
    );
};
