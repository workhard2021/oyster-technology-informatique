import { ItemsContacts } from "../components/ItemsContacts"
import { ScrollCloud } from "../components/scrollCloud"
import { Footer } from "./footer"
type propsConaitner={
      children:JSX.Element|JSX.Element[],
      width:string|null,
}
export const Wrapper=({children,width="w-full xl:w-[85%]"}:propsConaitner)=>{
    return (<>
        <div className={`m-auto ${width}`}>
            {children}
        </div>
    </>)
}
