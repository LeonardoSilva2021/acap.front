import { createUseStyles } from "react-jss";

export const useFooterPageStyles = createUseStyles({
    root: {
        display: 'flex',
        paddingTop: '8px',
    },
    card: {
        borderRadius: '16px 16px 0px 0px',
        background: '#000',
        width: '100%',
    },
    container: {
        display: 'flex',
        width: '100%',
    },
    imageLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    contentInfo: {
        display: 'flex',
        alignItems: 'center'
    },
    containerText: {
        display: 'flex',
        flexDirection: 'column'
    },
    textTitle: {
        color: '#FFF',
    },
    textInfo: {
        color: '#FFF',
        fontSize: '12px'
    },
    icon: {
        fill: '#FFF',
        marginRight: '8px',
        width: '38px',
        height: '30px',
    },
    maps: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
    },
})