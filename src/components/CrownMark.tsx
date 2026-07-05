type CrownMarkProps = {
  className?: string
}

/**
 * The Queens Haven signature mark — a single crown glyph echoing the brand
 * logo, used sparingly as a section divider instead of generic numbering
 * or rules. Sits inline within a hairline so it reads like a wax seal.
 */
export default function CrownMark({ className = '' }: CrownMarkProps) {
  return (
    <svg
      viewBox="0 0 48 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 16L13 22L24 8L35 22L42 16L38 33H10L6 16Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="13" r="2" fill="currentColor" />
      <circle cx="24" cy="6" r="2" fill="currentColor" />
      <circle cx="42" cy="13" r="2" fill="currentColor" />
    </svg>
  )
}
