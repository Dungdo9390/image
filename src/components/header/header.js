import React from 'react';
import './header.scss';
import SlideItems from '../slide/slide';


class Header extends React.Component{
    render(){
        return(
            <div className="headerpage">
 <SlideItems></SlideItems>
            </div>
        )
    }
}
export default Header