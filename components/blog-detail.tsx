import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogDetailProps {
  post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-white/70 hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>모든 글 보기</span>
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 text-white/70">
          <span>{post.author}</span>
          <span>•</span>
          <span>{formatDate(post.createdAt)}</span>
        </div>

        <div className="flex flex-wrap gap-2 py-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="mt-8 prose prose-invert prose-p:text-white/80 prose-headings:text-white max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </article>
  );
}
