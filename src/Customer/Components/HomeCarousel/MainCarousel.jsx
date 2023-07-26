import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel =() =>{

    const items = mainCarouselData.map((item) =><img className='cursor-pointer' 
    role='presentation' src={item.image} alt=""/>)

    return(
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
    )
    
}

// const MainCarousel = () => (
//     <AliceCarousel
//         mouseTracking
//         items={items}
//         controlsStrategy="alternate"
//     />
// );

export default MainCarousel;