import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
            <Dialog>
                <DialogTrigger>
                    <Button size={'sm'}>Choose</Button>
                </DialogTrigger>
                <DialogContent className='max-w-3xl p-0'>
                    <div className='flex'>
                        <div className='w-1/3 bg-gray-200 rounded p-7 flex items-center justify-center'>
                            <Image src={product?.img} alt={product?.name} width={200} height={200}/>
                        </div>
                        <div className='w-2/3 p-7'>
                            <h2 className='text-xl font-bold'>{product?.name}</h2>
                            <p className='text-sm font-medium'>{product?.description}</p>
                            <div>
                            <h4 className='mt-3'>Choose the size</h4>
                            <RadioGroup defaultValue="card" className="grid grid-cols-3 mt-2 gap-4">
                                <div>
                                    <RadioGroupItem
                                    value="small"
                                    id="small"
                                    className="peer sr-only"
                                    aria-label="small"
                                    />
                                    <Label
                                    htmlFor="small"
                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-gray-200 p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    Small
                                    </Label>
                                </div>

                                <div>
                                    <RadioGroupItem
                                    value="medium"
                                    id="medium"
                                    className="peer sr-only"
                                    aria-label="medium"
                                    />
                                    <Label
                                    htmlFor="medium"
                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-gray-200 p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    Medium
                                    </Label>
                                </div>

                                <div>
                                    <RadioGroupItem
                                    value="large"
                                    id="large"
                                    className="peer sr-only"
                                    aria-label="large"
                                    />
                                    <Label
                                    htmlFor="large"
                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-gray-200 p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    Large
                                    </Label>
                                </div>
                            </RadioGroup>
                            </div>
                            <div>
                            <h4 className='mt-3'>Choose the crust</h4>
                            <RadioGroup defaultValue="card" className="grid grid-cols-3 mt-2 gap-4">
                                <div>
                                    <RadioGroupItem
                                    value="thin"
                                    id="thin"
                                    className="peer sr-only"
                                    aria-label="thin"
                                    />
                                    <Label
                                    htmlFor="thin"
                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-gray-200 p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    Thin
                                    </Label>
                                </div>

                                <div>
                                    <RadioGroupItem
                                    value="thick"
                                    id="thick"
                                    className="peer sr-only"
                                    aria-label="thick"
                                    />
                                    <Label
                                    htmlFor="thick"
                                    className="flex flex-col items-center justify-between rounded-md border-2 bg-gray-200 p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                    >
                                    Thick
                                    </Label>
                                </div>
                            </RadioGroup>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </CardFooter>
    </Card>
  )
}

export default Productcard