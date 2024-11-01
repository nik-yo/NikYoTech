export default function TalkCard({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div className={`rounded border p-4 shadow ${className}`}>
      {children}
    </div>
  )
}