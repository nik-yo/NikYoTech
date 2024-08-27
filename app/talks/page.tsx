import TalkCard from "@/components/talk-card";
import Link from "next/link";

export default function Talks() {
  return (
    <div className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Talks</h1>
      <p>Talks that I gave</p>
      <TalkCard>
        <h1 className="font-bold">Scheduled Notifications Using Amazon CloudWatch Events, SNS, and Lambda</h1>
        <p>Subscribing to a topic to receive scheduled notifications. It is implemented using various technology (ruby, go, node, python, java, html, android, .NET) running completely serverless working as one.</p>
        <div className="mt-2">
          <div><span className="font-bold">GitHub: </span><Link className="text-blue-700" href="https://github.com/nik-yo/AWSUGID-OnlineTalk-20200514">https://github.com/nik-yo/AWSUGID-OnlineTalk-20200514</Link></div>
          <div><span className="font-bold">Date: </span>5/14/2020</div>
          <div><span className="font-bold">Venue: </span>Online</div>
        </div>
      </TalkCard>
    </div>
  )
}