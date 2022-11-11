import { useEffect, useState } from "react"

export const LogoSection=({data}:any)=>{
    useEffect(()=>{
       const el=document.getElementById('home-logo');
            if(el){
               el.style.top='0%';
               el.style.transition="all 0.9s ease-in-out";
            }
     },[]);
    return (<div className="w-full relative mb-4">
            <div  className="relative w-full md:h-[600px] h-[300px] md:overflow-hidden">
                <div id="home-logo" className="absolute top-[15%] left-0 w-full h-full bg-url" style={{backgroundImage:`url(${data.image})`,backgroundColor:'#000000;'}}/>
                <div className="relative md:top-[140px] top-[100px]">
                    <h2 className="text-center uppercase text-white md:text-[24px] text-[20px] py-4 text-title-shadow">{data.sub_title}</h2>
                    <h1 style={{fontWeight:'600'}} className="text-center text-white md:text-[4vw] text-[30px] text-title-shadow">{data.title}</h1>
                </div>
           </div>
           <p style={{fontWeight:'600'}} className="mt-[65px] px-6 md:absolute md:bottom-24 md:left-16 relative bottom-0 left-0 md:py-0 leading-snug md:w-[30%] w-full text-[25px] md:text-[#d4cfcf] text-[#808080]">
              <strong className="font-bolder">{data.description}</strong>
           </p>
    </div>)
}
LogoSection.defaultProps={
     data:{
         sub_title:'Conseil en stratégie et management',
         title:'Execution First',
         description:"Oyster technology est un cabinet indépendant de conseil en stratégie qui accompagne ses clients dans leur dynamique de création de valeur et de performance.",
         image:'../images/home.jpg'
     }
}