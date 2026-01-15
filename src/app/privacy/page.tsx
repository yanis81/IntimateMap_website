import PageLayout from '@/components/PageLayout'

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité - IntimateMap</h1>
        
        <p className="text-lg mb-8"><strong>Dernière mise à jour : 15 janvier 2026</strong></p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">Introduction</h2>
        
        <p className="mb-4">IntimateMap est un journal intime numérique personnel. Vos données restent sur votre appareil par défaut. Nous ne collectons, ne vendons ni ne partageons vos informations personnelles.</p>

        <p className="mb-2"><strong>Éditeur de l&apos;application :</strong></p>
        <p className="mb-1">IntimateMap team</p>
        <p className="mb-1">Email : team.ylstudio@gmail.com</p>
        <p className="mb-4">Pays : France</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">1. Collecte des données</h2>

        <h3 className="text-2xl font-bold mt-6 mb-3">Nous collectons uniquement :</h3>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Les spots que vous créez (localisation, évaluation, commentaire, emoji)</li>
          <li>Vos préférences d&apos;application (thème, notifications)</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">Nous ne collectons JAMAIS :</h3>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Vos informations personnelles (nom, email, téléphone, adresse)</li>
          <li>Vos photos ou vidéos</li>
          <li>Vos contacts ou autres données de votre appareil</li>
          <li>Aucune donnée de tracking publicitaire</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">2. Stockage des données</h2>

        <h3 className="text-2xl font-bold mt-6 mb-3">Spots privés</h3>

        <p className="mb-4">Stockés <strong>uniquement sur votre appareil</strong>. Jamais synchronisés avec nos serveurs. Jamais visibles par qui que ce soit d&apos;autre.</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Spots publics</h3>

        <p className="mb-4">Si vous choisissez de partager un spot publiquement, il est stocké de manière <strong>anonyme</strong> sur nos serveurs et visible par les autres utilisateurs. Vous pouvez le supprimer à tout moment.</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Coffre Fort</h3>

        <p className="mb-4">Les photos et vidéos ajoutées au Coffre Fort sont stockées <strong>localement</strong> dans l&apos;espace sécurisé de l&apos;application sur votre appareil. Elles ne sont <strong>jamais</strong> envoyées sur nos serveurs.</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">Sécurité Biométrique</h3>

        <p className="mb-4">Si vous activez le verrouillage par Biométrique, l&apos;authentification est gérée localement par votre appareil. Nous n&apos;avons jamais accès à vos données biométriques.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">3. Utilisation des données</h2>

        <p className="mb-4">Vos données sont utilisées uniquement pour faire fonctionner l&apos;application : afficher vos spots, calculer vos statistiques, et partager les spots publics si vous le souhaitez.</p>

        <p className="mb-4"><strong>Nous ne collectons personnellement aucune donnée utilisateur.</strong> Cependant, notre partenaire publicitaire AdMob (Google) collecte certaines données de manière anonyme pour afficher des publicités pertinentes (identifiant publicitaire, type d&apos;appareil, utilisation de l&apos;app). Ces données sont régies par la politique de confidentialité de Google.</p>

        <p className="mb-4"><strong>Nous ne vendons jamais vos données.</strong> Nous n&apos;avons pas accès aux données collectées par AdMob.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">4. Sécurité</h2>

        <p className="mb-4">Nous protégeons vos données avec des mesures de sécurité techniques (chiffrement des communications, hébergement sécurisé, anonymisation des spots publics).</p>

        <p className="mb-4"><strong>Votre responsabilité :</strong> Vous devez sécuriser votre appareil (code PIN, mot de passe) et effectuer vos propres sauvegardes. Nous ne pouvons être tenus responsables en cas d&apos;accès non autorisé à un appareil non sécurisé.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">5. Vos droits</h2>

        <p className="mb-4">Vous pouvez à tout moment :</p>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Supprimer tous vos spots via Paramètres → Supprimer toutes les données</li>
          <li>Supprimer un spot individuellement via l&apos;icône poubelle dans Historique</li>
          <li>Désactiver les notifications dans les paramètres</li>
        </ul>

        <p className="mb-4"><strong>Pour toute demande concernant vos données personnelles :</strong> team.ylstudio@gmail.com</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">6. Protection des mineurs</h2>

        <p className="mb-4">IntimateMap est un journal intime numérique personnel. L&apos;application ne contient aucun contenu compromettant en elle-même et peut être utilisée par des mineurs comme outil de journal personnel.</p>

        <p className="mb-4"><strong>Pour toute question concernant l&apos;utilisation par des mineurs :</strong> team.ylstudio@gmail.com</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">7. Modifications</h2>

        <p className="mb-4">Nous pouvons modifier cette politique à tout moment. En cas de modification importante, nous vous en informerons via l&apos;application.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">8. Contact</h2>

        <p className="mb-4"><strong>Pour toute question concernant vos données personnelles :</strong> team.ylstudio@gmail.com</p>

        <hr className="my-8" />

        <p className="text-sm italic mb-2"><strong>Dernière mise à jour :</strong> 15 janvier 2026</p>
        <p className="text-sm italic mb-2"><strong>Éditeur :</strong> YL Studio</p>
        <p className="text-sm italic"><strong>Email de contact :</strong> team.ylstudio@gmail.com</p>
      </div>
    </PageLayout>
  )
}
