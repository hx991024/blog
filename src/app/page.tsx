import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default function Home() {
  const allPostsData = getSortedPostsData()
  return (
    <>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">欢迎来到我的博客</h1>
          <p className="text-gray-600">使用 Next.js 构建</p>
        </div>
        <section className="space-y-8">
          <h2 className="text-2xl font-bold border-b pb-2">最新文章</h2>
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <article
              key={id}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
            >
              <Link href={`/posts/${id}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                    {title}
                  </h3>
                  <time
                    dateTime={date}
                    className="text-sm text-gray-500 whitespace-nowrap ml-4"
                  >
                    {format(new Date(date), 'yyyy-MM-dd', { locale: zhCN })}
                  </time>
                </div>
                <p className="text-gray-700 mt-2">{excerpt}</p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-blue-500 hover:underline">
                    阅读全文
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}
