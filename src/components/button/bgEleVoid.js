import React, { Component } from 'react'
import './style/index.css'

let num = 0

export default class EleVoid extends Component {
    constructor(props) {
        super(props)
        let common_style = Object.assign({}, {
            position: 'absolute',
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            border: '1px solid #26A69A',
            opacity: 0,
            transition: 'transform .4s linear, opacity .4s ease-in',
            zIndex: 9999,

        })
        let start_style = Object.assign({}, common_style)
        let end_style = Object.assign({}, common_style, this.props.end_options)
        this.state = {
            start_style,
            end_style,
            move: false
        }
    }
    componentWillReceiveProps(nextProps) {
        let start_style = Object.assign({}, nextProps.start_options)
        this.setState({
            start_style,
            move: nextProps.move
        })
    }
    render() {
        let style = this.state.move ? this.state.end_style : this.state.start_style
        return <span
            style={style} />
    }
}