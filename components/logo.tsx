import { useEffect} from "react"

export const LogoSection=({data}:any)=>{
    useEffect(()=>{
       const el=document.getElementById('home-logo');
            if(el){
               el.style.top='0%';
               el.style.transition="all 0.9s ease-in-out";
            }
     },[]);
    return (<div className="w-full relative mb-4 overflow-hidden">
             <div className="absolute left-0 md:block hidden h-full w-[60%] trasnparent_logo_first">
             </div>
             <div className="absolute left-100 md:block hidden h-full w-full trasnparent_logo">
             </div>
            <div  className="relative w-full md:h-[600px] h-[300px] md:overflow-hidden">
                <div id="home-logo" className="absolute top-[15%] left-0 w-full h-full bg_logo_home" style={{backgroundImage:`url(${data.image})`}}/>
                <div className="relative md:top-[140px] z-10 top-[100px]">
                    <h2 className="text-center uppercase text-white md:text-[25px] text-[20px] py-4 text-title-shadow">{data.sub_title}</h2>
                    <p style={{fontWeight:'600'}} className="m-auto text-center text-white text-[18px] w-full p-2 leading-snug md:w-[50%] text-title-shadow">{data.description}</p>
                    {/* <h1 style={{fontWeight:'600'}} className="text-center text-white md:text-[4vw] text-[30px] text-title-shadow">{data.title}</h1>*/}
                </div>
           </div>
             {/*<p style={{fontWeight:'600'}} className="mt-[65px] px-4 md:absolute md:bottom-24 md:left-16 relative bottom-0 left-0 md:py-0 z-10 leading-snug md:w-[30%] w-full text-[25px] md:text-[#d4cfcf] text-[#808080]">
              <strong className="font-bold ">{data.description}</strong>
           </p>*/}
    </div>)
}
LogoSection.defaultProps={
     data:{
         sub_title:'Conseil en stratégie et management',
         titlee:'',
         description:"Oyster Technology est un cabinet de conseil en stratégie, accompagnant ses clients dans la création de valeur et la performance.",
         image:'../images/home.jpg'
     }
}