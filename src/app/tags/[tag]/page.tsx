import PostListItem from '@/components/PostListItem'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    tag: string
  }
}

export default async function TagPage({ params }: Props) {
  // 获取 tag
  const { tag } = await params
  // 获取所有文章数据
  const allPostsData = getSortedPostsData()
  // 筛选出包含当前 tag 的文章
  const filteredPosts = allPostsData.filter((post) => post.tags.includes(tag))
  // 如果没有找到文章，返回 404 页面
  if (filteredPosts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">
          首页
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-gray-900">标签: # {tag}</span>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          包含标签 <span className="text-blue-600"># {tag}</span> 的文章
        </h1>
        <p className="text-gray-600 mt-2">共找到 {filteredPosts.length} 篇文章</p>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {filteredPosts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
