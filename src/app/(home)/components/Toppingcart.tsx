'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'


const Toppingcart = ({topping}) => {
    const [selected, setSelected] = React.useState('1')
    const isCurrentselected = selected === topping.id

  return (
    <Button onClick={()=>setSelected(topping?.id)} 
    className={cn('flex flex-col justify-between h-44' , isCurrentselected ? 'border-primary': '')} variant={'outline'}>
        <Image src={topping?.image} alt={topping?.name} width={100} height={100}/>
        <h4>{topping?.name}</h4>
        <p>₹{topping?.price}</p>
    </Button>
  )
}

export default Toppingcart