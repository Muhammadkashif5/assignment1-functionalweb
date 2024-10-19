export default function About() {
  return (
    <div className="bg-gray-200 min-h-screen p-10">
      <div className="flex items-start justify-between">
        {/* Left side: About content */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          <p className="text-justify text-2xl">
            The "About" section of a firm typically contains information about the company's history, mission, values, team, achievements, and testimonials. It aims to provide visitors with a clear understanding of the company's identity and why they should choose the firm.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 pl-5 ">
          <img
            src= "/about.png"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-64"
          />
        </div>
      </div>
    </div>
  );
}
