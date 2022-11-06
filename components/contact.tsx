import Link from "next/link"
import {BsFacebook,BsTwitter,BsLinkedin,BsTelephone} from 'react-icons/bs'
import {FaFax} from 'react-icons/fa';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';
import {SiYoutubestudio} from 'react-icons/si';

export const Contact=({data}:any)=>{
     return (<div className="w-full my-8 h-auto z-0 bg-white flex justify-center flex-wrap">
         
         {/* form and social network */}
         <div className="w-full h-aut p-4 flex justify-center flex-wrap">
             <form className="md:w-[45%] w-full md:my-16 my-8">
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-blue-900 text-[18px]" htmlFor="email">Email</label>
                          <input placeholder="Entrez votre email" className="outline-none w-full inline-block h-[40px] border-b-[1px] border-gray-800" type="email" name="email" id="email"/>
                    </div>
                    <div className="w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-blue-900 text-[18px]" htmlFor="name">Nom</label>
                        <input placeholder="Entrez votre nom" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-gray-800" type="text" name="name" id="name"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                      <label className="w-full block text-blue-900 text-[18px]" htmlFor="message">Message</label>
                      <textarea id="message" rows={8} className="outline-none w-full border-b-[1px] border-gray-800 p-1" placeholder="Votre message"></textarea>
                 </div>
                 <div className="mb-3 w-full flex justify-center items-center">
                    <button className="h-[45px] text-white w-full m-auto bg-blue-800 rounded-md">Soumission</button>
                 </div>
             </form>
             <div className="md:w-[45%] w-full md:px-12 px-auto md:my-16 my-8">
                <div className="text-2xl py-2 font-extrabold w-full text-blue-900">Entrer en contact</div>
                <p className="font-bolder py-2 font-medium text-gray-700">Le texte généré est du pseudo latin et peut donner l&lsquo;impression d&lsquo;être du vrai texte</p>
                <p className="py-2 text-sm text-gray-500">Si vous aimez la photographie d&apos;art et l&apos;esprit zen, jetez un œil sur le site de ce photographe à Palaiseau, en Essonne (France).</p>
                <div className="w-full flew justify-center items-center">
                  <Link href="/">
                         <BsFacebook className="inline-block m-2 text-blue-800" size={25}/>
                  </Link>
                  <Link href="/">
                         <BsLinkedin className="inline-block m-2 text-blue-800" size={25}/>
                  </Link>
                  <Link href="/">
                         <BsTwitter className="inline-block m-2 text-blue-800" size={25}/>
                  </Link>
                  <Link href="/">
                         <SiYoutubestudio className="inline-block m-2 text-blue-800" size={25}/>
                  </Link>
                </div>
             </div>
         </div>
          {/* item contacts */}
          <div className="relative py-8 w-full flex justify-center items-center flex-wrap">
              <div className="w-full z-0 h-[125px] absolute top-0 left-0 bg-blue-800 shadow-md"></div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <HiOutlineLocationMarker size={40} className="inline-block text-blue-800"/>
                     <div className="text-md font-bold w-full py-2 text-blue-900">Notre bureau principal</div>
                     <p className="w-full text-gray-500">Casablanca rue 3436 maroc</p> 
                </div>
              </div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <BsTelephone size={40} className="inline-block text-blue-800"/>
                     <div className="text-md font-bold w-full py-2 text-blue-900">Numéro de téléphone</div>
                     <p className="w-full text-gray-600">+212759856793</p> 
                </div>
              </div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <FaFax size={40} className="inline-block text-blue-800"/>
                     <div className="text-md font-bold w-full py-2 text-blue-900">Fax </div>
                     <p className="w-full text-gray-600">+212759856793</p> 
                </div>
              </div>
              <div className="m-2 z-10 md:h-[230px] h-[240px] w-[44%] p-2 break-all md:w-[230px] bg-white text-center shadow-lg rounded-md flex items-center justify-center flex-wrap">
                <div className="m-auto">
                      <AiOutlineMail size={40} className="inline-block text-blue-800"/>
                     <div className="text-md  font-bold w-full py-2 text-blue-900">Email</div>
                     <p className="w-full text-gray-600">exemple@gmail.com</p> 
                </div>
              </div>
         </div>
     </div>)
}