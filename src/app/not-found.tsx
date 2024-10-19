export default function PageNotFound() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="text-center">
          {/* 404 Icon */}
          <div className="text-red-600 text-9xl font-bold mb-4">404</div>
  
          {/* Error Message */}
          <h1 className="text-4xl font-bold text-red-600 mb-2">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-4">Sorry, you have accessed the wrong route.</p>
          <p className="text-gray-600 mb-6">Please check the URL or return to the homepage.</p>
  
          {/* Button to navigate back to Home */}
          <a href="/" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Go to Home</a>
        </div>
      </div>
    );
  }
  