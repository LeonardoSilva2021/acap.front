import { createUseStyles } from "react-jss";

export const useDefaultCarouselStyles = createUseStyles({
    slides: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagens: {
        borderRadius: '16px'
    }
})