import router from "next/dist/client/router";
import { SunIcon, MailIcon, PhoneIcon, ChatIcon, DeviceMobileIcon  } from '@heroicons/react/outline';

// language
import { useTranslation, Trans } from 'react-i18next';
import '../src/i18n'
import { t } from 'i18next'

function Footer() {
    const { t, i18n } = useTranslation()

    return (
    
    <main className="bg-gray-100 text-gray-600">

        <div className="justify-items-center grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 pt-14">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("/")} id="foot1" className="font-bold hover:scale-110 cursor-pointer uppercase"></h5>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("services")} id="foot2" className="font-bold hover:scale-110 cursor-pointer uppercase"></h5>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("aboutUs")} id="foot3" className="font-bold hover:scale-110 cursor-pointer uppercase"></h5>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("contactUs")} id="foot4" className="font-bold hover:scale-110 cursor-pointer uppercase"></h5>
            </div>

        </div>

        <div className="justify-items-center grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 pt-14">
            <button className="ease-out active:scale-90 duration-150"><MailIcon className="h-6"/></button> 
            <button className="ease-out active:scale-90 duration-150"><ChatIcon className="h-6"/></button> 
            <button className="ease-out active:scale-90 duration-150"><PhoneIcon className="h-6"/></button> 
            <button className="ease-out active:scale-90 duration-150"><DeviceMobileIcon className="h-6"/></button> 

        </div>

        <div className="justify-items-center grid grid-cols-1 gap-y-10 px-32 py-14">
            <h1>©DiTa Limousine Ltd.</h1>
        </div>


    </main>
    
    
    );
}

function footerUpdate() {
    const foots = [t("nav1"), t("nav2"), t("nav3"), t("nav4")]
    for (let i = 0; i < foots.length; i++) { 
        document.getElementById("foot"+String(i+1)).innerHTML = foots[i]
    }
}
setTimeout(function(){
    footerUpdate()
}, 200)

export default Footer;