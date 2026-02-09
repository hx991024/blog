'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import SearchIcon from './icons/SearchIcon'
import { useEffect, useState } from 'react'

export default function SearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const queryFromUrl = searchParams.get('q') || ''

  const [inputValue, setInputValue] = useState(queryFromUrl)

  // 核心同步：当用户通过后退/前进改变 URL 时，同步输入框文字
  useEffect(() => {
    setInputValue(queryFromUrl)
  }, [queryFromUrl])

  // 核心跳转逻辑
  useEffect(() => {
    // 逻辑守卫 1：如果输入框的值和当前 URL 已经一致，什么都不做
    if (inputValue === queryFromUrl) return

    const timer = setTimeout(() => {
      const params = new URLSearchParams()
      if (inputValue) {
        params.set('q', inputValue)
      }

      const queryString = params.toString()
      const dest = queryString ? `/?${queryString}` : '/'

      // 逻辑守卫 2：只有当 inputValue 有值，或者当前就在首页时，才触发跳转
      // 这样可以防止在详情页时，因为 queryFromUrl 为空而误触发回到首页
      if (inputValue || pathname === '/') {
        router.replace(dest, { scroll: false })
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [inputValue, router, pathname, queryFromUrl]) // 加入 pathname 依赖

  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
        <SearchIcon className="h-4 w-4 text-gray-400 group-focus-within:text-gray-900 transition-colors" />
      </div>
      <input
        type="text"
        placeholder="搜索文章..."
        defaultValue={searchParams.get('q') || ''}
        onChange={(e) => setInputValue(e.target.value)}
        className="block w-full pl-7 pr-3 py-1 border-b border-gray-200 bg-transparent placeholder-gray-400 placeholder:font-light focus:outline-none focus:border-gray-900 text-sm transition-colors duration-200"
      />
    </div>
  )
}
