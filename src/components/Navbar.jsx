import React, {useEffect, useState} from 'react'
import {BsBasketFill, BsLightbulb, BsMoonStarsFill } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchAction } from '../redux/actions/search';

const Navbar = () => {
  const [color, setColor] =useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cardItems} = useSelector(state => state.cardItems);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const root =document.getElementById('root');
    if(color){
      root.style.backgroundColor = "black";
      root.style.color ="gray";
    }else {
      root.style.backgroundColor = "white";
      root.style.color ="black";
    }
  },[color])
  const searchPost = (e) => {
    if(e.key === 'Enter'){
      dispatch(searchAction(search))
    }
  }

  return (
    <div className='flex items-center justify-between px-3 h-28'>
        <button onClick={() =>navigate(-1)} className='text-2xl font-bold tracking-wider '>LOGO</button>
        <div className='flex items-center space-x-4'>
            <input value={search} onKeyPress={searchPost} onChange= {e => setSearch(e.target.value)} className='border p-3 outline-none rounded-lg' type="text" placeholder="search" />
            <div onClick={() => setColor(!color)}> 
              {
                  color ? <BsMoonStarsFill size={25} className="cursor-pointer" /> : <BsLightbulb size={25} className="cursor-pointer"></BsLightbulb>
              }
            
            </div>
            <div onClick={()=>dispatch({type:'DRAWER', payload: true})}className='relative'>
                <BsBasketFill size={25} className="cursor-pointer"></BsBasketFill>
                <span className='absolute -top-0 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>{cardItems?.length}</span>
            </div>
        </div>
    </div>

  )
}

export default Navbar