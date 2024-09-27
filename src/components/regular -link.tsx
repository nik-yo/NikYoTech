import Link from "next/link";

export default function RegularLink({
  children,
  href
}: {
  children: React.ReactNode,
  href: string
}) {
  return (
    <Link href={href} className="text-blue-700 underline">{children}</Link>
  )
}