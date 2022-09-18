import styled from 'styled-components'

export default function Hola(){
}

export const Box = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: black;
`

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('https://a.espncdn.com/photo/2019/0512/r541763_1296x729_16-9.jpg');
    background-size: cover;
    background-position-x: left;
    background-position-y: center;
    background-repeat: no-repeat;
    z-index: 0;
    opacity: .5;
`

export const ButtonBox = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    opacity: 1;

    & h1 {
        color: white;
        text-shadow: -1px -2px 10px rgba(0, 0, 0, 1);
        z-index: 1;
        opacity: 1;
    }

    & button{
        text-decoration: none !important;
        border: 1px solid white;
        border-radius: 30px;
        width: 150px;
        height: 40px;
        cursor: pointer;
    }

    & a{
        text-decoration: none !important;
        color: black;
        font-weight: bold;
    }

`