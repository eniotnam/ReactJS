import React from 'react'

import '../css/Letters.css'
import {WordTest} from './Word'


const Letters = () =>(
<div className="letters">
  <div className="box">
    <span id="a" onClick={spani}>a</span>
    <span onClick={spani}>z</span>
    <span onClick={spani}>e</span>
    <span onClick={spani}>r</span>
    <span onClick={spani}>t</span>
    <span onClick={spani}>y</span>
    <span onClick={spani}>u</span>
    <span onClick={spani}>i</span>
    <span onClick={spani}>o</span>
    <span onClick={spani}>p</span>
  </div>
  <div className="box">
    <span onClick={spani}>q</span>
    <span onClick={spani}>s</span>
    <span onClick={spani}>d</span>
    <span onClick={spani}>f</span>
    <span onClick={spani}>g</span>
    <span onClick={spani}>h</span>
    <span onClick={spani}>j</span>
    <span onClick={spani}>k</span>
    <span onClick={spani}>l</span>
    <span onClick={spani}>m</span>
    </div>
    <div className="box">
    <span >w</span>
    <span >x</span>
    <span >c</span>
    <span >v</span>
    <span >b</span>
    <span >n</span>
    </div>
    </div>
)
    const spani=(e)=>{
      WordTest(e.target.innerHTML)
    }


export default Letters