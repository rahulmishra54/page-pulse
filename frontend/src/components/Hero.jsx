import UrlForm from './UrlForm';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const Hero = ({ onAnalyze, loading, error, result }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Modern SEO diagnostics for every page
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Measure the pulse of any website in seconds.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Enter a URL to inspect core page details such as status, load speed, headings, image accessibility, and content structure.
          </p>
          <div className="mt-8">
            <UrlForm onAnalyze={onAnalyze} loading={loading} />
          </div>
          <div className="mt-4">
            {loading ? <Loader /> : <ErrorMessage message={error} />}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/80">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Live insights</p>
            <h2 className="mt-3 text-2xl font-semibold">A polished snapshot for SEO reviews and learning projects.</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Fast checks</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">Instant results</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Clear reporting</p>
              <p className="mt-1 text-xl font-semibold text-slate-900">Responsive cards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
