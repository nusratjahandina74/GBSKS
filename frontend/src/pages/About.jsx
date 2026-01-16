export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">About Mandag BSKS</h1>

        <p className="text-lg leading-relaxed mb-6">
          Mandag BSKS is a non-profit organization dedicated to improving the
          lives of underprivileged children in Bangladesh. Our mission is to
          ensure access to education, healthcare, and vocational skills.
        </p>

        <p className="text-lg leading-relaxed mb-10">
          We work in partnership with local communities and international
          medical professionals to deliver sustainable solutions that create
          long-term impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              Empower children through education, health, and skill
              development.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>
              A society where every child has equal opportunity to thrive.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p>
              Transparency, compassion, sustainability, and community impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
