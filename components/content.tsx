export const Content=({data}:any)=>{

    return (<div className="relative w-full m-auto mb-16 bg-white">
      <div className="relative w-full m-auto">
        <div className="w-full py-0">
              <p className="text-[#231942] font-fontWeightBig md:text-[30px] text-[20px] leading-snug text-center md:w-[60%] w-full  m-auto">
                 {data.list_title_3}
              </p>
        </div>
        <div className="w-full m-auto md:py-16 py-8 flex justify-around items-center flex-wrap space-y-3">
            <div className="md:w-[50%] text-[16px] m-auto w-full text-[#545454]">
               <p className="font-extrabold w-full mb-1">
                  {data.list_title_4} 
               </p>
               <div className="w-full md:pl-8 pl-6">
                 {data.list_description.map((value:any,key:number)=>{
                    return (<li key={key}>
                           <span className="pr-1 font-extrabold leading-10">{value.title} </span>
                           <span>{value.description}</span>
                   </li>)
                })}
               </div>
            </div>
            <p className="md:w-[50%] text-center md:text-[24px] text-[22px] font-fontWeightBig p-8 m-auto text-[#231942] w-full">
                {data.list_title_3}
            </p>
        </div>
        <div className="md:p-16 p-8 shadow-2xl md:m-auto my-4 m-auto flex justify-center items-stretch flex-wrap">
              <p className="w-full md:text-[30px] text-[20px] font-bold text-center text-[#231942]">Notre champ d’intervention</p>
              <p className="m-auto py-6 w-full md:w-[80%] md:text-[24px] text-[18px] text-[#983098] font-bold text-center">{data.title_description_2}</p>
              <div className="w-full pb-8 text-[#545454]">
              {data.list_description_2.map((value:any,key:number)=>{
                 return (<div className="text-[16px] leading-10" key={key}>
                           <span className="pr-1 font-extrabold">{value.title}:</span>
                           <span>{value.description}</span>
                 </div>)
               })}
              </div>
        </div>
      </div>
    </div>)
}
