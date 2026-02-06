import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen text-center flex flex-col justify-center items-center">
      <h2>404 Not Found</h2>
      <Link href="/" className="text-blue-500 hover:underline">
        返回首页
      </Link>
    </div>
  )
}
