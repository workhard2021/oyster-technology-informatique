import Link from "next/link"

export const ListMetier=({data}:any)=>{
    return (<div className="relative m-auto py-8 px-4">
          <div className="w-full py-2 text-center">
              <div className="font-light text-4xl text-blue-900 py-4">NOS METIER</div>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {data && data.map((value:any,index:number)=>{
             return <Link href={`/${value.slug}`} key={index} className="hover_scale_nos_idee  md:w-[300px] w-full bg-white border-2 border-gray-900  md:h-[440px] block shadow-md m-4">
                    <div className="md:h-[200px] h-[180px] w-full bg-url" style={{backgroundImage:`url(${value.image})`}} />
                    <div className="w-full p-4">
                         <div className="py-3 text-blue-900 font-light text-2xl">{value.name}</div>
                         <div className="tex-gray-500 text-md">{value.sub_title}</div>
                    </div>
              </Link>
           })}
          </div>
    </div>)
}