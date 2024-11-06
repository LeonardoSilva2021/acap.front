import { FooterPage } from "../footer/footer-page";
import { SobreNos } from "./components/sobre-nos";
import { useSobreNosPageStyles } from "./sobre-nos-page-styles"

export const SobreNosPage = () => {

    const classes = useSobreNosPageStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.conteudo}>
                    <SobreNos />
                </div>
                <FooterPage />
            </div>
        </>
    )
}