import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const Header = () => {
  return (
    <header className='bg-white'>
        <nav className='container w-full md:w-[700px] mx-auto py-5'>
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
            
        </nav>
    </header>
  )
}

export default Header