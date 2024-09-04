export default function Footer() {
  return (
    <div className="py-3 px-8 md:px-32 lg:px-48 xl:px-64 2xl:px-96 bg-blue-500 text-white">
      &copy; {new Date().getFullYear()} NikYo Technology Consulting LLC
    </div>
  )
}