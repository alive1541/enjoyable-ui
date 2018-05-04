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
        let type = this.props.type || 'primary'
        let className = classnames(this.state.down, type)
        let move = (this.state.down && this.state.toggle) ? true : false
        let toggleMove = (this.state.down && !this.state.toggle) ? true : false
        let disabled = type == 'disabled'
        return (
            <span className="enj-wrap">
                {
                    disabled
                        ? <button
                            disabled
                            {...this.props}
                            className={className}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}
                            onClick={this.handleClick}>
                            {kids}
                        </button>
                        : <button
                            {...this.props}
                            className={className}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}
                            onClick={this.handleClick}>
                            {kids}
                        </button>
                }
                <BgEles move={move} type={type} />
                <BgElesToggle move={toggleMove} type={type} />
            </span>
        )
    }
}
function classnames(down, type) {
    return down ? ('enj-btn-down ' + type + '-down') : ('enj-btn ' + type)
}

function BgEles(props) {
    let type = props.type
    return (
        <React.Fragment>
            <BgEle
                type={type}
                move={props.move}
                start_options={{
                    width: 5,
                    height: 5,
                    left: '55px',
                    top: '-12px'
                }}
                end_options={{
                    width: 5,
                    height: 5,
                    left: '55px',
                    top: '-12px',
                    opacity: 1,
                    transform: 'translate(0px,-15px) scale(0,0)'
                }}
            />
            <BgEle
                type={type}
                move={props.move}
                start_options={{
                    width: 9,
                    height: 9,
                    left: '55px',
                    top: '-12px'
                }}
                end_options={{
                    width: 9,
                    height: 9,
                    left: '40px',
                    top: '-20px',
                    opacity: 1,
                    transform: 'translate(-10px,-30px) scale(0,0)'
                }}
            />
            {/* 空心圆 */}
            <BgEleVoid
                type={type}
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
                type={type}
                move={props.move}
                start_options={{
                    width: 5,
                    height: 5,
                    right: '55px',
                    bottom: '-12px'
                }}
                end_options={{
                    width: 5,
                    height: 5,
                    right: '55px',
                    bottom: '-12px',
                    opacity: 1,
                    transform: 'translate(0px,15px) scale(0,0)'
                }}
            />
            <BgEle
                type={type}
                move={props.move}
                start_options={{
                    width: 9,
                    height: 9,
                    right: '55px',
                    bottom: '-12px'
                }}
                end_options={{
                    width: 9,
                    height: 9,
                    right: '40px',
                    bottom: '-20px',
                    opacity: 1,
                    transform: 'translate(10px,30px) scale(0,0)'
                }}
            />
            {/* 空心圆 */}
            <BgEleVoid
                type={type}
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
    let type = props.type
    return (
        <React.Fragment>
            <BgEle
                type={type}
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
                type={type}
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
                type={type}
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
                type={type}
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
                type={type}
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
                type={type}
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