import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// 1. 定义文章类型
export type Post = {
  id: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content?: string // 在列表页面不需要内容
}

// 2. 获取 posts 目录的绝对路径
const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * 获取所有文章的列表
 */
export const getSortedPostsData = (): Post[] => {
  // 获取目录下所有文件名
  const fileNames = fs.readdirSync(postsDirectory).filter((file) => {
    // 检查后缀是否为 .md
    const isMd = file.endsWith('.md')
    // 进阶检查：确保这是一个文件而非文件夹
    const stat = fs.statSync(path.join(postsDirectory, file))
    return isMd && stat.isFile()
  })
  // 遍历所有文件，读取并解析
  const allPostsData = fileNames.map((fileName) => {
    // 移除文件名的 .md 后缀，作为 id
    const id = fileName.replace(/\.md$/, '')
    // 读取文件的完整路径
    const fullPath = path.join(postsDirectory, fileName)
    // 读取文件内容
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    // 解析 frontmatter
    const matterResult = matter(fileContent)
    return {
      id,
      ...(matterResult.data as Omit<Post, 'id'>),
    }
  })
  // 按照日期排序，最新的在前面
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * 根据 ID 获取文章的完整信息
 */
export const getPostData = (id: string): Post & { content: string } => {
  // 获取文件完整路径
  const fullPath = path.join(postsDirectory, `${id}.md`)
  // 获取文件内容
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  // 解析文件内容
  const matterResult = matter(fileContent)
  // 返回数据
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as Omit<Post, 'id'>),
  }
}
