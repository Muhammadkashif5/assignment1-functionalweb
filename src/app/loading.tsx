export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200 relative">
         
        {/* Loading Message */}
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Loading...</h1>
          <p className="text-lg text-gray-600">Please wait while we load the content</p>
        </div>
      </div>
    );
  }
  