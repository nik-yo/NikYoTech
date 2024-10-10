import Content from "@/components/content";

export default function BlogPost() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">How to host website for less than $1 a month?</h1>
      <p className="italic">9/20/2024</p>
      <div className="space-y-4">
        <div>
          <p>I used to pay $3-$12 a month for web hosting services. It doesn&apos;t break the wallet, but I was curious if I can do better. I also want the website to be widely supported, fast to develop and deploy, and the hosting to be durable. Thus it started me on a journey thinking of the architecture.</p>
        </div>
        <div>
          <p>First, for traditional website or web app, a server is required to generate the web pages. Basic web page components such as HTML, CSS, JavaScript are just flat files that can be opened as is. So, if we can just deliver the HTML, CSS, and JavaScript, no server is required to generate the web pages. However, it takes a lot of time to develop a website in plain HTML. Introducing SPA (Single Page Application). With SPA, a website, especially a simple one can be developed easily and fast.</p>
        </div>
        <div>
          <p>Now we have the website itself, how about the hosting service? SPA can be hosted in any web hosting services but the cost is the main point. That&apos;s where cloud services come in. Major cloud service providers provide static web hosting service, usually from their storage services for a very low cost or even free. Basically, all it does is sending the file as is to whoever access the site. This works for plain HTML as well as SPA.</p>
        </div>
        <div>
          <p>We have the website (SPA) and we have the hosting service. The only thing left is the deployment piece. Yes, we can manually deploy the website, but we can automate it for free. The term is CI/CD pipeline. Imagine having to hand-deliver all your mails. CI/CD pipeline works like a post office service where you just need to drop all your mails to the post office and post office will manage the deliveries to the destinations.</p>
        </div>
        <div>
          <p>Altogether, my websites cost less than a $1 a month and it is a lot cheaper than regular web hosting.</p>
        </div>
      </div>
    </Content>
  )
}