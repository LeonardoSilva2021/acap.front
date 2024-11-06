import { EnumMenuItem } from "../../enums/app/enum-menu-item";

export class MenuItemModel {
    constructor (
        public nome: string = '',
        public tipo: EnumMenuItem = EnumMenuItem.Home,
        public rota: string = '',
    ) {}
}