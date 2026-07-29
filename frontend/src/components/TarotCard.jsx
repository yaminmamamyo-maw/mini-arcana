function TarotCard({ card }){
    return (
        <div className="w-64 rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center shadow-xl">
            <div className="mb-6 flex h-72 items-center justify-center rounded-xl bg-slate-800">
                <span className="text-6xl">🃏</span>
            </div>

            <h2 className="text-2xl font-bold">
                {card.name}
            </h2>

            <p className="mt-3 text-slate-400">
                {card.meaning}
            </p>
        </div>
    )
}

export default TarotCard