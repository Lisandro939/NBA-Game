import Head from 'next/head'
import Router  from 'next/router'
import { useEffect, useState } from 'react'
import { API } from './api/API'
import { Container, Game, PlayersBigBox, Versus , Player, PlayerBox, Score } from './styles/GamePageStyles.js'
import { PlayersBigBoxMobile, PlayerBoxMobile } from './styles/GamePageStyles.js'
import { useAnimationControls } from 'framer-motion';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const GamePage = () => {

  const controls = useAnimationControls();
  const player = useAnimationControls();

  const [Index, SetIndex] = useState(0);
  const [ArrayNumbers, SetArrayNumbers] =  useState([0,1,2,3]);
  const [ScoreNumber, SetScoreNumber] = useState(0);
  const [noseusa, SetNoseusa] = useState();

  useEffect(()=>{
    let response = JSON.parse(localStorage.getItem('array'))
    if (response == false){
      let FirstArray = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38])
      SetArrayNumbers(FirstArray) ;
      localStorage.setItem('array', 'true');
    }
    
  }, [noseusa])



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

  function sendFinal(estado) {
    setTimeout(() => {
      Router.push({
        pathname: '/FinalPage',
        query: { 
          result: ScoreNumber,
          state: estado
        }
      })
    }, 1000)
  }

  function changePlayers(){
    setTimeout(() => {
      SetIndex(Index + 1);
      SetScoreNumber(Index + 1);
    }, 2500)
  }

  function playersAnimation(){
    
    player.start({
      x: "-50vw",
      transition: { delay: 1.5, duration: 1},
      transitionEnd: {
        x: 0
      }
    })
  }

  function playersAnimationMobile(){
    /*
    player.start({
      y: "-50vh",
      transition: { delay: 1.5, duration: 1},
      transitionEnd: {
        y: 0
      }
    })*/
  }

  function versusRightAnimation(){
    controls.start({
      opacity: 1,
      scale: [1 , 1, 0.0001, 0.0001 , 0.0001],
      backgroundColor: '#008631',
      transition: { delay: 0, duration: 2.5 },
      transitionEnd: {
        backgroundColor: 'white',
        scale: 1
      }
    })
  }

  function versusWrongAnimation(){
    controls.start(i => ({
      opacity: 1,
      scale: [1.5, 1],
      backgroundColor: '#ff0000',
      transition: { delay: i * 0.2 },
      transitionEnd: {
        backgroundColor: '#ff0000'
      }
    }))
  }


  //-------------------------------------------------- HIGHER ----------------------------------------------

    function Higher (){
    // WIN
    if (API[ArrayNumbers[Index + 1]].salary >= API[ArrayNumbers[Index]].salary){
      if (isBrowser){
        playersAnimation();
      } else {
        playersAnimationMobile();
      }
      

      changePlayers();

      versusRightAnimation();
      // MAX SCORE
      if ((Index + 1) === 36){
        sendFinal('winner');
      }
    // LOSE
    } else {
      versusWrongAnimation();

      sendFinal("loser");
    }
  }

  //--------------------------------------------------- LOWER --------------------------------------------------

    function Lower (){
    // WIN
    if (API[ArrayNumbers[Index + 1]].salary <= API[ArrayNumbers[Index]].salary){
      
      if (isBrowser){
        playersAnimation();
      } else {
        playersAnimationMobile();
      }

      changePlayers();
      
      versusRightAnimation();
      // MAX SCORE
      if ((Index + 1) === 36){
        sendFinal('winner');
      }
    // LOSE
    } else {
      versusWrongAnimation();
      
      sendFinal('loser');
    }
  }

if (isBrowser){
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
          <PlayerBox layout animate={player}>
            <Player img={API[ArrayNumbers[Index + 1]].image}/>
              <h1 className='Second'>
                {API[ArrayNumbers[Index + 1]].name + " " + API[ArrayNumbers[Index + 1]].lastname}
              </h1>
              <h3 className='Cobra'>
                Cobra...
              </h3>
              <section className='Buttons'>
                <button className='Mas' onClick={() => { Higher() } }>M??s</button>
                <button className='Menos' onClick={() => { Lower() } }>Menos</button>
              </section>
          </PlayerBox>
          <PlayerBox layout animate={player} className="third">
            <Player img={API[ArrayNumbers[Index + 2]].image}/>
              <h1 className='Second'>
                {API[ArrayNumbers[Index + 2]].name + " " + API[ArrayNumbers[Index + 2]].lastname}
              </h1>
          </PlayerBox>
        </PlayersBigBox>
      </Game>
    </Container>
)
} else {
  return (
  <Container className='mobile'>
      <Head>
        <title>NBA Higher or Lower</title>
        <meta name="description" content="NBA Higher or Lower game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game className='mobile'>
        <PlayersBigBoxMobile className='mobile'>
          <Versus layout animate={controls}>VS</Versus>
          <Score className='mobile'>Score: {ScoreNumber}</Score>
          <PlayerBoxMobile layout animate={player}>
            <Player img={API[ArrayNumbers[Index]].image}/>
              <h1 className='First'>
                {API[ArrayNumbers[Index]].name + " " + API[ArrayNumbers[Index]].lastname}
              </h1>
              <h2 className='Number'>
                {Intl.NumberFormat('en-EU', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(API[ArrayNumbers[Index]].salary)}
              </h2>
          </PlayerBoxMobile>
          <PlayerBoxMobile layout animate={player}>
            <Player img={API[ArrayNumbers[Index + 1]].image}/>
              <h1 className='Second'>
                {API[ArrayNumbers[Index + 1]].name + " " + API[ArrayNumbers[Index + 1]].lastname}
              </h1>
              <h3 className='Cobra'>
                Cobra...
              </h3>
              <section className='Buttons'>
                <button className='Mas' onClick={() => { Higher() } }>M??s</button>
                <button className='Menos' onClick={() => { Lower() } }>Menos</button>
              </section>
          </PlayerBoxMobile>
          
          <PlayerBoxMobile layout animate={player} className="thirdMobile">
            <Player img={API[ArrayNumbers[Index + 2]].image}/>
              <h1 className='Second'>
                {API[ArrayNumbers[Index + 2]].name + " " + API[ArrayNumbers[Index + 2]].lastname}
              </h1>
          </PlayerBoxMobile>
        </PlayersBigBoxMobile>
      </Game>
    </Container>
  )
}
  

  
}

export default GamePage;
