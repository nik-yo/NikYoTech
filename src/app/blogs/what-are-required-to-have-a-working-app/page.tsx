import Content from "@/components/content";

export default function BlogPost() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">What are required to have a working app?</h1>
      <p className="italic">9/11/2024</p>
      <div className="space-y-4">
        <div>
          <p>To have an app is very similar to having a house or a car. At the most basic level, we need to build it (development), ship it (logistics, in software world is to publish it), and to use it or run it (operation). But let's break them down further.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Development</h2>
          <p>It is all started with the end goal, maybe a business idea or a problem to be solved. From there, usually there will be a <strong>planning</strong> or design phase, such as what it will look like, technology choice, delivery methods, etc. And also, solution will be broken down to tasks and there will be prioritization, so we can ship most important features earlier than the rest.</p>
          <p>Once tasks are available, engineers can start working on them. But since there can be many different kinds of tasks, it usually requires different kinds of engineers. Imagine working on a jigsaw puzzle, one person can work on a certain color, other can work on one corner of the puzzle, while one probably focus on a certain object. So, let's call this the <strong>working</strong> phase since each person will be working on his/her own tasks. During this phase, software engineer can start programming the app. Infrastructure can be provisioned by multiple different engineers. For example, networking components by network engineer. Cloud resources, such as containers, virtual machines, database, can be provisioned by cloud engineer.</p>
        </div>
        <div>
         <h2 className="text-lg font-bold">Logistics</h2>
          <p>Once pieces are put together, we need to bring them together. Back to the jigsaw puzzle, we need to bring together what everyone is working on to complete the puzzle. Be it corners, sides, colors, objects, etc. Let's call it <strong>building</strong> phase.</p>
         <p>Unlike making a car where it is shipped only after it is complete. In software world, the recommended way is to ship it as frequent as possible. To allow this to happened, CI/CD pipeline(s) is required. CI/CD stands for Continuous Integration/Continuous Deployment. It's like an automated delivery system, imagine conveyer belt. Along the way, there will be various checks and tests to make sure we don't ship broken app. We usually called this phase the <strong>deployment</strong> phase.</p>
          <p>The destination for the deployment varies based on the type of the application. For mobile application, the destination is probably the app store. For web application, it will be the web server.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Operation</h2>
          <p>Finally, once the application reaches the destination, it can be used for its intended purposes. For mobile application, it can be downloaded, installed, and run. For web application, it can be visited. For this phase, calling it <strong>utilization</strong> is probably not too far off.</p>
          <p>Most of the time, it doesn't end there. Just like having a house or a car, there will be periodical maintenance. For app, it has to be monitored, so we know what kind of maintenance are required. It can be error fixing, vulnerability patching, version upgrade, etc. Doesn't it sound similar to tire inflation, gas refueled, and oil change? So <strong>monitoring</strong> phase is probably appropriate at this stage.</p>
          <p>From there, it can go back to a very lightweight planning phase. Take error fixing. Yes, we can fix it, but we need to plan on how to fix it so that we don't break something else. When and how to deploy the fix, so the end user will not be disrupted. And then, it will flow its way back. Each loop is usually called an iteration and it can go as long as we want to support the app.</p>
          <p>I hope that gives you a glimpse on what are required to have a working app?</p>
        </div>
      </div>      
    </Content>
  )
}