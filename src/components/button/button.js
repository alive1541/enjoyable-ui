import React, { Component } from 'react'
import './style/index.css'

import BgEle from './bgEle'
import BgEleVoid from './bgEleVoid'

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            down: false,
            toggle: false
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    handleClick = (e) => {
        const click = this.props.onClick
        click && click(e)
    }
    handleMouseDown = (e) => {
        clearTimeout(this.timer)
        const down = this.props.onMouseDown
        this.setState({ down: true, toggle: !this.state.toggle })
        down && down(e)
    }
    handleMouseUp = (e) => {
        const up = this.props.onMouseUp
        this.timer = setTimeout(() => {
            this.setState({ down: false })
        }, 300);
        up && up(e)
    }
    render() {
        let children = this.props.children
        const kids = (children || children === 0)
            ? children : null;
        let className = this.state.down ? 'enj-btn-down' : 'enj-btn'
        let move = (this.state.down && this.state.toggle) ? true : false
        let toggleMove = (this.state.down && !this.state.toggle) ? true : false
        return (
            <span className="enj-wrap">
                <span
                    {...this.props}
                    className={className}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onClick={this.handleClick}>
                    {kids}
                </span>
                <BgEles move={move} />
                <BgElesToggle move={toggleMove} />
            </span>
        )
    }
}

function BgEles(props) {
    return (
        <React.Fragment>
            <BgEle
                move={props.move}
                start_options={{
                    width: 4,
                    height: 4,
                    left: '55px',
                    top: '-12px'
                }}
                end_options={{
                    width: 4,
                    height: 4,
                    left: '55px',
                    top: '-12px',
                    opacity: 1,
                    transform: 'translate(0px,-15px) scale(0,0)'
                }}
            />
            <BgEle
                move={props.move}
                start_options={{
                    width: 8,
                    height: 8,
                    left: '55px',
                    top: '-12px'
                }}
                end_options={{
                    width: 7,
                    height: 7,
                    left: '40px',
                    top: '-20px',
                    opacity: 1,
                    transform: 'translate(-10px,-30px) scale(0,0)'
                }}
            />
            {/* 空心圆 */}
            <BgEleVoid
                move={props.move}
                start_options={{
                    width: 5,
                    height: 5,
                    left: '10px',
                    top: '-6px',
                    opacity: 1,
                }}
                end_options={{
                    width: 5,
                    height: 5,
                    left: '10px',
                    top: '-6px',
                    opacity: 0,
                    transform: 'translate(-35px,-10px) scale(1.1,1.1)'
                }}
            />
            {/* 反方向 */}
            <BgEle
                move={props.move}
                start_options={{
                    width: 4,
                    height: 4,
                    right: '55px',
                    bottom: '-12px'
                }}
                end_options={{
                    width: 4,
                    height: 4,
                    right: '55px',
                    bottom: '-12px',
                    opacity: 1,
                    transform: 'translate(0px,15px) scale(0,0)'
                }}
            />
            <BgEle
                move={props.move}
                start_options={{
                    width: 8,
                    height: 8,
                    right: '55px',
                    bottom: '-12px'
                }}
                end_options={{
                    width: 7,
                    height: 7,
                    right: '40px',
                    bottom: '-20px',
                    opacity: 1,
                    transform: 'translate(10px,30px) scale(0,0)'
                }}
            />
            {/* 空心圆 */}
            <BgEleVoid
                move={props.move}
                start_options={{
                    width: 5,
                    height: 5,
                    right: '10px',
                    bottom: '-6px',
                    opacity: 1,
                }}
                end_options={{
                    width: 5,
                    height: 5,
                    right: '10px',
                    bottom: '-6px',
                    opacity: 0,
                    transform: 'translate(35px,10px) scale(1.1,1.1)'
                }}
            />
        </React.Fragment>
    )
}
function BgElesToggle(props) {
    return (
        <React.Fragment>
            <BgEle
                move={props.move}
                start_options={{
                    left: '70px',
                    top: '-7px',
                }}
                end_options={{
                    left: '70px',
                    top: '-7px',
                    opacity: 1,
                    transform: 'translate(10px,-15px) scale(0,0)'
                }}
            />
            <BgEle
                move={props.move}
                start_options={{
                    left: '5px',
                    top: '4px',
                }}
                end_options={{
                    left: '5px',
                    top: '4px',
                    opacity: 1,
                    transform: 'translate(-40px,-7px) scale(0,0)'
                }}
            />
            {/* 空心圆 */}
            <BgEleVoid
                move={props.move}
                start_options={{
                    width: 5,
                    height: 5,
                    left: '10px',
                    top: '-6px',
                    opacity: 1,
                    // transition: '',
                }}
                end_options={{
                    width: 5,
                    height: 5,
                    left: '15px',
                    top: '-6px',
                    opacity: 0,
                    transform: 'translate(-20px,-20px) scale(1.1,1.1)'
                }}
            />
            {/* 反方向 */}
            <BgEle
                move={props.move}
                start_options={{
                    right: '70px',
                    bottom: '-7px',
                }}
                end_options={{
                    right: '70px',
                    bottom: '-7px',
                    opacity: 1,
                    transform: 'translate(-10px,15px) scale(0,0)'
                }}
            />
            <BgEle
                move={props.move}
                start_options={{
                    right: '5px',
                    bottom: '4px',
                }}
                end_options={{
                    right: '5px',
                    bottom: '4px',
                    opacity: 1,
                    transform: 'translate(40px,7px) scale(0,0)'
                }}
            />
            {/* 空心圆 */}
            <BgEleVoid
                move={props.move}
                start_options={{
                    width: 5,
                    height: 5,
                    right: '10px',
                    bottom: '-6px',
                    opacity: 1,
                }}
                end_options={{
                    width: 5,
                    height: 5,
                    right: '15px',
                    bottom: '-6px',
                    opacity: 0,
                    transform: 'translate(20px,20px) scale(1.1,1.1)'
                }}
            />
        </React.Fragment>
    )
}