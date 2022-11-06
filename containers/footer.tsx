import Link from "next/link"
import { Fragment } from "react"
import {BsTwitter,BsLinkedin,BsFacebook} from 'react-icons/bs';

export const Footer=({newtwork,right,page}:any)=>{
    return (<footer className="w-full p-12 text-white bg-blue-900">
        <div className="w-full flex justify-evenly flex-wrap">
           <div className="md:w-[40%] w-full flex justify-around items-center md:my-auto my-3">
               {page && page.map((value:any,key:number)=>
                 <Link className="first-letter:capitalize" key={key} href={value.url}>{value.title}</Link>
               )}
           </div>
           <div className="md:w-[25%] md:order-3 order-0 w-full flex md:justify-end justify-center md:my-auto my-3 items-center space-x-5">
             {newtwork && newtwork.map((value:any,key:number)=>{
                                     return <Fragment key={key}>
                                         {value.name==='twitter'?
                                            <Link href={value.url}><BsTwitter className='inline' size={21}/></Link>
                                             :
                                               value.name==='linkedin'? 
                                               <Link href={value.url}><BsLinkedin className='inline' size={21}/></Link>
                                             :
                                               value.name==="facebook"?
                                               <Link href={value.url}><BsFacebook className='inline' size={21}/></Link>
                                             :null
                                           }
                                     </Fragment>
                                  })}
           </div>
           <div className="md:w-[25%]  w-full md:-order-1 order-0 md:text-end text-center md:my-auto my-3">
               <p className="text-sm first-letter:capitalize">{right}</p>
           </div>
        </div>
    </footer>)
}

Footer.defaultProps={
    right:'The north, all right reserved',
    page:[{url:'teams-service',title:'teams of service'},
          {url:'privacy policy',title:'privacy policy'},
          {url:'security',title:'security'},
          {url:'sitemap',title:'sitemap'},
         ],
    newtwork:[{name:'twitter',url:'https://www.twitter.com'},
          {name:'facebook',url:'https://www.twitter.com'},
         {name:'linkedin',url:'https://www..com'}
    ]
}