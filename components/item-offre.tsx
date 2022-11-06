import {BiChevronRight} from 'react-icons/bi';

type propsItemOffre={
     title:string,
     sub_title:string,
     offres:{icone:string|'',text:string}[],
}
export const ItemOffres=({data}:any)=>{
    return (<div className="relative w-full py-8">
              <div className="w-full text-center text-4xl py-8">Notre offre de services</div>
               <div className="w-full flex justify-center items-center flex-wrap">
                 {data && data.map((value:any,index:number)=>
                  <div key={index} className="relative md:w-[40%] w-full  bg-white shadow-xl shadow-gray-300 xl:h-[400px] md:h-[500px] h-[450px] m-4">
                          <div className="w-full bg-[#122480] px-8 py-7 text-white">
                               <div className="text-md font-extralight">{value.sub_title}</div>
                               <div className="text-2xl font-semibold">{value.title}</div>
                          </div>
                          <div className='w-full py-8'>
                            {value.offres && value.offres.map((val:any,index:number)=>
                               <div key={index} className="w-full py-1 px-6 font-light text-gray-800">
                                   <BiChevronRight size={20} className="inline text-gray-700 font-bold"/>
                                   <span className='px-2'>{val.text}</span>
                               </div>
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
         offres:[
            {icon:'',text:'Raison d’être, vision et roadmap'},
            {icon:'',text:'Nouvelles offres et expériences client / collaborateur'},
            {icon:'',text:'Nouveaux modèles économiques, opérationnels et organisationnels'},
            {icon:'',text:'Performance opérationnelle'},
            {icon:'',text:'Responsabilité sociétal et environnementale'},
            {icon:'',text:'Modernisation des assets technologiques'},
            {icon:'',text:'Gouvernance du SI'},
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
        { title:'Coaching d’organisation',
          sub_title:'Nos champs d’intervention',
          offres:[
            {icon:'',text:'Agilité stratégique, opérationnelle et technologique (transition agilité à l’échelle)'},
            {icon:'',text:'Coaching d’équipes (build / operate / transfer, autonomisation)'},
            {icon:'',text:'Innovation managériale'}
          ]
        },
        { title:'Coaching d’organisation',
          sub_title:'Nos champs d’intervention',
          offres:[
            {icon:'',text:'Marque employeur'},
            {icon:'',text:'Académie de formation'},
            {icon:'',text:'Talent management (programme manager, obsession client, filières métiers, parcours experts, hauts potentiels, soft skills…)'}
          ]
        },
     ]
}