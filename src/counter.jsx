import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Counter App</h1>
        
        <div className="text-center mb-8">
          <p className="text-6xl font-bold text-indigo-600">{count}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Increment +
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            disabled={count <= 0}
            className={`px-6 py-3 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              count <= 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
            }`}
          >
            Decrement -
          </button>
        </div>
        
        {count !== 0 && (
          <button 
            onClick={() => setCount(0)}
            className="mt-4 w-full py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            Reset Counter
          </button>
        )}
      </div>
    </div>
  );
}