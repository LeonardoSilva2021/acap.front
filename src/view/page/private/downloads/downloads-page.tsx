import { FooterPage } from "../footer/footer-page";
import { Downloads } from "./components/downloads";
import { useDownloadsPageStyles } from "./downloads-page-styles"

export const DownloadsPage = () => {

    const classes = useDownloadsPageStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.conteudo}>
                    <Downloads />
                </div>
                <FooterPage />
            </div>
        </>
    )
}