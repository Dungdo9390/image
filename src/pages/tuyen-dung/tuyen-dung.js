import React from 'react';
import './tuyen-dung.scss';
import { locale } from '../../config/locale';

class TuyenDung extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>{locale.hiring}</h1>
            </React.Fragment>
        )
    }
}

export default TuyenDung