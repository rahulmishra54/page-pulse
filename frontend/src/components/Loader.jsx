const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-4 text-blue-700 shadow-sm">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      <span className="font-medium">Analyzing website...</span>
    </div>
  );
};

export default Loader;
