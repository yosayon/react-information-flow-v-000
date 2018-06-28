import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {
  state = {
      color: getRandomColor(),
      childColor: getRandomColor(),
      grandChildColor: getRandomColor()
  }

  handleClick = () => {
    let color = getRandomColor();
    this.setState({
      color: color,
      childColor: getReducedColor(color),
      grandChildColor: getReducedColor(getReducedColor(color))
    })
  }

  handleChildClick = (event) => {
    event.stopPropagation();
    let color = getRandomColor();
    this.setState({
      childColor: color,
      grandChildColor: getReducedColor(color)
    })
  }

  handleGrandChildClick = (event) => {
    event.stopPropagation();
    let color = getRandomColor();
    this.setState({
      grandChildColor: color
    })
  }


  render() {
    return (
      <div
        onClick={() => this.handleClick()}
        className="tier1"
        style={
          {
            backgroundColor: this.state.color,
            color: this.state.color
          }
        }
      >
        <Tier2
          handleClick={this.handleChildClick}
          handleChildClick={this.handleGrandChildClick}
          color={this.state.childColor}
          childColor={this.state.grandChildColor}
        />
        <Tier2
          handleClick={this.handleChildClick}
          handleChildClick={this.handleGrandChildClick}
          color={this.state.childColor}
          childColor={this.state.grandChildColor}
        />
      </div>
    )
  }
}
