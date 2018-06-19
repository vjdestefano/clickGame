//Vincent DeStefano
import React, { Component } from "react";
import "./gameCSS.css";

class Game extends Component {
  
  

  state = {
    color: "red",
    positionT:"50%",
    positionL:"50%",
    gamePlaying: false,
    TimerID: '',
    score: 0,
   }


  colorVals = [
    {color:     "red"},
    {color:     "blue"},
    {color:     "green"},
    {color:     "yellow"},
  ];

   
  stateShuffle = () =>{

    const min = 0;
    const max = 3;
    
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    let stateValue = this.colorVals[random].color;

    console.log(stateValue);
   
    this.setState({
      color: stateValue
    });
    return(stateValue);

  }



  positionShuffle = () =>{

    const min = 5;
    const max = 95;
    
    let randomT = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomL = Math.floor(Math.random() * (max - min + 1)) + min;

    let positionNumT = (randomT + "%");
    let positionNumL = (randomL + "%");

    
   this.setState({
    positionT: positionNumT,
    positionL: positionNumL,
   });
   
    return(positionNumT, positionNumL);

  }

  

  timerStart(params) {

  let timerVal = 5; 
  
  let that = this;

  params.state.TimerID = setInterval(function(){
    timerVal--;
    that.positionShuffle();

    
    console.log(timerVal);
    params.setState({
    
      gamePlaying: true,
    });


    if(timerVal === 0){
      clearInterval(params.state.TimerID);
      that.setState({
        gamePlaying: false
      })
    }
  },1000);

  return timerVal;
    
  }

  plus(param){

   let testNum = this.state.score ;

 
    if(this.state.gamePlaying){
      // clock++;
      testNum++
      this.setState({
        score: testNum,
        // TimerID: clock
      })

    }
    console.log("this is the add num :" + testNum)
    return(testNum)
  }
  

  handleSubmit = event => {
    event.preventDefault();
    
    

    this.plus();
    this.stateShuffle();
    this.positionShuffle();
    if(!this.state.gamePlaying){
      this.timerStart(this);
      
    }
    
   

  }



  render() {


    
        const buttonStyle =  {
          color: this.state.color,
          position:"fixed",
          top: this.state.positionT,
          left:this.state.positionL,
          src: "https://i.imgur.com/D42stzs.png",
          size: "50px"
          }
  
    
    return (
      <div className = "test">

        <div>Score: {this.state.score} </div>
        
        
        <img src ={buttonStyle.src} alt="terrorImage" style = {{color: buttonStyle.color, position: buttonStyle.position, top: buttonStyle.top, left: buttonStyle.left, width:buttonStyle.size}} className="shootIt" onClick={this.handleSubmit} />



        

        

        
        
      </div>
    );
  }
}

export default Game;
