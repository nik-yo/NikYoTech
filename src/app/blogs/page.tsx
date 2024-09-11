import Content from "@/components/content"
import BlogData from "../../data/blogs.json"
import Link from "next/link"

export default function Blogs() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Blogs</h1>
      <ul className="list-disc px-4">
        {
          BlogData.map((b, i) => (
            <li key={`blog-${i}`}>
              <Link className="font-bold text-blue-700" href={`/blogs/${b.url}`}>{b.title}</Link>
              <span className="italic ms-2">({b.date})</span>
            </li>
          ))   
        }
      </ul>
    </Content>
  )
}