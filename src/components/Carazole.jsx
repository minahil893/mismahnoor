import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const items = [
  <img src="./images/screenshot.PNG"  role="presentation" />,
  <img src="./images/Banner_1.jpg"style={{width:"100%"}}  role="presentation" />,
  <img src="./images/Capture.PNG"  role="presentation" />,

	// <img src="./images/saru14.webp"  role="presentation" />,
	// <img src="./images/saru16.webp"  role="presentation" />,
  //   <img src="./images/saru17.webp"  role="presentation" />,
	// 	<img src="./images/saru18.webp"  role="presentation" />,
  //   <img src="./images/saru19.webp"  role="presentation" />,
  //   <img src="./images/saru20.webp"  role="presentation" />,
  //   <img src="./images/saru21.webp"  role="presentation" />,
  //   <img src="./images/saru23.webp"  role="presentation" />,


];
const Carazole = () => {
  return (
    <AliceCarousel
disableButtonsControls
disableDotsControls
autoPlay
    autoPlayInterval={1000}
    items={items}
    // responsive={responsive}
 
/>
  )
}

export default Carazole
