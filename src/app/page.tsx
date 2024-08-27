import Button from "@/components/button";
import LinkButton from "@/components/link-button";
import ServiceCard from "@/components/service-card";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      title: "Developing to completion",
      desc: "In one of my projects, I took over mobile app development that has been ongoing for 9 months and I spent 3 months each to bring both the iOS and android apps to the market."
    },
    {
      title: "Architect a solution",
      desc: "Once, our cloud cost spiraled out of control and to solve the issue I architected a solution that doesn't involve code change and significant infrastructure change, and managed to save the company around $15,000 a month."
    },
    {
      title: "Process automation",
      desc: "Sometimes there are many tickets tied to a single Pull Request, so I created an extension that get triggered on Pull Request completion and automatically moved the tickets to the right location which saved a lot of manual work and time."
    },
    {
      title: "Proof of concept",
      desc: "I was asked if programmatically moving data from one EBS to a smaller EBS was feasible, so I did proof of concepts using various partition table, file systems, linux distros and windows versions. The solution handled most scenario, passed QA and made it to production."
    },
    {
      title: "Problem solving and troubleshooting",
      desc: "One day our application started crashing, unable to connect to our MySQL database. Some troubleshooting later, I found out that the new base container image has disabled old cipher suites and the database doesn't support any newer cipher suites. I ended up re-enabling the old cipher suites until the database was upgraded."
    }
  ]

  return (
    <>
      <div className="my-2">
        <h2 className="text-lg font-bold">Would love to help</h2>
        <p>Hi, I'm Nikki, an engineer with over 10 years of experience developing web and mobile applications and I also have experience in managing cloud and devops infrastructure and operations. Technology is my passion and I would love to help you with any of your technology needs.</p>
      </div>
      <div className="text-center my-2">
        <div className="mb-4">Need help with a project?</div>
        <LinkButton href="mailto:nik_yodo@yahoo.com">Email me</LinkButton>
      </div>
      <div className="my-2">
        <h1 className="text-2xl font-bold">What values can I provide?</h1>
      </div>
      <div className="flex flex-col space-y-4 my-2">
        {
          services.map((s, i) => (
            <ServiceCard key={`svc-${i}`}>
              <h2 className="font-bold">{s.title}</h2>
              <p>{s.desc}</p>
            </ServiceCard>
          ))
        }
      </div>
      <div className="text-center my-8">
        <div className="mb-4">Other needs? Let's discuss.</div>
        <LinkButton href="mailto:nik_yodo@yahoo.com">Email me</LinkButton>
        <div className="my-2">or</div>
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/nik-yo"><FaGithub className="size-8" /></Link>
          <Link href="https://www.linkedin.com/in/nikkiyodo"><FaLinkedin href="" className="size-8" /></Link>
        </div>
      </div>
    </>
  );
}
