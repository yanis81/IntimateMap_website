import Link from 'next/link';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  showBackLink?: boolean;
}

const sidebarLinks = [
  { name: '🏠 Accueil', href: '/' },
  { name: '🚀 Guide de Démarrage', href: '/guide' },
  { name: '💘 Créer un Spot', href: '/creer-un-spot' },
  { name: '🔐 Coffre-Fort', href: '/coffre-fort' },
  { name: '❓ FAQ', href: '/faq' },
  { name: '🔒 Confidentialité', href: '/privacy' },
];

export default function PageLayout({ children, showBackLink = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wide mb-4">
                📚 Navigation
              </h3>
              <nav className="space-y-2">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-pink-400 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Support</h4>
                <a
                  href="https://github.com/yanis81/map/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-pink-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  🐛 Signaler un Bug
                </a>
                <a
                  href="https://github.com/yanis81/map/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-pink-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  💬 Discussions
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <article className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-800">
              <div className="prose max-w-none">
                {children}
              </div>
              
              {showBackLink && (
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <Link 
                    href="/" 
                    className="text-pink-400 hover:text-pink-300 text-sm font-medium"
                  >
                    ← Retour à l'accueil
                  </Link>
                </div>
              )}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
