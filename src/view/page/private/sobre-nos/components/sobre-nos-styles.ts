import { createUseStyles } from "react-jss";

export const useSobreNosStyles = createUseStyles({
    root: {
        display: 'flex',
        padding: '8px',
        width: '100%',
        height: '100%'
    },
    tittle: {
        fontSize: '28px',
        fontWeight: 600
    },
    containerTexto: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '8px'
    }
})