import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { Contact } from "../components/contact";
import { CandidatureSpontanee } from "../components/candidature-spontanee";

export default function CandidatureSpondaneePage(){
    return (<Container title={''}>
                <Header/>
                <div className="relative my-16">
                   <CandidatureSpontanee/>
                </div>
    </Container>)
}
