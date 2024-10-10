import Content from "@/components/content";
import Image from "next/image"

export default function TShirtEditing() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">T-Shirt Editing</h1>
      <p>For the project, I was given a logo in png. The png file has white background, so my first step is using photoshop to remove the white background so I can place it on top of the t-shirt template. Other requests include adding QR code and text. Here are some versions that I made.</p>
      <p className="font-bold">Version 1</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image src="/t-shirt-editing/asterchat_front_v1.png" alt="T-shirt front version 1" width={240} height={280}/>
        <Image src="/t-shirt-editing/asterchat_back_v1.png" alt="T-shirt back version 1" width={240} height={280}/>
      </div>
      <p className="font-bold">Version 2</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image src="/t-shirt-editing/asterchat_front_v2b.png" alt="T-shirt front version 2" width={240} height={280}/>
        <Image src="/t-shirt-editing/asterchat_back_v2.png" alt="T-shirt back version 2" width={240} height={280}/>
      </div>
      <p className="font-bold">Version 3</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image src="/t-shirt-editing/asterchat_front_v4b.png" alt="T-shirt front version 3" width={240} height={280}/>
        <Image src="/t-shirt-editing/asterchat_back_v4.png" alt="T-shirt back version 3" width={240} height={280}/>
      </div>
    </Content>
  )
}