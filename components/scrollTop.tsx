import { useEffect, useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs"

export const ScrollTop=()=>{
  const [scroll,setScroll]=useState(0);
  const scrollTopPage=(e:any)=>{
        e.preventDefault();
        window.scroll({
            top:0,
            left:0,
            behavior: 'smooth'
        });
  }
  useEffect(()=>{
      const el=document.getElementsByClassName('scroll-top');
      let a:number=0;
      if(window){
        window.addEventListener('scroll',function(){
            a= window.pageYOffset;
            setScroll(a);
        });
      }
      if(el){
          for(let e of el){
             if(e.offsetTop<=scroll){
                  e.style.opacity="1";
                  e.style.transition="opacity 0.8s ease-in-out";
             }else{
                e.style.opacity="0";
                e.style.transition="opacity 0.8s ease-in-out";
             }
          }
      }
  },[scroll]);
    return (<div className="w-full fixed top-[80%] h-0 flex justify-end right-[3%] scroll-top">
             <div onClick={(e)=>scrollTopPage(e)} className="cursor-pointer md:w-[60px] md:h-[60px] w-[40px] h-[40px] flex justify-center rounded-full items-center bg-blue-300">
                  <BsChevronDoubleUp className="inline" size={30}/>
             </div>
    </div>)
}