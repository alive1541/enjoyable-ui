import React, { Component } from 'react'
import './style/index.css'

export default class Ele extends Component {
    constructor(props) {
        super(props)
        let common_style = Object.assign({}, {
            position: 'absolute',
            display: 'inline-block',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            transition: 'transform .4s linear',
            opacity: 0,
            zIndex: 9999
        })
        let start_style = Object.assign({}, common_style, this.props.start_options)
        let end_style = Object.assign({}, common_style, this.props.end_options)
        this.state = {
            start_style,
            end_style,
            move: false
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            move: nextProps.move
        })
    }
    render() {
        let style = this.state.move ? this.state.end_style : this.state.start_style
        let classname = this.props.type + '-ele'
        return <span
            className={classname}
            style={style} />
    }
}