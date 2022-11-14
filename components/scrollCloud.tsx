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
        <h2 className="w-full text-center text-[#231942] mb-[35px] text-[35px] m-auto">{title}</h2>
        <div className="md:w-[50%] w-full text-center m-auto mb-[10px]">{sub_title}</div>
        <div className="relative py-4 m-auto">
        <div className="md:w-[80%] bg-white m-auto flex justify-center items-center flex-wrap">
             {/* <div id='scroll-parteners' className="container-carousel-scrolls flex justify-center items-center flex-wrap"> */}
                {data && data.map((value:any, index:any) => {
                 return <div key={index} className='bg-white m-2 p-4 flex justify-center items-center md:w-[30%] w-[30%] h-[95px]'>
                    <div className="relative h-full w-full  bg-url-partenaire" style={{backgroundImage:`url(${avatarFn(value.image)})`}} />
                  </div>
               })}
            </div>
        {/* </div> */}
        {/* <div className="relative w-[150px] py-4 m-auto flex z-20  h-0 rounded-md justify-between items-center">
            <button onClick={(e) => prevImage(e)} className="p-1 px-2 rounded-md outline-none relative text-xl"><BiChevronLeft className="inline" size={40}/></button>
            <button onClick={(e) => nextImage(e)} className="p-1 px-2 rounded-md outline-none relative text-xl"><BiChevronRight className="inline" size={40}/></button>
        </div> */}
    </div>
 </div>)
}

ScrollCloud.defaultProps={
        data:[
           {id:1,image:'../images/partenaires/carrefour.png'},
        //    {id:1,image:'../images/partenaires/orange.webp'},
           {id:1,image:'../images/partenaires/ista.png'},
           {id:1,image:'../images/partenaires/rsi.png'},
           {id:1,image:'../images/partenaires/orange-logo.png'},
           {id:1,image:'../images/partenaires/telecom.png'},
        ],
        title:'Ils nous font confiance',
        sub_title:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise, des inquiétudes quant à la sécurité doivent être soulevées'
}