import React from 'react';
import Board from './Board'
import GameOver from './GameOver'
import Header from './Header'
import Info from './Info'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this._onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        this.props.moveUp();
        break;
      case "ArrowDown":
        e.preventDefault();
        this.props.moveDown();
        break;
      case "ArrowLeft":
        e.preventDefault();
        this.props.moveLeft();
        break;
      case "ArrowRight":
        e.preventDefault();
        this.props.moveRight();
        break;
      case " ":
        e.preventDefault();
        if(this.props.game.gameOver){
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
        <GameOver remaining={this.props.game.pegCount} style={{top: '330px'}}/>
      )
    }

    return (
      <div
        ref={t => {if(t!==null){t.focus()}}}
        onKeyDown={this._onKeyPress}
        tabIndex={1}
        style={{outline: 'none'}}
      >
        <Header />
        <br />
        <Board {...this.props} />
        { info }
        <Info />
      </div>
    )
  }
}