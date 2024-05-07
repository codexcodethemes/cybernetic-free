import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.NavigationStyled>
            <S.NavigationListWrapper $isOpen={isOpen}>
                <S.NavigationList>
                    <li>
                        <a href="/">Cybernetic</a>
                    </li>
                    <li>
                        <a
                            href="https://codexcode.store/themes/cybernetic-website-template"
                            target="_blank"
                        >
                            Pro version
                        </a>
                    </li>
                    <li>
                        <a href="/infinite">Infinite</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </S.NavigationList>
            </S.NavigationListWrapper>
            <Hamburger
                state={{
                    open: isOpen,
                    setOpen: setIsOpen,
                }}
            />
        </S.NavigationStyled>
    );
};
