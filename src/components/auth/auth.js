import React from 'react'
import Cookies from 'universal-cookie'
import{ Redirect} from 'react-router-dom'

class Auth extends React.Component{
    constructor(props) {
        super(props)
        const cookies = new Cookies()
        this.state = {
            logined: cookies.get('isLogin')
        }
        console.log(this.state)
    }

    renderRedirectTo() {
        if (this.state.logined === 'true') {
            return this.props.orRender
        } else {
            return <Redirect to={this.props.orRedirectTo}></Redirect>
        }

    }
    render(){
        return (
            <React.Fragment>

            </React.Fragment>

        )
    }
}

export default Auth