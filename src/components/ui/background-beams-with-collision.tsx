"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Array of gradient colors for random selection
  const gradientColors = useMemo(
    () => [
      "from-indigo-500 via-purple-500 to-transparent",
      "from-blue-500 via-cyan-500 to-transparent",
      "from-emerald-500 via-teal-500 to-transparent",
      "from-pink-500 via-rose-500 to-transparent",
      "from-orange-500 via-amber-500 to-transparent",
      "from-violet-500 via-fuchsia-500 to-transparent",
      "from-green-500 via-lime-500 to-transparent",
      "from-red-500 via-pink-500 to-transparent",
      "from-yellow-500 via-orange-500 to-transparent",
      "from-purple-500 via-indigo-500 to-transparent",
      "from-cyan-500 via-blue-500 to-transparent",
      "from-teal-500 via-emerald-500 to-transparent",
    ],
    []
  );

  const beams = useMemo(
    () => [
      {
        initialX: 10,
        translateX: 10,
        duration: 7,
        repeatDelay: 3,
        delay: 2,
        gradient: isClient
          ? gradientColors[Math.floor(Math.random() * gradientColors.length)]
          : gradientColors[0], // Default to first gradient during SSR
      },
      {
        initialX: 600,
        translateX: 600,
        duration: 3,
        repeatDelay: 3,
        delay: 4,
        gradient: isClient
          ? gradientColors[Math.floor(Math.random() * gradientColors.length)]
          : gradientColors[1], // Default to second gradient during SSR
      },
      {
        initialX: 100,
        translateX: 100,
        duration: 7,
        repeatDelay: 7,
        className: "h-6",
        gradient: isClient
          ? gradientColors[Math.floor(Math.random() * gradientColors.length)]
          : gradientColors[2], // Default to third gradient during SSR
      },
      {
        initialX: 400,
        translateX: 400,
        duration: 5,
        repeatDelay: 14,
        delay: 4,
        gradient: isClient
          ? gradientColors[Math.floor(Math.random() * gradientColors.length)]
          : gradientColors[3], // Default to fourth gradient during SSR
      },
      {
        initialX: 800,
        translateX: 800,
        duration: 11,
        repeatDelay: 2,
        className: "h-20",
        gradient: isClient
          ? gradientColors[Math.floor(Math.random() * gradientColors.length)]
          : gradientColors[4], // Default to fifth gradient during SSR
      },
      {
        initialX: 1000,
        translateX: 1000,
        duration: 4,
        repeatDelay: 2,
        className: "h-12",
        gradient: isClient
          ? gradientColors[Math.floor(Math.random() * gradientColors.length)]
          : gradientColors[5], // Default to sixth gradient during SSR
      },
      {
        initialX: 1200,
        translateX: 1200,
        duration: 6,
        repeatDelay: 4,
        delay: 2,
        className: "h-6",
        gradient: isClient
          ? gradientColors[Math.floor(Math.random() * gradientColors.length)]
          : gradientColors[6], // Default to seventh gradient during SSR
      },
    ],
    [gradientColors, isClient]
  );

  return (
    <div
      ref={parentRef}
      className={cn(
        " bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0  w-full inset-x-0 pointer-events-none"
      ></div>
    </div>
  );
};

const CollisionMechanism = ({
  containerRef,
  parentRef,
  beamOptions = {},
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  parentRef: React.RefObject<HTMLDivElement | null>;
  beamOptions?: {
    initialX?: number;
    translateX?: number;
    initialY?: number;
    translateY?: number;
    rotate?: number;
    className?: string;
    duration?: number;
    delay?: number;
    repeatDelay?: number;
    gradient?: string;
  };
}) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  const checkCollision = useCallback(() => {
    if (
      beamRef.current &&
      containerRef.current &&
      parentRef.current &&
      !cycleCollisionDetected
    ) {
      const beamRect = beamRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();

      if (beamRect.bottom >= containerRect.top) {
        const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
        const relativeY = beamRect.bottom - parentRect.top;

        setCollision({
          detected: true,
          coordinates: {
            x: relativeX,
            y: relativeY,
          },
        });
        setCycleCollisionDetected(true);
      }
    }
  }, [cycleCollisionDetected, containerRef, parentRef]);

  const startCollisionDetection = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(checkCollision, 100);
  }, [checkCollision]);

  const stopCollisionDetection = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startCollisionDetection();
    return stopCollisionDetection;
  }, [startCollisionDetection, stopCollisionDetection]);

  const resetCollision = useCallback(() => {
    setCollision({ detected: false, coordinates: null });
    setCycleCollisionDetected(false);
  }, []);

  const resetBeamKey = useCallback(() => {
    setBeamKey((prevKey) => prevKey + 1);
  }, []);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      const resetTimer = setTimeout(resetCollision, 2000);
      const keyTimer = setTimeout(resetBeamKey, 2000);

      return () => {
        clearTimeout(resetTimer);
        clearTimeout(keyTimer);
      };
    }
  }, [collision, resetCollision, resetBeamKey]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          `absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t ${
            beamOptions.gradient ||
            "from-indigo-500 via-purple-500 to-transparent"
          }`,
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Random colors for explosion effect
  const explosionColors = useMemo(() => {
    const colors = [
      "from-transparent via-indigo-500 to-transparent",
      "from-transparent via-purple-500 to-transparent",
      "from-transparent via-blue-500 to-transparent",
      "from-transparent via-cyan-500 to-transparent",
      "from-transparent via-emerald-500 to-transparent",
      "from-transparent via-pink-500 to-transparent",
      "from-transparent via-orange-500 to-transparent",
      "from-transparent via-violet-500 to-transparent",
      "from-transparent via-green-500 to-transparent",
      "from-transparent via-red-500 to-transparent",
      "from-transparent via-yellow-500 to-transparent",
      "from-transparent via-teal-500 to-transparent",
    ];
    return isClient
      ? colors[Math.floor(Math.random() * colors.length)]
      : colors[0]; // Default to first color during SSR
  }, [isClient]);

  const spanColors = useMemo(() => {
    const colors = [
      "from-indigo-500 to-purple-500",
      "from-blue-500 to-cyan-500",
      "from-emerald-500 to-teal-500",
      "from-pink-500 to-rose-500",
      "from-orange-500 to-amber-500",
      "from-violet-500 to-fuchsia-500",
      "from-green-500 to-lime-500",
      "from-red-500 to-pink-500",
      "from-yellow-500 to-orange-500",
      "from-purple-500 to-indigo-500",
      "from-cyan-500 to-blue-500",
      "from-teal-500 to-emerald-500",
    ];
    return isClient
      ? colors[Math.floor(Math.random() * colors.length)]
      : colors[0]; // Default to first color during SSR
  }, [isClient]);

  const spans = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        initialX: 0,
        initialY: 0,
        directionX: Math.floor(Math.random() * 80 - 40),
        directionY: Math.floor(Math.random() * -50 - 10),
      })),
    []
  );

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r ${explosionColors} blur-sm`}
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className={`absolute h-1 w-1 rounded-full bg-gradient-to-b ${spanColors}`}
        />
      ))}
    </div>
  );
};
