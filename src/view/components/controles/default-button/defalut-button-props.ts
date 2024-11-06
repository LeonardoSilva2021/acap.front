import { CSSProperties } from "react";

export interface DefaultButtonProps {
    children?: any;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    variant?: 'outlined' | 'contained' | 'text';
    fullWidth?: boolean;
    classname?: string;
    style?: CSSProperties;
    onClick?: () => void;
}