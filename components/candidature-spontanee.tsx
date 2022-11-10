import { LISTCOUNTRY } from "../constants/list-country"

export const CandidatureSpontanee=({listCountry,title,image,sub_title,paraph}:any)=>{
     return (<div className="w-full h-auto z-0 bg-white flex justify-center flex-wrap">
        <div className="w-full md:h-[450px] h-[300px] bg-url flex justify-center items-center" style={{backgroundImage:`url(${image})`}}>
                <div className="relative m-auto">
                    <h1 className="first-letter:capitalize text-center text-white md:text-6xl text-3xl font-bold">{title}</h1>
                    <div className="first-letter:capitalize text-center text-gray-100 md:text-3xl text-xl py-4 font-bold">{sub_title}</div>
                </div>
         </div>
         <div className="w-full p-4 md:w-[60%] m-auto px-4">
            <div className="w-full px-auto md:my-16 my-8">
                <h3 className="py-2 md:text-[20px] text-gray-500 w-full md:text-justify text-center">{paraph}</h3>
             </div>
             <form className="w-full md:my-8 my-4">
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-[#122480] text-[18px]" htmlFor="fir_name"></label>
                          <input placeholder="Entrez votre nom" className="outline-none w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="fir_name" id="fir_name"/>
                    </div>
                    <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-[#122480] text-[18px]" htmlFor="last_name"></label>
                        <input placeholder="Entrez votre nom" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="last_name" id="last_name"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-[#122480] text-[18px]" htmlFor="email"></label>
                          <input placeholder="Entrez votre email" className="outline-none w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="email" name="email" id="email"/>
                    </div>
                    <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-[#122480] text-[18px]" htmlFor="phone_number"></label>
                        <input placeholder="Entrez votre numéro de téléphone" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="phone_number" id="phone_number"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                   <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                          <label className="w-full block text-[#122480] text-[18px]" htmlFor="country"></label>
                          <select placeholder="Entrez votre nom" className="outline-none w-full inline-block h-[40px] border-b-[1px] border-blue-900" name="country" id="country">
                               <option value=''>Pays</option>
                               {listCountry.map((value:any,index:number)=>{
                                 return (<option key={index} value={value.name}>{value.name}</option>)
                               })}
                          </select>
                    </div>
                    <div className="w-full md:w-[45%] my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-[#122480] text-[18px]" htmlFor="city"></label>
                        <input placeholder="Entrez votre ville" className="outline-none p-1 w-full inline-block h-[40px] border-b-[1px] border-blue-900" type="text" name="city" id="city"/>
                     </div>
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                    <div className="w-full my-2 flex justify-center flex-wrap">
                        <label className="w-full block text-[#122480] text-[18px]" htmlFor="cv">Cv</label>
                        <input className="outline-none p-1 w-full inline-block h-[40px]" type="file" name="cv" id="cv"/>
                    </div>
                    {/* <div className="w-[45%] my-2 flex justify-center flex-wrap">
                    </div> */}
                 </div>
                 <div className="mb-3 w-full flex justify-between flex-wrap">
                      <label className="w-full block text-[#122480] text-[18px]" htmlFor="message">Message: (facultatif)</label>
                      <textarea id="message" rows={8} className="outline-none w-full border-b-[1px] border-blue-900 p-1" placeholder="Votre message"></textarea>
                 </div>
                 <div className="mb-3 w-full flex justify-center items-center">
                    <button className="h-[45px] text-white w-full m-auto bg-[#122480] hover:bg-blue-800 rounded-md">Soumission</button>
                 </div>
             </form>
         </div>
     </div>)
}

CandidatureSpontanee.defaultProps={
   listCountry:LISTCOUNTRY,
   paraph:'Vous souhaitez nous rejoindre mais ne trouvez pas d’offre d’emploi correspondant à votre profil? Nous vous invitons à soumettre votre candidature spontanée',
   title:'candidature',
   sub_title:'spontanée',
   image:'../images/candidature-spontanee.jpg'
}