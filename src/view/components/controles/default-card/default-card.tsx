import { Card } from "@mui/material"
import { DefaultCardProps } from "./default-card-props"
import classNames from "classnames"
import { useDefaultCardStyles } from "./default-card-styles"

export const DefaultCard = ({
    children,
    classname,
}: DefaultCardProps) => {

    const classes = useDefaultCardStyles();

    return (
        <>
            <Card
                className={classNames(classes.root, classname)}
            >
                {children}
            </Card>
        </>
    )
}