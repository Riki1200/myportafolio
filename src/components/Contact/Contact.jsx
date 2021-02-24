import React, { useState, useContext,useEffect,useRef } from 'react';
import {sendForm,init} from 'emailjs-com'

import '../../styles/scss/_contact.scss';
import { TitleForm, ContentForm, TitleContent,InputName,TextArea,InputMail, Button, SocialMediaContact    } from '../styleComponents/index';
import {ContextProvider} from '../Main/Main';







const Contact = () => {
    const refName = useRef({value: ""});
    const refMsg = useRef({value: ""});
    const refEmail = useRef({value: ""});
    const [warning,setWarning] = useState(false);
    const [stateFormData,setFormData] = useState(null);

    const {contactMedia} = useContext(ContextProvider);
        
    
    const HandleChange = (ev) => {

        let name = refName.current.value;
        let msg = refMsg.current.value;
        let email = refEmail.current.value;
       
        if(
            name.length > 6 && 
            msg.length > 12 && 
            email !== "" && 
            email.length > 6 &&
            email.indexOf('@') !== -1){

            setWarning(true)
          
        }else{
            setWarning(false);
        }
    }
    /**
     * 
     * @param {Event} target 
     */
    const HandleSubmit = (target) => {
        
        target.preventDefault();
        if(warning === true){
            sendForm('gmail','template_5L2u35uS',target.target,'user_6X8T05oj6IIkhT1F9IylT').then(r => {
                setFormData(true);
                if(r.status === 'OK'){
                    setFormData(false);
                    target.reset();
                }
            }).catch(err => {
                setFormData(true);
                
            })
        }
        
    }

    useEffect(() => {


        (() => {
            init('user_6X8T05oj6IIkhT1F9IylT');
        })()
        



        return () => {
            return setFormData(false)
        }
    }, [stateFormData,setFormData,
        refName.current.value,
        refMsg.current.value,
        refEmail.current.value])

    return <ContentForm>
        <TitleContent>
            <p className='text_contact'>
                Contact Me, describe your project, datails and more.
            </p>
            <TitleForm>Contact Now</TitleForm>
        </TitleContent>
        <form 
            onChange={HandleChange}
            className='form_content' 
            onSubmit={HandleSubmit}>
            <div className='form_fields'>
                <label htmlFor="name">*Fullname:</label>
                <InputName type='text' ref={refName} name='name' id='name' />
                {refName.current.value.length < 0? <div style={{color:"#fff"}}>Fields is empty</div> : null}
            </div>
            <div className='form_fields' data-r="*Only Gmail messages">
                <label htmlFor="email" data-email>*Email: </label>

                <InputMail ref={refEmail} type='email' name='email' id="email"/>
                {refEmail.current.value.length < 0 ? <div style={{color:"#fff"}}>Fields is empty</div> : null}
            </div>
            <div className='form_fields'>
                <label htmlFor="msg">*Message:</label>
                <TextArea placeholder='Messages' ref={refMsg} id="msg" name="msg"/>
                {refMsg.current.value.length < 0 ? <div style={{color:"#fff"}}>Fields is empty</div> : null}
            </div>
            <div className='form_fields'>
                {
                    warning === false ? <Button 
                    type='submit' 
                    value='Send Messages' 
                    className='form_button'
                    disabled={warning ? warning : !warning}
                    >
                         Send
                    </Button> :
                    <Button 
                    type='submit' 
                    value='Send Messages' 
                    className='form_button'
                    
                    >
                         Send
                    </Button>
                }
                
            </div>
            {
               typeof stateFormData === 'boolean' && stateFormData === true ? <div>Loading...</div> : typeof stateFormData === 'boolean' ?  <div style={{fontSize: "25px", color: "#fff"}}>Success</div> : null
            }
        </form>
        <div className='socielmedia_contact'>
            <SocialMediaContact target="__blank" href={contactMedia}>
                <img src="/images/icons/whatapps.svg" style={{filter: "invert(1.0)"}} alt='contact for ws'></img>
            </SocialMediaContact>
        </div>
    </ContentForm>
}

export default (Contact);