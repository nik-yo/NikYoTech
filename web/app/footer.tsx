import Content from "@/components/content";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <Content className="py-3 bg-blue-500 text-white flex items-center">
      <div className="grow">
        &copy; {new Date().getFullYear()} NikYo Technology Consulting LLC
      </div>      
      <div className="flex justify-end space-x-4">
        <Link href="https://github.com/nik-yo"><FaGithub className="size-8" /></Link>
        <Link href="https://www.linkedin.com/in/nikkiyodo"><FaLinkedin className="size-8" /></Link>
      </div>
    </Content>
  )
}