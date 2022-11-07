import { Container } from "../containers/container";
import { About } from "../components/about";
import { Header } from "../containers/header";
export default function AdnPage(){
    return (<Container title={''}>
                <Header/>
                <About/>
    </Container>)
}
