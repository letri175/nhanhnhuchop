import React from 'react';
import './index.css';
import Header from './components/Header';
import MainContent from './components/Main';
import box from './components/boxes';
import Box from './components/Box';
import {useState} from 'react';
import Bar from './components/Bar';
import Score from './components/Score';
import Bar2 from './components/Bar2';
import Score2 from './components/Score2';
import Bar3 from './components/Bar3';
import Score3 from './components/Score3';
import Bar4 from './components/Bar4';
import Score4 from './components/Score4';
import Question from './components/questions';
import Clock from './components/Clock';

function App() {
  //tang diem
  const [score, setScore] = useState([])
  const [maxScore, setMaxScore] = useState(0)

  function resetAll() {
    setScore(preScore => preScore.slice(score.length))
    setMaxScore(preScore => preScore = 0)
    setScore2(preScore => preScore.slice(score2.length))
    setMaxScore2(preScore => preScore = 0)
    setScore3(preScore => preScore.slice(score3.length))
    setMaxScore3(preScore => preScore = 0)
    setScore4(preScore => preScore.slice(score4.length))
    setMaxScore4(preScore => preScore = 0)
  }

  function checkMax() {
    if (score.length >= maxScore && maxScore <= 9)
      setMaxScore (preScore => preScore = score.length + 1)
    if (score.length < maxScore)
      setMaxScore (preScore => preScore)
  }

  function add() {
    checkMax()
    if (score.length < 10)
    setScore(preScore => [...preScore, score.length + 1])
    
  }
  function subtract() {
    setScore(preScore => preScore.slice(0,-1))
  }
  function reset() {
    setScore(preScore => preScore.slice(score.length))
  }
  //Map score to box
  const firstScore = score.map(() => (
    <div className="one-score"></div>
  ))
//Player 2
  const [score2, setScore2] = useState([])
  const [maxScore2, setMaxScore2] = useState(0)
  function checkMax2() {
    if (score2.length >= maxScore2 && maxScore2 <= 9)
      setMaxScore2 (preScore => preScore = score2.length + 1)
    if (score2.length < maxScore2)
      setMaxScore2 (preScore => preScore)
  }
  function add2() {
    if (score2.length < 10)
    setScore2(preScore => [...preScore, score2.length + 1])
    checkMax2()
  }
  function subtract2() {
    setScore2(preScore => preScore.slice(0,-1))
  }
  function reset2() {
    setScore2(preScore => preScore.slice(score2.length))
  
  }
  const secondScore = score2.map(() => (
    <div className="two-score"></div>
  ))
//Player 3
const [score3, setScore3] = useState([])
const [maxScore3, setMaxScore3] = useState(0)
function checkMax3() {
  if (score3.length >= maxScore3 && maxScore3 <= 9)
    setMaxScore3 (preScore => preScore = score3.length + 1)
  if (score3.length < maxScore3)
    setMaxScore3 (preScore => preScore)
}
function add3() {
  if (score3.length < 10)
  setScore3(preScore => [...preScore, score3.length + 1])
  checkMax3()
}
function subtract3() {
  setScore3(preScore => preScore.slice(0,-1))
}
function reset3() {
  setScore3(preScore => preScore.slice(score3.length))

}
const thirdScore = score3.map(() => (
  <div className="three-score"></div>
))
//player4
//Player 3
const [score4, setScore4] = useState([])
const [maxScore4, setMaxScore4] = useState(0)
function checkMax4() {
  if (score4.length >= maxScore4 && maxScore4 <= 9)
    setMaxScore4 (preScore => preScore = score4.length + 1)
  if (score4.length < maxScore4)
    setMaxScore (preScore => preScore)
}
function add4() {
  if (score4.length < 10)
  setScore4(preScore => [...preScore, score4.length + 1])
  checkMax4()
}
function subtract4() {
  setScore4(preScore => preScore.slice(0,-1))
}
function reset4() {
  setScore4(preScore => preScore.slice(score4.length))

}
const fourthScore = score4.map(() => (
  <div className="four-score"></div>
))
//render questions
const [quest, setQuest] =  useState()
const [numberQuest, setNumberQuest] = useState(0)
const [numQuest, setNumQuest] = useState(0)
function renderQuestion() {
    setNumberQuest (preNumber => preNumber + 1)
    setQuest(box[numQuest])
    setNumQuest (preQ => preQ + 1)
}
function resetNumberQuest(){
  setNumberQuest (0)
  setQuest()
}

  return (
        <div>
            <Header />
            <MainContent 
              score = {score}
              add = {add}
              subtract = {subtract}
              reset = {reset}
              add2 = {add2}
              subtract2 = {subtract2}
              reset2 = {reset2}
              add3 = {add3}
              subtract3 = {subtract3}
              reset3 = {reset3}
              add4 = {add4}
              subtract4 = {subtract4}
              reset4 = {reset4}

              resetAll = {resetAll}
            />
           <Score />
            <div className='first-player-score'>
              <div className='first-player-count-score'>{firstScore}</div>
            </div>
            <Bar />
            <div className="maxScore">Player 1: {maxScore}</div>
            <Score2 />
            <div className='second-player-score'>
              <div className='second-player-count-score'>{secondScore}</div>
            </div>
            <Bar2 />
            <div className="maxScore2">Player 2: {maxScore2}</div>
            <Score3 />
            <div className='third-player-score'>
              <div className='third-player-count-score'>{thirdScore}</div>
            </div>
            <Bar3 />
            <div className="maxScore3">Player 3: {maxScore3}</div>
            <Score4 />
            <div className='fourth-player-score'>
              <div className='fourth-player-count-score'>{fourthScore}</div>
            </div>
            <Bar4 />
            <div className="maxScore4">Player 4: {maxScore4}</div>
            <Question 
              render = {renderQuestion}
              reset = {resetNumberQuest}
            />
            <div className='quest-text'>Câu {numberQuest}: {quest}</div>   
            <Clock />  
        </div>
)}

export default App;