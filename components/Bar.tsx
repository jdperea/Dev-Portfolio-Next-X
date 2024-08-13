import { FunctionComponent, useEffect, useRef, useState } from "react";

import { Skill } from "../types";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(Number(level)); // Convert level to a number
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level]);

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500" ref={barRef}>
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-red-500 to-blue-700 transition-all duration-1000 ease-out"
        style={{
          width: `${width}%`,
        }}
      >
        <Icon className="mr-3 text-white" /> {name}
      </div>
    </div>
  );
};
export default Bar;
