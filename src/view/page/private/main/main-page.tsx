import { FC, ReactNode } from "react";
import { useMainPageStyles } from "./main-page-styles";
import { HeaderPage } from "../header/header-page";

type Props = {
    children?: ReactNode;
}
export const MainPage: FC<Props> = ({ children }) => {

    const classes = useMainPageStyles();

    return (
        <>
            <div className={classes.root}>
                <HeaderPage />
                {children}
            </div>
        </>
    )
}