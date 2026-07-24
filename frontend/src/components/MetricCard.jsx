const MetricCard = ({ label, value, tone = 'default' }) => {
  const toneClasses = {
    default: 'border-slate-200 bg-white text-slate-700',
    accent: 'border-blue-100 bg-blue-50 text-blue-700',
    warning: 'border-amber-200 bg-amber-50 text-amber-700',
  };

  return (
    <div className={`rounded-2xl border p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${toneClasses[tone]}`}>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  );
};

export default MetricCard;
