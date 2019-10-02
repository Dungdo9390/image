import React from 'react';
import './header.scss';
import { Slide } from 'react-slideshow-image';

const slideImages = [

    'https://picsum.photos/id/10/1400/300', 
    'https://picsum.photos/id/1002/1400/300',
    'https://picsum.photos/id/1015/1400/300',
    'https://picsum.photos/id/102/1400/600',
    'https://picsum.photos/id/1021/1400/300',
    'https://picsum.photos/id/1035/1400/300',
    'https://picsum.photos/id/1045/1400/300',
    'https://picsum.photos/id/1055/1400/300',
    'https://picsum.photos/id/101/1400/300'

];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

class Header extends React.Component{
    render(){
        return(
            <div className="headerpage">
                <div className="slide-container">
                <Slide {...properties}>
                    {
                        slideImages.map(
                            (v, i) => (
                                <div className="each-slide">
                                <div style={{ 'backgroundImage': `url(${slideImages[i]})` }}>
                                </div>

                                </div>

                            )
                        )
                        }
                            </Slide>
            </div>

            </div>
        )
    }
}
export default Header