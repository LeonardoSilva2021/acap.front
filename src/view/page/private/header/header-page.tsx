import { Divider, Grid2 } from "@mui/material"
import { useHeaderPageStyles } from "./header-page-styles"
import { useState } from "react";
import { useMockMenuItem } from "../../../../models/mocks/app/mock-menu-item";
import { MenuItem } from "./components/menu-item";
import LogoAcap from '../../../../assets/img/Logo_ACAP1.png';
import { EnumMenuItem } from "../../../../models/enums/app/enum-menu-item";
import { DefaultCard } from "../../../components/controles/default-card/default-card";

export const HeaderPage = () => {

    //AUX
    const classes = useHeaderPageStyles();

    //STATES
    const [enumMenu, setEnumMenu] = useState<EnumMenuItem>(EnumMenuItem.Home);

    return (
        <>
            <div className={classes.root}>
                <DefaultCard classname={classes.card}>
                    <div className={classes.containerImage}>
                        <img
                            src={LogoAcap}
                            width='60'
                            height='60'
                            alt="Logo"
                        />
                        <Divider orientation="vertical" className={classes.divider} />
                    </div>
                    <Grid2 container spacing={2} className={classes.containerButton}>
                        {
                            useMockMenuItem.map((item) => {
                                return (
                                    <>
                                        <Grid2 size={4}>
                                            <MenuItem
                                                model={item}
                                                enumMenu={enumMenu}
                                                setEnumMenu={setEnumMenu}
                                            />
                                        </Grid2>
                                    </>
                                )
                            })
                        }
                    </Grid2>
                </DefaultCard>
            </div>
        </>
    )
}