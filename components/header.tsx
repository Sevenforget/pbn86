import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full py-6 px-4 md:px-6 flex items-center justify-between bg-transparent z-10 relative">
      <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-white/80 transition-colors">
        Mindful<span className="text-primary">Blog</span>
      </Link>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="검색..."
            className="pl-10 pr-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 w-[200px]"
          />
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium text-white">
          <Link href="/" className="hover:text-primary transition-colors">
            홈
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            카테고리
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            소개
          </Link>
        </nav>
      </div>
    </header>
  )
}
