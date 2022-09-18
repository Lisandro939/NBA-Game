import Link from 'next/link';
import Head from 'next/head';
import { Box, Container, ButtonBox } from './styles/IndexStyles';
import { useEffect } from 'react';

export default function Home(){

  useEffect(() => {
    localStorage.setItem('array', 'false')
    }, [])

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
                        <Link href={{ pathname: '/GamePage', }} 
                        style={{ textDecoration: 'none', color: 'white' }}>Empezar</Link>
                    </button>
                </ButtonBox>
        </Box>
        
    )
}
