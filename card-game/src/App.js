import React, {Component} from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
var randomnum=Math.floor(Math.random()*3)
if(randomnum==0){
  var word = "apple";
  var images = "apple3.png";
}
if(randomnum==1){
  var word = "banana";
  var images = "banana3.png";
}
if(randomnum==2){
  var word = "cherry";
  var images = "cherry2.png";
}

class App extends Component{
  render(){
    return (
       
       <div class="setcenter">
       <h1>WORD CARD</h1>
       <img src= {images}></img>
       <WordCard value = {word}/>
      </div>
    );
  }
}

export default App;
