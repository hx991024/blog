import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
        <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              My Blog
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              首页
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
