import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

export type Product={
    id:string;
    name:string;
    description:string
    img:string;
    price:number
}

type PropsType={
    product: Product
}

const Productcard = ({product}:PropsType) => {
  return (
    <Card className='border-none rounded-xl w-[250px]'>
        <CardHeader className='flex items-center justify-center'>
            <Image src={product?.img} alt='pizza-image' width={150} height={150}/>
        </CardHeader>
        <CardContent>
            <h2 className='text-xl font-bold'>{product?.name}</h2>
            <p className='text-sm font-medium'>{product?.description}</p>
        </CardContent>
        <CardFooter className='flex items-center justify-between'>
            <p>Price: <span className='font-bold'>₹{product?.price}</span></p>
            <Button size={'sm'}>Choose</Button>
        </CardFooter>
    </Card>
  )
}

export default Productcard