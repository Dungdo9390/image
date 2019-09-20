import React from 'react';
import { Button } from 'react-bootstrap';

class HomePage extends React.Component{
    render() {
        return(
        <React.Fragment>
            <div>Home Page</div>
            <Button onClick={(e) => this.onClick(e)}>Logout</Button>
            </React.Fragment>
        )
    }
}
export default HomePage