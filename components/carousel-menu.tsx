import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const CarouselScroll = ({data,title,order='',target_id='carousel-scroll'}:any) => {
    const [scroll,setScroll]=useState(0);
    const nextImage = (e:any) => {
        e.preventDefault();
        const el=document.getElementById(target_id);
        let position:any=document.getElementById('size-position');
        position=position?.clientWidth;
        if(el)
        el.scrollBy({
            top:0,
            left:position,
            behavior:'smooth'
        });
    }

    const prevImage = (e:any) => {
        e.preventDefault();
        const el = document.getElementById(target_id);
        let position:any=document.getElementById('size-position');
        position=position?.clientWidth;
        if(el)
        el.scrollBy({
            top:0,
            left:-position,
            behavior: 'smooth'
        });
    }

    useEffect(()=>{

      const el=document.getElementsByClassName('visible-transition-carousel') as HTMLCollectionOf<HTMLElement>;
      let val:number=0;
      if(window){
        window.addEventListener('scroll',function(){
            val= window.pageYOffset;
            setScroll(val);
        });
      }
      if(el){
          for(let e of el){
                if(e.offsetTop<=scroll){
                    e.style.opacity="1";
                    e.style.transition="opacity 0.8s ease-in-out";
                }
          }
      }
   },[scroll]);

    if(data && data.length===0) return null;
    return (<div className='w-full relative opacity-0 visible-transition-carousel h-auto'>
      {title &&<h2 className='mb-[65px] text-center first-letter:capitalize text-[#231942]'>{title || ''}</h2>}
      <div className="relative overflow-hidden h-[320px] w-full bg-blue-100">
        <div className='bg_url_partenaire top-0 left-0 absolute w-full h-full' style={{backgroundImage:`url(${'../images/s.png'})`}}/>
        <div className="absolute top-0 left-0 h-full md:w-[90%] md:left-[5%] w-full flex z-10 -translate-y-10 rounded-md">
           <div className=' w-[100%] h-0 m-auto flex justify-between'>
              <button onClick={(e) => prevImage(e)} className="py-2 relative text-blue-800"><BiChevronLeft className='inline-block' size={70}/></button>
              <button onClick={(e) => nextImage(e)} className="py-2 relative text-blue-800"><BiChevronRight className='inline-block' size={70}/></button>
           </div>
        </div>
        <div id={target_id} className='absolute left-0 top-0 flex justify-start items-center overflow-hidden  m-auto w-full h-full'>
            {data && data.map((value:any,index:number) => {
                return <Link href={value.url} id="size-position" key={index} className='relative min-w-[100%] h-full flex justify-between items-center'>
                    <div className='relative h-full md:w-[90%] w-[78%] m-auto bg-white'>
                       <div className="relative w-full h-full flex justify-center items-center flex-wrap">
                         <div className={`${order} h-full md:w-[50%] lg:w-[50%] xl:w-[50%] xl:relative lg:relative md:relative w-full absolute z-1 bg-url`} style={{backgroundImage:`url(${value.image})`}}/>
                         <div className={`h-full md:bg-white  bg-[rgba(0,0,0,0.4)] m-auto md:w-[50%] lg:w-[50%] xl:w-[50%] xl:relative lg:relative  md:relative w-full absolute z-2 text-center flex justify-center items-center flex-col`}>
                                <span className='md:text-[20px] text-[18px] inline-block md:mb-[15px] mb-[8px] uppercase md:text-[#545454] text-gray-200'>{value.expertise}</span>
                                <h3 className='first-letter:capitalize md:text-[45px] text-[30px] md:text-[#4c475a] text-gray-200'>{value.title}</h3> 
                         </div>
                       </div>
                    </div>
                </Link>
            })}
        </div>
    </div>
  </div>)
}


