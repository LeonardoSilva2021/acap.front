import { createUseStyles } from "react-jss";
import { EnumMenuItem } from "../../../../../models/enums/app/enum-menu-item";
import { MenuItemModel } from "../../../../../models/app/menu-item/menu-item-model";

interface Props {
    enumMenu: EnumMenuItem;
    model: MenuItemModel;
}

export const useMenuItemStyles = createUseStyles({
    button: (props: Props) => ({
        color: props.model.tipo === props.enumMenu ? '#4B7FB4' : '#FFF',
        background: props.model.tipo === props.enumMenu ?
        '#FFF' : '#4B7FB4',
        alignItems: 'center',
        fontWeight: props.model.tipo === props.enumMenu ? '600' : 'normal'
    }),
    icon: (props: Props) => ({
        paddingRight: '8px',
        alignItems: 'center',
        height: '25px',
        fill: props.model.tipo === props.enumMenu ? '#4B7FB4' : '#FFF'
    })
});