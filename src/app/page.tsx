export default function Home() {
  return (
    <div className= "bg-gray-200 min-h-screen p-10">
      <div className= "flex items-start justify-between">
        {/* Left Side: Home Content */}
        <div className= "w-1/2">
          <h1 className= "text-4xl font-bold mb-6">Home</h1>
        <p className= "text-justify text-2xl"> 
        The "Homepage" of a typical firm features the company name, logo, tagline, navigation, hero image, call to action, key offerings, testimonials, social media links, and footer. This design aims to introduce the company and its services or products effectively.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className= "w-1/2 pl-5">
        <img
          src= "/home.png"
          alt= "Home"
          className= "rounded-lg shadow-lg w-full h-64"
        />
      </div>
    </div>
  </div>
)}
