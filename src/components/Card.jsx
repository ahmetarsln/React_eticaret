import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/actions/card'


const Card = () => {
  const dispatch = useDispatch()
  const {cardItems} = useSelector(state => state.cardItems);

  const deleteCard =(id) => {
    dispatch(removeCart(id))
  }
  return (
    <div className='w-1/3 h-full fixed top-0 right-0 z-50 bg-white p-4'>
      <div className='flex item-center h-20 justify-between'> 
        <h1 className="text -2xl">SEPETİM</h1>
        <AiOutlineClose onClick={()=> dispatch({type: 'DRAWER', payload: false})} size={25} className='cursor-pointer'></AiOutlineClose>
      </div>

      {
        cardItems?.map((card, i)=>(
          <div key={i} className='h-28 flex items-center justify-between py-4 mt-5'>
            <img className='h-24' src={card?.image} alt="" />
            <div className='w-44'>
              <div className='font-bold text-sm'>{card?.title} ({card?.qty})</div>
              <div className='opacity-70 texxt-xs'>{(card?.description).substring(0,45)}</div>
            </div>
            <div className='font-bold text-lg'>{card?.price} TL</div>
            <div onClick={()=>deleteCard(card.id)}className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
          </div>
        ))
      }
    </div>
  )
}

export default Card