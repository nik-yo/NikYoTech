export default function ServiceCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="rounded border-2 border-blue-500 p-8">
      {children}
    </div>
  )
}