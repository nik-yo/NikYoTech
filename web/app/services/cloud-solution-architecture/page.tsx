import Content from "@/components/content";
import CloudProjects from "../../../data/cloudProjects.json"
import Link from "next/link";

export default function Service() {
  return (
    <Content className="my-4 space-y-4">   
      <div>
        <h2 className="text-lg">Services</h2>
        <h1 className="text-2xl font-bold">Cloud Solution Architecture</h1>
        <p className="mt-2">Optimized cloud based solution to meet your business goals.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Projects</h3>
        <div className="flex flex-col gap-4">
        {
          CloudProjects.map((p, i) => (
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