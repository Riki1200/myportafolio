import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const SectionProjects = styled('section')`
        width: 100%;
        padding: 10px 1.2rem;
        height:100%;
        position:relative;
`;
export const FooterContent = styled('footer')`
    display:flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items:baseline;
    grid-column:span 3;
`;
export const SocialMediaLink = styled('a')``;



export const ContentForm = styled('section')`
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    flex-wrap:wrap;
    height:150ch;
    gap:20px;
    .form_content {
        gap:10px;
        
        
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        .form_fields{
            display:grid;
            gap:20px;
            label {
               color:#fff;
                font-size:2rem;
                text-align:center;
            }
            > input {
                border-top: none;
                background-color:transparent;
                border-right: none;
                border-left: none;
                border-bottom:4px solid #fff;
                outline:none;
                padding-bottom:8px;
                padding-left:20px;
                color:#fff;
            }
               textarea {
                   resize: none;
                   width:40ch;
                   height: 200px;
                   background-color:transparent;
                   padding-left:10px;
                   color:#fff;
                   border:1px solid #fff;
                   outline:none;
                   padding-top:10px;
                   border-radius:5px;
                   transition: box-shadow, text-shadow linear 100ms,linear 100ms;
                   &:focus {
                       box-shadow: 1px 10px 15px 8px #000;
                       text-shadow: -1px 5px #000;
                   }
               }

               button {
                   margin-top:30px;
                   padding: 10px 80px;
                   font-size:1.5rem;
                   outline:none;
                   background-color:transparent;
                   color:#fff;
                   border:1px solid #fff;
                   border-radius: 10px;
                   transition: box-shadow, text-shadow linear 100ms,linear 100ms;
                   &:hover {
                       box-shadow: 1px 10px 15px 8px #000;
                       text-shadow: -1px 5px #000;
                   }
                   &:active {
                      
                       transform:scale(1.1);
                   }
               }
        }
    }
`;

export const TitleForm = styled('h1')`
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: calc(10ch / 2 );
    position:relative;
    &::after {
        position:absolute;
        content: "";
        width: 220px;
        background-color:#fff;
        height:10px;
        left:0;
        top:54px;
    }
`;

export const TitleContent = styled('div')`
text-align:center;
color:#fff;
`;



export const Photoautor = styled('img')`
    width:450px;
    height: 60vh;
    min-height: 50vh;
    object-fit: contain;
    background-clip:border-box;
    background-position:center center;
    clip-path: circle(25%);
    transition: clip-path, filter linear .2s,linear .2s;
    image-rendering:crisp-edges;
    background-size:contain;
    filter: grayscale(50%);
    &:hover{
        clip-path: circle(115px);
        filter:grayscale(0);
    }
`;



export const Descriptionauthor = styled('div')`

    word-wrap:break-word;
    text-overflow:scale;
    position:relative;
    top: 0;
    

    border-bottom:10px solid #fff;

    display:flex;
    justify-content:center;
    text-align: center;
    
    flex-wrap:wrap;
    font-family:'Gayathri', sans-serif;
    align-items:center;
    .title_author{
        text-align:center;
        font-size: 2rem;
        color: #fff;
        text-shadow: 10px 10px  #000;
    }
    .history_author{
        font-size: 1.5rem;
        flex-grow: 1;
        height: 100%;
        width:100%;
        color: #fff;
        text-shadow: 10px 10px  #000;
        text-size-adjust:auto;
        word-break:break-all; 
        font-size-adjust:0.58;
     
    }
`;


export const Skills = styled('div')`
    margin-top: 20px;
    height: 100px;
    flex-grow: 2;
    display:flex;
    flex-direction: row;
    align-items:baseline;
    justify-content:center;
    flex-wrap:wrap;
    a{
        pointer-events:none;
        line-height:20px;
        padding: 1ch;
        margin-left: 10px;
        
        &:nth-child(1){
            background-color: #3DFF03;
            color: #fff;
        }
        &:nth-child(2){
            background-color: #00BD03;
            color: #fff;
        }
        &:nth-child(3){
            background-color: #FFBD03;
            color: #fff;
        }
        &:nth-child(4){
            background-color: #7103FF;
            color: #fff;
        }
        &:nth-child(5){
            background-color: #0083FF;
            color: #fff;
        }
    }
    
`;






