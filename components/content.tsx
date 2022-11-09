export const Content=({data}:any)=>{
    return (<div className="relative w-full m-auto mb-16 ">
      <div className="relative w-full md:h-[400px] h-[350px] flex justify-end m-auto">
            <div className="absolute z-0 top-0 left-0 w-full h-full bg-url" style={{backgroundImage:`url(${data.image})`}}/>
      </div>
      <div className="relative w-full xl:w-[70%] md:w-[90%] m-auto">
        <div className="relative md:w-[40%] w-[90%] md:bottom-24 bottom-16 md:h-[200px] h-[150px] rounded-sm bg-blue-900 shadow-md mx-auto z-10 flex justify-center items-center">
                <div className="w-full ">
                    <p className="w-full text-[24px] text-center text-white py-4 first-letter:capitalize">{data.title}</p>
                    <h2 className="w-full md:text-[48px] text-[30px]  text-center text-gray-100 m-auto py-2 first-letter:capitalize">{data.sub_title}</h2>
                </div>
        </div>
        {/* detail */}
        <div className="w-full p-6 py-0">
              <p className="text-[#231942] font-fontWeightBig md:text-[30px] text-[20px] leading-snug text-center md:w-[60%] w-full  m-auto">
                 {data.list_title_3}
              </p>
        </div>
        <div className="p-6 w-full m-auto md:my-16 my-9 flex justify-around items-center flex-wrap space-y-3">
            <div className="md:w-[40%] m-auto w-full text-[#545454">
               <p className="text-[16px] font-extrabold w-full mb-1">
                 {data.list_title_4} 
               </p>
               <div className="w-full md:pl-16 pl-8">
                 {data.list_description.map((value:any,key:number)=>{
                    return (<li className="text-[16px]"  key={key}>
                           <span className="pr-1 font-extrabold">{value.title} </span>
                           <span>{value.description}</span>
                   </li>)
                })}
               </div>
            </div>
            <p className="md:w-[40%] text-center md:text-[24px] text-[20px] font-fontWeightBig m-auto text-[#231942] w-full">
              {data.list_title_3}
            </p>
        </div>
        <div className="md:p-16 p-8 md:w-full w-[90%] shadow-2xl bg-white md:m-auto my-4 m-auto flex justify-center items-stretch flex-wrap">
            <div className="m-auto w-full md:w-[70%]">
              <p className="w-full md:text-[35px] text-[22px] font-bold text-center text-[#231942]">Notre champ d’intervention</p>
              <p className="m-auto py-6 w-full md:w-[80%] md:text-[24px] text-[18px] text-[#983098] font-bold text-center">{data.title_description_2}</p>
              <div className="w-full pb-8 text-[#545454]">
              {data.list_description_2.map((value:any,key:number)=>{
                 return (<div className="text-[16px]]" key={key}>
                           <span className="pr-1 font-extrabold">{value.title}:</span>
                           <span>{value.description}</span>
                 </div>)
               })}
              </div>
            </div>
        </div>
      </div>
    </div>)
}
