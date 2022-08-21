import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, TranslateIcon, MoonIcon  } from '@heroicons/react/solid';
import { SunIcon } from '@heroicons/react/outline';
import { useState } from "react";
import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Calendar } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {

    // const renderThemeChanger = () => {
    //     return(
    //         <Button>
    //             <SunIcon className="h-6"/>
    //             <MoonIcon className="h-6"/>

    //         </Button>
    //     )
    // };


    

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {

        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);

    };

    const resetInput = () => {
        setSearchInput("");

    };

    const search = () => {
        router.push({
            pathname: '/search',
            // query parameters
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        });
    }

    const selectionRange = {
        startDate: startDate, 
        endDate: endDate, 
        key: 'selection'
    };

    const [isOpen, setIsOpen] = useState(false); // responsive nav bar

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10"> 
        {/* md:px is the padding until a certain breakpoint */}
        
            {/* left */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                {/* <Image 
                    // DiTa picture here 
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                /> */}
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
                <div id="items" className={isOpen && 'open'} style={{position:'absolute', right:'100px', minWidth:'400px', textAlign:'right'}}>
                    <a onClick={() => router.push("/")} >Home</a>
                    <a onClick={() => router.push("services")}>Services</a>
                    <a onClick={() => router.push("aboutUs")}>About</a>
                    <a onClick={() => router.push("contactUs")}>Contact</a>
                    &nbsp;&nbsp;
                </div>

                <div style={{position:'absolute', right:'10px'}} className="flex space-x-6 justify-end text-gray-500">
                    {/* Language Icon */}
                    <button className="ease-out active:scale-90 duration-150"><TranslateIcon className="h-6"/></button> 
                    {/* Light Mode, Dark Mode */}
                    <button className="ease-out active:scale-90 duration-150"><SunIcon className="h-6"/></button>
                    <div id="navToggle" className={isOpen && 'open'} onClick={() => setIsOpen(!isOpen)}>
                        <div id="bar" className="h-6"></div>
                    </div>
                </div>

            </div>

            {searchInput && 
                <div className="flex flex-col
                col-span-3 mx-auto">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

                        <UsersIcon className="h-5" />
                        <input 
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type="number" 
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400"/>

                    </div>

                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400">Search</button>
                        {/* Redirecting */}
                    </div>
                </div>
            
            }

        </header>
    );

}

export default Header
