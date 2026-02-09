import { getSortedPostsData } from '@/lib/posts'
import PostList from '@/components/PostList'
import { Suspense } from 'react'

export default function Home() {
  // 1. 在服务端直接获取数据（SEO 友好，速度快）
  const allPosts = getSortedPostsData()

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的博客</h1>
        <p className="text-gray-600">探索技术，记录生活</p>
      </div>
      <Suspense fallback={<div className="text-center py-20 text-gray-400">加载中...</div>}>
        <PostList allPosts={allPosts} />
      </Suspense>
    </div>
  )
}
