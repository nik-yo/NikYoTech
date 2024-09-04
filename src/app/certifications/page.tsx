import CertData from "../../data/certificates.json"

export default function Certifications() {
  return (
    <div className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {
          CertData.map((c, i) => (
            <div key={`cert-${i}`}>
              <img src={c.url} alt={c.title}/>
            </div>
          ))   
        }
      </div>
    </div>
  )
}