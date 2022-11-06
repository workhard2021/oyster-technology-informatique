export const Content=({data}:any)=>{
    return (<div className="relative w-full m-auto bg-gray-50">
        <div className="relative w-full md:h-[400px] h-[350px] flex justify-end m-auto">
            <div className="absolute z-0 top-0 left-0 w-full h-full bg-url" style={{backgroundImage:`url(${data.image})`}}/>
        </div>
        <div className="relative md:w-[40%] w-[90%] md:bottom-24 bottom-16 md:h-[200px] h-[150px] rounded-sm bg-white shadow-md mx-auto z-10 flex justify-center items-center">
                <div className="w-full">
                    <div className="w-full text-center text-2xl md:text-3xl text-blue-900 font-bold py-4 first-letter:capitalize">{data.title}</div>
                    <div className="text-2xl w-full text-center font-extralight text-gray-500 m-auto py-2 first-letter:capitalize">{data.sub_title}</div>
                </div>
        </div>
        {/* detail */}
        <div className="p-8 w-full md:w-[100%] m-auto mb-32 flex justify-around items-center flex-wrap space-y-10">
            <div className="w-full pb-32">
              <p className="text-blue-900 text-center md:w-[50%] w-full text-3xl m-auto">
                 {data.list_title_3}
              </p>
            </div>
           <div className="md:w-[35%] w-full">
              {data.list_description.map((value:any,key:number)=>{
                 return (<div className="text-gray-600 text-[16px]" key={key}>
                           <span className="pr-1 font-extrabold text-blue-900 ">{value.title}:</span>
                           <span>{value.description}</span>
                 </div>)
              })}
           </div>
           <p className="md:w-[35%] text-blue-900  w-full text-2xl">
              {data.list_title_3}
           </p>
        </div>
        <div className="p-8 w-[100%] md:w-[65%]  h-auto shadow-2xl bg-white m-auto mb-32 flex justify-center items-stretch flex-wrap">
            <div className="m-auto w-full md:w-[70%]">
              <p className="w-full py-4 text:text-4xl text-3xl font-bold text-center">Notre champ d’intervention</p>
              <p className="m-auto py-6 w-full md:w-[75%] text-xl text-blue-900 font-bold text-center">{data.title_description_2}</p>
              <div className="w-full pb-8">
              {data.list_description_2.map((value:any,key:number)=>{
                 return (<div className="text-gray-700 text-[16px]" key={key}>
                           <span className="pr-1 font-extrabold text-blue-900">{value.title}:</span>
                           <span>{value.description}</span>
                 </div>)
               })}
              </div>
            </div>
        </div>
    </div>)
}
