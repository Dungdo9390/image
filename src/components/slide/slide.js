import React from 'react'
import './slide.scss'
import { Slide } from 'react-slideshow-image';
import SlideItem from './image/image';
const slideImages = [
 'https://picsum.photos/id/4/1400/600',
 'https://picsum.photos/id/5/1400/600',
 'https://picsum.photos/id/6/1400/600',
 'https://picsum.photos/id/9/1400/600',
 'https://picsum.photos/id/14/1400/600',
 'https://picsum.photos/id/15/1400/600',
 'https://picsum.photos/id/19/1400/600',
 'https://picsum.photos/id/143/1400/600',
 'https://picsum.photos/id/178/1400/600',
];
const properties = {
 duration: 5000,
 transitionDuration: 500,
 infinite: true,
 indicators: true,
 arrows: false,
 onChange: (oldIndex, newIndex) => {
   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
 }
}
class SlideItems extends React.Component {
 render() {
   return (
     <React.Fragment>
       <div className="slide-container">
         <Slide {...properties}>
           {
             slideImages.map(
               (v, i) => (
                 <SlideItem imgPath={slideImages[i]}></SlideItem>
               )
             )
           }
         </Slide>
         </div>
     </React.Fragment>
   )
 }
}
export default SlideItems