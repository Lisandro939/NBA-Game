import Link from 'next/link';
import Head from 'next/head'
import { Box, Container, ButtonBox } from './styles/IndexStyles'
import { API } from './api/API'
import { useEffect } from 'react';

export default function Home(){

  useEffect(() => {
    console.log(API[0].name)
    }, [])

    let ArrayNumbers = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])

    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;
    
        while (i--) {
    
            j = Math.floor(Math.random() * (i+1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    
        }
    
        return array;
    }

    return (
        <Box>
            <Head>
                <title>NBA Higher or Lower</title>
                <meta name="description" content="NBA Higher or Lower game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container />
            
            <ButtonBox>
                    <h1>
                        NBA Mas o Menos
                    </h1>
                    <button>
                        <Link href={{ 
                            pathname: '/GamePage', 
                            query: {
                                array: ArrayNumbers,
                            }}} style={{ textDecoration: 'none', color: 'white' }}>Empezar</Link>
                    </button>
                </ButtonBox>
        </Box>
        
    )
}
