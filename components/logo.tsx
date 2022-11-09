export const LogoSection=({data}:any)=>{
    return (<div className="w-full z-0 relative mb-4">
           <div className="w-full md:h-[600px] h-[300px] bg-url" style={{backgroundImage:`url(${data.image})`}}>
                <div className="relative md:top-[140px] top-[100px]">
                    <h2 className="text-center uppercase text-[#231942] md:text-[20px] text-[18px] py-4 text-title-shadow">{data.sub_title}</h2>
                    <h1 style={{fontWeight:'600'}} className="text-center text-[#231942] md:text-[3vw] text-title-shadow">{data.title}</h1>
                </div>
           </div>
          <p style={{fontWeight:'600'}} className="mt-[65px] px-6 md:absolute md:bottom-24 md:left-16 relative bottom-0 left-0 md:py-0 leading-snug md:w-[30%] w-full text-[25px] text-[#808080]">
              <strong className="font-bolder">{data.description}</strong>
          </p>
    </div>)
}
LogoSection.defaultProps={
     data:{
         sub_title:'Conseil en stratégie et management',
         title:'Execution First',
         description:"Oyster technology est un cabinet indépendant de conseil en stratégie qui accompagne ses clients dans leur dynamique de création de valeur et de performance.",
         image:'../images/1.jpeg'
     }
}