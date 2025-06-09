import BlogDetail from "@/components/blog-detail";
import Header from "@/components/header";
import { fetchPostFromApi } from "@/lib/api-service";
import { getCurrentProjectDomain } from "@/lib/domain-mapper";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    // 현재 프로젝트의 도메인 가져오기
    const communityUrl = "https://siremedia.net"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // slug를 그대로 id로 사용
    const { slug } = await params;
    const id = Number.parseInt(slug);

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, id);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        <Header />

        <main className="container mx-auto">
          <BlogDetail post={post} />
        </main>

        <footer className="border-t border-white/10 mt-20 py-8 text-center text-white/60">
          <div className="container mx-auto px-4">
            <p>
              © {new Date().getFullYear()} MindfulBlog. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
