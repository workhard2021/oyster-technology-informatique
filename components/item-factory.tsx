import { AiFillCheckCircle } from "react-icons/ai";
import { ListMetier } from "./listeMetie";
export const ItemFactory=({data,title}:any)=>{
    if((!data) || (data && data.length===0)){return null}
    return (<div className="relative w-full p-4 my-4 mx-auto">
                {title? <p className="w-full m-auto text-gray-700  text-xl text-center ">{title}</p>:null}
                <div className="z-0 w-1 flex justify-center items-center relative top-[3%] left-[50%] bg-blue-900 rounded-t-full h-[90px]">
                     <div className=" absolute w-[15px] h-[15px] m-auto rounded-full bg-green-500">
                     </div>
                </div>
                 <div className="z-10 relative  flex flex-wrap w-full m-auto p-5 my-0 bg-[rgba(0,0,0,0.7)] text-white rounded-md shadow-xl">
                     {data && data.map((value:any, index:number)=>{
                         return <div key={index}  className="w-full text-[19px] h-auto p-2">
                                <div className="w-full">
                                     <AiFillCheckCircle className="inline-block text-green-500" size={25}/> 
                                     <p className="p-2 inline-block first-letter:capitalize">{value.title}</p>
                                </div>
                         </div>
                     })}
                  </div>
                  <div className="z-0 w-1 flex justify-center items-center relative top-[3%] left-[50%] bg-blue-900 rounded-b-full h-[90px]">
                     <div className=" absolute w-[15px] h-[15px] m-auto rounded-full bg-green-500">
                     </div>
                  </div>
    </div>);
}

export const FastoryContainer=({metier,data,title,title_2,data_2,image,name}:any)=>{
    return(<div className="w-full md:w-[80%] m-auto py-4 ">
            <h1 className="auto md:text-5xl py-6 mt-7 text-2xl text-center w-full text-blue-900">{name}</h1>
            <div className="w-full flex justify-between flex-wrap">
               <div className="md:w-[50%] w-full">
                   <ItemFactory data={data} title={title}/>
                   <ItemFactory data={data_2} title={title_2}/>
               </div>
               <div className="md:w-[50%] h-auto w-full flex justify-center items-start">
                   <div className="mx-auto w-[450px] h-[300px] bg-url" style={{backgroundImage:`url(${image})`}}/>
               </div>
            </div>
            <ListMetier data={metier}/>
    </div>)
}
