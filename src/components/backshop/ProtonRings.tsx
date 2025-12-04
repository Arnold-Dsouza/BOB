import { motion } from 'framer-motion'

function Ring({ images, reverse = false, radius = 120 }: { images: string[]; reverse?: boolean; radius?: number }) {
  return (
    <motion.div
      className="relative"
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: reverse ? 60 : 40 }}
    >
      {images.map((src, idx) => {
        const angle = (idx / images.length) * Math.PI * 2
        const x = Math.cos(angle) * radius + radius - 24
        const y = Math.sin(angle) * radius + radius - 24
        return (
          <img
            key={idx}
            src={src}
            alt=""
            aria-hidden
            className="absolute rounded-md shadow"
            style={{ left: x, top: y, width: 48, height: 48, objectFit: 'cover' }}
          />
        )
      })}
    </motion.div>
  )
}

export default function ProtonRings({ images = [] }: { images?: string[] }) {
  const rings = [images.slice(0, 10), images.slice(10, 20), images.slice(20, 30)]
  return (
    <div className="flex items-center justify-center min-h-[240px] overflow-hidden">
      <div className="relative">
        <Ring images={rings[0]} radius={80} />
        <Ring images={rings[1]} radius={120} reverse />
        <Ring images={rings[2]} radius={160} />
      </div>
    </div>
  )
}
