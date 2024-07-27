'use client'
import { CardH, Jumbotron, Product } from "./component";


export default function Home() {
  return (
    <>
    <Jumbotron/>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <CardH />
    <hr id="product" class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <h1  className="md:text-5xl text-2xl text-[#973131] text-center font-bold md:my-5">Get Now!</h1>
    <div className="flex flex-wrap justify-center my-10 md:flex-row flex-col">
    <Product pic={'img/product.jpg'}/>
    <Product pic={'img/songket2.jpg'}/>
    <Product pic={'img/white.jpg'}/>
    <Product pic={'img/songket-white.jpg'}/>
    </div>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
}
