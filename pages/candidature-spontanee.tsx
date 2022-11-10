import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { CandidatureSpontanee } from "../components/candidature-spontanee";
import { Wrapper } from "../containers/wrapper";

export default function CandidatureSpondaneePage(){
    return (<>
             <Header/>
             <Container>
             <Wrapper>
                 <CandidatureSpontanee/>
             </Wrapper>
           </Container>
    </>)
}
