import { createUseStyles } from "react-jss";

export const useDownloadsStyles = createUseStyles({
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
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px'
    },
    icon: {
        height: '60px',
        width: '60px'
    },
    text: {
        fontSize: '24px',
        fontWeight: 500
    }
})