import { FooterPage } from "../footer/footer-page"
import { useHomePageStyles } from "./home-page-styles"
import { ConteudoComponent } from "./components/conteudo-component";

export const HomePage = () => {

    const classes = useHomePageStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.conteudo}>
                    <ConteudoComponent />
                </div>
                <FooterPage />
            </div>
        </>
    )
}