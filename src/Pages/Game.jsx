import React, { useState } from 'react'
import baba from '../assests/images/baba.gif';
import firehero from '../assests/images/firehero.gif';
import dancer from '../assests/images/dancer.gif';


export default function Game() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Rightface, setRightface] = useState(true);
  const [character, setCharacter] = useState(baba);
  
  const rightFunction = () => {
    setPosition({ ...position, x: position.x + 20 });
    setRightface(true);
  }
  const leftFunction = () => {
    setPosition({ ...position, x: position.x - 20 });
    setRightface(false);
  }
  return (
    <div className="w-[100vw] h-[100vh] game_screen ">
      <div className='h-[500px] w-[900px] mb-3 rounded-md bg-shadow m-auto overflow-hidden relative'>
        <img src={character} className='h-40' style={{ marginLeft: position.x, marginTop: position.y, transform: Rightface ? '' : 'scaleX(-1)' }} />
        <select  onChange={e=> setCharacter(e.target.value)} className="w-[200px] h-5 select absolute right-2 top-2 ">
          <option disabled selected>Choose your character saaar!!</option>
          <option value={baba}>baba</option>
          <option value={firehero}>firehero</option>
          <option value={dancer}>dancer</option>
        </select>
      </div>
      <div className='flex justify-center'><i onClick={() => { setPosition({ ...position, y: position.y - 20 }) }} className="text-6xl fi fi-ss-angle-square-up" ></i>
      </div>

      <div className='flex justify-center gap-x-14 x-direction'>
        <i onClick={leftFunction} className="text-6xl fi fi-ss-angle-square-left"></i>
        <i onClick={rightFunction} className="text-6xl fi fi-ss-angle-square-right"></i>
      </div>
      <div className='flex justify-center'><i onClick={() => { setPosition({ ...position, y: position.y + 20 }) }} className="text-6xl fi fi-ss-angle-square-down"></i></div>
    </div>
  )
}
