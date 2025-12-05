import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const productImages = [
  'https://images.unsplash.com/photo-1590080876351-941da357bde6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtpbmclMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NjQ3NTY3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkfGVufDF8fHx8MTc2NDc3MzY5NHww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1619540158662-bb74607515f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBwYXN0cnl8ZW58MXx8fHwxNzY0ODQ3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
];

interface OrbitRingProps {
  radius: number;
  duration: number;
  reverse?: boolean;
  images: string[];
  count: number;
}

function OrbitRing({ radius, duration, reverse, images, count }: OrbitRingProps) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i * 360) / count;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <div
            key={i}
            className="absolute w-16 h-16 rounded-full overflow-hidden shadow-lg"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
            }}
          >
            <ImageWithFallback
              src={images[i % images.length]}
              alt={`Product ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
}

export function BackshopSection() {
  return (
    <section id="backladen" className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20">
      {/* Top Left Text */}
      <div className="absolute top-20 left-8 max-w-md z-20">
        <p className="text-2xl leading-relaxed">
          <span className="relative inline-block backdrop-blur-sm bg-white/80 px-2 py-1 rounded">
            4000 Produkte
          </span>{' '}
          <span className="relative inline-block backdrop-blur-sm bg-white/80 px-2 py-1 rounded">
            mit professioneller Beratung,
          </span>{' '}
          <span className="relative inline-block backdrop-blur-sm bg-white/80 px-2 py-1 rounded">
            damit jedes Projekt gelingt
          </span>
        </p>
      </div>

      {/* Orbit Animation */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full max-w-4xl">
          {/* Center Number */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-[200px] opacity-20 select-none">
              4000
            </div>
          </div>

          {/* Orbit Rings */}
          <OrbitRing radius={150} duration={30} images={productImages} count={8} />
          <OrbitRing radius={250} duration={40} reverse images={productImages} count={12} />
          <OrbitRing radius={350} duration={50} images={productImages} count={16} />
        </div>
      </div>

      {/* Bottom Right Link */}
      <div className="absolute bottom-20 right-8 z-20">
        <div className="text-right">
          <p className="text-sm mb-2">Entdecke unsere Back-kits</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Entdecke
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
