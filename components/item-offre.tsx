import Link from 'next/link';
import {BiChevronRight} from 'react-icons/bi';

type propsItemOffre={
     title:string,
     sub_title:string,
     offres:{icone:string|'',text:string}[],
}
export const ItemOffres=({data,presentation}:any)=>{
    return (<div className="relative w-full m-auto p-2 mb-[65px]">
                <div className='relative w-full mb-[35px] flex justify-between flex-wrap'>
                  <div className='xl:w-[30%] xl:px-[50px] px-5 my-[20px]  px-auto w-full'>
                       <p className='w-full'>{presentation.title}</p>
                  </div>
                  <div className='xl:w-[30%] xl:px-[50px] px-5 my-[20px] px-auto text-center w-full'>
                     <Link href={presentation.slug} className='inline font-bold m-auto w-[100px] px-6 text-center py-2 rounded-2xl bg-[#231942] text-white uppercase'>Je découvre</Link>
                  </div>
                  <div className='xl:w-[30%] xl:px-[50px] px-5 my-[20px] px-auto w-full'>
                       <h3 className='text-[#231942] pb-[15px] font-fontWeightBig'>{presentation.name}</h3>
                       <p >{presentation.sub_title}</p>
                  </div>
              </div>
               <h2 className="w-full text-center mb-[65px] font-fontWeightBig">Notre offre de services</h2>
               <div className="w-full flex justify-center items-start flex-wrap">
                 {data && data.map((value:any,index:number)=>
                  <div key={index} className="relative md:w-[45%] w-full bg-white shadow-xl shadow-gray-300 md:h-[450px] h-auto pb-8 m-4">
                          <div className="w-full bg-[#122480] px-8 py-8">
                                <p className="text-white  md:text-[16px] text-[15px]">{value.sub_title}</p>
                                <h3 className="text-white md:text-[25px] text-[20px]">{value.title}</h3>
                                <div className='absolute top-[2%] md:block hidden md:top-[4%] right-8 md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-url' style={{backgroundImage:`url(${'../images/1.jpeg'})`}}/>
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
      presentation:{title:'Fondé en 2016, Maestis mobilise aujourd’hui plus de 60 consultants, aux compétences pluridisciplinaires, pour accompagner ses clients dans la réflexion stratégique et pour définir une méthode d’exécution pilotée par la valeur.',
          slug:'/notre-adn',
          name:'Notre mission',
          sub_title:'Faire émerger des solutions qui font consensus, parce qu’elles sont exécutables et de les déployer de la manière la plus efficiente possible.',
      },
     data:[
        {title:'Conseil',
         sub_title:'Nos champs d’intervention',
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