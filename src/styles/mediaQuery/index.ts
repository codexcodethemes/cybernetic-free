export type BreakpointKey = "base" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export const Breakpoints: Record<BreakpointKey, number> = {
    base: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
    xxxl: 1920,
};

export const MediaQuery = {
    /**
     *
     * @param breakpoint MediaQuery.min("md")
     * @returns @media example: (min-width: 768px)
     */
    min: (breakpoint: BreakpointKey) =>
        `@media (min-width: ${Breakpoints[breakpoint]}px)`,

    /**
     *
     * @param breakpoint MediaQuery.max("lg")
     * @returns @media example: (max-width: 991px)
     */
    max: (breakpoint: BreakpointKey) =>
        `@media (max-width: ${Breakpoints[breakpoint]}px)`,

    /**
     *
     * @param minBreakpoint MediaQuery.between("md", "lg")
     * @returns @media example: (min-width: 768px) and (max-width: 991px)
     */
    between: (minBreakpoint: BreakpointKey, maxBreakpoint: BreakpointKey) =>
        `@media (min-width: ${Breakpoints[minBreakpoint]}px) and (max-width: ${Breakpoints[maxBreakpoint]}px)`,
};
