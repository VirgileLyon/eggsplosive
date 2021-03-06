import React, { Component } from 'react';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props)
    this.x = 50;
    this.y = 70;
    this.state = {
      x: 50,
      y: 70,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.move, false);
    this.refresh = setInterval(this.refreshRender, 40)
  }

  refreshRender = () => {
    this.setState({
      x: this.x,
      y: this.y,
    })
  }

  move = (event) => {
    // Move left
    if (event.keyCode === 37) {
      if (this.x > 0) {
        this.x -= 10;
      }
    }
    // Move right
    if (event.keyCode === 39) {
      if (this.x < 90) {
        this.x += 10;
      }
    }
    const { getPlayerPos } = this.props;
    getPlayerPos(this.x, this.y);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div
        className="Player"
        style={{
          top: `${y}%`,
          left: `${x}%`
        }}
      />
    );
  }
}

export default Player;