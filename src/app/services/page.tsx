import Content from "@/components/content"
import ServiceData from "../../data/services.json"

export default function Services() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Services</h1>
      {
        ServiceData.map((s, i) => (
          <div key={`svc-${i}`} className="py-4">
            <h2 className="text-xl font-bold">{s.name}</h2>
            <p>{s.desc}</p>
            <ul className="list-disc pl-6">
              {
                s.details.map((d, i) => (
                  <li key={`ex-${i}`}>{d.name}</li>
                ))
              }
            </ul>
          </div>
        ))
      }      
    </Content>
  )
}