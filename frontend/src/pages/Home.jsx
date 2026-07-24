import { useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MetricCard from '../components/MetricCard';
import HeadingsCard from '../components/HeadingsCard';
import Footer from '../components/Footer';
import { useAnalyze } from '../hooks/useAnalyze';

const Home = () => {
  const { analyze, loading, error, result } = useAnalyze();

  const metrics = useMemo(() => {
    if (!result) return [];

    return [
      { label: 'HTTP Status', value: result.status, tone: 'accent' },
      { label: 'Response Time', value: `${result.responseTime} ms`, tone: 'default' },
      { label: 'Page Title', value: result.title || 'No title found', tone: 'default' },
      { label: 'Meta Description', value: result.metaDescription || 'No description found', tone: 'default' },
      { label: 'H1 Count', value: result.h1Count, tone: 'default' },
      { label: 'Images Missing Alt', value: result.imagesMissingAlt, tone: 'warning' },
      { label: 'Word Count', value: result.wordCount, tone: 'default' },
      { label: 'Total Images', value: result.totalImages, tone: 'default' },
      { label: 'Total Links', value: result.totalLinks, tone: 'default' },
    ];
  }, [result]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero onAnalyze={analyze} loading={loading} error={error} result={result} />

        {result && (
          <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Analysis result</p>
                  <h2 className="text-2xl font-semibold text-slate-900">Website metrics overview</h2>
                </div>
                <p className="text-sm text-slate-500">A clear, responsive snapshot of the page structure.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="animate-[fadeIn_0.35s_ease-out]">
                    <MetricCard label={metric.label} value={metric.value} tone={metric.tone} />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
                <div className="animate-[fadeIn_0.45s_ease-out]">
                  <HeadingsCard headings={result.headings} />
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Insights</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Status code confirms whether the page is reachable.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Heading structure helps evaluate content hierarchy and SEO clarity.</li>
                    <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Missing image alt text can impact accessibility and usability.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
