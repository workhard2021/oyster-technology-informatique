import Link from 'next/link';
import { useEffect, useState } from 'react';
import {BiChevronRight} from 'react-icons/bi';

export const ItemOffres=({data}:any)=>{
  const [scroll,setScroll]=useState(0);
  useEffect(()=>{
      const el=document.getElementsByClassName('visible-transition');
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
             }
          }
      }
  },[scroll]);
  return (<div className="relative w-full m-auto p-2 mb-[65px]">
               <h2 className="relative w-full text-center mb-[65px] font-fontWeightBig opacity-0 visible-transition">Notre offre de services</h2>
               <div className="relative w-full flex justify-center items-start flex-wrap">
                 {data && data.map((value:any,index:number)=>
                  <div key={index} className="relative md:w-[45%] w-full bg-white shadow-xl shadow-gray-300 pb-8 m-4 opacity-0 md:h-[450px] h-auto visible-transition">
                          <div className="w-full bg-[#122480] px-8 py-8">
                                <p className="text-white  md:text-[16px] text-[15px]">{value.sub_title}</p>
                                <h3 className="text-white md:text-[25px] text-[20px]">{value.title}</h3>
                                <div className='absolute top-[2%] md:block md:top-[4%] right-8 md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-url rounded-full' style={{backgroundImage:`url(${value.image})`}}/>
                          </div>
                          <div className='w-full py-9'>
                            {value.offres && value.offres.map((val:any,index:number)=>
                               <p key={index} className="w-full py-2 px-6 font-[400]">
                                   <BiChevronRight size={20} className="inline"/>
                                   <span className='px-2'>{val.text}</span>
                               </p>
                            )}
                          </div>
                     </div>
                 )}
               </div>
    </div>)
}

ItemOffres.defaultProps={
     data:[
        {title:'Conseil',
         sub_title:'Nos champs d’intervention',
         image:'../images/conseil.webp',
         offres:[
            {icon:'',text:'Raison d’être, vision et roadmap'},
            {icon:'',text:'Nouvelles offres et expériences client / collaborateur'},
            {icon:'',text:'Nouveaux modèles économiques, opérationnels et organisationnels'},
            {icon:'',text:'Performance opérationnelle'},
            {icon:'',text:'Responsabilité sociétal et environnementale'},
            {icon:'',text:'Modernisation des assets technologiques'},
            // {icon:'',text:'Gouvernance du SI'},
            ]
        },
        { title:'Direction de programme',
          sub_title:'Nos champs d’intervention',
          image:'../images/direction-programme.webp',
          offres:[
            {icon:'',text:'Cadrage stratégique, rationalisation des investissement'},
            {icon:'',text:'Pilotage valeur / effort des transformations business to IT'},
            {icon:'',text:'Lean Portfolio Management'},
            {icon:'',text:'Product management'},
            {icon:'',text:'Gestion de la Data'},
         ]
        },
        
        // { title:'Coaching d’organisation',
        //   sub_title:'Nos champs d’intervention',
        //   offres:[
        //     {icon:'',text:'Agilité stratégique, opérationnelle et technologique (transition agilité à l’échelle)'},
        //     {icon:'',text:'Coaching d’équipes (build / operate / transfer, autonomisation)'},
        //     {icon:'',text:'Innovation managériale'}
        //   ]
        // },
        // { title:'Coaching d’organisation',
        //   sub_title:'Nos champs d’intervention',
        //   offres:[
        //     {icon:'',text:'Marque employeur'},
        //     {icon:'',text:'Académie de formation'},
        //     {icon:'',text:'Talent management (programme manager, obsession client, filières métiers, parcours experts, hauts potentiels, soft skills…)'}
        //   ]
        // },
     ]
}