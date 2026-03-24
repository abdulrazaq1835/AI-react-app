import { useState, useEffect } from 'react'
import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import { FaPlay, FaSave } from 'react-icons/fa'
import Navbar from './components/Navbar'
import InputNode from './components/InputNode'
import ResultNode from './components/ResultNode'
import CustomEdge from './components/CustomEdge'
import { askAi, saveData } from './api/api.js'
import toast, { Toaster } from 'react-hot-toast'

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode
}

const edgeTypes = {
  customEdge: CustomEdge
}

export default function App() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nodes = [
    {
      id: '1',
      type: 'inputNode',
      position: isMobile ? { x: 20, y: 20 } : { x: 100, y: 200 },
      data: { prompt, setPrompt, isMobile }
    },
    {
      id: '2',
      type: 'resultNode',
      position: isMobile ? { x: 20, y: 350 } : { x: 550, y: 200 },
      data: { result, loading, isMobile }
    }
  ]

  const edges = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'customEdge'
    }
  ]

  const handleRunFlow = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')
    try {
      const answer = await askAi(prompt)
      setResult(answer)
    } catch (err) {
      setResult('Error: response error')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!prompt.trim() || !result.trim()) return
    setSaving(true)
    try {
      await saveData(prompt, result)
      toast.success("Saved Successfully")
      setPrompt('')
      setResult('')
    } catch (err) {
      alert('Save failed!')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="h-[100dvh] flex flex-col bg-[#0f0c29]">
      <Toaster position="top-right" />
      <Navbar />

      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          fitViewOptions={{ padding: 0.3 }}
          minZoom={0.3}
        >
          <Background color="#a855f7" gap={24} size={0.5} />
          <Controls
            position={isMobile ? 'top-right' : 'bottom-left'}
            className="border-none shadow-xl"
          />
        </ReactFlow>

        {/* ✅ Fixed Buttons (Mobile Safe) */}
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-row w-[92%] sm:w-auto gap-3 sm:gap-4 z-50">
          <button
            onClick={handleRunFlow}
            disabled={loading}
            className="flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl font-bold text-white text-sm tracking-wide bg-[linear-gradient(135deg,#00f2fe,#4facfe,#a855f7)] hover:opacity-90 transition disabled:opacity-50 shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <FaPlay size={14} />
            {loading ? 'RUNNING...' : 'RUN'}
          </button>

          <button
            onClick={handleSave}
            disabled={saving || !result}
            className="flex-1 sm:flex-none px-4 sm:px-6 py-3 rounded-xl font-bold text-white text-sm tracking-wide bg-[linear-gradient(135deg,#ec4899,#a855f7)] hover:opacity-90 transition disabled:opacity-50 shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <FaSave size={14} />
            {saving ? 'SAVING...' : 'SAVE'}
          </button>
        </div>
      </div>
    </div>
  )
}