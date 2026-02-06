import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support - IntimateMap',
  description: 'Besoin d\'aide avec IntimateMap ? Trouvez les réponses à vos questions et contactez notre équipe de support.',
}

export default function SupportPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">🛟 Support - IntimateMap</h1>

        <p className="text-lg mb-8">
          Besoin d&apos;aide ? Notre équipe est là pour vous accompagner. Trouvez ci-dessous les réponses aux questions les plus fréquentes ou contactez-nous directement.
        </p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">📧 Nous Contacter</h2>

        <p className="mb-4">Pour toute question, problème technique ou signalement de contenu :</p>

        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
          <p className="text-lg mb-2"><strong>Email :</strong> <a href="mailto:team.ylstudio@gmail.com" className="text-pink-400 hover:text-pink-300 underline">team.ylstudio@gmail.com</a></p>
          <p className="text-lg mb-2"><strong>Délai de réponse :</strong> Moins de 24 heures</p>
          <p className="text-lg"><strong>Langue :</strong> Français, English</p>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">❓ Questions Fréquentes</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Mes données sont-elles sécurisées ?</h3>
            <p className="mb-2">Oui. Les spots privés sont stockés <strong>uniquement sur votre appareil</strong>. Ils ne sont jamais envoyés sur nos serveurs. Les spots publics sont stockés de manière <strong>100% anonyme</strong> — aucun nom, email ou identifiant personnel n&apos;est associé.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Comment supprimer mes données ?</h3>
            <p className="mb-2">Vous pouvez supprimer vos données à tout moment :</p>
            <ul className="list-disc pl-8 mb-2 space-y-1">
              <li><strong>Un spot :</strong> Historique → icône poubelle sur le spot</li>
              <li><strong>Toutes les données :</strong> Paramètres → Supprimer toutes les données</li>
              <li><strong>Spots publics :</strong> Ils sont supprimés de nos serveurs immédiatement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Comment signaler un contenu inapproprié ?</h3>
            <p className="mb-2">Deux méthodes :</p>
            <ul className="list-disc pl-8 mb-2 space-y-1">
              <li><strong>Dans l&apos;app :</strong> Appuyez sur un spot public → bouton 🚩 Signaler</li>
              <li><strong>Par email :</strong> <a href="mailto:team.ylstudio@gmail.com" className="text-pink-400 hover:text-pink-300 underline">team.ylstudio@gmail.com</a></li>
            </ul>
            <p className="mb-2">Tous les signalements sont traités dans un délai de <strong>24 heures maximum</strong>. Les contenus signalés 3 fois sont automatiquement masqués.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Comment gérer mon abonnement ?</h3>
            <p className="mb-2">Les abonnements sont gérés via Apple :</p>
            <ul className="list-disc pl-8 mb-2 space-y-1">
              <li><strong>iPhone/iPad :</strong> Réglages → votre nom → Abonnements → IntimateMap</li>
              <li>Vous pouvez annuler à tout moment depuis cette page</li>
              <li>L&apos;abonnement reste actif jusqu&apos;à la fin de la période en cours</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Comment restaurer mes achats ?</h3>
            <p className="mb-2">Si vous avez réinstallé l&apos;app ou changé d&apos;appareil :</p>
            <ul className="list-disc pl-8 mb-2 space-y-1">
              <li>Ouvrez l&apos;app → Paramètres → Restaurer mes achats</li>
              <li>Attendez quelques secondes que la vérification soit effectuée</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Comment bloquer un utilisateur ?</h3>
            <p className="mb-2">Appuyez sur un spot public sur la carte → bouton 🚫 Bloquer. Les spots de cet utilisateur ne seront plus visibles pour vous.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">L&apos;app ne fonctionne pas correctement</h3>
            <p className="mb-2">Essayez ces étapes :</p>
            <ul className="list-disc pl-8 mb-2 space-y-1">
              <li>Forcez la fermeture de l&apos;app et relancez-la</li>
              <li>Vérifiez que vous avez la dernière version installée</li>
              <li>Vérifiez votre connexion internet (nécessaire pour les spots publics)</li>
              <li>Si le problème persiste, contactez-nous à <a href="mailto:team.ylstudio@gmail.com" className="text-pink-400 hover:text-pink-300 underline">team.ylstudio@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">📋 Informations Légales</h2>

        <div className="space-y-2">
          <p><a href="/privacy" className="text-pink-400 hover:text-pink-300 underline">🔒 Politique de Confidentialité</a></p>
          <p><a href="/terms" className="text-pink-400 hover:text-pink-300 underline">📋 Conditions d&apos;Utilisation (EULA)</a></p>
          <p><a href="/contact" className="text-pink-400 hover:text-pink-300 underline">📧 Page Contact</a></p>
        </div>

        <hr className="my-8" />

        <p className="text-sm italic mb-2"><strong>Éditeur :</strong> YL Studio</p>
        <p className="text-sm italic mb-2"><strong>Email :</strong> team.ylstudio@gmail.com</p>
        <p className="text-sm italic"><strong>Dernière mise à jour :</strong> 6 février 2026</p>
      </div>
    </PageLayout>
  )
}
