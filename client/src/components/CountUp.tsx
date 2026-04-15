import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export default function CountUp({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
  decimals = 0,
}: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}
      {suffix}
    </motion.span>
  );
}
