import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import React from "react";

interface AutoScrollCarouselProps {
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

const AutoScrollCarousel = ({
  direction = "left",
  speed = 20,
  className,
  children,
}: AutoScrollCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    let animationFrameId: number;
    let lastTimestamp = 0;
    const pixelsPerSecond = speed;

    // Initial scroll position
    scrollRef.current = direction === "left" ? 0 : content.scrollWidth / 3;
    container.scrollLeft = scrollRef.current;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      const pixelsToMove = (pixelsPerSecond * elapsed) / 1000;

      if (direction === "left") {
        scrollRef.current += pixelsToMove;
        if (scrollRef.current >= content.scrollWidth * (2 / 3)) {
          scrollRef.current = 0;
        }
      } else {
        scrollRef.current -= pixelsToMove;
        if (scrollRef.current <= 0) {
          scrollRef.current = content.scrollWidth * (2 / 3);
        }
      }

      container.scrollLeft = scrollRef.current;
      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      lastTimestamp = 0;
      animationFrameId = requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [direction, speed]);

  const allChildren = React.Children.toArray(children);
  const triplicatedChildren = [
    ...allChildren.map((child) =>
      React.cloneElement(child as React.ReactElement, {
        key: `set1-${(child as React.ReactElement).key}`,
      })
    ),
    ...allChildren.map((child) =>
      React.cloneElement(child as React.ReactElement, {
        key: `set2-${(child as React.ReactElement).key}`,
      })
    ),
    ...allChildren.map((child) =>
      React.cloneElement(child as React.ReactElement, {
        key: `set3-${(child as React.ReactElement).key}`,
      })
    ),
  ];

  return (
    <div
      ref={containerRef}
      className={cn("overflow-x-hidden relative w-full", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
    >
      <div
        ref={contentRef}
        className="inline-flex"
        style={{
          touchAction: "none",
          userSelect: "none",
        }}
      >
        {triplicatedChildren}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
