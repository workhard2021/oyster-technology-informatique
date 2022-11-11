import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { Contact } from "../components/contact";
import { Wrapper } from "../containers/wrapper";
export default function AboutPage(){
    return (<>
            <Header/> 
               <Container>
                   <Wrapper>
                    <Contact/>
                  </Wrapper>
            </Container>
    </>)
}
