import Link from "next/link"
import {BsFacebook,BsTwitter,BsLinkedin,BsTelephone} from 'react-icons/bs'
import {FaFax} from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';
import {SiYoutubestudio} from 'react-icons/si';

export const Contact=({data}:any)=>{
     return (<div className="w-full py-[60px] h-auto z-0 flex m-auto justify-center flex-wrap">
          <h2 className="w-full m-auto text-center mb-[65px]">Nous contacter</h2>
         <div className="w-full flex justify-center flex-wrap m-auto md:w-[70%]">
             <form className="w-full m-auto">
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-[#122480] text-[18px]" htmlFor="email"></label>
                          <input placeholder="Entrez votre email" className="outline-none w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="email" name="email" id="email"/>
                    </div>
                    <div className="w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-[#122480] text-[18px]" htmlFor="name"></label>
                        <input placeholder="Entrez votre nom" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="name" id="name"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                      <label className="w-full block text-[#122480] text-[18px]" htmlFor="message"></label>
                      <textarea id="message" rows={8} className="outline-none w-full border-b-[1px] border-blue-900 p-1" placeholder="Votre message"></textarea>
                 </div>
                 <div className="mb-3 w-full flex justify-center items-center">
                    <button className="h-[45px] text-white w-full m-auto bg-[#122480] rounded-md">Soumission</button>
                 </div>
             </form>
             <div className="w-full m-auto py-8">
                <p className="font-bold py-2 text-[#8a8a8a]">Le texte généré est du pseudo latin et peut donner l&lsquo;impression d&lsquo;être du vrai texte</p>
                <p className="py-2 text-[#8a8a8a]">Si vous aimez la photographie d&apos;art et l&apos;esprit zen, jetez un œil sur le site de ce photographe à Palaiseau, en Essonne (Maroc).</p>
             </div>
         </div>
          {/* item contacts */}
         <div className="relative py-8 w-full md:w-[70%] flex justify-center items-center flex-wrap">
              <div className="w-full z-0 h-[125px] absolute top-0 left-0 bg-[#122480] shadow-md"></div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <HiOutlineLocationMarker size={40} className="inline-block text-[#122480]"/>
                     <div className="text-md font-bold w-full py-2 text-[#122480]">Notre bureau principal</div>
                     <p className="w-full text-gray-500">{process.env.NEXT_PUBLIC_ADDRESS}</p> 
                </div>
              </div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <BsTelephone size={40} className="inline-block text-[#122480]"/>
                     <div className="text-md font-bold w-full py-2 text-[#122480]">Numéro de téléphone</div>
                     <p className="w-full text-gray-600">{process.env.NEXT_PUBLIC_TEL}</p> 
                </div>
              </div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <AiOutlineMail size={40} className="inline-block text-[#122480]"/>
                     <div className="text-md  font-bold w-full py-2 text-[#122480]">Email</div>
                     <p className="w-full text-gray-600">{process.env.NEXT_PUBLIC_EMAIL}</p> 
                </div>
              </div>
         </div>
     </div>)
}