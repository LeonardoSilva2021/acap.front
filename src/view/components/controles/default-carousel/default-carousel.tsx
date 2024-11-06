import { Carousel, CarouselSlide } from "@mantine/carousel";
import { useDefaultCarouselStyles } from "./default-carousel-styles";
import Imagem1 from '../../../../assets/img/Imagem1.jpg'
import Imagem2 from '../../../../assets/img/Imagem2.jpg'
import Imagem3 from '../../../../assets/img/Imagem3.jpg'
import Imagem4 from '../../../../assets/img/Imagem4.jpg'
import Imagem5 from '../../../../assets/img/Imagem5.jpg'

export const DefaultCarousel = () => {

    //AUX
    const classes = useDefaultCarouselStyles();

    return (
        <>
            <Carousel
                withIndicators
                align='center'
                draggable
                withControls
                controlsOffset='xl'
                controlSize={40}
            >
                <CarouselSlide className={classes.slides}>
                    <img src={Imagem1} alt="Imagem 1" className={classes.imagens} />
                </CarouselSlide>
                <CarouselSlide className={classes.slides}>
                    <img src={Imagem2} alt="Imagem 2" className={classes.imagens} />
                </CarouselSlide>
                <CarouselSlide className={classes.slides}>
                    <img src={Imagem3} alt="Imagem 3" className={classes.imagens} />
                </CarouselSlide>
                <CarouselSlide className={classes.slides}>
                    <img src={Imagem4} alt="Imagem 4" className={classes.imagens} />
                </CarouselSlide>
                <CarouselSlide className={classes.slides}>
                    <img src={Imagem5} alt="Imagem 5" className={classes.imagens} />
                </CarouselSlide>
            </Carousel>
        </>
    )
}