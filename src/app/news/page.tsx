export default function News() {
    // throw new Error ("Sorry, there is no news yet")
  
      return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="text-center">
          {/* Error Icon */}
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
  
          {/* Error Message */}
          <h1 className="text-4xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h1>
          <p className="text-lg text-gray-900 mb-4">We’re sorry, but an error occurred while processing your request.</p>
          <p className="text-lg text-gray-900 mb-6">This error was triggered intentionally. Please navigate to another page.</p>
  
          {/* Button to navigate */}
          <a href="/" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Go to Home</a>
        </div>
      </div>
    );
}