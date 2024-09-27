'use client'

import React from 'react'
import paneer from '../../../assets/paneer.png'
import olive from '../../../assets/olive.png'
import cheese from '../../../assets/cheese.png'
import Toppingcart from './Toppingcart'


const toppings = [
    {id:'1', name:'Paneer', image:paneer, price:50, isAvailable:true },
    {id:'1', name:'Olive', image:olive, price:50, isAvailable:true },
    {id:'1', name:'Cheese', image:cheese, price:50, isAvailable:true },
]

const ToppingList = () => {

  return (
    <section className='mt-4'>
        <h3>Extra Toppings</h3>
        <div className='grid grid-cols-3 gap-4 mt-3'>
            {
                toppings.map(topping=>(
                    <Toppingcart topping={topping} key={topping?.id} />
                ))
            }
        </div>
    </section>
  )
}

export default ToppingList