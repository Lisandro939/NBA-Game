import styled from 'styled-components'
import { motion } from "framer-motion";

export default function Hola(){

}
// BROWSER AND MOBILE
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
`

export const PlayersBigBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    .third {
        position: absolute;
        left: 100vw;
        z-index: 1;
    }
`
export const PlayersBigBoxMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;

    .thirdMobile {
        position: absolute;
        bottom: -50vh;
        z-index: -1;
    }
`

export const Versus = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around; 
    background-color: white;
    border-radius: 100px;
    position: absolute;
    width: 100px;
    height: 100px;
    opacity: 1;
    z-index: 1;
    color: black;
    font-size: 200%;

    @media (max-width: 900px){
        & {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around; 
            background-color: white;
            border-radius: 100px;
            position: absolute;
            width: 70px;
            height: 70px;
            opacity: 1;
            z-index: 1;
            color: black;
            font-size: 200%;
        }
    }
`

export const Score = styled.div`
    width: 150px;
    height: 50px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    opacity: 1;
    z-index: 1;
    font-size: 30px;

`

   
export const PlayerBox = styled(motion.div)`

    width: 50vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-clip: content-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;

    

    & h1{
        color: white;
        text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);
        position: absolute;
        top: 35%;
        font-size: 40px
    }

    @media (max-width: 900px){
        & h1{
        color: white;
        text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);
        position: absolute;
        top: 35%;
        font-size: 25px
    }
    }


    & h2{
        color: white;
        text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);
        position: absolute;
        top: 40%;
        font-size: 50px;
        color: #FDFD96;
    }

    & h3{
        color: white;
        text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);
        position: absolute;
        top: 46%;
        font-size: 20px;
    }
    
    & section{
        position: absolute;
        top: 55%;
        display: flex;
        flex-direction: column;
        
    }

    & section .mobile{
        position: absolute;
        top: 45%;
        display: flex;
        flex-direction: column;
        
    }

    & button {
        margin-top: 15px;
        width: 200px;
        height: 60px;
        font-size: 140%;
        border-radius: 30px;
        cursor: pointer;
        background-color: transparent;
        color: #FDFD96;
    }
    & .Mas{
        border: 2px solid green;
    }

    & .Mas:hover{
        background-color: green;
    }

    & .Menos{
        border: 2px solid red;
    }

    & .Menos:hover{
        background-color: red;
    }

    & .MasMobile{
        border: 2px solid green;
        width: 100px;
        height: 40px;
        color: white;
    }

    & .MenosMobile{
        border: 2px solid red;
        width: 100px;
        height: 40px;
        color: white;
    }

    & button:hover {
        transition: all 0.1s;
        color: black;
    }

    @media (max-width: 900px){
        & button {
            margin-right: 10px;
            margin-left: 10px;
            width: 100px;
            height: 60px;
            font-size: 150%;
            border: 2px solid white;
            border-radius: 30px;
            cursor: pointer;
            background-color: transparent;
            color: white
        }
    }

`

export const PlayerBoxMobile = styled(motion.div)`

    height: 50vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-clip: content-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;

    

    & .First{
        top: 15%;
        font-size: 7vw;
    }
    & .Second {
        top: 57%;
        font-size: 7vw;
    }
    
    & .Number{
        top: 20%;
        
    }
    & .Cobra {
        top: 65%;
    }
    & .Buttons {
        top: 70%;
        margin-top: 15px;
        color: white;
    }

    
    & h1{
        color: white;
        text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);
        position: absolute;
        top: 35%;
        font-size: 25px
    }

    & h2{
        color: white;
        text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);
        position: absolute;
        top: 40%;
        font-size: 50px;
        color: #FDFD96;
    }

    & h3{
        color: white;
        text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);
        position: absolute;
        top: 46%;
        font-size: 20px;
    }
    
    & section{
        position: absolute;
        top: 45%;
        display: flex;
        flex-direction: column;
        
    }

    & button {
        width: 100px;
        height: 40px;
        margin-top: 10px;
        margin-right: 10px;
        margin-left: 10px;
        font-size: 150%;
        border-radius: 30px;
        cursor: pointer;
        background-color: transparent;
        color: white;
    }


    & .Mas{
        border: 2px solid green;
    }

    & .Menos{
        border: 2px solid red;
    }

`

export const Player = styled.div`
    width: 50vw;
    height: 100vh;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-clip: content-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: .4;

    @media (max-width: 500px){
        width: 100vw;
        height: 50vh;
    }
`

export const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;

    @media (max-width: 500px){
        flex-direction: row;
    }

    
`

export const Select = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const GameOptionsBox = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    color: white;
    text-shadow: -1px -2px 8px rgba(0, 0, 0, 1);

    @media (max-width: 500px){
        height: 20%
    }
`


