"use client";
import { ReactNode, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";

type LazySectionProps = {
  children: ReactNode;
  className?: string;
};

const LazyComponent = ({ children, className }: LazySectionProps) => {
  const localRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        localRef.current = node;
        ref(node);
      }
    },
    [ref]
  );

  return (
    <div ref={setRefs} className={className}>
      {inView ? children : null}
    </div>
  );
};

export default LazyComponent;
