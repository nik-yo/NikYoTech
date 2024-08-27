import Link from "next/link"

export default function LinkButton({
  children,
  href,
  className
}: {
  children: React.ReactNode,
  href: string,
  className?: string
}) {
  return (
    <Link href={href} className={`bg-green-500 py-2 px-3 text-white rounded-md ${className}`}>
      {children}
    </Link>
  )
}