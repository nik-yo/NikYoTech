import ProjectCard from "@/components/project-card"
import Link from "next/link"
import AppProjects from "../../data/appProjects.json"
import CloudProjects from "../../data/cloudProjects.json"
import CostProjects from "../../data/costProjects.json"
import PerformanceProjects from "../../data/performanceProjects.json"
import OperationProjects from "../../data/operationProjects.json"
import ElseProjects from "../../data/elseProjects.json"
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
      <h2 className="text-lg font-bold">Custom Application Development</h2>
      {
        AppProjects.map((p, i) => (
          <Link href={p.url} key={`p-${i}`}>
            <div className="p-4 rounded-md shadow border">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p>{p.desc}</p>
              <p className="mt-2"><strong>Stack</strong>: {p.stack.join(', ')}</p>
            </div>
          </Link>
        ))
      }
      <h2 className="text-lg font-bold">Cloud Solution Architecture</h2>
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
      <h2 className="text-lg font-bold">Cost Optimization</h2>
      {
        CostProjects.map((p, i) => (
          <Link href={p.url} key={`p-${i}`}>
            <div className="p-4 rounded-md shadow border">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p>{p.desc}</p>
              <p className="mt-2"><strong>Stack</strong>: {p.stack.join(', ')}</p>
            </div>
          </Link>
        ))
      }
      <h2 className="text-lg font-bold">Performance Improvement</h2>
      {
        PerformanceProjects.map((p, i) => (
          <Link href={p.url} key={`p-${i}`}>
            <div className="p-4 rounded-md shadow border">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p>{p.desc}</p>
              <p className="mt-2"><strong>Stack</strong>: {p.stack.join(', ')}</p>
            </div>
          </Link>
        ))
      }
      <h2 className="text-lg font-bold">Operation and Management Automation</h2>
      {
        OperationProjects.map((p, i) => (
          <Link href={p.url} key={`p-${i}`}>
            <div className="p-4 rounded-md shadow border">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p>{p.desc}</p>
              <p className="mt-2"><strong>Stack</strong>: {p.stack.join(', ')}</p>
            </div>
          </Link>
        ))
      }
      <h2 className="text-lg font-bold">Other Technology Needs</h2>
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
    </Content>
  )
}