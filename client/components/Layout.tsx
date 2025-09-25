import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background font-['Inter'] text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/53 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-xl font-semibold">Studevo</Link>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Features</a>
              <a href="/#tutorials" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Tutorials</a>
              <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <Link to="/" className="text-xl font-semibold">Studevo</Link>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Learn AI tools and technologies with guided tutorials and comprehensive resources.
              </p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-foreground/60 hover:text-foreground cursor-pointer" />
                <Instagram className="w-5 h-5 text-foreground/60 hover:text-foreground cursor-pointer" />
                <Linkedin className="w-5 h-5 text-foreground/60 hover:text-foreground cursor-pointer" />
                <Github className="w-5 h-5 text-foreground/60 hover:text-foreground cursor-pointer" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Product</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <a href="/#features" className="hover:text-foreground">Features</a>
                <a href="/#tutorials" className="hover:text-foreground">Tutorials</a>
                <li><Link to="/" className="hover:text-foreground">Resources</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Company</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Legal</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
                <li><Link to="/subscription-terms" className="hover:text-foreground">Subscription Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-top border-gray-200">
            <div className="text-sm text-foreground/60">© 2025 Studevo. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-foreground/60 hover:text-foreground">Terms</Link>
              <Link to="/privacy" className="text-sm text-foreground/60 hover:text-foreground">Privacy</Link>
              <Link to="/subscription-terms" className="text-sm text-foreground/60 hover:text-foreground">Subscription Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
