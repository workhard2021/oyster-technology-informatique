import { Container } from "../containers/container";
import { Header } from "../containers/header";
import { NosValeur } from "../components/nos-valeur";
export default function NosValeurPage(){
    return (<Container title={''}>
                <Header/>
                <NosValeur/>
    </Container>)
}
