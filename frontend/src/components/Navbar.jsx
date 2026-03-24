const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between shadow-2xl bg-[linear-gradient(135deg,#0f0c29,#302b63,#24243e)]">

      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-cyan-400 animate-ping absolute"></div>
          <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
        </div>
        <h1 className="text-2xl font-extrabold tracking-widest bg-[linear-gradient(90deg,#00f2fe,#4facfe,#a855f7,#ec4899)] bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
          AI Flow
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-1">
        {[12, 18, 24, 18, 12].map((h, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-[linear-gradient(180deg,#4facfe,#a855f7)] animate-equalizer"
            style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        {['bg-cyan-400', 'bg-purple-500', 'bg-pink-400'].map((color, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${color} animate-bounce`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

    </nav>
  )
}

export default Navbar