import { ItemsContacts } from "../components/ItemsContacts"
import { ScrollCloud } from "../components/scrollCloud"
import { Footer } from "./footer"
import { Seo } from "./Seo"

type propsConaitner={
      title:string|null,
      children:JSX.Element|JSX.Element[]
}
export const Container=({children,title}:propsConaitner)=>{
    return (<>
        <Seo/>
        <div className="w-full">
            {children}
            <ScrollCloud/>
            <ItemsContacts/>
            <Footer/>
        </div>
    </>)
}
