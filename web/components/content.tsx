export default function Content({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div className={`px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 ${className}`}>
      {children}
    </div>
  )
}