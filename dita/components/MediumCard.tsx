import Image from "next/image";
import React from "react";

function MediumCard() {

    return (

        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            
            <div className="relative h-80 w-80">
                {/* <Image src= layout="fill" className="rounded-xl" /> */}
            </div>

            <h3 className="text-2xl mt-3">"Wonders of the world"</h3>

        </div>
    )
}

export default MediumCard;