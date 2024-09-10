import LinkButton from "@/components/link-button"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import ServiceData from "../data/services.json"
import Content from "@/components/content";

export default function Home() {
  // const services = [
  //   {
  //     title: "Developing to completion",
  //     desc: "In one of my projects, I took over mobile app development that has been ongoing for 9 months and I spent 3 months each to bring both the iOS and android apps to the market."
  //   },
  //   {
  //     title: "Architect a solution",
  //     desc: "Once, our cloud cost spiraled out of control and to solve the issue I architected a solution that doesn't involve code change and significant infrastructure change, and managed to save the company around $15,000 a month."
  //   },
  //   {
  //     title: "Process automation",
  //     desc: "Sometimes there are many tickets tied to a single Pull Request, so I created an extension that get triggered on Pull Request completion and automatically moved the tickets to the right location which saved a lot of manual work and time."
  //   },
  //   {
  //     title: "Proof of concept",
  //     desc: "I was asked if programmatically moving data from one EBS to a smaller EBS was feasible, so I did proof of concepts using various partition table, file systems, linux distros and windows versions. The solution handled most scenario, passed QA and made it to production."
  //   },
  //   {
  //     title: "Problem solving and troubleshooting",
  //     desc: "One day our application started crashing, unable to connect to our MySQL database. Some troubleshooting later, I found out that the new base container image has disabled old cipher suites and the database doesn't support any newer cipher suites. I ended up re-enabling the old cipher suites until the database was upgraded."
  //   }
  // ]

  return (
    <>
      <div style={{backgroundImage: "url('/bg.jpeg')"}} className="h-80 bg-no-repeat bg-center bg-cover">

      </div>
      <Content className="space-y-4 p-4">
        <div>
          <h2 className="text-lg font-bold">I help businesses solving problems and achieving business goals using Cloud, Mobile, and Web technologies.</h2>
          <p>Various solutions, each with its own complexity, are required to achieve business goals and they can be overhelming to learn, implement, and keep up. I will come alongside you to implement the solutions and provide advices to maximize the value of your technology investment in order to reach your goals. I have over 10 years experience in various technologies development and operation which I would love to apply them for the benefit of your business.</p>
        </div>
        <hr />
        <div className="text-center">
          <div className="mb-4">Need help with a project?</div>
          <LinkButton href="mailto:nikki.yodo@nikyotech.com">Email me</LinkButton>
        </div>
        <div className="text-center">
          <Link className="text-blue-700 font-bold text-2xl" href="/projects">Check out my project page</Link>
        </div>
        <div className="rounded-2xl border-2 border-blue-500 space-y-2 p-8">
          <div className="">
            <h1 className="text-2xl font-bold">Services</h1>
          </div>
          <div className="flex flex-col space-y-4">
            <ul className="list-disc px-4">
            {
              ServiceData.map((s, i) => (
                <li key={`svc-${i}`} className="py-2 text-xl">
                  <div>{s.name}</div>
                  <div className="text-sm">
                    <ul className="list-['-'] pl-2">
                      {
                        s.examples.map((e, i) => (
                          <li key={`ex-${i}`} className="pl-2">{e}</li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              ))
            }
            </ul>
          </div>
        </div>      
        <div className="text-center">
          <div className="mb-4">Other needs? Let&apos;s discuss.</div>
          <LinkButton href="mailto:nikki.yodo@nikyotech.com">Email me</LinkButton>
          <div className="my-2">or</div>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/nik-yo"><FaGithub className="size-8" /></Link>
            <Link href="https://www.linkedin.com/in/nikkiyodo"><FaLinkedin href="" className="size-8" /></Link>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <img src="/opcc-member.png" className="w-40" alt="Overland Park Chamber of Commerce Member" />
        </div>
      </Content>
    </>
  );
}
