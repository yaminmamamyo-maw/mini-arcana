import Navbar from './components/Navbar'
import TarotCard from './components/TarotCard'
import ReadingForm from './components/ReadingForm'
import { useState } from 'react'
import { cards } from './data/cards'
function App(){

  

  const [selectedCard, setSelectedCard] = useState(cards[0])

  function drawCard(){
    const randomIndex = Math.floor(
      Math.random() * cards.length
    )

    setSelectedCard(cards[randomIndex])
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <Navbar/>

      {/* main */}
      <main className='mx-auto flex max-w-5xl flex-col items-center px-6 py-16'>
        <h1 className='text-center text-4xl font-bold'>
          Your Tarot Journal
        </h1>

        <p className='mt-3 text-slate-400'>
          Reflect, record and explore.
        </p>

        <div className="mt-10">
          <TarotCard card={selectedCard} />
        </div>

        <button onClick={drawCard} className='mt-6 rounded-lg bg-purple-600 px-8 py-3 font-medium hover:bg-purple-500'>Draw Card</button>
        <ReadingForm/>
      </main>
      
    </div>
  )
}

export default App