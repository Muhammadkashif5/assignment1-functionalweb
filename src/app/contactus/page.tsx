export default function ContactUs() {
  return (
    <div className="bg-gray-200 min-h-screen p-10">
      <div className="flex items-start justify-between">
        {/* Left side: About content */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-justify text-2xl">
          A "Contact Us" page provides guidance for existing customers and offers an overview of your brand for new visitors. A strong Contact Us page should contain several elements, such as a phone number and links to social media channels. It should also be easy to navigate, as this makes for a positive customer experience.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 pl-5 ">
          <img
            src= "/contact.PNG"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-64"
          />
        </div>
      </div>
    </div>
  );
}
