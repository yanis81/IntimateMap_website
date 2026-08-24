import PageLayout from '@/components/PageLayout'

const providerLinks = [
  { name: 'Google', href: 'https://policies.google.com/privacy' },
  { name: 'PostHog', href: 'https://posthog.com/privacy' },
  { name: 'RevenueCat', href: 'https://www.revenuecat.com/privacy/' },
  { name: 'Sentry', href: 'https://sentry.io/privacy/' },
  { name: 'Apple', href: 'https://www.apple.com/legal/privacy/' },
]

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Politique de confidentialité – IntimateMap</h1>

        <p className="text-lg mb-8">
          <strong>Dernière mise à jour : 24 août 2026</strong>
        </p>

        <p className="mb-4">
          IntimateMap est une application mobile locale et respectueuse de la vie privée. Vos
          contenus intimes restent sur votre appareil par défaut. Cette politique distingue ces
          contenus privés des données techniques minimales traitées par les services nécessaires au
          fonctionnement de l&apos;application.
        </p>

        <p className="mb-2">
          <strong>Éditeur :</strong> YL Studio
        </p>
        <p className="mb-1">
          <strong>Contact :</strong> team.ylstudio@gmail.com
        </p>
        <p className="mb-4">
          <strong>Pays :</strong> France
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">1. Contenus privés</h2>
        <p className="mb-4">
          Les spots, localisations précises, adresses, notes, commentaires, noms de partenaires,
          photos, vidéos et contenus SAFE sont utilisés localement pour fournir les fonctionnalités
          demandées. Ils ne sont jamais transmis à PostHog, Google AdMob, RevenueCat ou Sentry.
        </p>
        <p className="mb-4">
          Les contacts, données biométriques, codes de récupération et clés de chiffrement ne sont
          pas transmis à ces prestataires. L&apos;authentification biométrique est gérée directement
          par le système de votre appareil.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">2. Stockage et sauvegardes</h2>
        <h3 className="text-2xl font-bold mt-6 mb-3">Stockage local</h3>
        <p className="mb-4">
          Vos données sont enregistrées sur votre appareil par défaut. IntimateMap ne possède pas de
          serveur communautaire recevant vos spots et ne publie pas vos contenus sur une carte
          publique.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Sauvegarde privée chiffrée</h3>
        <p className="mb-4">
          Après votre accord, la confirmation de votre code de récupération et l&apos;autorisation du
          fournisseur, IntimateMap peut sauvegarder une archive chiffrée de bout en bout dans votre
          espace privé iCloud ou Google Drive. YL Studio ne reçoit ni votre code de récupération, ni
          votre clé de chiffrement, ni vos données en clair.
        </p>
        <p className="mb-4">
          Les médias SAFE restent protégés localement. Si la sauvegarde est active, seule une copie
          chiffrée peut être envoyée vers votre espace privé Apple ou Google, en Wi-Fi par défaut.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">3. Données techniques et prestataires</h2>
        <h3 className="text-2xl font-bold mt-6 mb-3">PostHog – statistiques d&apos;usage</h3>
        <p className="mb-4">
          PostHog reçoit un identifiant d&apos;installation aléatoire, la plateforme, la version, le
          numéro de build, la langue et des événements d&apos;usage manuels limités. La géolocalisation
          par IP, l&apos;autocapture et la relecture de session sont désactivées. Aucun contenu privé
          n&apos;est inclus dans ces événements.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Google AdMob et UMP – publicités</h3>
        <p className="mb-4">
          Google AdMob et sa plateforme de consentement UMP peuvent traiter des données techniques
          publicitaires : adresse IP et localisation approximative, identifiants publicitaires ou
          techniques, annonces affichées, interactions publicitaires, données de performance et
          diagnostics. Elles servent à diffuser, mesurer, sécuriser et, lorsque vous l&apos;autorisez,
          personnaliser les publicités.
        </p>
        <p className="mb-4">
          Sur iOS, IntimateMap demande l&apos;autorisation App Tracking Transparency (ATT) avant que
          Google puisse utiliser l&apos;IDFA pour la personnalisation ou la mesure publicitaire. Si
          vous refusez ATT, l&apos;IDFA n&apos;est pas transmis et des publicités non personnalisées ou
          limitées peuvent continuer à être affichées. Les choix UMP déterminent le traitement
          publicitaire autorisé.
        </p>
        <p className="mb-4 font-semibold">
          Vos spots, notes, partenaires, photos, vidéos et contenus SAFE ne sont jamais utilisés ni
          transmis à AdMob.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">RevenueCat et Apple – abonnements</h3>
        <p className="mb-4">
          RevenueCat et Apple traitent un identifiant d&apos;abonnement aléatoire, l&apos;historique des
          achats, les produits, les droits et les statuts de transaction nécessaires aux achats, à
          la restauration et à la gestion de l&apos;abonnement. IntimateMap ne reçoit jamais vos
          coordonnées bancaires.
        </p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Sentry – stabilité</h3>
        <p className="mb-4">
          Sentry reçoit des rapports de panne et des diagnostics techniques filtrés afin de détecter
          et corriger les erreurs. Les informations personnelles par défaut, captures d&apos;écran,
          hiérarchies de vues, journaux applicatifs et relectures de session sont désactivés.
        </p>
        <p className="mb-4">
          YL Studio ne vend pas vos contenus privés ni les données techniques de l&apos;application. Nous
          recevons uniquement les informations nécessaires au fonctionnement des services et des
          rapports agrégés, jamais vos contenus intimes.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">4. Vos choix et contrôles</h2>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>
            Vous pouvez rouvrir le formulaire Google depuis{' '}
            <strong>Profil → Options de confidentialité</strong> lorsque cette action est requise dans
            votre région.
          </li>
          <li>
            Sur iOS, vous pouvez modifier ATT dans{' '}
            <strong>Réglages → Confidentialité et sécurité → Suivi</strong>.
          </li>
          <li>Vous pouvez désactiver les notifications dans les réglages.</li>
          <li>Vous pouvez supprimer un spot ou toutes les données locales depuis l&apos;application.</li>
          <li>
            Si vous avez activé la sauvegarde gérée, vous pouvez supprimer la sauvegarde distante
            depuis l&apos;écran Sauvegardes.
          </li>
          <li>Les abonnements peuvent être gérés depuis les réglages de votre compte App Store.</li>
        </ul>
        <p className="mb-4">
          Pour exercer un droit relatif aux données techniques accessibles à YL Studio ou poser une
          question : <strong>team.ylstudio@gmail.com</strong>.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">5. Sécurité et durée de conservation</h2>
        <p className="mb-4">
          IntimateMap utilise le stockage protégé de l&apos;appareil, le chiffrement des communications
          et, pour les sauvegardes gérées, un chiffrement de bout en bout. Vous devez conserver votre
          code de récupération et protéger l&apos;accès à votre appareil.
        </p>
        <p className="mb-4">
          Les données locales restent présentes jusqu&apos;à leur suppression dans l&apos;application ou
          jusqu&apos;à la désinstallation. Les prestataires conservent les données techniques selon
          leurs propres durées légales et opérationnelles. Les sauvegardes privées restent dans votre
          espace Apple ou Google jusqu&apos;à leur suppression.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">6. Protection des mineurs</h2>
        <p className="mb-4">
          IntimateMap est destiné aux adultes âgés de 18 ans ou plus et n&apos;est pas destiné aux
          mineurs.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">7. Politiques des prestataires</h2>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          {providerLinks.map((provider) => (
            <li key={provider.name}>
              <a
                href={provider.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 underline"
              >
                Politique de confidentialité de {provider.name}
              </a>
            </li>
          ))}
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">8. Modifications et contact</h2>
        <p className="mb-4">
          Cette politique peut évoluer avec les fonctionnalités ou les obligations applicables. En
          cas de modification importante, IntimateMap pourra vous en informer dans l&apos;application.
        </p>
        <p className="mb-4">
          <strong>Contact :</strong> team.ylstudio@gmail.com
        </p>

        <hr className="my-8" />

        <p className="text-sm italic mb-2">
          <strong>Dernière mise à jour :</strong> 24 août 2026
        </p>
        <p className="text-sm italic mb-2">
          <strong>Éditeur :</strong> YL Studio
        </p>
        <p className="text-sm italic">
          <strong>Email de contact :</strong> team.ylstudio@gmail.com
        </p>
      </div>
    </PageLayout>
  )
}
