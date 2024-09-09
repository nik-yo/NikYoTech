import Content from "@/components/content";
import Link from "next/link";

export default function About() {
  return (
    <Content className="my-4 space-y-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">About</h1>
        <p>I&apos;m Nikki, an engineer with over 10 years of experience developing web and mobile applications and I also have experience in managing cloud and devops infrastructure and operations. I have come to understand that technology can be both powerful and overwhelming. Thus, I created this initiative to help others navigating the vast realm of technology so we can solve business problems and achieve business goals together and make everyday more exciting.</p>
        <p>More about me on my personal site: <Link className="text-blue-700" href="https://www.nikkiyodo.com">https://www.nikkiyodo.com</Link></p>
      </div>
      <div className="p-4 bg-gray-300 rounded-md">
        <div>John 15:13 (ESV)</div>
        <p className="italic"><q>Greater love has no one than this, that someone lay down his life for his friends.</q></p>
      </div>
    </Content>
    
  )
}