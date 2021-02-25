import React, { useContext, useEffect } from 'react';

import { Photoautor, Descriptionauthor, Skills,ProgressBar } from '../styleComponents/index';

import {ContextProvider} from '../Main/Main';

export default function Home() {

    let skills = ['NodeJS', 'Python', 'Javascript', 'Kotlin', 'React']

    const useSkills = useContext(ContextProvider);

    useEffect(() => {
        return () => {
            return skills;
        }
    },[useSkills,skills])

    return <>
        <section className='home__author-dev'>
            
            <Descriptionauthor>
                <Photoautor src="images/myprofile.png" />
                <h1 className='title_author'>
                    Romeo
                     <span>Dev</span>
                </h1>
                <p className='history_author'>
                    Hello, my name is Romeo, i'm a web and sotfware developer, i'm very happy of which your read about my information, in this web i'll be sharing my knowledge and my done projects too.
                    </p>
                <Skills>
                    {skills.map((skill, index) => (
                        <a 
                            key={index} 
                            href={skills} >
                        {skill} 
                        </a>
                    ))}
                </Skills>
            </Descriptionauthor>
            <div className='skill_content'>
                <h1>My level of skills for dev</h1>
                {useSkills.valueSkills.map((n,index)=> (
                    <div 
                    className='skills_bar' 
                    key={index}>
                        <h3 
                            className='name_skills' 
                            style={{
                                color: `${n.color}`
                            }}>
                            {n.name}
                        </h3>
                        <ProgressBar  
                            c={n.color} 
                            Number={`${n.level*100}`}
                            data-bar={`${n.level*100}%`}
                        />
                       
                    </div>
                ))}
            </div>
        </section>

    </>
}
