import Image from "next/image";
import router from "next/router";

// language
import React from "react";
import { useTranslation, Trans } from 'react-i18next';
import '../src/i18n'


// hero component
function Banner() {
    const { t, i18n } = useTranslation()

    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src ="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm font-semibold md:text-xl lg:text-2xl">{t("bannerTitle", "Premium HK-Macau Limousine")}</p>
                <button onClick={() => router.push("booking")} className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold 
                my-3 hover:shadow-xl active:scale-90 transition duration-150">{t("bannerBookButton", "Book now")}</button>

            </div>
        </div>
    )

}

export default Banner;