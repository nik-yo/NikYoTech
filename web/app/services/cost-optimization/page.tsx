import Content from "@/components/content";
import CostProjects from "../../../data/costProjects.json"
import Link from "next/link";
import ProjectCard from "@/components/project-card";

export default function Service() {
  return (
    <Content className="my-4 space-y-4">      
      <div>
        <h2 className="text-lg">Services</h2>
        <h1 className="text-3xl font-bold">Cost Optimization</h1>
        <p className="mt-2">Optimizing existing solution to save cost without sacrificing performance.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Projects</h3>
        <div className="flex flex-col gap-4">
        {
          CostProjects.map((p, i) => (
            p.url ?
            <Link href={p.url} key={`p-${i}`}>
              <ProjectCard title={p.title} desc={p.desc} stack={p.stack} />
            </Link> :
            <ProjectCard key={`p-${i}`} title={p.title} desc={p.desc} stack={p.stack} />
          ))
        }
        </div>
      </div>      
    </Content>
  )
}