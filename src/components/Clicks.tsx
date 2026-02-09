import { useCounter } from "../hooks/useCounter"

const Clicks: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-50">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12 mt-3">
          Contador de Clicks
        </h1>

        <div className="p-8 text-center rounded-2xl ease-in-out cursor-default transform hover:scale-[1.01] bg-blue-500 hover:bg-blue-550 text-white">
          <h2 className="text-2xl font-semibold mb-2 opacity-90">
            Total:
          </h2>

          <p className="text-7xl sm:text-8xl font-black mb-4 tracking-tight">
            {count}
          </p>

          <div className="h-0.5 w-24 bg-white/50 mx-auto my-4 rounded-full"></div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={decrement}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
            >
              -
            </button>

            <button
              onClick={increment}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
            >
              +
            </button>

          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={reset}
              className="mt-4 bg-gray-700 hover:bg-gray-800 text-white font-bold text-xl py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Reset
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Clicks
