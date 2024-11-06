import { MenuItemModel } from "../../app/menu-item/menu-item-model";
import { EnumMenuItem } from "../../enums/app/enum-menu-item";

export const useMockMenuItem: MenuItemModel[] = [
    new MenuItemModel('Inicio', EnumMenuItem.Home, '/home'),
    new MenuItemModel('Downloads', EnumMenuItem.Downloads, '/downloads'),
    new MenuItemModel('Sobre Nós', EnumMenuItem.Sobre_Nos, '/sobre-nos'),
] 