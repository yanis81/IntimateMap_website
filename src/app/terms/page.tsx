import PageLayout from '@/components/PageLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation - IntimateMap',
  description: 'Conditions Générales d\'Utilisation (EULA) de l\'application IntimateMap.',
}

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">📋 Conditions d&apos;Utilisation - IntimateMap</h1>

        <p className="text-lg mb-8"><strong>Dernière mise à jour : 6 février 2026</strong></p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">1. Acceptation des conditions</h2>

        <p className="mb-4">En utilisant l&apos;application IntimateMap, vous acceptez d&apos;être lié par les présentes conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser l&apos;application.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">2. Description du service</h2>

        <p className="mb-4">IntimateMap est un <strong>journal intime numérique personnel et privé</strong> permettant aux utilisateurs majeurs de documenter leur vie intime de manière sécurisée et confidentielle.</p>

        <p className="mb-2">L&apos;application vous permet de :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Enregistrer vos moments intimes de manière privée avec géolocalisation, notes et évaluations</li>
          <li>Consulter vos statistiques personnelles et votre historique</li>
          <li>Partager anonymement certains spots avec la communauté (optionnel)</li>
          <li>Accéder à des fonctionnalités premium via abonnement</li>
          <li>Sécuriser l&apos;accès à l&apos;application via authentification biométrique</li>
        </ul>

        <p className="mb-4"><strong>Vie privée :</strong> Vos données restent sur votre appareil par défaut. Nous ne collectons, ne vendons ni ne partageons vos informations personnelles. Seuls les spots que vous choisissez de partager publiquement sont visibles par d&apos;autres utilisateurs.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">3. Conditions d&apos;utilisation et responsabilités</h2>

        <p className="mb-4"><strong>Âge minimum :</strong> Vous devez avoir au moins 18 ans pour utiliser IntimateMap. L&apos;utilisation par des mineurs est strictement interdite.</p>

        <p className="mb-4"><strong>Votre responsabilité :</strong> Vous êtes seul responsable du contenu que vous enregistrez, de sa légalité et de sa conformité aux lois en vigueur. Vous devez obtenir le consentement des personnes mentionnées et protéger leur vie privée.</p>

        <p className="mb-4"><strong>Sécurité :</strong> Vous devez sécuriser votre appareil et effectuer vos propres sauvegardes. Nous ne garantissons aucune récupération de données en cas de perte.</p>

        <p className="mb-4"><strong>Notre responsabilité :</strong> IntimateMap est un outil de documentation personnelle. Nous ne sommes pas responsables de l&apos;usage que vous faites de l&apos;application, du contenu que vous créez, ni des conséquences qui en découlent.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">4. Utilisation appropriée</h2>

        <p className="mb-4">Vous vous engagez à utiliser l&apos;application de manière légale, éthique et respectueuse. Vous ne devez documenter que des activités consensuelles impliquant uniquement des personnes majeures.</p>

        <p className="mb-2"><strong>Il est strictement interdit de :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Impliquer des personnes mineures de quelque manière que ce soit</li>
          <li>Documenter des activités non consensuelles ou illégales</li>
          <li>Publier du contenu offensant, violent, illégal ou inapproprié</li>
          <li>Partager des informations intimes de tiers sans leur consentement</li>
          <li>Utiliser l&apos;application pour harceler ou nuire à autrui</li>
          <li>Utiliser l&apos;application à des fins commerciales sans autorisation</li>
        </ul>

        <p className="mb-4"><strong>Sanctions :</strong> Toute violation entraînera la suppression immédiate de votre accès et le signalement aux autorités si nécessaire.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">5. Contenu utilisateur</h2>

        <p className="mb-4"><strong>Propriété :</strong> Vous conservez tous les droits sur le contenu que vous créez (spots, commentaires, évaluations).</p>

        <p className="mb-4"><strong>Licence :</strong> En rendant un spot public, vous accordez à IntimateMap une licence mondiale, non exclusive, pour afficher ce contenu anonymement aux autres utilisateurs.</p>

        <p className="mb-4"><strong>Modération :</strong> Nous nous réservons le droit de supprimer tout contenu inapproprié sans préavis.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">6. Modération et signalements</h2>

        <p className="mb-4"><strong>Engagement de modération :</strong> Nous nous engageons à maintenir un environnement sûr et respectueux pour tous les utilisateurs.</p>

        <p className="mb-2"><strong>⚠️ Tolérance zéro :</strong> Aucun contenu inapproprié, offensant, illégal ou comportement abusif n&apos;est toléré sur notre plateforme. Cela inclut notamment :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Contenu sexuellement explicite non consensuel</li>
          <li>Harcèlement, menaces ou intimidation</li>
          <li>Discours haineux ou discriminatoire</li>
          <li>Spam ou contenu publicitaire non autorisé</li>
          <li>Contenu impliquant des mineurs</li>
          <li>Contenu illégal (drogues, violence, etc.)</li>
        </ul>

        <p className="mb-4"><strong>⏱️ Délai de traitement :</strong> Tous les signalements de contenu inapproprié sont traités dans un délai maximum de <strong>24 heures</strong>. Le contenu signalé sera examiné, supprimé si nécessaire, et l&apos;utilisateur à l&apos;origine pourra être exclu de la plateforme.</p>

        <p className="mb-4"><strong>📧 Signaler un contenu :</strong> Vous pouvez signaler tout contenu inapproprié directement depuis l&apos;application (bouton Signaler sur les spots) ou par email à <a href="mailto:team.ylstudio@gmail.com" className="text-pink-400 hover:text-pink-300 underline">team.ylstudio@gmail.com</a>.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">7. Abonnements et paiements</h2>

        <p className="mb-2"><strong>Tarifs :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li><strong>Essential :</strong> 0,99 €/mois — Emojis premium</li>
          <li><strong>Plus :</strong> 2,99 €/mois — Emojis premium + Statistiques avancées</li>
          <li><strong>Premium :</strong> 3,99 €/mois — Emojis premium + Statistiques avancées + Suppression des publicités</li>
        </ul>

        <p className="mb-4"><strong>Renouvellement :</strong> Les abonnements se renouvellent automatiquement à la fin de chaque période. Le paiement est prélevé via votre compte Apple. Vous pouvez annuler à tout moment via les paramètres de votre compte App Store (Réglages → votre nom → Abonnements).</p>

        <p className="mb-4"><strong>Remboursement :</strong> Aucun remboursement n&apos;est accordé pour les périodes d&apos;abonnement non utilisées, sauf obligation légale. Les remboursements sont gérés par Apple conformément à leurs politiques.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">8. Publicités</h2>

        <p className="mb-4">L&apos;application affiche des publicités pour les utilisateurs non-Premium. Les plans Free, Essential et Plus contiennent des publicités avec des fréquences variables selon le plan. Les abonnés Premium bénéficient d&apos;une expérience sans publicité.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">9. Limitation de responsabilité</h2>

        <p className="mb-4">L&apos;application est fournie &quot;en l&apos;état&quot; sans garantie d&apos;aucune sorte. Nous ne sommes pas responsables de la perte de données, des interruptions de service, du contenu publié par d&apos;autres utilisateurs, ni des conséquences liées à votre utilisation.</p>

        <p className="mb-4">Vous acceptez d&apos;utiliser l&apos;application à vos propres risques et de nous dégager de toute responsabilité en cas de réclamation résultant de votre utilisation.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">10. Résiliation</h2>

        <p className="mb-4">Nous nous réservons le droit de suspendre ou résilier votre accès à l&apos;application en cas de violation de ces conditions, sans préavis ni remboursement.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">11. Modifications</h2>

        <p className="mb-4">Nous pouvons modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication dans l&apos;application. Votre utilisation continue de l&apos;app constitue une acceptation des nouvelles conditions.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">12. Droit applicable</h2>

        <p className="mb-4">Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux de Paris, France.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">13. Contact</h2>

        <p className="mb-4">Pour toute question concernant ces conditions ou signaler un contenu inapproprié, contactez-nous à :</p>
        <p className="mb-4"><a href="mailto:team.ylstudio@gmail.com" className="text-pink-400 hover:text-pink-300 underline text-lg">team.ylstudio@gmail.com</a></p>

        <hr className="my-8" />

        <p className="text-sm italic mb-2"><strong>Dernière mise à jour :</strong> 6 février 2026</p>
        <p className="text-sm italic mb-2"><strong>Éditeur :</strong> YL Studio</p>
        <p className="text-sm italic"><strong>Email de contact :</strong> team.ylstudio@gmail.com</p>
      </div>
    </PageLayout>
  )
}
