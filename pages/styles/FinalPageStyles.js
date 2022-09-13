import styled from 'styled-components'

export default function Hola(){
}

export const BigBox = styled.div`
    background-color: black;
    overflow: hidden;
`

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://wallpaper.dog/large/10988822.jpg');
    background-size: cover;
    background-position-x: center;
    z-index: 0;
    opacity: .4;
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    overflow: hidden;
    top: 0;

    & h1{
        color: white;
        text-shadow: -1px -2px 10px rgba(0, 0, 0, 1);
    }

    & button:hover{
        color: white;
        background-color: black;
        transition: all .3s;
    }

    & button:hover a{
        color: white
    }

`

export const Button = styled.button`
    width: 200px;
    height: 60px;
    font-size: 15px;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 20px;

    & a{
        text-decoration: none !important;
        border-radius: 30px;
        width: 100%;
        height: 100%;
        cursor: pointer;
        font-size: 20px;
        color: black;
    }

    & :hover{
        color: white;
    }

    

    @media (max-width: 500px){
        width: 50%;
    }
`