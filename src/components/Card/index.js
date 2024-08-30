import React from 'react'
import Modal from '../Modal'
import { Link } from 'react-router-dom';

export default function Card({card}) {
    const {name, description, imageUrl, price, live, priceCurrency} = card;
    return (
        <>
        <Link to='/about' className="w-[300px] block overflow-hidden">
        <div className='h-[300px] w-[300px] rounded-xl mb-4 bg-airstay-red relative overflow-hidden'>
            <img className='absolute object-cover w-full h-full' src={imageUrl} alt={name} />
            <div className='flex p-4'>
                { live && <button className='px-4 rounded-full py-[2px] bg-shadow/80 z-20'> Live </button>}
                <button className='h-[28px] ms-auto flex items-center justify-center w-[28px] rounded-full bg-shadow/80 hover:bg-neutral-50 hover:scale-[1.1] transition-all z-20' onClick={() => document.getElementById('my_modal_2').showModal()}>
                    <i className="mt-1 fi fi-rr-share"></i>
                </button>
            </div>
        </div>
            <h1> {name} </h1>
            <p className='text-light'>{description}</p>
        <p> {priceCurrency}{price} per person </p>
        </Link>
        <Modal classNames="h-[400px] max-w-[600px]" modal_id="my_modal_2">
                    <h3 className="text-5xl font-bold">Hello!</h3>
                    <p className="py-4">Let's share the data</p>
        </Modal>
        </>
    )
}
