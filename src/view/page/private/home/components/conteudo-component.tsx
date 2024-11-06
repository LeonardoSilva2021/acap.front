import { Divider, Grid2, Typography } from "@mui/material"
import { DefaultCarousel } from "../../../../components/controles/default-carousel/default-carousel"
import { useConteudoComponentStyles } from "./conteudo-component-styles"
import { DownloadIcon } from "../../../../components/icons/download-icon";
import { DefaultCard } from "../../../../components/controles/default-card/default-card";
import { DefaultButton } from "../../../../components/controles/default-button/default-button";
import { InformationIcon } from "../../../../components/icons/information-icon";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const ConteudoComponent = () => {

    //AUX
    const classes = useConteudoComponentStyles();
    const navigate = useNavigate();

    const clickDownloads = useCallback(() => {
        return navigate('/downloads');
    }, [navigate]);

    const clickSobreNos = useCallback(() => {
        return navigate('/sobre-nos');
    }, [navigate]);

    return (
        <>
            <Grid2 container spacing={2} className={classes.root}>
                <Grid2 size={12}>
                    <Grid2 container>
                        <Grid2 size={12}>
                            <Typography
                                className={classes.tittle}
                            >
                                ACAP - Futsal
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Divider variant="fullWidth" />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={12}>
                    <DefaultCarousel />
                </Grid2>
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
                <Grid2 size={8}>
                    <Typography
                        className={classes.texto}
                    >
                        Na sessão de downloads, você encontrará as atualizações mais recentes dos aplicativos ACAP para Web e Desktop. Essas atualizações são cuidadosamente desenvolvidas e disponibilizadas pela nossa equipe para garantir a melhor experiência aos usuários. Sempre que uma nova versão estiver pronta, ela será disponibilizada aqui, permitindo que você tenha acesso às últimas melhorias e funcionalidades dos nossos aplicativos.
                    </Typography>
                </Grid2>
                <Grid2 size={4}>
                    <DefaultCard
                        classname={classes.card}
                    >
                        <DefaultButton
                            variant="contained"
                            classname={classes.button}
                            onClick={clickDownloads}
                        >
                            <DownloadIcon
                                classname={classes.icon}
                            />
                            Downloads
                        </DefaultButton>
                    </DefaultCard>
                </Grid2>
                <Grid2 size={12}>
                    <Grid2 container>
                        <Grid2 size={12}>
                            <Typography
                                className={classes.tittle}
                            >
                                Sobre Nós
                            </Typography>
                        </Grid2>
                        <Grid2 size={12}>
                            <Divider variant="fullWidth" />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={4}>
                    <DefaultCard
                        classname={classes.card}
                    >
                        <DefaultButton
                            variant="contained"
                            classname={classes.button}
                            onClick={clickSobreNos}
                        >
                            <InformationIcon
                                classname={classes.icon}
                            />
                            Sobre Nós
                        </DefaultButton>
                    </DefaultCard>
                </Grid2>
                <Grid2 size={8}>
                    <Typography
                        className={classes.texto}
                    >
                        A ACAP é uma escola de futsal dedicada a desenvolver jovens talentos e a promover o esporte como ferramenta de educação e disciplina. Com uma equipe de profissionais qualificados e apaixonados pelo futsal, oferecemos aulas que estimulam o aprendizado técnico, o trabalho em equipe e o respeito. Nosso compromisso é formar atletas e cidadãos, ajudando nossos alunos a alcançarem o seu potencial tanto no esporte quanto na vida. Para saber mais sobre a nós clique no botão ao lado.
                    </Typography>
                </Grid2>
            </Grid2>
        </>
    )
}