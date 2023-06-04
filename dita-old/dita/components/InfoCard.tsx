import React from 'react'
import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import { ST } from 'next/dist/shared/lib/utils'

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className='flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
    transition duration-200 ease-out
    first:border-t'> 
    {/* first - only adds top border for first infocard */}
        

    </div>
  )
}

export default InfoCard