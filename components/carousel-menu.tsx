import Link from 'next/link';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const CarouselScroll = ({data,title,order='',target_id='carousel-scroll'}:any) => {
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
    if(data && data.length===0) return null;
    return (<div className="relative w-full bg-[#c4cbf1]">
        <div className='bg-url_teams absolute w-full h-full' style={{backgroundImage:`url(${'../images/4.jpeg'})`}}/>
        {title &&<p className='font-medium text-md text-start first-letter:capitalize text-gray-500'>{title || ''}</p>}
        <div className="absolute top-1/2 w-full flex z-10 pt-0 h-0 rounded-md justify-between items-center">
            <button onClick={(e) => prevImage(e)} className="md:text-2xl  py-2 rounded-md outline-none relative text-gray-400"><BiChevronLeft size={100}/></button>
            <button onClick={(e) => nextImage(e)} className="md:text-2xl  py-2 rounded-md outline-none relative text-gray-400 text-xl"><BiChevronRight size={100}/></button>
        </div>
        <div id={target_id} className='flex justify-start items-center overflow-hidden m-auto md:h-[360px] xl:h-[450px] h-[300px] relative'>
            {data && data.map((value:any, index:number) => {
                return <Link href={value.url} id="size-position" key={index} className='relative min-w-[100%] h-full flex justify-between items-center'>
                    <div className='relative h-full md:w-[80%] w-[90%] m-auto border-x-[1px] border-gray-700 bg-white'>
                       <div  className="relative w-full h-full flex justify-center items-center flex-wrap">
                         <div className={`${order} md:h-full h-[50%] md:w-[50%] w-full  bg-url`} style={{backgroundImage:`url(${value.image})`}}/>
                         <div className='w-full md:h-auto h-[50%] md:w-[50%] text-center'>
                             <div className='text-xl w-full font-thin py-3 text-gray-900'>{value.expertise}</div>
                             <div className='w-full text-3xl font-bold'>{value.title}</div> 
                         </div>
                       </div>
                    </div>
                </Link>
            })}
        </div>
    </div>)
}


