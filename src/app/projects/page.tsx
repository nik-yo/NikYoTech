import ProjectCard from "@/components/project-card"
import Link from "next/link"
import ProjectData from "../../data/projects.json"
import Content from "@/components/content";

export default function Projects() {
  const getGetStatusColor = (status: string) => {
    switch(status) {
      case "Ongoing":
        return "text-amber-500";
      case "Completed":
        return "text-green-500";
      case "Canceled":
        return "text-gray-500";
      default:
        return "";
    }
  }

  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Projects</h1>
      {
        ProjectData.map((p,i) => (
          <ProjectCard key={`proj-${i}`}>
            <h2 className="font-bold">{p.title}</h2>
            <p>{p.desc}</p>
            {
              p.link && <div>Link: <Link className="text-blue-700" href={p.link}>{p.link}</Link></div>
            }
            {
              p.project_link && <div>Project: <Link className="text-blue-700" href={p.project_link}>{p.project_link}</Link></div>
            }
            <div className={`${getGetStatusColor(p.status)} font-bold`}>{p.status}</div>
          </ProjectCard>
        ))
      }
    </Content>
  )
}