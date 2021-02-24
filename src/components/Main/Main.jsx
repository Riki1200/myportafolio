import React, {useEffect, useState} from 'react';


export const ContextProvider = React.createContext({
    author: "",
    age: 0,
    skills:[""],
    valueSkills: [{
        name:"Python",
        level: 0.65,
        color: "#42D81C"
    },{
        name:"Javascript",
        lavel: 0.88,
        color: "#FFCE1E"
    },{
          name:"ReactJS",
          lavel: 0.80,
          color: "#316FF1"
    },{
        name:"VueJS",
        level:  0.75,
        color: "#5EFF85"
    },
    {
       name: "C#",
       level: 0.50,
       color: "#B46CFF"
    }],
    contactMedia: ["https://api.whatsapp.com/send?phone=18293022708&text=GotoWork"]
})


const InjectableContext = (Element) => {


    

     function WrapperElement(props) {
        
        const [user,setUser] = useState({
            author: "Romeo",
            age: 20,
            skills: ["C#", "Python", "Javascript", "HTML", "CSS"]
            ,
    valueSkills: []});
        

        useEffect(() => {
        setUser({
        author: "Romeo",
        age: 20,
        skills: ["C#", "Python", "Javascript", "HTML", "CSS"],
        valueSkills: [{
        name:"Python",
        level: 0.65,
        color: "#42D81C"
    },{
        name:"Javascript",
        level: 0.85,
        color: "#FFCE1E"
    },{
          name:"ReactJS",
          level: 0.80,
          color: "#316FF1"
    },{
        name:"VueJS",
        level:  0.75,
        color: "#5EFF85"
    },
    {
       name: "C#",
       level: 0.50,
       color: "#B46CFF"
    },
{
    name: "NodeJS",
    level: 0.80,
    color: "#0DFF1E"
}],
 contactMedia: ["https://api.whatsapp.com/send?phone=18293022708&text=GotoWork"]
    })
        },[setUser])


         
            return <ContextProvider.Provider  value={{...user, setUser}}> 
                <Element {...props}/>
            </ContextProvider.Provider>
        
        }
   return WrapperElement
}
 



const ContentContext = ({ children }) => <main className='main_container'>{children}</main>


const Main = InjectableContext(ContentContext)


export default Main;