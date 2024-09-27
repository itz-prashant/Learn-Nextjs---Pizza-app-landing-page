import { Button } from "@/components/ui/button";
import Image from "next/image";
import pizza from '../../assets/pizza.png'

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
    </>
  );
}
