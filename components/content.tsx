export const Content=({data}:any)=>{
    return (<div className="relative w-full m-auto mb-16">
        <div className="relative w-full md:h-[400px] h-[350px] flex justify-end m-auto">
            <div className="absolute z-0 top-0 left-0 w-full h-full bg-url" style={{backgroundImage:`url(${data.image})`}}/>
        </div>
      <div className="relative w-full md:w-[90%] m-auto">
        <div className="relative md:w-[40%] w-[90%] md:bottom-24 bottom-16 md:h-[200px] h-[150px] rounded-sm bg-blue-900 shadow-md mx-auto z-10 flex justify-center items-center">
                <div className="w-full ">
                    <div className="w-full text-center text-2xl  md:text-3xl text-white font-bold py-4 first-letter:capitalize">{data.title}</div>
                    <div className="md:text-3xl text-xl w-full text-center font-extralight text-gray-100 m-auto py-2 first-letter:capitalize">{data.sub_title}</div>
                </div>
        </div>
        {/* detail */}
        <div className="w-full p-6 py-0">
              <p className="text-gray-900 text-center md:w-[50%] w-full text-xl md:text-3xl m-auto">
                 {data.list_title_3}
              </p>
        </div>
        <div className="p-6 w-full m-auto md:my-16 my-9 flex justify-around items-center flex-wrap space-y-3">
            <div className="md:w-[40%] m-auto w-full text-[16px]">
               <p className="text-gray-800 w-full mb-1">
                 {data.list_title_4} 
               </p>
               <div className="w-full">
                 {data.list_description.map((value:any,key:number)=>{
                    return (<div className="text-gray-600" key={key}>
                           <span className="pr-1 font-extrabold text-gray-800 ">{value.title}:</span>
                           <span>{value.description}</span>
                   </div>)
                })}
               </div>
            </div>
            <p className="md:w-[40%] m-auto text-gray-900 w-full text-xl md:text-2xl">
              {data.list_title_3}
            </p>
        </div>
        <div className="p-6 w-[95%] md:w-[90%] shadow-2xl bg-white md:m-auto my-4 m-auto flex justify-center items-stretch flex-wrap">
            <div className="m-auto w-full md:w-[70%]">
              <p className="w-full py-4 text:text-4xl text-3xl font-bold text-center text-blue-900">Notre champ d’intervention</p>
              <p className="m-auto py-6 w-full md:w-[80%] text-xl text-gray-900 font-bold text-center">{data.title_description_2}</p>
              <div className="w-full pb-8">
              {data.list_description_2.map((value:any,key:number)=>{
                 return (<div className="text-gray-700 text-[16px]" key={key}>
                           <span className="pr-1 font-extrabold text-gray-800">{value.title}:</span>
                           <span>{value.description}</span>
                 </div>)
               })}
              </div>
            </div>
        </div>
      </div>
    </div>)
}
