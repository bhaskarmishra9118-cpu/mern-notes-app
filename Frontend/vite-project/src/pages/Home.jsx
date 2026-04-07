import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="min-h-[80vh] bg-slate-100 px-4 py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Smart Notes App
          </p>
          <h1 className="mb-4 text-3xl font-bold text-slate-800 md:text-5xl">
            Organize Your Notes In One Place
          </h1>
          <p className="mb-6 text-slate-600">
            Save ideas, manage daily tasks, and access your notes quickly with a clean and simple interface.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/register"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80"
            alt="Notebook workspace"
            className="h-72 w-full rounded-xl object-cover md:h-96"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
