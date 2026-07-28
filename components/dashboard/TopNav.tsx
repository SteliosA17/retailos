export default function TopNav() {
    return (
      <header className="flex h-16 items-center justify-between border-b border-white/10 px-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
  
        <div className="flex items-center gap-4">
          <button className="rounded-xl bg-white/5 px-3 py-2 hover:bg-white/10">
            🔔
          </button>
  
          <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 font-semibold">
              S
            </div>
  
            <div>
              <p className="text-sm font-medium text-white">
                Stelios
              </p>
              <p className="text-xs text-zinc-400">
                Owner
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
  