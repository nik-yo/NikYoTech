export default function Button({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="bg-green-500 py-2 px-3 text-white rounded-md">
      {children}
    </button>
  )
}