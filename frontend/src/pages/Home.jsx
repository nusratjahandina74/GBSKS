import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Helping Poor Children Build a Better Future
        </h1>
        <p className="text-lg max-w-2xl mb-10">
          Mandag BSKS works with education, healthcare and vocational training
          for underprivileged children in Bangladesh.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">School Project</h3>
            <p>Free education for poor children</p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Medical Project</h3>
            <p>Healthcare support with doctors</p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Vocational Training</h3>
            <p>Skill development for employment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
