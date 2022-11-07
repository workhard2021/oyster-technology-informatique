import { CarouselScroll } from '../components/carousel-menu'
import { ItemOffres } from '../components/item-offre'
import { LogoSection } from '../components/logo'
import { HEADER_MENU } from '../constants/headers-menu'
import { Container } from '../containers/container'
import { Header } from '../containers/header'
export default function Home() {
  const EXPERTISES:any[]= HEADER_MENU.map((value)=>value.sous_menu?.map((val)=>{return {...val,expertise:value.title}}));
  const EXPERTISES_FIRST:any[]=[...EXPERTISES[0],...EXPERTISES[1]];
  const EXPERTISES_TWO:any[]=[...EXPERTISES[2],...EXPERTISES[3]];
  return (<Container title={''}>
           <Header/>
           <LogoSection/>
           <ItemOffres/>
           <CarouselScroll data={EXPERTISES_FIRST} title="Nos expertises" target_id='carousel-scroll'/>
           <CarouselScroll order={'md:order-1 md-0'} data={EXPERTISES_TWO} target_id='carousel-scroll-2'/>
  </Container>)
}
