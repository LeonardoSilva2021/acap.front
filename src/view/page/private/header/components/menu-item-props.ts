import { MenuItemModel } from "../../../../../models/app/menu-item/menu-item-model";
import { EnumMenuItem } from "../../../../../models/enums/app/enum-menu-item";

export interface MenuItemProps {
    model: MenuItemModel;
    enumMenu: EnumMenuItem;
    setEnumMenu: React.Dispatch<React.SetStateAction<EnumMenuItem>>
}