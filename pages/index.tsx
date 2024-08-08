import Link from 'next/link'
import { CarouselScroll } from '../components/carousel-menu'
import { ItemOffres } from '../components/item-offre'
import { LogoSection } from '../components/logo'
import { HEADER_MENU } from '../constants/headers-menu'
import { Container } from '../containers/container'
import { Header } from '../containers/header'
import { Wrapper } from '../containers/wrapper'
export default function Home() {
  const EXPERTISES:any[]= HEADER_MENU.map((value)=>value.sous_menu?.map((val)=>{return {...val,expertise:value.title}}));
  const EXPERTISES_FIRST:any[]=[...EXPERTISES[1]];
  const EXPERTISES_TWO:any[]=[...EXPERTISES[2]];
  return (<><Header/>
            <LogoSection/>
            <Container>
               <Wrapper>
                    <Entreprise/>
                    <ItemOffres/>
               </Wrapper>
              <div className='mb-[100px]'>
                 <CarouselScroll data={EXPERTISES_TWO} title="Nos expertises" target_id='carousel-scroll'/>
                 <CarouselScroll order={'md:order-1 md-0'} data={EXPERTISES_FIRST} target_id='carousel-scroll-2'/>
              </div>
            </Container>
  </>)
}

const Entreprise=({presentation}:any)=>{
      if(!presentation) return  null;
      return (<div className='relative w-full mb-[35px] flex justify-between md:flex-nowrap flex-wrap'>
      <div className='xl:pl-[40px] my-[20px]  px-auto w-full'>
           <p className='w-full'>{presentation.title}</p>
      </div>
      <div className='xl:px-[40px]  my-[20px] px-auto text-center w-full'>
         <Link href={presentation.slug} className='inline font-bold text-sm text-md m-auto w-[100px] px-6 text-center py-2 rounded-2xl bg-[#231942] text-white uppercase'>Je découvre</Link>
      </div>
      <div className='xl:pl-[40px] my-[20px] px-auto w-full'>
           <h3 className='text-[#231942] pb-[15px] font-fontWeightBig'>{presentation.name}</h3>
           <p >{presentation.sub_title}</p>
      </div>
  </div>)
}
Entreprise.defaultProps={
  presentation:{
     title:'Fondé en 2016, Oyster technology mobilise aujourd’hui plus de 60 consultants, aux compétences pluridisciplinaires, pour accompagner ses clients dans la réflexion stratégique et pour définir une méthode d’exécution pilotée par la valeur.',
    //  slug:'/notre-adn',
    slug:'/nos-valeurs',
     name:'Notre mission',
    sub_title:'Faire émerger des solutions qui font consensus, parce qu’elles sont exécutables et de les déployer de la manière la plus efficiente possible.',
  },
}
