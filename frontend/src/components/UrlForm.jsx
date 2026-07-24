import { useState } from 'react';

const UrlForm = ({ onAnalyze, loading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAnalyze(url);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 sm:p-6">
      <label htmlFor="website-url" className="mb-3 block text-sm font-semibold text-slate-700">
        Website URL
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="website-url"
          type="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="https://example.com"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
    </form>
  );
};

export default UrlForm;
