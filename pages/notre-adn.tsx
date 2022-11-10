import { Container } from "../containers/container";
import { About } from "../components/about";
import { Header } from "../containers/header";
import { Wrapper } from "../containers/wrapper";
export default function AdnPage(){
    return (<>
              <Header/>
              <Container>
                <Wrapper>
                  <About/>
                 </Wrapper>
              </Container>  
    </>)
}
