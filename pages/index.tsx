import { CarouselScroll } from '../components/carousel-menu'
import { CloudLogo } from '../components/cloud-logo'
import { Articles } from '../components/item-articles'
import { ItemOffres } from '../components/item-offre'
import { ItemsContacts } from '../components/ItemsContacts'
import { LogoSection } from '../components/logo'
import { ReseauAndContact } from '../components/reseaux-contact'
import { Teams } from '../components/teams'
import { HEADER_MENU } from '../constants/headers-menu'
import { Container } from '../containers/container'
import { Footer } from '../containers/footer'
import { Header } from '../containers/header'
export default function Home() {
  const EXPERTISES:any[]= HEADER_MENU.map((value)=>value.sous_menu?.map((val)=>{return {...val,expertise:value.title}}));
  const EXPERTISES_FIRST:any[]=[...EXPERTISES[0],...EXPERTISES[1]];
  const EXPERTISES_TWO:any[]=[...EXPERTISES[2],...EXPERTISES[3]];
  return (<Container title={''}>
           <Header/>
           <LogoSection/>
           <ReseauAndContact/>
           <ItemOffres/>
           <Articles/>
           <CarouselScroll data={EXPERTISES_FIRST} target_id='carousel-scroll'/>
           <CarouselScroll order={'md:order-1 md-0'} data={EXPERTISES_TWO} target_id='carousel-scroll-2'/>
           <Teams/>
  </Container>)
}