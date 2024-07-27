'use client'
import TypeIt from "typeit-react";

function Type({text, speed}){
    return(
        <TypeIt options={{
            strings : [text], 
            speed : speed, 
            waitUntilVisible: true
        }} />
    )
}

export function Nav() {
    return (
        <nav className="bg-red-900 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#jumbotron" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-md md:text-2xl font-semibold whitespace-nowrap text-white">Songket Pandai Sikek</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                        <li>
                            <a href="#jumbotron" className="block py-2 px-3  rounded md:bg-transparent hover:text-[#E0A75E] md:p-0">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 px-3 rounded hover:bg-[gray-100] md:hover:bg-transparent md:border-0 md:hover:text-[#E0A75E] md:p-0 md:dark:hover:text-[#E0A75E] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="#product" className="block py-2 px-3 text-gray-900 rounded hover:bg-[#E0A75E] md:hover:bg-transparent md:border-0 md:hover:text-[#E0A75E] md:p-0 md:dark:hover:text-[#E0A75E] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export function Jumbotron() {
    return (


        <section id="jumbotron" className="bg-center bg-no-repeat bg-cover bg-[url('minangkabau.webp')] bg-gray-700 bg-blend-multiply" >
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl" data-aos="fade-up">Pandai Sikek</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    <TypeIt
                        options={{
                            strings: ["Selamat datang Uda/Uni, website ini menyediakan informasi tentang macam macam songket pandai sikek dan dapat dipesan melalu sistem online"],
                            speed: 1, 
                            waitUntilVisible: true
                        }}
                    />
                    </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#E0A75E] hover:bg-[#F9D689] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" data-aos="fade-right">
                        Explore
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

    )
}

export function CardH() {
    return (

        <div id="about" className="flex md:h-96 md:p-5 justify-center items-center md:h-screen bg-[#973131]">
            <div class="max-w-screen-xl justify-center md:p-4 md:p-8 flex md:flex-row flex-col"  role="tabpanel" aria-labelledby="about-tab" >
                <img className="md:w-96 h-96 rounded-xl m-2" src="img/songket.webp" alt="image" />
                <div className=" bg-[#E0A75E] p-5 rounded-xl m-5 flex flex-col items-center">
                    <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-[#973131]">Songket Pandai Sikek</h2>
                    <ul className="max-w-md space-y-1 list-disc list-inside text-white h-full flex items-center">
                        <li><span className="font-bold">Desain Rumit:</span><Type text={'<br> Setiap songket merupakan karya seni dengan pola dan desain rumit, sering kali menampilkan motif tradisional yang indah dan simbolis.'} speed={1}/></li>
                        <li><span className="font-bold">Keunikan:</span><Type text={'<br>Setiap songket memiliki keunikan karena dibuat dengan tangan sehingga berbeda dengan produk yang diproduksi secara massal.'} speed={1}/></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export function Product({pic, judul, deskripsi}) {
    return (
        <div id="product" className="md:m-5 w-full my-2 md:w-[40rem] md:h-[30rem] md:p-5 items-center justify-center flex flex-col md:flex-row rounded-lg  bg-white ">
            <a href="#">
                <img className="rounded-lg md:h-96 h-96 bg-white" src={pic} alt="product image" />
            </a>
            <div className="md:p-5 p-3 md:w-96 md:h-80 w-full bg-[#E0A75E]">
                <h1 className="text-2xl font-bold text-[#973131] mb-5 border-4 border-[#E0A75E] border-b-[#973131]">{judul}</h1>
                <ul className="max-w-md ml-5 space-y-1 list-disc list-inside text-white">
                    <p>
                        {deskripsi}
                    </p>
                    {/* <li>Quality Materials: Songket is made from high-quality materials such as silk and precious metal threads, ensuring its durability and longevity.</li>
                    <li>Handcrafted: Each piece of songket is handwoven, providing a personal touch and quality that is difficult to achieve with mass production.</li> */}
                </ul>
                <div className="flex md:flex-row flex-col text-center md:justify-around items-center w-full mt-20">
                    {/* <button type="button" class=" text-2xl font-bold flex justify-center items-center text-white font-medium rounded-lg text-sm px-20 py-2.5 me-2 mb-2 dark:bg-red-900 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-blue-800">
                        Beli</button> */}
                </div>
            </div>
        </div>
    )
    
}

export function Contact(){
    return(
        <h1>Contact </h1>
    )
}

export function Footer() {
    return (


        <footer className="bg-red-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-[#E0A75E] sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Songket Pandai Sikek™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-[#E0A75E] sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}