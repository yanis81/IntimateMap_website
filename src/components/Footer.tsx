import Link from 'next/link';

const footerLinks = {
  documentation: [
    { name: 'Guide de Démarrage', href: '/guide' },
    { name: 'Créer un Spot', href: '/creer-un-spot' },
    { name: 'Coffre-Fort', href: '/coffre-fort' },
    { name: 'FAQ', href: '/faq' },
  ],
  legal: [
    { name: 'Politique de Confidentialité', href: '/privacy' },
  ],
  support: [
    { name: 'Signaler un Bug', href: 'https://github.com/yanis81/map/issues' },
    { name: 'Discussions', href: 'https://github.com/yanis81/map/discussions' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">💘</span>
              <span className="text-xl font-bold gradient-text">IntimateMap</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Votre journal intime géolocalisé. Cartographiez vos moments intimes en toute confidentialité.
            </p>
          </div>

          {/* Documentation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Documentation</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.documentation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Légal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 IntimateMap. Tous droits réservés. Votre intimité est sacrée. Vos données aussi.
          </p>
        </div>
      </div>
    </footer>
  );
}
