import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { Contact } from "../components/contact";
export default function AboutPage(){
    return (<Container title={''}>
                <Header/>
                <div className="relative my-16">
                   <Contact/>
                </div>
    </Container>)
}
