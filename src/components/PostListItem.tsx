import type { Post } from '@/lib/posts'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import Link from 'next/link'

type Props = {
  post: Post
}

export default function PostListItem({ post }: Props) {
  return (
    <article className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white flex flex-col h-full">
      <Link href={`/posts/${post.id}`} className="flex-1 block">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-700">{post.title}</h3>
          <time dateTime={post.date} className="text-sm text-gray-500 whitespace-nowrap ml-4">
            {format(new Date(post.date), 'yyyy-MM-dd', { locale: zhCN })}
          </time>
        </div>
        <p className="text-gray-700 mt-2 mb-4">{post.excerpt}</p>
      </Link>
      {/* 标签区域 */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors"
          >
            # {tag}
          </Link>
        ))}
      </div>
    </article>
  )
}
