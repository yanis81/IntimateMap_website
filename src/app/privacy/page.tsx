import PageLayout from '@/components/PageLayout'

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité - IntimateMap</h1>
        
        <p className="text-lg mb-8"><strong>Dernière mise à jour : 6 janvier 2026</strong></p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">Introduction</h2>
        
        <p className="mb-4">IntimateMap est un journal intime numérique personnel conçu pour enregistrer et cartographier vos moments intimes en toute confidentialité. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong>.</p>

        <p className="mb-2"><strong>Éditeur de l&apos;application :</strong></p>
        <p className="mb-1">IntimateMap team</p>
        <p className="mb-1">Email : contact@intimatmap.app</p>
        <p className="mb-4">Pays : France</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">1. Données Collectées</h2>

        <h3 className="text-2xl font-bold mt-6 mb-3">1.1 Données que nous collectons</h3>

        <p className="mb-4">IntimateMap collecte uniquement les données strictement nécessaires au fonctionnement de l&apos;application :</p>

        <p className="mb-2"><strong>Données de l&apos;application :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li><strong>Spots (lieux enregistrés)</strong> : Coordonnées GPS, note (1-5), commentaire optionnel, emoji, date/heure de création</li>
          <li><strong>Préférences utilisateur</strong> : Thème (clair/sombre), paramètres de notifications, langue de l&apos;interface</li>
          <li><strong>Données d&apos;utilisation</strong> : Nombre de spots créés, fréquence d&apos;utilisation (pour les statistiques personnelles uniquement)</li>
        </ul>

        <p className="mb-2"><strong>Données techniques (automatiques) :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li><strong>Identifiant appareil anonyme</strong> : Généré localement pour RevenueCat (gestion des abonnements) - Ne contient aucune information personnelle</li>
          <li><strong>Données de diagnostic</strong> : Type d&apos;appareil, version iOS/Android, version de l&apos;app (uniquement en cas de crash)</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">1.2 Données que nous ne collectons JAMAIS</h3>

        <ul className="list-none pl-0 mb-4 space-y-1">
          <li>❌ Nom, prénom, email, numéro de téléphone, adresse postale</li>
          <li>❌ Photos, vidéos, ou tout autre média (ils restent sur votre appareil)</li>
          <li>❌ Contacts, calendrier, ou autres données de votre téléphone</li>
          <li>❌ Identifiant publicitaire (IDFA/GAID)</li>
          <li>❌ Historique de navigation ou tracking cross-site</li>
          <li>❌ Données biométriques (Face ID/Touch ID sont gérés localement par votre appareil)</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">2. Stockage et Traitement des Données</h2>

        <h3 className="text-2xl font-bold mt-6 mb-3">2.1 Spots Privés (Mode par défaut)</h3>

        <p className="mb-2"><strong>Stockage local uniquement :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Tous vos spots privés sont stockés <strong>exclusivement sur votre appareil</strong> dans une base de données locale chiffrée</li>
          <li><strong>Aucune synchronisation cloud</strong> : Vos spots privés ne quittent jamais votre téléphone</li>
          <li><strong>Aucun accès tiers</strong> : Ni nous, ni aucun tiers ne peut voir vos spots privés</li>
          <li><strong>Suppression</strong> : La désinstallation de l&apos;app supprime définitivement tous vos spots privés</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">2.2 Spots Publics (Option de partage)</h3>

        <p className="mb-4">Si vous choisissez activement de partager un spot en mode public :</p>

        <p className="mb-2"><strong>Données transmises à nos serveurs (Supabase - hébergement UE) :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Coordonnées GPS (latitude/longitude)</li>
          <li>Note (1-5)</li>
          <li>Commentaire (optionnel)</li>
          <li>Emoji (optionnel)</li>
          <li>Date de création</li>
          <li><strong>Identifiant local anonyme</strong> (pour permettre la suppression ultérieure)</li>
        </ul>

        <p className="mb-2"><strong>Données NON transmises :</strong></p>
        <ul className="list-none pl-0 mb-4 space-y-1">
          <li>❌ Adresse exacte</li>
          <li>❌ Nom du/de la partenaire</li>
          <li>❌ Informations personnelles</li>
          <li>❌ Aucun identifiant vous permettant d&apos;être identifié</li>
        </ul>

        <p className="mb-2"><strong>Visibilité :</strong> Les spots publics sont visibles par tous les utilisateurs de l&apos;app sur la carte mondiale.</p>

        <p className="mb-4"><strong>Suppression :</strong> Vous pouvez supprimer un spot public à tout moment (longue pression sur le marqueur).</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">2.3 Coffre Fort Sécurisé</h3>

        <p className="mb-2">Les photos et vidéos ajoutées au Coffre Fort :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Sont stockées <strong>localement</strong> dans l&apos;espace sécurisé de l&apos;application</li>
          <li>Sont <strong>chiffrées</strong> avec AES-256</li>
          <li>Ne quittent <strong>jamais</strong> votre appareil</li>
          <li>Sont protégées par <strong>Face ID/Touch ID</strong> (authentification locale)</li>
          <li>Sont supprimées si vous désinstallez l&apos;app (pensez à faire une sauvegarde !)</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">3. Services Tiers Utilisés</h2>

        <h3 className="text-2xl font-bold mt-6 mb-3">3.1 Supabase (Hébergement des spots publics)</h3>

        <p className="mb-1"><strong>Service</strong> : Base de données cloud</p>
        <p className="mb-1"><strong>Localisation</strong> : Union Européenne</p>
        <p className="mb-1"><strong>Données stockées</strong> : Uniquement les spots publics (voir section 2.2)</p>
        <p className="mb-1"><strong>Conformité RGPD</strong> : ✅ Certifié conforme</p>
        <p className="mb-4"><strong>Politique</strong> : https://supabase.com/privacy</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">3.2 RevenueCat (Gestion des abonnements)</h3>

        <p className="mb-2"><strong>Service</strong> : Plateforme de gestion des achats in-app</p>
        <p className="mb-2"><strong>Données transmises</strong> :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Identifiant appareil anonyme généré localement</li>
          <li>Plan d&apos;abonnement actif (Essential, Plus, Premium)</li>
          <li>Date de souscription et de renouvellement</li>
        </ul>

        <p className="mb-1"><strong>Données NON transmises</strong> : Informations de paiement (gérées par Apple/Google)</p>
        <p className="mb-1"><strong>Conformité RGPD</strong> : ✅ Certifié conforme</p>
        <p className="mb-4"><strong>Politique</strong> : https://www.revenuecat.com/privacy</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">3.3 Google AdMob (Publicités - uniquement version gratuite)</h3>

        <p className="mb-1"><strong>Service</strong> : Régie publicitaire</p>
        <p className="mb-1"><strong>Utilisateurs concernés</strong> : Uniquement utilisateurs (Free, essential et plus)</p>
        <p className="mb-2"><strong>Données transmises</strong> :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Identifiant publicitaire anonyme (si consentement donné)</li>
          <li>Données techniques (type d&apos;appareil, OS)</li>
          <li>Langue et pays</li>
        </ul>

        <p className="mb-1"><strong>Consentement GDPR</strong> : Nous demandons systématiquement votre consentement avant d&apos;afficher des publicités personnalisées (conforme TCF v2.2)</p>
        <p className="mb-1"><strong>Publicités Premium</strong> : Les abonnés Premium ne voient AUCUNE publicité</p>
        <p className="mb-4"><strong>Politique</strong> : https://policies.google.com/privacy</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">3.4 Apple App Store / Google Play Store</h3>

        <p className="mb-2"><strong>Service</strong> : Distribution et gestion des paiements</p>
        <p className="mb-2"><strong>Données transmises</strong> : Lors d&apos;un achat, Apple/Google reçoit vos informations de paiement. Nous ne recevons que la confirmation de transaction.</p>
        <p className="mb-1"><strong>Politiques</strong> :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Apple : https://www.apple.com/legal/privacy/</li>
          <li>Google : https://policies.google.com/privacy</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">4. Base Légale du Traitement (RGPD)</h2>

        <p className="mb-4">Conformément à l&apos;article 6 du RGPD, nos traitements sont fondés sur :</p>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Traitement</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Base légale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Stockage des spots privés</td>
                <td className="border border-gray-300 px-4 py-2">Exécution du contrat (article 6.1.b)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Affichage des spots publics</td>
                <td className="border border-gray-300 px-4 py-2">Consentement (article 6.1.a)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Gestion des abonnements</td>
                <td className="border border-gray-300 px-4 py-2">Exécution du contrat (article 6.1.b)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Publicités personnalisées</td>
                <td className="border border-gray-300 px-4 py-2">Consentement (article 6.1.a)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Statistiques d&apos;usage (anonymes)</td>
                <td className="border border-gray-300 px-4 py-2">Intérêt légitime (article 6.1.f)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Prévention des abus</td>
                <td className="border border-gray-300 px-4 py-2">Intérêt légitime (article 6.1.f)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">5. Durée de Conservation</h2>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Type de données</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Spots privés</td>
                <td className="border border-gray-300 px-4 py-2">Jusqu&apos;à suppression par l&apos;utilisateur ou désinstallation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Spots publics</td>
                <td className="border border-gray-300 px-4 py-2">Jusqu&apos;à suppression manuelle ou 5 ans maximum</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Données d&apos;abonnement</td>
                <td className="border border-gray-300 px-4 py-2">Durée de l&apos;abonnement + 1 an (comptabilité)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Logs techniques (crash)</td>
                <td className="border border-gray-300 px-4 py-2">90 jours maximum</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">6. Vos Droits (RGPD)</h2>

        <p className="mb-4">Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">6.1 Droit d&apos;accès (Article 15)</h3>
        <p className="mb-4">Vous pouvez demander une copie de toutes vos données personnelles.</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">6.2 Droit de rectification (Article 16)</h3>
        <p className="mb-4">Vous pouvez modifier vos spots à tout moment via l&apos;application.</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">6.3 Droit à l&apos;effacement (Article 17)</h3>
        <p className="mb-2">Vous pouvez :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Supprimer un spot individuel ou public (modal historique)</li>
          <li>Supprimer tous vos spots : <strong>Paramètres → Supprimer toutes les données</strong></li>
          <li>Demander la suppression complète de votre compte : contact@intimatmap.app</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">6.4 Droit à la portabilité (Article 20)</h3>
        <p className="mb-4">Vous pouvez exporter vos données via la fonction <strong>Sauvegarde</strong> de votre appareil.</p>

        <h3 className="text-2xl font-bold mt-6 mb-3">6.5 Droit d&apos;opposition (Article 21)</h3>
        <p className="mb-2">Vous pouvez refuser :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Les publicités personnalisées (via paramètres AdMob)</li>
          <li>Les notifications (via paramètres de l&apos;app)</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">6.6 Droit de limitation (Article 18)</h3>
        <p className="mb-4">Vous pouvez demander la limitation du traitement de vos données.</p>

        <p className="mb-1"><strong>Pour exercer vos droits :</strong> contact@intimatmap.app</p>
        <p className="mb-4"><strong>Délai de réponse :</strong> 1 mois maximum (article 12.3 RGPD)</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">7. Sécurité des Données</h2>

        <h3 className="text-2xl font-bold mt-6 mb-3">7.1 Mesures techniques</h3>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li><strong>Chiffrement des communications</strong> : HTTPS/TLS 1.3 pour tous les échanges réseau</li>
          <li><strong>Chiffrement local</strong> : AES-256 pour le Coffre Fort</li>
          <li><strong>Authentification biométrique</strong> : Face ID/Touch ID (gérée par l&apos;OS)</li>
          <li><strong>Anonymisation</strong> : Les spots privés & publics ne contiennent aucune donnée identifiante</li>
          <li><strong>Hébergement sécurisé</strong> : Serveurs Supabase certifiés ISO 27001</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">7.2 Mesures organisationnelles</h3>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Accès aux serveurs limité au minimum nécessaire</li>
          <li>Logs d&apos;accès et audits réguliers</li>
          <li>Plan de réponse aux incidents de sécurité</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">7.3 Votre responsabilité</h3>

        <p className="mb-2">⚠️ <strong>Important</strong> : Vous devez :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Sécuriser votre appareil (code PIN, biométrie)</li>
          <li>Ne jamais partager votre appareil déverrouillé</li>
          <li>Faire des sauvegardes régulières (nous ne pouvons restaurer vos données locales)</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">8. Protection des Mineurs</h2>

        <p className="mb-4"><strong>IntimateMap est strictement réservé aux personnes de 18 ans et plus.</strong></p>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Nous ne collectons jamais sciemment de données de mineurs</li>
          <li>L&apos;app n&apos;est pas disponible sur les profils Family Sharing pour enfants</li>
          <li>Contrôle parental : Activer les restrictions d&apos;âge (17+) sur l&apos;App Store/Play Store</li>
        </ul>

        <p className="mb-4"><strong>Si un mineur utilise l&apos;app :</strong> Contactez-nous immédiatement à contact@intimatmap.app</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">9. Transferts Internationaux</h2>

        <h3 className="text-2xl font-bold mt-6 mb-3">9.1 Localisation des données</h3>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li><strong>Spots publics</strong> : Serveurs Supabase (UE - Irlande)</li>
          <li><strong>Abonnements</strong> : RevenueCat (USA - clauses contractuelles types approuvées par la Commission Européenne)</li>
          <li><strong>Publicités</strong> : Google AdMob (USA - Privacy Shield Framework)</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3">9.2 Garanties RGPD (Article 46)</h3>

        <p className="mb-2">Tous nos prestataires hors UE sont conformes via :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Clauses contractuelles types de la Commission Européenne</li>
          <li>Certifications Privacy Shield</li>
          <li>Clauses de protection des données</li>
        </ul>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">10. Cookies et Technologies Similaires</h2>

        <p className="mb-4">IntimateMap <strong>n&apos;utilise AUCUN cookie web</strong> (l&apos;app est native).</p>

        <p className="mb-2"><strong>Stockage local uniquement :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Préférences utilisateur (AsyncStorage)</li>
          <li>Cache des images (optimisation performance)</li>
          <li>Session d&apos;authentification RevenueCat</li>
        </ul>

        <p className="mb-4">Aucun tracking cross-app. Aucun pixel de suivi.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">11. Coopération avec les Autorités</h2>

        <p className="mb-2">Nous pouvons communiquer des données aux autorités judiciaires uniquement en cas de :</p>

        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li><strong>Réquisition légale</strong> : Ordonnance d&apos;un juge français</li>
          <li><strong>Signalement de contenu illégal</strong> : Conformément à la loi LCEN</li>
          <li><strong>Danger imminent</strong> : Protection d&apos;une personne (article 6.1.d RGPD)</li>
        </ul>

        <p className="mb-4"><strong>Notification</strong> : Nous vous informerons de toute demande légale, sauf interdiction judiciaire.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">12. Modifications de la Politique</h2>

        <p className="mb-2">Nous pouvons modifier cette politique pour :</p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Refléter des changements réglementaires (RGPD, ePrivacy)</li>
          <li>Ajouter de nouvelles fonctionnalités</li>
          <li>Améliorer la transparence</li>
        </ul>

        <p className="mb-2"><strong>Notification des modifications importantes :</strong></p>
        <ul className="list-disc pl-8 mb-4 space-y-1">
          <li>Notification in-app</li>
          <li>Email (si vous nous avez communiqué votre adresse)</li>
          <li>Mise à jour de la date en haut de ce document</li>
        </ul>

        <p className="mb-4"><strong>Votre consentement :</strong> Continuer à utiliser l&apos;app après modification = acceptation de la nouvelle politique.</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">13. Contact - Délégué à la Protection des Données (DPO)</h2>

        <p className="mb-4"><strong>Pour toute question concernant vos données personnelles :</strong></p>

        <p className="mb-1"><strong>Email</strong> : contact@intimatmap.app</p>
        <p className="mb-4"><strong>Délai de réponse</strong> : 1 mois maximum (RGPD article 12.3)</p>

        <p className="mb-1"><strong>Autorité de contrôle (France) :</strong></p>
        <p className="mb-1">CNIL - Commission Nationale de l&apos;Informatique et des Libertés</p>
        <p className="mb-1">3 Place de Fontenoy - TSA 80715</p>
        <p className="mb-1">75334 Paris Cedex 07</p>
        <p className="mb-4">https://www.cnil.fr/</p>

        <hr className="my-8" />

        <h2 className="text-3xl font-bold mt-8 mb-4">14. Résumé (Version courte)</h2>

        <ul className="list-none pl-0 mb-4 space-y-1">
          <li>✅ <strong>Vos spots privés ne quittent JAMAIS votre téléphone</strong></li>
          <li>✅ <strong>Spots publics = anonymes (pas d&apos;infos perso)</strong></li>
          <li>✅ <strong>Pas de tracking publicitaire invasif</strong></li>
          <li>✅ <strong>Coffre Fort chiffré localement</strong></li>
          <li>✅ <strong>Vous contrôlez 100% de vos données</strong></li>
          <li>✅ <strong>Conforme RGPD</strong></li>
        </ul>

        <hr className="my-8" />

        <p className="text-xl font-bold mb-4">IntimateMap - Votre intimité est sacrée. Vos données aussi.</p>

        <p className="text-sm italic">Dernière mise à jour : 6 janvier 2026</p>
      </div>
    </PageLayout>
  )
}
