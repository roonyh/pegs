import React from 'react';

const styles = {
  wrapper: {
    position: 'absolute',
    width: '99%'
  },
  main: {
    margin: '0 auto',
    top: '50px',
    width: '400px',
    textAlign: 'center',
    backgroundColor: 'rgba(72, 61, 49, 0.7)',
    paddingBottom: '15px',
  },
  text: {
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    padding: "10px",
    color: 'rgb(162, 145, 124)',
  }
}

styles.gameOver = {
  ...styles.text,
  fontSize: '25px',
}
styles.info = {
  ...styles.text,
  fontSize: '15px',
}

export default class GameOver extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let info = <div style={styles.info}>You have {this.props.remaining} pegs remaining. To win finish with only <strong>one</strong> peg.<br /><br /> Hit space to try again!</div>

    if(this.props.remaining == 1){
      info = <div style={styles.info}>You won!<br /><br /> Hit space to play again.</div>
    }

    return (
      <div style={{...styles.wrapper, ...this.props.style}}>
        <div style={styles.main}>
          <div style={styles.gameOver}>Game Over!</div>
          { info }
          <div
            className="fb-share-button"
            data-href="https://roonyh.github.io/pegs/"
            data-layout="button" data-size="large"
            data-mobile-iframe="true"
          >
            <a
              className="fb-xfbml-parse-ignore"
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Froonyh.github.io%2Fpegs%2F&amp;src=sdkpreparse"
            >
              Share
            </a>
          </div>
        </div>
      </div>
    )
  }
}