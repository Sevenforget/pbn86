import Link from "next/link"
import type { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/${post.slug}`}>
      <div className="group relative overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-0"></div>
        <div className="p-6 flex flex-col h-full z-10 relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-white/70">{formatDate(post.createdAt)}</span>
            <span className="text-xs text-white/70">•</span>
            <span className="text-xs text-white/70">{post.author}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{post.title}</h3>
          <p className="text-sm text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
