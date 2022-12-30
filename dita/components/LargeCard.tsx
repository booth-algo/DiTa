import Image from 'next/image'
import router, { useRouter } from "next/dist/client/router";
import { useState } from "react";
import React from "react";

// language
import { useTranslation, Trans } from 'react-i18next';
import '../src/i18n'

function LargeCard({img}) {
    const { t, i18n } = useTranslation()

    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image 
                src={img} 
                layout="fill" 
                objectFit='cover' 
                className='rounded-2xl'/>
            </div>
            <div className='absolute top-32 left-12'>
                <h3 className='text-4xl mb-3 w-64'>{t("largeCardTitle", "About Us")}</h3>
                <p>{t("largeCardDescription", "Fastest, Greatest, Smoothest")}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5
                    hover:shadow-xl active:scale-90 transition duration-150'
                    onClick={() => router.push("aboutUs")}>
                    {t("largeCardButton", "Learn more")}
                </button>

            </div>
        </section>
    )
}

export default LargeCard;