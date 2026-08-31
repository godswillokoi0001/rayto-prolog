export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow mb-4 ${className}`.trim()}>{children}</p>;
}
