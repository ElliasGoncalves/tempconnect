import { useEffect, useRef } from "react";

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

export default function AdBox300x250() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current) return;

    adRef.current.innerHTML = "";

    window.atOptions = {
      key: "4cbab01840f4e8f3e61da5d09d629941",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.highperformanceformat.com/4cbab01840f4e8f3e61da5d09d629941/invoke.js";
    script.async = true;

    adRef.current.appendChild(script);

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-6">
      <div
        ref={adRef}
        className="w-[300px] min-w-[300px] h-[250px] overflow-hidden flex items-center justify-center"
      />
    </div>
  );
}