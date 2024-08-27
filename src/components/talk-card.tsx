export default function TalkCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="rounded border-4 p-4">
      {children}
    </div>
  )
}