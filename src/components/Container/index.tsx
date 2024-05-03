import * as S from "./styled";
import type { FC } from "react";

type ContainerProps = {
    children: React.ReactNode;
};

/**
 *  Custom container based on the Bootstrap container.
 */
export const Container: FC<ContainerProps> = ({ children, ...rest }) => {
    if (!children) {
        return null;
    }

    return <S.StyledContainer {...rest}>{children}</S.StyledContainer>;
};
