import { Handle, Position } from 'reactflow'

const ResultNode = ({ data }) => {
  return (
    <div className="relative p-[2px] rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, #ec4899, #a855f7, #4facfe, #00f2fe)',
        backgroundSize: '300% 300%',
        animation: 'gradientBorder 3s ease infinite'
      }}>

      <div className="bg-[#0f0c29] rounded-2xl p-4 w-72">
        <p className="text-xs font-mono text-purple-400 tracking-widest mb-2 animate-pulse">
          ● AI RESPONSE
        </p>

        <div className="max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
          {data.loading ? (
            <div className="flex items-center gap-2 py-2">
              {['bg-cyan-400', 'bg-purple-400', 'bg-pink-400'].map((color, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${color} animate-bounce`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          ) : (
            <p className="text-white text-sm font-mono leading-relaxed whitespace-pre-wrap">
              {data.result || 'Response will appear here...'}
            </p>
          )}
        </div>
      </div>

      <Handle
        type="target"
        position={data?.isMobile ? Position.Top : Position.Left}
        className="w-3 h-3 bg-purple-400 border-2 border-purple-300"
      />

      <style>{`
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #a855f7; border-radius: 999px; }
        ::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </div>
  )
}

export default ResultNode