export default function About() {
  return (
    <div className="min-h-screen bg-gray-100" style={{ textAlign: 'justify' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-4" >
          Welcome to Our Company! We are committed to delivering top-quality
          products and services to our customers. Our mission is to help you
          achieve your goals through innovative solutions and exceptional
          customer support.
        </p>

        {/* Detailed Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-md text-gray-600 mb-4">
            Founded in 2022, our company started with a small team of passionate
            individuals who wanted to make a difference in the industry. Over
            the years, we have grown into a well-established business known for
            our dedication and innovation.
          </p>
          <p className="text-md text-gray-600 mb-4">
            Our values are centered around integrity, customer satisfaction, and
            continuous improvement. We believe in building long-lasting
            relationships with our clients and delivering solutions that exceed
            expectations.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet the Team
          </h2>
          <p className="text-md text-gray-600">
            Our team is made up of talented professionals from various fields,
            all dedicated to helping our clients succeed. From developers and
            designers to support staff, we are here to make your experience
            exceptional.
          </p>
        </div>
      </div>
    </div>
  );
}
