import React from 'react'
import Slider from '../Slider'
import { SwiperSlide } from 'swiper/react'

export default function IconsList() {
    const icon_list = [
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-people-poll"></i>,
            title: 'People poll'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-shopping-basket"></i>,
            title: 'Shopping basket'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-bolt"></i>,
            title: 'Bolt'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-gift-card"></i>,
            title: 'Gift card'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-hands-heart"></i>,
            title: 'Heart'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-calendar-clock"></i>,
            title: 'Calendar & Clock'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-people-poll"></i>,
            title: 'People poll'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-shopping-basket"></i>,
            title: 'Shopping basket'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-bolt"></i>,
            title: 'Bolt'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-gift-card"></i>,
            title: 'Gift card'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-hands-heart"></i>,
            title: 'Heart'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-calendar-clock"></i>,
            title: 'Calendar & Clock'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-people-poll"></i>,
            title: 'People poll'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-shopping-basket"></i>,
            title: 'Shopping basket'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-bolt"></i>,
            title: 'Bolt'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-gift-card"></i>,
            title: 'Gift card'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-hands-heart"></i>,
            title: 'Heart'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-calendar-clock"></i>,
            title: 'Calendar & Clock'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-people-poll"></i>,
            title: 'People poll'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-shopping-basket"></i>,
            title: 'Shopping basket'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-bolt"></i>,
            title: 'Bolt'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-gift-card"></i>,
            title: 'Gift card'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-hands-heart"></i>,
            title: 'Heart'
        },
        {
            icon: <i className="text-2xl hover:text-airstay-red fi fi-ts-calendar-clock"></i>,
            title: 'Calendar & Clock'
        }
        
    ]
    return (
        <div className='my-6'>
            <Slider>
                {icon_list.map((icons, index) => 
                   <SwiperSlide key={index}>
                        <div className="flex flex-col items-center pb-2 hover:border-b-2 border-light ">
                            {icons.icon}
                            <h1 className="text-sm">{icons.title}</h1>
                        </div>                        
                    </SwiperSlide>
                )}
            </Slider>
        </div>
    )
}
