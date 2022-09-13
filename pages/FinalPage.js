import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container, Button, BigBox, Background } from './styles/FinalPageStyles'

const FinalPage = () => {

    const router = useRouter()

    const [WhichState, SetWhichState] = useState('')

    useEffect(() => {
      if (router.query.state === 'winner'){
        SetWhichState('Has finalizado el juego! Has ganado!')
      } else {
        SetWhichState('Has perdido!')
      }
    }, [])
    
    
    return (
      <BigBox>
        <Background />
        <Container >
            <h1 style={{}}>{WhichState}</h1>
            <h1>Tu puntuación: {router.query.result}</h1>
            <Button>
              <Link href='/' style={{ textDecoration: 'none', color: 'white', backgroundColor: 'red' }}>Volver al inicio</Link>
            </Button>
        </Container>
      </BigBox>
        
        
    )
}


export default FinalPage;