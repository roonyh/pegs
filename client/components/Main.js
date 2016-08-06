import React from 'react';
import Board from './Board'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this._onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    e.preventDefault()
    console.log(e.key);
    switch (e.key) {
      case "ArrowUp":
        this.props.moveUp();
        break;
      case "ArrowDown":
        this.props.moveDown();
        break;
      case "ArrowLeft":
        this.props.moveLeft();
        break;
      case "ArrowRight":
        this.props.moveRight();
        break;
      case " ":
        this.props.lock();
        break;
      default:

    }
  }

  render() {
    return (
      <div onKeyDown={this._onKeyPress} tabIndex={1}>
        <Board {...this.props} />
      </div>
    )
  }
}