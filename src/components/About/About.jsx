import React from 'react';

import '../../styles/scss/_about.scss';



export default () => {
  return <>
   <section className='about--content' >
      <h1 className='title_name'>
        <var>Var name = </var> <mark>Romeo Dev </mark> 
      </h1>
      <div className='about_div'>
        <h2><mark >About me?</mark> </h2>
        <p className='text_info--me'>
          
          Hi, <mark> my name is Romeo</mark>, i'm a Developer, i am from Dominican Republic, i am grateful that you look at my portfolio.
          In this portafolio i'll share my knowlegde and my projects done 
          to measure i get knowledge. Actually i'm student of end
        </p>
      </div>
    <div className='about_div'>
      <h2> <mark>What i do?</mark>  </h2> 
      <p>
        I dedicate to the investigate about programming or new knowledge realated to the science,technologies(computer and more) and more 
      </p>
    </div>

  <div className='about_div'>
      <h2> <mark> What i want to do?</mark> </h2> 
      <p>
        I want demostring my knowledge and skills. Always am dispose to learning new skills(knowledgde)
      </p>
    </div>
  
   </section>
  </>
}
