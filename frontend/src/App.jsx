import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import TarotCard from './components/TarotCard'
import ReadingForm from './components/ReadingForm'
import ReadingList from './components/ReadingList'
import { cards } from './data/cards'

function App() {
  // -----------------------------
  // React State
  // -----------------------------

  const [selectedCard, setSelectedCard] = useState(cards[0])

  const [question, setQuestion] = useState('')

  const [interpretation, setInterpretation] = useState('')

  const [readings, setReadings] = useState([])

  // -----------------------------
  // Draw a random Tarot card
  // -----------------------------

  function drawCard() {
    const randomIndex = Math.floor(
      Math.random() * cards.length
    )

    setSelectedCard(cards[randomIndex])
  }

  // -----------------------------
  // Get readings from backend
  // -----------------------------

  useEffect(() => {
    async function loadReadings() {
      try {
        const response = await fetch(
          'http://localhost:3000/api/readings'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch readings')
        }

        const data = await response.json()

        setReadings(data)
      } catch (error) {
        console.error(
          'Failed to fetch readings:',
          error
        )
      }
    }

    loadReadings()
  }, [])

  // -----------------------------
  // Save reading to backend
  // -----------------------------

  async function handleSave() {
    // Don't allow an empty question
    if (!question.trim()) {
      alert('Please enter a question.')
      return
    }

    try {
      const response = await fetch(
        'http://localhost:3000/api/readings',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            question: question,
            card_name: selectedCard.name,
            interpretation: interpretation,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to save reading')
      }

      // Get the newly created reading
      const newReading = await response.json()

      // Add it to the beginning of the list
      setReadings((previousReadings) => [
        newReading,
        ...previousReadings,
      ])

      // Clear the form
      setQuestion('')
      setInterpretation('')

      console.log('Reading saved:', newReading)
    } catch (error) {
      console.error(
        'Failed to save reading:',
        error
      )
    }
  }

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16">

        {/* Page heading */}
        <h1 className="text-center text-4xl font-bold">
          Your Tarot Journal
        </h1>

        <p className="mt-3 text-slate-400">
          Reflect, record, and explore.
        </p>

        {/* Tarot Card */}
        <div className="mt-10">
          <TarotCard card={selectedCard} />
        </div>

        {/* Draw Card Button */}
        <button
          onClick={drawCard}
          className="mt-6 rounded-lg bg-purple-600 px-8 py-3 font-medium hover:bg-purple-500"
        >
          Draw Card
        </button>

        {/* Reading Form */}
        <ReadingForm
          selectedCard={selectedCard}
          question={question}
          setQuestion={setQuestion}
          interpretation={interpretation}
          setInterpretation={setInterpretation}
          onSave={handleSave}
        />

        {/* Previous Readings */}
        <ReadingList readings={readings} />

      </main>
    </div>
  )
}

export default App


// import { useEffect, useState} from 'react'
// import Navbar from './components/Navbar'
// import TarotCard from './components/TarotCard'
// import ReadingForm from './components/ReadingForm'
// import ReadingList from './components/ReadingList'
// import { cards } from './data/cards'
// function App(){

  

//   const [selectedCard, setSelectedCard] = useState(cards[0])
//   const [question, setQuestion] = useState('')
//   const [interpretation, setInterpretation] = useState('')
//   const [readings, setReadings] = useState([])


//   function drawCard(){
//     const randomIndex = Math.floor(
//       Math.random() * cards.length
//     )

//     setSelectedCard(cards[randomIndex])
//   }

//   async function fetchReadings(){
//     try{
//       const response = await fetch(
//         'http://localhost:3000/api/readings'
//       )

//       const data = await response.json()

//       setReadings(data)
//     }catch(error){
//       console.error(
//       'Failed to fetch readings',
//       error

//       )
//     }
//   }

//   async function handleSave(){
//     if(!question.trim()){
//       alert('Please enter a question')
//       return
//     }
//     try{
//       const response = await fetch(
//         'http://localhost:3000/api/readings',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },

//           body: JSON.stringify({
//             question,
//             card_name: selectedCard.name,
//             interpretation,
//           }),
//         }
//       )
//       if(!response.ok){
//         throw new Error('Failed to save reading')
//       }
//       const newReading = await response.json()

//       setReadings((previousReadings) => [
//         newReading,
//         ...previousReadings,
//       ])

//       setQuestion('')
//       setInterpretation('')
//     }catch(error){
//       console.error(
//         'Failed to save reading',
//         error
//       )
//     }
//   }

//  useEffect(() => {
//   fetchReadings
// }, [])

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">

//       {/* Navbar */}
//       <Navbar/>

//       {/* main */}
//       <main className='mx-auto flex max-w-5xl flex-col items-center px-6 py-16'>
//         <h1 className='text-center text-4xl font-bold'>
//           Your Tarot Journal
//         </h1>

//         <p className='mt-3 text-slate-400'>
//           Reflect, record and explore.
//         </p>

//         <div className="mt-10">
//           <TarotCard card={selectedCard} />
//         </div>

//         <button onClick={drawCard} className='mt-6 rounded-lg bg-purple-600 px-8 py-3 font-medium hover:bg-purple-500'>Draw Card</button>
//         <ReadingForm 
//         selectedCard={selectedCard}
//         question={question}
//         setQuestion={setQuestion}
//         interpretation={interpretation}
//         setInterpretation={setInterpretation}
//         onSave={handleSave}
//         ></ReadingForm>

//         <ReadingList readings={readings}/>
//       </main>
      
//     </div>
//   )
// }

// export default App