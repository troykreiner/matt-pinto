import type { CSSProperties } from "react";

type MattPintoSymbolProps = {
  className?: string;
};

type SymbolDelayStyle = CSSProperties & {
  "--symbol-delay": string;
};

const leftChevronStyle: SymbolDelayStyle = {
  "--symbol-delay": "0ms",
};

const middleChevronStyle: SymbolDelayStyle = {
  "--symbol-delay": "120ms",
};

const rightChevronStyle: SymbolDelayStyle = {
  "--symbol-delay": "240ms",
};

export function MattPintoSymbol({ className = "" }: MattPintoSymbolProps) {
  return (
    <svg
      viewBox="0 0 114 87"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 86.9147V0L30.9183 41.087L0 86.9147Z"
        className="site-symbol-chevron"
        style={leftChevronStyle}
      />
      <path
        d="M41.2241 86.9147V0L72.1424 41.087L41.2241 86.9147Z"
        className="site-symbol-chevron"
        style={middleChevronStyle}
      />
      <path
        d="M82.4491 86.9147V0L113.367 41.087L82.4491 86.9147Z"
        className="site-symbol-chevron"
        style={rightChevronStyle}
      />
    </svg>
  );
}
