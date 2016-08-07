import React from 'react';
import Board from './Board'
import GameOver from './GameOver'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this._onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
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
      console.log(this.props.game.gameOver);
        if(this.props.game.gameOver){
          console.log('game over');
          this.props.reset();
          break;
        }
        this.props.lock();
        break;
      default:

    }
  }

  render() {
    let info = null;
    if(this.props.game.gameOver){
      info = (
        <GameOver style = {{top: '230px'}}/>
      )
    }

    return (
      <div
        ref={t => {if(t!==null){t.focus()}}}
        onKeyDown={this._onKeyPress}
        tabIndex={1}
        style={{outline: 'none'}}
      >
        <Board {...this.props} />
        { info }
      </div>
    )
  }
}