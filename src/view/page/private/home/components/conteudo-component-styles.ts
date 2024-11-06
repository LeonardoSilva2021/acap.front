import { createUseStyles } from "react-jss";

export const useConteudoComponentStyles = createUseStyles({
    root: {
        padding: '8px'
    },
    tittle: {
        fontSize: '28px',
        fontWeight: 600
    },
    card: {
        display: 'flex',
        alignItems:'center',
        background: '#4B7FB4',
        height: '100%',
        justifyContent:  'center'
    },
    button: {
        background: '#FFF',
        borderRadius: '16px',
        color: '#4B7FB4',
    },  
    icon: {
        fill: '#4B7FB4',
        marginRight: '8px'
    },
    texto: {
        textAlign: 'justify'
    }
})