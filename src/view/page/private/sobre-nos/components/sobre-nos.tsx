import { Divider, Grid2, Typography } from "@mui/material";
import { useSobreNosStyles } from "./sobre-nos-styles"

export const SobreNos = () => {

    const classes = useSobreNosStyles();

    return (
        <>
            <Grid2 container spacing={2} className={classes.root}>
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
                <Grid2 size={12} className={classes.containerTexto}>
                    <Typography>
                        A ACAP - Escola de Futsal é uma instituição voltada para a formação e desenvolvimento de jovens talentos no futsal, localizada em São Paulo, no bairro de Vila Prudente. Com sede na Rua Mendonça Corte Real, nº 03227-110, a escola oferece um ambiente seguro e acolhedor para crianças e adolescentes que desejam aprender e aprimorar suas habilidades no esporte.
                    </Typography>
                    <Typography>
                        A escola é dirigida por Leonardo da Silva Gonçalves, responsável por coordenar as atividades e assegurar a qualidade dos treinos. Leonardo é um profissional dedicado ao desenvolvimento esportivo e à formação de valores nos jovens, promovendo o futsal como uma ferramenta de disciplina, trabalho em equipe e respeito.
                    </Typography>
                    <Typography>
                        Na ACAP - Escola de Futsal, os alunos recebem treinamentos especializados, com foco tanto na técnica quanto na parte física, sempre respeitando os limites e o desenvolvimento de cada idade. A instituição oferece diversas turmas, organizadas por faixa etária, para que cada aluno possa evoluir de maneira progressiva e segura no esporte.
                    </Typography>
                    <Typography>
                        Para mais informações sobre horários e matrículas, os interessados podem entrar em contato pelo telefone (11) 97297-3673. A ACAP é o local ideal para aqueles que buscam aprender futsal em um ambiente saudável, com profissionais experientes e uma estrutura que incentiva o crescimento pessoal e esportivo.
                    </Typography>
                </Grid2>
            </Grid2>
        </>
    )
}