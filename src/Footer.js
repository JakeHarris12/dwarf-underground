import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="expanded row">
                    <h6>&copy; 2017 Erebor Industries</h6>
                    <h6 className="float-right">All rights reserved</h6>
                </footer>
            </div>
        );
    }
}

export default Footer