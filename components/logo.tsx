export const LogoSection=({data}:any)=>{
    return (<div className="w-full z-0 relative mb-4">
           <div className="w-full md:h-[600px] h-[300px] bg-url" style={{backgroundImage:`url(${data.image})`}}>
                <div className="relative md:top-[140px] top-[100px]">
                    <div className="text-center uppercase text-gray-100 md:text-2xl text-xl py-4 font-bold text-title-shadow">{data.sub_title}</div>
                    <div className="text-center text-white md:text-5xl text-3xl font-bold text-title-shadow">{data.title}</div>
                </div>
           </div>
           <p className="px-6 md:absolute md:bottom-24 md:left-16 relative bottom-0 left-0 md:py-0 py-2 md:w-[35%] w-full md:text-gray-200 text-gray-400 text-xl font-lihgt">{data.description}</p>
    </div>)
}
LogoSection.defaultProps={
     data:{
         sub_title:'Conseil en stratégie et management',
         title:'Execution First',
         description:"Oyster technology est un cabinet indépendant de conseil en stratégie qui accompagne ses clients dans leur dynamique de création de valeur et de performance.",
         image:'../images/2.jpeg'
     }
}