import {useState} from 'react'

function ReadingForm(){

    const [question, setQuestion] = useState('')
    const [interpretation, setInterpretation] = useState('')

    function handlesubmit(e){
        e.preventDefault()

        console.log({
            question, interpretation
        })
    }
    return (
        <form 
            onSubmit={handlesubmit}
            className="mt-10 w-full max-w-xl">


            {/* User input question */}
            <label className="mb-2 block text-sm text-slate-400">
                What is your question?
            </label>

            <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)} 
                placeholder="What should I focus on today?" 
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-purple-500" />

            {/* User interpretation */}
            <label className="mb-2 mt-6 block text-sm text-slate-400">
                Your interpretation
            </label>

            <textarea 
                rows="5" 
                value={interpretation}
                onChange={(e) => setInterpretation(e.target.value)}
                placeholder="Write your interpretation..." 
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-purple-500"></textarea>

            {/* Submit button */}
            <button 
                type="submit"
                className="mt-4 rounded-lg bg-purple-600 px-6 py-3 font-medium hover:bg-purple-500">Save Reading</button>
        </form>
    )
}

export default ReadingForm