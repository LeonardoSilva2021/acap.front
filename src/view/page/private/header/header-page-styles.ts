import { createUseStyles } from "react-jss";

export const useHeaderPageStyles = createUseStyles({
    root: {
        padding: '8px',
    },
    card: {
        background: '#4B7FB4',
    },
    containerImage: {
        display: 'flex',
        alignItems: 'center',
    },
    divider: {
        marginLeft: '16px',
        marginRight: '16px',
        background: '#FFF'
    },
    containerButton: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: '#FFF',
        alignItems: 'center',
    },
    icon: {
        paddingRight: '8px',
        alignItems: 'center',
        height: '25px',
        fill: '#FFF'
    }
});