import Content from "@/components/content"
import CertData from "../../data/certificates.json"
import Image from "next/image"

export default function Certifications() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {
          CertData.map((c, i) => (
            <div key={`cert-${i}`}>
              <Image src={c.url} alt={c.title} width={620} height={480} />
            </div>
          ))
        }
      </div>
    </Content>
  )
}