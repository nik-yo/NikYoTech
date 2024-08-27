import ProjectCard from "@/components/project-card";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p>Some projects for others that I'm involved in.</p>
      <ProjectCard>
        <h2 className="font-bold">Gentle Heart Company (GHC) Nepal</h2>
        <p>Helping a non-profit in Nepal to setup their WordPress site with e-commerce and e-booking.</p>
        <div>Site: <Link className="text-blue-700" href="https://ghcnepal.com">https://ghcnepal.com</Link></div>
        <div className="text-amber-500 font-bold">Ongoing</div>
      </ProjectCard>
    </div>
  )
}