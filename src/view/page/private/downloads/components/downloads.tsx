import { Divider, Grid2, Typography } from "@mui/material";
import { useDownloadsStyles } from "./downloads-styles"
import { DefaultCard } from "../../../../components/controles/default-card/default-card";
import { InformationIcon } from "../../../../components/icons/information-icon";

export const Downloads = () => {

    const classes = useDownloadsStyles();

    return (
        <>
            <Grid2 container spacing={2} className={classes.root}>
                <Grid2 size={12}>
                    <Grid2 container>
                        <Grid2 size={12}>
                            <Typography
                                className={classes.tittle}
                            >
                                Downloads
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Divider variant="fullWidth" />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={12}>
                    <DefaultCard classname={classes.card}>
                        <InformationIcon classname={classes.icon} />
                        <Typography className={classes.text}>
                            Nenhum download encontrado.
                        </Typography>
                    </DefaultCard>
                </Grid2>
            </Grid2>
        </>
    )
}