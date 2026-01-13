export default function Footer() {
  return (
    <>
      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto max-w-4xl px-4 text-center text-sm text-gray-600">
          <p>
            Build width{' '}
            <span className="font-semibold text-gray-900">Next.js</span> &{' '}
            <span className="font-semibold text-orange-600">Bun</span>
          </p>
          <p className="mt-2">All right reserved</p>
        </div>
      </footer>
    </>
  )
}
