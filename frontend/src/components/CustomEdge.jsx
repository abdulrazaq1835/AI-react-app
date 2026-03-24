import { getBezierPath, EdgeLabelRenderer } from 'reactflow'

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition
}) => {
  const [edgePath] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition })

  return (
    <>
      <path
        id={id}
        d={edgePath}
        fill="none"
        strokeWidth={2}
        stroke={`url(#edgeGradient-${id})`}
        strokeDasharray="6 3"
        style={{ animation: 'dash 1.5s linear infinite' }}
      />
      <defs>
        <linearGradient id={`edgeGradient-${id}`} gradientUnits="userSpaceOnUse" x1={sourceX} y1={sourceY} x2={targetX} y2={targetY}>
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -24; }
        }
      `}</style>
    </>
  )
}

export default CustomEdge