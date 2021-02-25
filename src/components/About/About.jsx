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
          In this portafolio i'll share my knowlegde and my projects done. I am currently a final student
        </p>
      </div>
    <div className='about_div'>
      <h2> <mark>What i do?</mark>  </h2> 
      <p>
          I am dedicated to research on programming or new knowledge related to science, technologies (computer science and more) and more.
      </p>
    </div>

  <div className='about_div'>
      <h2> <mark> What i want to do?</mark> </h2> 
      <p>
        I'll want demostring my knowledge and skills. I am always willing to continue learning(knowledgde)
      </p>
    </div>
  
   </section>
  </>
}
