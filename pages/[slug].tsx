import { Content } from "../components/content";
import { Container } from "../containers/container";
import {GetServerSideProps } from 'next'
import { Header } from "../containers/header";
import { Teams } from "../components/teams";
import { useEffect } from "react";

export default function Article({data}:any){
    return (<Container title={''}>
             <Header/>
             <Content data={data}/>
             <Teams/>
    </Container>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let slug:string|string[]|undefined;
    if(context.params!==undefined){
       slug=context.params.slug;
    }

    const arrayData=[
        {   slug:'telecom',
            image:'../images/1.jpeg',
            title:'EXPORTISES SECTORIELLES',
            sub_title:'télécom',
            teams_title:'Nos référents en télécom',
            list_title:'Les transformations agiles permettent de répondre aux enjeux d’un écosystème en constante évolution',
            list_title_2:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise',
            list_title_3:'L’accompagnement Oyster technology repose sur une approche pragmatique et sur mesure permettant ainsi d’opérer une transition à l’agilité pérenne et alignée à vos valeurs',
            list_description:[
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'}
            ],
            title_description_2:'Oyster technology accompagne les organisations sur l’ensemble des dimensions d’une transformation Agile',
            list_description_2:[
                {title:'Transition vers une organisation orientée produit',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Piloter ses investissements',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Capitaliser sur les nouvelles technologies',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Définir les trajectoires de carrière ',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'}
            ]
        },
        {   slug:'notre-adn',
            image:'../images/2.jpeg',
            title:'EXPORTISES DE LA SOCIÉTÉ',
            sub_title:'notre adn',
            teams_title:'Nos référents en adn',
            list_title:'Les transformations agiles permettent de répondre aux enjeux d’un écosystème en constante évolution',
            list_title_2:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise',
            list_title_3:'L’accompagnement Oyster technology repose sur une approche pragmatique et sur mesure permettant ainsi d’opérer une transition à l’agilité pérenne et alignée à vos valeurs',
            list_description:[
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'}
            ],
            title_description_2:'Oyster technology accompagne les organisations sur l’ensemble des dimensions d’une transformation Agile',
            list_description_2:[
                {title:'Transition vers une organisation orientée produit',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Piloter ses investissements',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Capitaliser sur les nouvelles technologies',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Définir les trajectoires de carrière ',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'}
            ],
        },
        {   slug:'digital-factory',
            image:'../images/3.jpeg',
            title:'DIGITAL FACTORY',
            sub_title:'conseil',
            teams_title:'Nos référents en DIGITAL FACTORY',
            list_title:'Les transformations agiles permettent de répondre aux enjeux d’un écosystème en constante évolution',
            list_title_2:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise',
            list_title_3:'L’accompagnement Oyster technology repose sur une approche pragmatique et sur mesure permettant ainsi d’opérer une transition à l’agilité pérenne et alignée à vos valeurs',
            list_description:[
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Réduction du Time to market',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'}
            ],
            title_description_2:'Oyster technology accompagne les organisations sur l’ensemble des dimensions d’une transformation Agile',
            list_description_2:[
                {title:'Transition vers une organisation orientée produit',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Piloter ses investissements',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Capitaliser sur les nouvelles technologies',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'},
                {title:'Orientation client et produit',description:'Aligner l’organisation opérationnelle à travers des « value streams » orientés clients/ usagers délivrant un catalogue de produits et de services.'},
                {title:'Définir les trajectoires de carrière ',description:'Définir une organisation offrant une grande autonomie aux équipes de delivery et capitaliser sur la technologie pour accélérer le développement et l’évolution des solution'}
            ]
        },
    ]
     let data:any=arrayData.find((value)=>value.slug===slug);
     data=data?data:null;
     if(!data){
        return {
            notFound: true,
        }
     }
    return {
        props: {data}
      }
  }

