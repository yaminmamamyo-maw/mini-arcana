function ReadingList({ readings }) {
  return (
    <section className="mt-16 w-full max-w-3xl">
      <h2 className="text-2xl font-bold">
        Previous Readings
      </h2>

      {readings.length === 0 ? (
        <p className="mt-4 text-slate-400">
          No readings yet.
        </p>
      ) : (
        <div className="mt-6 space-y-4">
          {readings.map((reading) => (
            <article
              key={reading.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">
                  {reading.card_name}
                </h3>

                <span className="text-sm text-slate-500">
                  {new Date(
                    reading.created_at
                  ).toLocaleDateString()}
                </span>
              </div>

              <p className="mt-3 text-slate-300">
                <strong>Question:</strong>{' '}
                {reading.question}
              </p>

              <p className="mt-2 text-slate-400">
                {reading.interpretation}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default ReadingList