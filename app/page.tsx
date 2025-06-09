import { getAllBlogPosts } from "@/lib/data"
import BlogCard from "@/components/blog-card"
import Header from "@/components/header"

export default function Home() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
            Mindful<span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            생각을 정리하고 지식을 공유하는 공간입니다. 다양한 주제의 글을 통해 새로운 인사이트를 얻어보세요.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">최신 글</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-8 text-center text-white/60">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} MindfulBlog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
