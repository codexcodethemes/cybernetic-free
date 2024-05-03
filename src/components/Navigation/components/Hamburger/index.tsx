import { useEffect, type FC } from "react";
import * as S from "./styled";

type HamburgerProps = {
    state: {
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
};
/**
 * Hamburger menu button.
 * @example
 * <Hamburger state={{ open: isOpen, setOpen: setIsOpen }} />
 * open - boolean value to check if the menu is open or not
 * setOpen - state to update value of open
 */
export const Hamburger: FC<HamburgerProps> = ({ state }) => {
    const { open, setOpen } = state;

    // Toggle the menu
    const handleMenu = () => {
        setOpen(!open);
    };

    /**
     * Close the menu when clicked outside
     * @param e - MouseEvent
     */
    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (!target.closest("nav") && open && target.tagName !== "BUTTON") {
            setOpen(false);
        }
    };

    /**
     * Add event listener to close the menu when clicked outside
     */
    useEffect(() => {
        if (!open) return;
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    return (
        <S.HamburgerMenuButton
            $open={open}
            onClick={handleMenu}
            aria-label="Menu"
            aria-expanded={open}
            role="button"
            tabIndex={0}
        >
            <S.HamburgerMenuButtonLine $open={open} />
            <S.HamburgerMenuButtonLine $open={open} />
        </S.HamburgerMenuButton>
    );
};
