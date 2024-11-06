import classNames from "classnames";
import { DefaultIconProps } from "./default-icon-props";
import { useDefaultIconStyles } from "./default-icon-styles";

export const DefaultIcon = ({
    styles,
    fill,
    children,
    classname,
    onClick,
}: DefaultIconProps) => {

    const classes = useDefaultIconStyles();

    return (
        <>
            <svg
                viewBox="0 0 30 30"
                fill={fill}
                onClick={onClick}
                style={styles}
                className={classNames(classes.icon, classname)}
            >
                {children}
            </svg>
        </>
    )
}