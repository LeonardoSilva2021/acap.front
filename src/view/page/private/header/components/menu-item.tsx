import { useCallback } from "react";
import { DefaultButton } from "../../../../components/controles/default-button/default-button"
import { MenuItemProps } from "./menu-item-props"
import { useMenuItemStyles } from "./menu-item-styles"
import { EnumMenuItem } from "../../../../../models/enums/app/enum-menu-item";
import { HomeIcon } from "../../../../components/icons/home-icon";
import { DownloadIcon } from "../../../../components/icons/download-icon";
import { InformationIcon } from "../../../../components/icons/information-icon";
import { useNavigate } from "react-router-dom";

export const MenuItem = ({
    model,
    enumMenu,
    setEnumMenu
}: MenuItemProps) => {

    // const path = window.location.pathname.split('/');

    //AUX
    const classes = useMenuItemStyles({
        enumMenu: enumMenu,
        model: model,
    });
    const navigate = useNavigate();

    const retornaIcon = useCallback(() => {
        switch (model.tipo) {
            case EnumMenuItem.Home:
                return (
                    <>
                        <HomeIcon
                            classname={classes.icon}
                        />
                    </>
                );
            case EnumMenuItem.Downloads:
                return (
                    <>
                        <DownloadIcon
                            classname={classes.icon}
                        />
                    </>
                );
            case EnumMenuItem.Sobre_Nos:
                return (
                    <>
                        <InformationIcon
                            classname={classes.icon}
                        />
                    </>
                );
        }
    }, [classes.icon, model.tipo]);

    const clickButton = useCallback(() => {
        setEnumMenu(model.tipo);
        navigate(model.rota);
    }, [model.rota, model.tipo, navigate, setEnumMenu]);

    return (
        <>
            <DefaultButton
                classname={classes.button}
                variant={
                    enumMenu === model.tipo
                        ? 'contained'
                        : 'text'
                }
                fullWidth
                onClick={clickButton}
            >
                {retornaIcon()}
                {model.nome}
            </DefaultButton>
        </>
    )
}