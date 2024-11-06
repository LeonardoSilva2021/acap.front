import { Grid2, Typography } from "@mui/material"
import { DefaultCard } from "../../../components/controles/default-card/default-card"
import { useFooterPageStyles } from "./footer-page-styles"
import LogoAcap from '../../../../assets/img/Logo_ACAP1.png';
import { MapsComponent } from "./components/maps-component";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { PhoneIcon } from "../../../components/icons/phone-icon";
import { LocationIcon } from "../../../components/icons/location-icon";
import { AlarmIcon } from "../../../components/icons/alarm-icon";

export const FooterPage = () => {

    //AUX
    const classes = useFooterPageStyles();

    //CHAVE AUTENTICAÇÃO GOOGLE MAPS
    const chave = "AIzaSyDNihVeb1rTvZvBBGQRpqpkUtG4_L2lZgM";

    const render = (status: Status) => (
        <h1>
            {status}
        </h1>
    );

    return (
        <>
            <div className={classes.root}>
                <DefaultCard classname={classes.card}>
                    <Grid2 container spacing={2} className={classes.container}>
                        <Grid2 size={3} className={classes.imageLogo}>
                            <img
                                src={LogoAcap}
                                alt="Logo"
                                width={200}
                                height={200}
                            />
                        </Grid2>
                        <Grid2 size={5}>
                            <Grid2 container spacing={2} className={classes.containerInfo}>
                                <Grid2 size={12} className={classes.contentInfo}>
                                    <PhoneIcon classname={classes.icon} />
                                    <div className={classes.containerText}>
                                        <Typography className={classes.textTitle}>
                                            Contato:
                                        </Typography>
                                        <Typography className={classes.textInfo}>
                                            (11) 97297-3673
                                        </Typography>
                                    </div>
                                </Grid2>
                                <Grid2 size={12} className={classes.contentInfo}>
                                    <AlarmIcon classname={classes.icon} />
                                    <div className={classes.containerText}>
                                        <Typography className={classes.textTitle}>
                                            Funcionamento:
                                        </Typography>
                                        <Typography className={classes.textInfo}>
                                            Segunda a Sexta, das 17h às 22h
                                        </Typography>
                                    </div>
                                </Grid2>
                                <Grid2 size={12} className={classes.contentInfo}>
                                    <LocationIcon classname={classes.icon} />
                                    <div className={classes.containerText}>
                                        <Typography className={classes.textTitle}>
                                            Endereço:
                                        </Typography>
                                        <Typography className={classes.textInfo}>
                                            R. Mendonça Corte Real - Vila Prudente, São Paulo - SP, 03227-110
                                        </Typography>
                                    </div>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={4}>
                            <div className={classes.maps}>
                                <Wrapper
                                    apiKey={chave}
                                    render={render}
                                >
                                    <MapsComponent />
                                </Wrapper>

                            </div>
                        </Grid2>
                    </Grid2>
                </DefaultCard>
            </div>
        </>
    )
}