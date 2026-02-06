import { getSortedPostsData } from '@/lib/posts'
import PostListItem from '@/components/PostListItem'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的博客</h1>
        <p className="text-gray-600">探索技术，记录生活</p>
      </div>
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-b pb-2">最新文章</h2>
        {allPostsData.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </section>
    </div>
  )
}
