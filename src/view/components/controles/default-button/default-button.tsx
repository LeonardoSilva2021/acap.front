import { Button } from "@mui/material"
import { DefaultButtonProps } from "./defalut-button-props"
import { useDefaultButtonStyles } from "./default-button-styles"
import classNames from "classnames";

export const DefaultButton = ({
    children,
    variant,
    fullWidth,
    classname,
    color,
    style,
    onClick,
}: DefaultButtonProps) => {

    const classes = useDefaultButtonStyles();

    return (
        <>
            <Button
                variant={variant ? variant : 'text'}
                color={color}
                fullWidth={fullWidth}
                className={classNames(classname, classes.root)}
                style={style}
                onClick={onClick}
            >
                {children}
            </Button>
        </>
    )
}