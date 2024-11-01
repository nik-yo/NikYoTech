import Content from "@/components/content";
import TalkCard from "@/components/talk-card";
import Link from "next/link";
import TalkData from "../../data/talks.json"

export default function Talks() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Talks</h1>
      <p>Talks that I had the privilege to present.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {
        TalkData.map((t, i) => (
          <Link href={t.url} key={`t-${i}`} className="h-full">
            <TalkCard className="h-full">
              <div className="flex flex-col h-full">
                <div className="grow">
                  <h1 className="text-lg font-bold">{t.title}</h1>
                  <p>{t.desc}</p>
                </div>     
                <div className="mt-4">
                  <h2 className="font-bold">{t.organizer}</h2>
                  <p>{t.date}</p>
                  <p>{t.venue}</p>
                </div>
              </div>
            </TalkCard>
          </Link>
        ))
      }
      </div>      
    </Content>
  )
}