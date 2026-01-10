import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <span className="text-8xl">💘</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="gradient-text">IntimateMap</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Votre journal intime numérique personnel pour cartographier vos moments intimes en toute confidentialité
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <a
                href="https://apps.apple.com"
                className="rounded-full bg-pink-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-pink-400 transition-all transform hover:scale-105"
              >
                📱 Télécharger sur l'App Stor
              </a>
              <Link
                href="/guide"
                className="text-base font-semibold leading-6 text-gray-300 hover:text-pink-400 transition-colors"
              >
                Guide de démarrage <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              Fonctionnalités Principales
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 border border-gray-800 hover:border-pink-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.name}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
              Plans Premium
            </h2>
            <p className="mt-4 text-gray-400">Choisissez le plan qui vous convient</p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-2xl p-8 border ${
                  index === 3
                    ? 'border-pink-500 bg-gradient-to-br from-pink-500/10 to-purple-500/10'
                    : 'border-gray-800 bg-gray-800/50'
                }`}
              >
                {index === 3 && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
                      Populaire
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.name !== 'Gratuit' && <span className="text-gray-400 text-sm">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              <span className="gradient-text">🔒 Confidentialité</span>
            </h2>
            <div className="space-y-4 text-left bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✅</span>
                <div>
                  <strong className="text-white">Spots privés</strong>
                  <p className="text-gray-400">Stockés uniquement sur votre appareil</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✅</span>
                <div>
                  <strong className="text-white">Spots publics</strong>
                  <p className="text-gray-400">100% anonymes (aucune donnée personnelle)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✅</span>
                <div>
                  <strong className="text-white">Coffre-fort</strong>
                  <p className="text-gray-400">Stockage local, jamais synchronisé</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✅</span>
                <div>
                  <strong className="text-white">Contrôle total</strong>
                  <p className="text-gray-400">Vous décidez ce qui est partagé ou privé</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/privacy"
                className="text-pink-400 hover:text-pink-300 font-medium"
              >
                En savoir plus sur notre politique de confidentialité →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto">
            Téléchargez IntimateMap maintenant et commencez à cartographier vos moments intimes en toute sécurité.
          </p>
          <a
            href="https://apps.apple.com"
            className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-pink-600 shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            📱 Télécharger maintenant
          </a>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    name: 'Carte Interactive',
    icon: '🗺️',
    description: 'Visualisez tous vos spots sur une carte mondiale avec regroupement automatique selon le niveau de zoom.'
  },
  {
    name: 'Création de Spots',
    icon: '💘',
    description: 'Géolocalisez vos moments avec notes, emojis et commentaires personnalisés. Mode privé ou public (anonyme).'
  },
  {
    name: 'Coffre-Fort Sécurisé',
    icon: '🔐',
    description: 'Stockez vos photos et vidéos intimes en toute confidentialité. Associez-les à vos spots dans l\'historique.'
  },
  {
    name: '130+ Badges',
    icon: '🏆',
    description: 'Débloquez des achievements dans 15 catégories : voyages, lieux spéciaux, jours fériés, et plus encore !'
  },
  {
    name: 'Statistiques Premium',
    icon: '📊',
    description: 'Analysez votre activité avec graphiques, streaks, calendrier interactif et tendances.'
  },
  {
    name: 'Total Confidentialité',
    icon: '🔒',
    description: 'Vos données privées restent sur votre appareil. Contrôle total sur ce que vous partagez.'
  }
];

const pricingPlans = [
  {
    name: 'Gratuit',
    price: '0 EUR',
    period: '',
    features: [
      'Fonctionnalités de base complètes',
      'Spots illimités',
      'Carte interactive',
      'Emojis de base',
      'Coffre-fort local'
    ]
  },
  {
    name: 'Essential',
    price: '0,99 EUR',
    period: '/mois',
    features: [
      'Tout du plan Gratuit',
      '+ 40 emojis premium exclusifs',
      'Plus de personnalisation',
      'Support prioritaire'
    ]
  },
  {
    name: 'Plus',
    price: '2,99 EUR',
    period: '/mois',
    features: [
      'Tout du plan Essential',
      '+ Statistiques avancées',
      'Graphiques et tendances',
      'Calendrier interactif',
      'Mode furtif 🥷',
      'Analyse des streaks'
    ]
  },
  {
    name: 'Premium',
    price: '3,99 EUR',
    period: '/mois',
    features: [
      'Tout du plan Plus',
      '+ Sans publicité',
      '+ Accès complet illimité',
      '+ Toutes futures fonctionnalités',
      'Support prioritaire'
    ]
  }
];
