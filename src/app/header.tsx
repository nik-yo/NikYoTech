import Link from "next/link";

export default function Header() {
  const links = [
    {
      text: "Projects",
      href: "/projects"
    },
    {
      text: "Talks",
      href: "/talks"
    },
    {
      text: "About",
      href: "/about"
    }
  ]

  return (
    <div className="py-3 px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 bg-blue-500">
      <nav className="text-sm text-white flex">
        <Link className="font-bold" href="/">
          NikYo Technology
        </Link>
        <div className="grow text-end">
          {
            links.map((l, i) => (
              <Link 
                key={`link-${i}`} 
                className="px-2"
                href={l.href}>
                  {l.text}
              </Link>
            ))
          }  
        </div>
      </nav>
    </div>
  )
}