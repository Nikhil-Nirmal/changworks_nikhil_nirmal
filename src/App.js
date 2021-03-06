import './App.css';
import { HotKeys } from 'react-hotkeys';
import Confetti from 'react-confetti'
import React from 'react';
import cat from './Components/cat.gif'


let strCheck = ["c", "h", "a", "n", "g", "w", "o", "r", "k", "s"];
let strAdd = "";
let i = 0;
let height = Window.height;
let width = Window.width;

function closeIt() {
  document.getElementById("ClickMePage").style.display= "none";
}


class Conff extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <>
        <Confetti
          recycle={this.state.show}
          numberOfPieces={500}
          width={width}
          height={height}
        />
      </>
    );
  }
}

class HotkeysDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      output: "Type changworks...",
      output2:""
    };
  }
  handleShow(value) {
    this.setState({
      show: value
    });
  }
  a;
  onKeyDown(keyName) {
    this.setState({
      output2:`${keyName.key}`,
    });
    
    if (keyName.key === strCheck[i]) {
      i++;
      strAdd = strAdd + keyName.key;
      console.log(strAdd);
      if(strAdd === "changworks"){
        this.handleShow(true);
        setTimeout(() => {
        this.handleShow(false);
      }, 1000);
      i = 0;
      strAdd = "";
      }
    } 
    else {
      strAdd = "";
      i = 0;
    }
  }

  
  onKeyUp(keyName){
    this.setState({
      output2:""
    }); 
  }

  render() {
    return (
      <>
        <HotKeys
          keyname="a,	b,	c,	d,	e,	f,	g,	h,	i,	j,	k,	l,	m,	n,	o,	p,	q,	r,	s,	t,	u,	v,	w,	x,	y,	z,"
          onKeyDown={this.onKeyDown.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
        >
          <div className='title'>{this.state.output}</div>
          <div className='blink'>{this.state.output2}</div>
          <div id='ClickMePage'> <img src={cat} alt='cat'></img>  <h2 onClick={closeIt}>Lets Go...</h2> </div>
          
        </HotKeys>
        <Confetti
          recycle={this.state.show}
          numberOfPieces={500}
          width={width}
          height={height}
        />
      </>
    );
  }
}



const  App = () => {
  return (
    <div className="App">
      <Conff />
      <HotkeysDemo  className="hotKeys"/>
    </div>
  );
}

export default App;
