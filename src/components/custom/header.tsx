import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import Link from 'next/link'
import { Phone, ShoppingBasket } from 'lucide-react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='bg-white'>
        <nav className='container w-full md:w-[900px] flex items-center justify-between mx-auto py-5'>
            <div className='flex items-center space-x-4'>
                <span>LoGo</span>
                <Select>
                    <SelectTrigger className="w-[180px] focus:ring-0">
                        <SelectValue placeholder="Select Restaurant" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="chessy-delight">Xheesy Delight</SelectItem>
                        <SelectItem value="pizza-hut">Pizza Hut</SelectItem>
                        <SelectItem value="kids-corner">kids Corner</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex items-center gap-x-4'>
                <ul className='flex items-start font-medium space-x-4'>
                    <li><Link className='hover:text-primary' href={'/'}>Menu</Link></li>
                    <li><Link className='hover:text-primary' href={'/'}>Orders</Link></li>
                </ul>
                <div className='relative'>
                    <Link href={'/cart'}><ShoppingBasket className='hover:text-primary'/></Link>
                    <span className='absolute -top-3 -right-3 h-5 w-5 flex items-center justify-center rounded-full bg-primary text-sm font-bold text-white'>
                        3
                    </span>
                </div> 
                <div className='flex items-center gap-x-2 ml-5'>
                    <Phone />
                    <span>+91 9336000032</span>
                </div>
                <Button size={'sm'}>Logout</Button>
            </div>
        </nav>
    </header>
  )
}

export default Header