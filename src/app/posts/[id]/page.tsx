import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostData } from '@/lib/posts'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = {
  params: {
    id: string
  }
}

/**
 * 生成页面元数据
 */
export async function generateMetadata({ params }: Props) {
  // 获取 id
  const { id } = await params
  // 根据 id 获取详细信息
  const post = getPostData(id)
  if (!post) {
    return {
      title: '文章未找到',
    }
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function Post({ params }: Props) {
  // 获取 id
  const { id } = await params
  console.log('id', id)
  let post
  try {
    post = getPostData(id)
  } catch {
    notFound()
  }

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* 顶部导航区 */}
        <div className="bg-white border-b">
          <div className="max-w-3xl mx-auto px-6 py-8">
            <Link
              href="/"
              className="text-gray-500 hover:text-blue-600 flex items-center gap-1 mb-6 transition-colors"
            >
              返回首页
            </Link>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 text-sm">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'yyyy-MM-dd', { locale: zhCN })}
              </time>
            </div>
          </div>
        </div>
        {/* 文章内容区 */}
        <article className="max-w-3xl mx-auto px-6 py-12">
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </>
  )
}
