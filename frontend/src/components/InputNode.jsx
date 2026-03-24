import { Handle, Position } from 'reactflow'

const InputNode = ({ data }) => {
  return (
    <div className="relative p-[2px] rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, #00f2fe, #4facfe, #a855f7, #ec4899)',
        backgroundSize: '300% 300%',
        animation: 'gradientBorder 3s ease infinite'
      }}>

      <div className="bg-[#0f0c29] rounded-2xl p-4 w-72">
        <p className="text-xs font-mono text-cyan-400 tracking-widest mb-2 animate-pulse">
          ● INPUT PROMPT
        </p>
        <textarea
          rows={4}
          value={data.prompt}
          onChange={(e) => data.setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
          className="w-full bg-transparent text-white text-sm placeholder-gray-500 outline-none resize-none font-mono"
        />
      </div>

      <Handle
        type="source"
        position={data?.isMobile ? Position.Bottom : Position.Right}
        className="w-3 h-3 bg-cyan-400 border-2 border-cyan-300"
      />

      <style>{`
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}

export default InputNode