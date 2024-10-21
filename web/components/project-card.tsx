export default function ProjectCard(props: { title?: string, desc?: string, stack?: string[] }) {
  return (
    <div className="p-4 rounded-md shadow border">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <p>{props.desc}</p>
      <p className="mt-2"><strong>Stack</strong>: {props.stack?.join(', ')}</p>
    </div>
  )
}