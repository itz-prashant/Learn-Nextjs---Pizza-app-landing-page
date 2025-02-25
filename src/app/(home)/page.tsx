import { Button } from "@/components/ui/button";
import Image from "next/image";
import pizza from '../../assets/pizza.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Productcard, { Product } from "./components/Productcard";


const products:Product[] = [
  {
    id:'1',
    name:'Margarita',
    description:'This is veg pizza',
    img: pizza,
    price:500
  },
  {
    id:'2',
    name:'Margarita',
    description:'This is veg pizza',
    img: pizza,
    price:500
  },
  {
    id:'3',
    name:'Margarita',
    description:'This is veg pizza',
    img: pizza,
    price:500
  },
  {
    id:'4',
    name:'Margarita',
    description:'This is veg pizza',
    img: pizza,
    price:500
  },
  {
    id:'5',
    name:'Margarita',
    description:'This is veg pizza',
    img: pizza,
    price:500
  },
] 

export default function Home() {
  return (
    <>
      <section>
        <div className='container flex items-center justify-between w-full md:w-[900px] mx-auto py-20'>
          <div>
            <h1 className="text-5xl font-black leading-2">
              Super delicious Pizza in <br/>
              <span className="text-primary">Only 45 minutes</span>
            </h1>
            <p className="text-2xl mt-7 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-6 px-5 font-medium">
              Get your pizza now 
            </Button>
          </div>
          <div>
            <Image src={pizza} alt="pizza-main" width={300} height={300}/>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <div className="container w-full mx-auto md:w-[900px] py-10">
            <Tabs defaultValue="pizza" className="w-fit">
            <TabsList>
              <TabsTrigger className="text-md" value="pizza">Pizza</TabsTrigger>
              <TabsTrigger className="text-md" value="beverages">Beverages</TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="flex flex-wrap gap-4">
              {
                products?.map(product=>(
                  <Productcard key={product.id} product={product}/>
                ))
              }
              </div>
            </TabsContent>
            <TabsContent value="beverages">
            <div className="flex flex-wrap gap-4">
              {
                products?.map(product=>(
                  <Productcard key={product.id} product={product}/>
                ))
              }
            </div>  
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
