import React from 'react';

export default class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            msg:'カウンター:0'
        }
        this.doAction = this.doAction.bind(this);
    }
    doAction() {
        this.setState(state => {
            const num = state.counter + 1;
            return ({
                counter: num,
                msg: 'カウンター:' + num,
            })
        })
    }
    render() {
        return (
            <p onClick={this.doAction}>{this.state.msg}</p>
        )
    }
}

