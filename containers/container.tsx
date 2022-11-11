import { ItemsContacts } from "../components/ItemsContacts"
import { ScrollCloud } from "../components/scrollCloud"
import { ScrollTop } from "../components/scrollTop"
import { Footer } from "./footer"
import { Seo } from "./Seo"
type propsConaitner={
      children:JSX.Element|JSX.Element[],
}
export const Container=({children}:propsConaitner)=>{
    return (<><Seo/>
        <div className={`relative w-full m-auto`}>
            {children}
            <ItemsContacts/>
            <ScrollCloud/>
            <Footer/>
        </div>
        <ScrollTop />
    </>)
}
