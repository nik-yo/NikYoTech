import Content from "@/components/content";
import ElseProjects from "../../../data/elseProjects.json"
import Link from "next/link";

export default function Service() {
  return (
    <Content className="my-4 space-y-4">      
      <div>
        <h2 className="text-lg">Services</h2>
        <h1 className="text-3xl font-bold">Other Technology Needs</h1>
        <p className="mt-2">Help achieving your business goals effectively.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Projects</h3>
        <div className="flex flex-col gap-4">
        {
          ElseProjects.map((p, i) => (
            <Link href={p.url} key={`p-${i}`}>
              <div className="p-4 rounded-md shadow border">
                <h2 className="text-lg font-bold">{p.title}</h2>
                <p>{p.desc}</p>
                <p className="mt-2"><strong>Stack</strong>: {p.stack.join(', ')}</p>
              </div>
            </Link>
          ))
        }
        </div>
      </div>      
    </Content>
  )
}