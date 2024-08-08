import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from "react"
import { AiOutlineDown } from 'react-icons/ai';
import {BiChevronRight} from 'react-icons/bi';

export const HeaderDesktop=({data,logo}:any)=>{
    const route=useRouter();
    const [currentImage,setCurrentImage]=useState('../images/1.jpeg');
    const changeImage=(e:any,currentImage:string)=>{
        e.preventDefault();
        setCurrentImage(currentImage);
    }
    return (<nav className="hidden lg:flex shadow-sm shadow-blue-200 justify-around w-full">
      <div className="md:w-[20%] xl:w-[30%] w-full flex justify-center items-center">
          <div className="cursor-pointer text-white md:w-[60%] w-[50%] md:h-[80px]">
                 <div onClick={()=>route.push(process.env.NEXT_PUBLIC_HOME||'/')}  className="w-full h-full bg-url-logo" style={{backgroundImage:`url(${logo})`}} />
          </div>
      </div>
      <div className="md:w-[70%] xl:w-[70%] w-full flex justify-center items-center">
        {data && data.map((value:any,index:number)=>{
           return <Fragment key={index}>
               <div  className="menu-remove menu inline-block text-[#231942] hover:text-red-600 text-[17px] h-auto md:mx-[12px] mx-[12px] uppercase font-normal">
               {value.url!=='/'?<Link className="whitespace-nowrap" href={value.url}>{value.title}</Link>
               :
                 <span className="whitespace-nowrap hover:text-red-600 transition-all duration-75 cursor-pointer" onMouseEnter={(e)=>changeImage(e,value.sous_menu[0]?.image)}>{value.title} <AiOutlineDown className='inline' /></span>
               }
               {value.sous_menu &&<div id={`menu_${index+1}`} className="py-12 sub_menu absolute md:h-[400px] w-[80%] left-[10%] flex">
                   <div className="relative w-full h-full flex p-0 bg-white shadow-md">
                      <div className="w-[50%] h-full flex flex-col p-12">
                      {value.sub_title?<div className="text-gray-500 font-thin py-3 mb-2">{value.sub_title}</div>:null}
                        {value.sous_menu && value.sous_menu.map((val:any,key:number)=>
                          val.url!==''?<div key={key} className="leading-8 font-normal uppercase flex justify-between text-[#231942]" onClick={()=>route.push(val.url)}>
                              <span onMouseEnter={(e)=>changeImage(e,val.image||'')} className="cursor-pointer hover:text-red-600">{val.title}</span>
                              <span className="btn_navigation"><BiChevronRight className="text-red-600" size={25}/></span> 
                         </div>
                         :
                         //  ancres
                         <div key={key} className="my-1 text-[16px] cursor-pointer uppercase flex justify-between">
                              <span  onMouseEnter={(e)=>changeImage(e,val.image||'')} className="cursor-pointer hover:text-red-600">{val.title}</span>
                              <span className="btn_navigation"><BiChevronRight className="text-red-600" size={25}/></span>
                         </div>
                        )}
                      </div>
                      <div className="changeImage w-[50%] relative h-full bg-url" style={{backgroundImage:`url(${currentImage})`}} />
                   </div>
                   </div>
               }
              </div>
            </Fragment>
         })} 
      </div>
     </nav>)
}