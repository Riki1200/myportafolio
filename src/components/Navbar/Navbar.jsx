import React, {useRef, useState} from 'react';
import {Navitem,TitleContentD,Title} from '../styleComponents/'





const Navbar = () => {

    

    const refMenu = useRef()

    const refButton = useRef();
    /**
     * @var State
     */
   const [classPush, setClass] = useState('nav_down')


    /**
     * @function ClickedEvent
     */
    const MenuEvent = (event) => {
       
         refButton.current.classList.toggle('pushMenu')
       
         setClass(r =>  {
            /**
             * @var StateForClassCSS
             */
            let css = r === 'nav_down' ? 'navbar-push' : 'nav_down'

             return css
         })
            
           
         if(event.target.parentElement.parentElement){
             refMenu.current.onclick = (e) => {
                    
                        
                        if(e.target.className === "nav_content navbar-push"){
                    
                            setClass(r =>  {
                                /**
                                 * @var StateForClassCSS
                                 */
                                let css = r === 'nav_down' ? 'navbar-push' : 'nav_down'
                                return css
                            })
                        refButton.current.classList.toggle('pushMenu')
                        }
                        
             }
         }

    }




    return <header className={'header_content '}>
        <nav className={'nav_content ' +  classPush} ref={refMenu}>
            <TitleContentD>
                <Title className='title_name' to='/'>
                    <h1>RomeoDev</h1>
                </Title>
            </TitleContentD>
            <ol className='nav_list--content'>
                <li className='li_item_nav' >
                    <Navitem to='/' data-icon='Home' className='li_item_a' >Home</Navitem>
                </li>
                <li className='li_item_nav' >
                    <Navitem to='/projects' data-icon='Projects' className='li_item_a'>Projects</Navitem>
                </li>
                <li className='li_item_nav' >
                    <Navitem to='/contact' data-icon='Contact' className='li_item_a'>Contact</Navitem>
                </li>
                 <li className='li_item_nav' >
                    <Navitem to='/about' data-icon='Projects' className='li_item_a'>About</Navitem>
                </li>
            </ol>
            
        </nav>
            <button className='button_menu' onClick={MenuEvent}>
                 <div className='last_path' ref={refButton}>
                    &#215;
                </div>
                <div className="path"></div>
                <div className="path"></div>
                <div className="path"></div>
               
            </button>
    </header>;
};

export default Navbar;
