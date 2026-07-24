const HeadingsCard = ({ headings }) => {
  if (!headings || headings.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Page Headings</h3>
        <p className="mt-3 text-sm text-slate-500">No headings were detected.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Page Headings</h3>
      <ul className="mt-4 space-y-3">
        {headings.map((heading, index) => (
          <li key={`${heading}-${index}`} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            {heading}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadingsCard;
