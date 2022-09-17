import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'
import { API } from './api/API'
import { Container, Game, PlayersBigBox, Versus , Player,PlayerBox , Score } from './styles/GamePageStyles.js'
import { motion, useAnimationControls } from 'framer-motion'

const GamePage = () => {

  const router = useRouter();
  const controls = useAnimationControls();
  const player = useAnimationControls();
  const player1 = useAnimationControls();
  const player2 = useAnimationControls();
  const player3 = useAnimationControls();

  const [Index, SetIndex] = useState(0);
  let ArrayNumbers = router.query.array || [0,1,2,3];
  const [ScoreNumber, SetScoreNumber] = useState(0);
  const [Did, SetDid] = useState(true);


  //-------------------------------------------------------- HIGHER ----------------------------------------------

    function Higher (){
    if (Did) {
      SetDid(false)
      Index = 1;
    } 
    if (API[ArrayNumbers[Index + 1]].salary >= API[ArrayNumbers[Index]].salary){
      // HACER ANIMACIÓN DE DESPLAZAR HACIA LA IZQUIERDA
      player.start({
        x: "-50vw",
        transition: { delay: 2, duration: 3},
        transitionEnd: {
          x: 0
        }
      })
      
      setTimeout(() => {
        SetIndex(Index + 1);
        SetScoreNumber(Index + 1);
      }, 5000)

      controls.start({
        opacity: 1,
        scale: [1.5, 1],
        backgroundColor: [ '#4b6043','#008631'],
        transition: { delay: 1.2 },
        transitionEnd: {
          backgroundColor: 'white'
        }
      })



      if ((Index + 1) === 18){
        Router.push({
          pathname: '/FinalPage',
          query: { 
            result: ScoreNumber,
            state: 'winner'
          }
        })
      }
    } else {
      controls.start(i => ({
        opacity: 1,
        scale: [1.5, 1],
        backgroundColor: [ '#ff0000','ffffff'],
        transition: { delay: i * 0.2 },
        transitionEnd: {
          backgroundColor: 'white'
        }
      }))

      setTimeout(() => {
        Router.push({
          pathname: '/FinalPage',
          query: { 
            result: ScoreNumber,
            state: 'loser'
          }
        })
      }, 5000)
    }
  }

  //--------------------------------------------------- LOWER --------------------------------------------------

    function Lower (){
    if (Did) {
      SetDid(false)
    } 
      
    if (API[ArrayNumbers[Index + 1]].salary <= API[ArrayNumbers[Index]].salary){
      player.start({
        x: "-50vw",
        transition: { delay: 2, duration: 3},
        transitionEnd: {
          x: 0
        }
      })
      
      setTimeout(() => {
        SetIndex(Index + 1);
        SetScoreNumber(Index + 1);
      }, 5000)

      controls.start(i => ({
        opacity: 1,
        scale: [1.5, 1],
        backgroundColor: [ '#4b6043','#008631'],
        transition: { delay: i * 0.2 },
        transitionEnd: {
          backgroundColor: 'white'
        }
      }))




      if ((Index + 1) === 18){
        Router.push({
          pathname: '/FinalPage',
          query: { 
            result: ScoreNumber,
            state: 'winner'
          }
        })
      }
    } else {
      controls.start(i => ({
        opacity: 1,
        scale: [1.5, 1],
        backgroundColor: [ '#ff0000','ffffff'],
        transition: { delay: i * 0.2 },
        transitionEnd: {
          backgroundColor: 'white'
        }
      }))

      setTimeout(() => {
        Router.push({
          pathname: '/FinalPage',
          query: { 
            result: ScoreNumber,
            state: 'loser'
          }
        })
      }, 5000)
    }
  }


  return (
    
      <Container>
        <Head>
          <title>NBA Higher or Lower</title>
          <meta name="description" content="NBA Higher or Lower game" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Game>
          <PlayersBigBox>
            <Versus layout animate={controls}>VS</Versus>
            <Score>Score: {ScoreNumber}</Score>
            <PlayerBox layout animate={player}>
              <Player img={API[ArrayNumbers[Index]].image}/>
                <h1 className='First'>
                  {API[ArrayNumbers[Index]].name + " " + API[ArrayNumbers[Index]].lastname}
                </h1>
                <h2 className='Number'>
                  {Intl.NumberFormat('en-EU', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(API[ArrayNumbers[Index]].salary)}
                </h2>
            </PlayerBox>
            <PlayerBox animate={player}>
              <Player img={API[ArrayNumbers[Index + 1]].image}/>
                <h1 className='Second'>
                  {API[ArrayNumbers[Index + 1]].name + " " + API[ArrayNumbers[Index + 1]].lastname}
                </h1>
                <h3 className='Cobra'>
                  Cobra...
                </h3>
                <section className='Buttons'>
                  <button onClick={() => { Higher() } }>Más</button>
                  <button onClick={() => { Lower() } }>Menos</button>
                </section>
            </PlayerBox>
            <PlayerBox animate={player} className="third">
              <Player img={API[ArrayNumbers[Index + 2]].image}/>
                <h1 className='Second'>
                  {API[ArrayNumbers[Index + 2]].name + " " + API[ArrayNumbers[Index + 2]].lastname}
                </h1>
                <h3 className='Cobra'>
                  Cobra...
                </h3>
                <section className='Buttons'>
                  <button onClick={() => { Higher() } }>Más</button>
                  <button onClick={() => { Lower() } }>Menos</button>
                </section>
            </PlayerBox>
            
            
          </PlayersBigBox>
        </Game>
      </Container>
  )

  
}

export default GamePage;
