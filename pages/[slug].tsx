import { Content } from "../components/content";
import { Container } from "../containers/container";
import {GetServerSideProps } from 'next'
import { Header } from "../containers/header";
import { FactoryContainer } from "../components/item-factory";
export default function Article({data,metier,slug}:any){
    const METIER:string[]=['digital-factory','conseil','digital-transformation'];
    if(METIER.includes(slug)){
        return (<Container title={''}>
             <Header/>
             <FactoryContainer image={data.image} metier={metier} data={data.data} data_2={data.data_2} title={data.title} title_2={data.title_2} name={data.name}/>
       </Container>)
    }
    return (<Container title={''}>
             <Header/>
            <Content data={data}/>
          
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
            title:'EXPERTISES SECTORIELLES',
            sub_title:'télécom',
            teams_title:'Nos référents en télécom',
            list_title:'Les transformations agiles permettent de répondre aux enjeux d’un écosystème en constante évolution',
            list_title_2:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise',
            list_title_3:'L’accompagnement Oyster technology repose sur une approche pragmatique et sur mesure permettant ainsi d’opérer une transition à l’agilité pérenne et alignée à vos valeurs',
            list_title_4:"La digitalisation des parcours clients, la crise sanitaire et l’émergence des préoccupations écologiques ont largement rebattu les cartes du secteur ces dernières année :",
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
            title:'EXPERTISES DE LA SOCIÉTÉ',
            sub_title:'notre adn',
            teams_title:'Nos référents en adn',
            list_title:'Les transformations agiles permettent de répondre aux enjeux d’un écosystème en constante évolution',
            list_title_2:'Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise Puisque le Shadow IT échappe souvent aux processus de régulation en vigueur dans l’entreprise',
            list_title_3:'L’accompagnement Oyster technology repose sur une approche pragmatique et sur mesure permettant ainsi d’opérer une transition à l’agilité pérenne et alignée à vos valeurs',
            list_title_4:"La digitalisation des parcours clients, la crise sanitaire et l’émergence des préoccupations écologiques ont largement rebattu les cartes du secteur ces dernières année :",
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
            list_title_4:"La digitalisation des parcours clients, la crise sanitaire et l’émergence des préoccupations écologiques ont largement rebattu les cartes du secteur ces dernières année :",
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
    ];
    const METIER=[
           {
            title:'Nos équipes mettent en place des environnements et des méthodes de fabrication logicielle qui optimisent l’efficacité opérationnelle en mode Agile :',
            image:'../images/p2.jpeg',
            sub_title:'Valider une intuition, créer de la confiance autour d’une idée en imaginant et en développant des scénarios pertinents, simples et créatifs.',
            name:'Digital fastory',
            slug:'digital-factory',
            data:[
                {id:1,title:'équipe pluridisciplinaire'},
                {id:2,title:'consultants certifiés'},
                {id:3,title:'organisation en Feature Teams'},
                {id:4,title:'mise en place de l’Agilité'},
                {id:5,title:'respect du Time to Market'},
                {id:6,title:'recherche de la Qualité'}, 
            ],
            title_2:'Nous vous proposons un accompagnement et des préconisations sur les dernières stacks techniques les plus adaptées à vos objectifs de transformation digitale',
            data_2:[
                {id:1,title:'compatibilité des environnements'},
                {id:2,title:'disponibilité des ressources'},
                {id:3,title:'technologies évolutives'},
                {id:4,title:'performance'},
                {id:5,title:'orientées utilisateur final'},
                {id:6,title:'communautaires'}, 
            ]
        },
        {
            title:'L’expérience montre qu’il n’existe pas un, mais plusieurs pilotages possibles pour mener à bien sa transformation digitale. Nos équipes vous accompagneront dans l’identification des facteurs clés permettant de mettre en place un dispositif unique, propre aux spécificités de votre entreprise',
            image:'../images/p3.jpeg',
            sub_title:'Vous accompagner dans l’identification des facteurs clés permettant de mettre en place un dispositif unique de transformation digitale.',
            name:'Digital Trasformation',
            slug:'digital-transformation',
            data:[
                {id:1,title:'bien connaître son organisation'},
                {id:2,title:'appréhender les ressources disponibles'},
                {id:3,title:'paralléliser les chantiers'},
                {id:4,title:'partager les expériences acquises'},
                {id:5,title:'instaurer un cercle vertueux de progrès'},
                {id:6,title:'temporiser ses phases d’apprentissages'},
                {id:6,title:'entraîner les équipes vers la vision souhaitée'},
                {id:6,title:'choisir ses indicateurs de performances'},
                 
            ],
            // title_2:'Nous vous proposons un accompagnement et des préconisations sur les dernières stacks techniques les plus adaptées à vos objectifs de transformation digitale',
            // data_2:[
            //     {id:1,title:'compatibilité des environnements'},
            //     {id:2,title:'disponibilité des ressources'},
            //     {id:3,title:'technologies évolutives'},
            //     {id:4,title:'performance'},
            //     {id:5,title:'orientées utilisateur final'},
            //     {id:6,title:'communautaires'}, 
            // ]
        },  
        {
            title:'Nos équipes mettent en place des environnements et des méthodes de fabrication logicielle qui optimisent l’efficacité opérationnelle en mode Agile :',
            image:'../images/p4.jpeg',
            sub_title:'Valider une intuition, créer de la confiance autour d’une idée en imaginant et en développant des scénarios pertinents, simples et créatifs.',
            name:'Conseil',
            slug:'conseil',
            data:[
                {id:1,title:'équipe pluridisciplinaire'},
                {id:2,title:'consultants certifiés'},
                {id:3,title:'organisation en Feature Teams'},
                {id:4,title:'mise en place de l’Agilité'},
                {id:5,title:'respect du Time to Market'},
                {id:6,title:'recherche de la Qualité'}, 
            ],
            title_2:'Nous vous proposons un accompagnement et des préconisations sur les dernières stacks techniques les plus adaptées à vos objectifs de transformation digitale',
            data_2:[
                {id:1,title:'compatibilité des environnements'},
                {id:2,title:'disponibilité des ressources'},
                {id:3,title:'technologies évolutives'},
                {id:4,title:'performance'},
                {id:5,title:'orientées utilisateur final'},
                {id:6,title:'communautaires'}, 
            ]
        }   
    ]
    let data:any=METIER.find(value=>value.slug===slug);
    if(!data){
        data=arrayData.find(value=>value.slug===slug);
    }
    data=data?data:null;
    if(!data){
        return {
            notFound: true,
        }
    }
    return {
        props: {data,metier:METIER,slug}
    }
  }

