import { CSSProperties } from "react";

export interface DefaultIconProps {
    children?: any,
    styles?: CSSProperties | undefined,
    fill?: string,
    classname?: string;
    onClick?: () => void
}