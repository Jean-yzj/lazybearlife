export function BearMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 兩隻耳朵 */}
      <circle cx="11.5" cy="11" r="5.5" fill="currentColor" />
      <circle cx="28.5" cy="11" r="5.5" fill="currentColor" />
      {/* 臉 */}
      <circle cx="20" cy="23" r="12.5" fill="currentColor" />
      {/* 眼睛（挖空成底色） */}
      <circle cx="15.4" cy="21.5" r="1.7" fill="var(--color-cream)" />
      <circle cx="24.6" cy="21.5" r="1.7" fill="var(--color-cream)" />
      {/* 鼻子 */}
      <ellipse cx="20" cy="27" rx="2.6" ry="2" fill="var(--color-cream)" />
    </svg>
  );
}
