const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-lg font-semibold text-white shadow-lg shadow-blue-600/20">
            P
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">Page Pulse</p>
            <p className="text-sm text-slate-500">SEO snapshot analyzer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
