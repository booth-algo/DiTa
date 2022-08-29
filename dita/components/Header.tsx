import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, TranslateIcon, MoonIcon  } from '@heroicons/react/solid';
import { SunIcon } from '@heroicons/react/outline';
import { useState } from "react";
import React from "react";
import router, { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {

    const [isOpen, setIsOpen] = useState(false); // responsive nav bar

    return (
        <header id="header" className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10"> 
        {/* md:px is the padding until a certain breakpoint */}
        
            {/* left */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <div className="font-bold text-3xl text-amber-600">Di</div><div className="text-3xl text-blue-500">Ta</div>&nbsp;
                <div className="font-bold text-3xl text-amber-600">滴</div><div className="text-3xl text-blue-500">踏</div>
            </div>

            {/* middle */}
            {/* <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" 
                placeholder={placeholder || "Start your search"}/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>  */}

            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                {/* see which justify is better 
                problem is when i hover over one of the buttons, the button semibolds and it moves the other buttons*/}
                {/* <div className="hidden lg:flex items-center space-x-5 px-5">
                    <button className="hover:font-semibold ease-out active:scale-90 duration-150">Home</button>

                    <button className="hover:font-semibold ease-out active:scale-90 duration-150">Services</button>

                    <button className="hover:font-semibold ease-out active:scale-90 duration-150">About</button>

                    <button className="hover:font-semibold ease-out active:scale-90 duration-150">Contact</button>
                </div> */}


                {/* <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/> */}
                    {/* <UserCircleIcon className="h-6"/> */}
                {/* </div> */}

            </div>

            {/* responsive nav bar */}
            <div id="navBar">
                <div id="items" className={isOpen && 'open'} style={{position:'absolute', right:'80px', minWidth:'400px'}}>
                    <a onClick={() => router.push("/")} >Home</a>
                    <a onClick={() => router.push("services")}>Services</a>
                    <a onClick={() => router.push("aboutUs")}>About</a>
                    <a onClick={() => router.push("contactUs")}>Contact</a>
                    &nbsp;&nbsp;
                </div>

                <div id="buttons" style={{position:'absolute', right:'-10px'}} className="flex space-x-6 justify-end text-gray-500">
                    {/* Language Icon */}
                    <button className="ease-out active:scale-90 duration-150"><TranslateIcon className="h-6"/></button> 
                    {/* Light Mode, Dark Mode */}
                    <button className="ease-out active:scale-90 duration-150"><SunIcon className="h-6"/></button>
                    <div id="navToggle" style={{transform: 'translateX(-10px)'}} className={`${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
                        <div id="bar" className="h-6"></div>
                    </div>
                </div>

            </div>

        </header>
    );

}

// remove animation when resizing
setTimeout(function(){
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });
      
    window.scrollTo(0, 100);

},200);


export default Header
