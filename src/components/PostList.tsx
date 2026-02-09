'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Post } from '@/lib/posts'
import PostListItem from './PostListItem'

export default function PostList({ allPosts }: { allPosts: Post[] }) {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const searchContent = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase()
      return searchContent.includes(query.toLowerCase())
    })
  }, [query, allPosts])

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 font-light">未找到与 {query} 相关的文章</p>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      {filteredPosts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  )
}