export const ProjectsContent = styled('ol')`
    display:grid;
    
    grid-template-columns:repeat(auto-fill,minmax(30%,400px));
    flex-wrap:nowrap;
    place-content:center;
    place-items:center;
    
    gap:20px;
    list-style:none;

    
    
`;

export const ProjectsCard = styled('li')`
    
    justify-content:center;
    display:flex;
    align-items:center;
    background-color:#000;
    flex-direction:column;
    overflow:hidden;
    justify-content:center;
    position:relative;
    transition: all linear 200ms;
    .title_app{
        color:#fff;
        text-align:center;
        padding:0;
        margin:0;
        font-size:1rem;
        width:100%;
        text-align:center;
    }
    .redirect_p{
        transition: top  ease-in-out 300ms;
        top: -500px;
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        background-color:hsla(0, 0%, 0%, 0.48);
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        gap: 20px;
        > a {
            border-radius: 5px;
            text-decoration: none;
            padding: 10px 10px;
            border: 1px solid #fff;
            color:#fff;
            text-align:center;
            transition: background linear 200ms;
            img {
                filter:invert(1);
                
            }
            &:hover{
                background-color:#000;
            }
        }
        & button {
            padding: 10px 30px;
        }
        @media(max-width: 768px) {
            top: 0px;
        }
    }

    &:hover .redirect_p {
        
        top: 0;
    }
`;



//////

export const InputName = styled('input')``;
export const TextArea = styled('textarea')``;
export const InputMail = styled('input')``;
export const Button = styled('button')``;

export const SocialMediaContact = styled('a')`
    text-decoration: none;
    img{
        max-width:100%;
        width: 100px;
        height: 100px;
    }
`;


export const ProgressBar = styled('div')`
    height: 20px;
    border-radius: 30px;
    background: ${props => props.c || null };
    width: ${props =>  props.Number || "50"}%;
    position: relative;
    padding:10px 20px;
    &::after {
        content: attr(data-bar);
        position: absolute;
        right:0;
        height:20px;
        top:0;
        width:50px;
        color:#fff;
    }
    &::before {
        content: "";
        position: absolute;
        width:102%;
        height:20px;
        top:0;
        left:0;
         border-radius: 30px;
         background-color:#27282c;
         z-index:-1;
    }

`





/** 
 * @template StyleComponetsLinkItem
 */
export const Navitem = styled(Link)`
    padding: 10px 1.5ch;
    color: #fff;
    background-color:#000;
    outline:none;
    font-weight:100;    
    text-decoration:none;
    font-family:'Fira Code', 'Arial Narrow', Arial, sans-serif;
    font-size:1.2rem;
    text-transform:capitalize;
    border-radius:2px;
    position:relative;
    border:1px solid #fff;
    transition: filter linear .2s;
    pointer-events:visible;  
    font-family: "Montserrat", sans-serif;  
    width:200px;
    flex-basis: 300px;
    border-radius:5px;
    justify-content:center;
    text-align:center;
    display:flex;
    &:hover{
         filter: invert(1.5);
         
    }
     
  
    
`;


/**
 * @template StyleComponetsDivItem
 */

export const TitleContentD = styled('div')`
        text-align:center;
        background-color: #fff;
    
        align-self:flex-start;
        width:100%;
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
       margin-top:0;
`;
/**
 * @template StyleComponetsTitleLinkItem
 */
export const Title = styled(Link)`
    text-decoration:none;
    color: #000;
    h1 {
        font-weight:100;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        &::first-letter {
            font-size: 50px;
            font-weight: 300;
        }
    }
`;


export const ModalCard = styled('div')`
    position:fixed;
    width:60ch;
    height:50ch;
    background-color:#000;
    top:50px;
    left:0;

    & button {
        padding:20px 30px;    
    }

    img {
        max-width: 100%;
    }

`;

