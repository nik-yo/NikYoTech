import Content from "@/components/content"
import ServiceData from "../../data/services.json"

export default function Services() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Services</h1>
      <p>Some services that I provide</p>
      {
        ServiceData.map((s, i) => (
          <div key={`svc-${i}`} className="py-4">
            <h2 className="text-xl font-bold">{s.name}</h2>
            <p>{s.desc}</p>
            <div className="font-bold">Examples:</div>
            <ul className="list-disc pl-6">
              {
                s.examples.map((e, i) => (
                  <li key={`ex-${i}`}>{e}</li>
                ))
              }
            </ul>
          </div>
        ))
      }      
    </Content>
  )
}