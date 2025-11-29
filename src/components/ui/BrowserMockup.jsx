export default function BrowserMockup({ url, children, className = '' }) {
  return (
    <div className={`relative bg-zinc-900 rounded-2xl border-2 border-zinc-800 overflow-hidden group-hover:border-zinc-700 transition-all ${className}`}>
      {/* Browser Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        {url && (
          <div className="flex-1 mx-4">
            <div className="bg-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-500 text-center truncate">
              {url}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative overflow-hidden bg-zinc-950">
        {children}
      </div>
    </div>
  );
}




