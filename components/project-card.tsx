export default function ProjectCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="rounded border-2 p-4">
      {children}
    </div>
  )
}