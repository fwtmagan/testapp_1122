import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
// from: https://github.com/leandrowd/react-responsive-carousel

import slideImg1 from "./img/_01s.png";
import slideImg2 from "./img/_02s.png";
import slideImg3 from "./img/_03s.png";
import './index.css';

function Slider() {
    return (
        <Carousel className='slider'>
            <div>
                <img src={slideImg1} alt="Logo_01" />
                <p className="kuromi">世界クロミ化計画</p>
            </div>
            <div>
                <img src={slideImg2} alt="Logo_02" />
                <p className="kuromi">世界クロミ化計画</p>
            </div>
            <div>
                <img src={slideImg3} alt="Logo_03" />
                <p className="kuromi">世界クロミ化計画</p>
            </div>
        </Carousel>
    )
}
export default Slider;
