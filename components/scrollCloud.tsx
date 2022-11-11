import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { avatarFn } from "../libs/utils";

export const ScrollCloud = ({data,title,sub_title}:any) => {
    const nextImage = (e:any)=>{
        e.preventDefault();
        const el=document.getElementById('scroll-partener');
        if(el){
            el.scrollBy({
              top:0,
              left:240,
              behavior: 'smooth'
           });
        }
    }
    const prevImage = (e:any) => {
        e.preventDefault();
        const el = document.getElementById('scroll-partener');
        if(el){
            el.scrollBy({
                top:0,
               left:-240,
               behavior: 'smooth'
            });
        }
    }
    if(data && data.length===0) return null;
    return (<div className="w-full p-4">
         <div id="partenaire"></div>
        <h2 className="w-full text-center text-[#122480] mb-[35px] text-[25px] md:text-[35px] m-auto">{title}</h2>
        <div className="md:w-[50%] w-full text-center m-auto mb-[10px]">{sub_title}</div>
        <div className="relative py-4 m-auto">
        <div className="md:w-[65%] w-[98%] m-auto">
            <div id='scroll-partener' className="container-carousel-scroll">
                {data && data.map((value:any, index:any) => {
                 return <div key={index} className='item-partener p-3 mx-1'>
                    <div className="relative flex justify-center items-center w-full h-full bg-url" style={{backgroundImage:`url(${avatarFn(value.image)})`}} />
                  </div>
               })}
            </div>
        </div>
        <div className="relative w-[150px] py-4 m-auto flex z-20  h-0 rounded-md justify-between items-center">
            <button onClick={(e) => prevImage(e)} className="p-1 px-2 rounded-md outline-none relative text-xl"><BiChevronLeft className="inline" size={40}/></button>
            <button onClick={(e) => nextImage(e)} className="p-1 px-2 rounded-md outline-none relative text-xl"><BiChevronRight className="inline" size={40}/></button>
        </div>
    </div>
 </div>)
}

ScrollCloud.defaultProps={
        data:[
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
           {id:1,image:'../images/microsoft.png'},
        ],
        title:'Ils nous font confiance',
        sub_title:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise, des inquiétudes quant à la sécurité doivent être soulevées'
}