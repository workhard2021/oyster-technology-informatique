import Link from "next/link";

export const ItemsContacts=({data}:any)=>{
    return (<div className="w-full relative bg-[#122480] flex justify-center items-center flex-wrap py-2">
          <div className='bg-url_teams  absolute w-full h-full' style={{backgroundImage:`url(${data.image})`}}/>
          <div className="relative px-4 md:w-[40%] w-full md:h-[500px] h-[300px] flex justify-center items-center">
              <div className="md:w-[80%] w-full m-auto">
                  <p className="w-full md:text-start text-center text-white">{data.title}</p>
                  <p className="w-full md:text-start text-center text-white  py-6 text-md md:text-2xl">{data.sub_title}</p>
                  <p className="w-full md:text-start text-center text-white">{data.title_question}</p>
              </div>
          </div>
          <div className="relative md:w-[40%] w-full md:h-[500px] h-[50px] flex justify-center items-center">
              <Link className="py-2 px-3 bg-white rounded-md" href={`mailto:${data.email}`}>{data.email_title}</Link>
          </div>
    </div>)
}

ItemsContacts.defaultProps={
    data:{
       title:'FAIRE PARTIE DE NOTRE ÉQUIPE',
       sub_title:'Nous croyons au croisement des expertises, à l’intelligence collective et à la singularité des talents.',
       title_question:'Vous aussi ? Nous sommes faits pours nous entendre.',
       email:'email@gmail.com',
       email_title:'Rejoignez-nous',
       image:'../images/teams.jpeg',
    }
};