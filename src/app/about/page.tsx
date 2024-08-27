import Link from "next/link";

export default function About() {
  return (
    <div className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">About</h1>
      <p>Technology is exciting but it can be overwhelming. I created this initiative to help others navigating the vast realm of technology so we can realize business ideas and solve business problems together and make everyday more exciting.</p>
      <p>More about me can be found in my personal site: <Link className="text-blue-700" href="https://www.nikkiyodo.com">https://www.nikkiyodo.com</Link></p>
    </div>
  )
}