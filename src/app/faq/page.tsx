import PageLayout from '@/components/PageLayout';

export default function FAQPage() {
  return (
    <PageLayout>
      <h1>❓ Questions Fréquentes (FAQ)</h1>
      <p>Retrouvez les réponses aux questions les plus posées sur <strong>IntimateMap</strong>.</p>

      <hr />

      <h2>🔒 Confidentialité et Sécurité</h2>

      <h3>Mes données sont-elles sécurisées ?</h3>
      <p><strong>OUI</strong>, absolument :</p>
      <ul>
        <li><strong>Spots privés</strong> : Stockés uniquement sur votre appareil, jamais synchronisés</li>
        <li><strong>Coffre-fort</strong> : Fichiers entièrement locaux, jamais uploadés</li>
        <li><strong>Spots publics</strong> : Anonymes (aucun ID utilisateur, localisation approximative)</li>
      </ul>

      <h3>Qui peut voir mes spots publics ?</h3>
      <p><strong>La communauté</strong> voit uniquement :</p>
      <ul>
        <li>Localisation approximative (arrondie)</li>
        <li>Note (étoiles)</li>
        <li>Emoji</li>
      </ul>
      <p><strong>Jamais visible</strong> :</p>
      <ul>
        <li>Votre identité</li>
        <li>Commentaire privé</li>
        <li>Adresse exacte</li>
        <li>Historique complet</li>
      </ul>

      <h3>Puis-je supprimer mes spots publics ?</h3>
      <p><strong>OUI</strong>, à tout moment :</p>
      <ol>
        <li>Ouvrez la modal historique (icône en bas à gauche)</li>
        <li>Trouvez le spot à supprimer</li>
        <li>Cliquez sur l'icône poubelle</li>
        <li>Le spot est retiré de la carte publique ET de votre appareil</li>
      </ol>

      <h3>L'app collecte-t-elle mes données personnelles ?</h3>
      <p><strong>L'application elle-même ne collecte AUCUNE donnée personnelle</strong> :</p>
      <ul>
        <li>Aucun compte utilisateur requis</li>
        <li>Aucun email collecté</li>
        <li>Aucune donnée vendue à des tiers</li>
        <li>Conformité RGPD</li>
      </ul>
      <p><strong>Cependant</strong>, notre partenaire publicitaire <strong>AdMob (Google)</strong> collecte certaines données de manière anonyme pour afficher des publicités (identifiant publicitaire, type d'appareil). Ces données sont régies par la politique de confidentialité de Google.</p>

      <hr />

      <h2>💎 Abonnements et Tarifs</h2>

      <h3>Quels sont les prix des abonnements ?</h3>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Prix</th>
            <th>Fonctionnalités</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Gratuit</strong></td>
            <td>0 EUR</td>
            <td>Fonctionnalités de base complètes</td>
          </tr>
          <tr>
            <td><strong>Essential</strong></td>
            <td>0,99 EUR/mois</td>
            <td>+ 40 emojis premium</td>
          </tr>
          <tr>
            <td><strong>Plus</strong></td>
            <td>2,99 EUR/mois</td>
            <td>+ Statistiques avancées</td>
          </tr>
          <tr>
            <td><strong>Premium</strong></td>
            <td>3,99 EUR/mois</td>
            <td>+ Sans publicité</td>
          </tr>
        </tbody>
      </table>

      <h3>Y a-t-il un essai gratuit ?</h3>
      <p><strong>NON</strong>, pas d'essai gratuit automatique.</p>
      <p><strong>Mais</strong> : Vous pouvez accéder temporairement aux fonctionnalités premium via <strong>publicités récompensées</strong> :</p>
      <ul>
        <li>Emojis premium : Regardez une vidéo pour débloquer UN SEUL spot avec un emoji premium</li>
        <li>Statistiques : Accès 2 minutes</li>
      </ul>

      <h3>Comment annuler mon abonnement ?</h3>
      <ol>
        <li>Ouvrez <strong>Réglages iOS</strong></li>
        <li>Appuyez sur votre <strong>nom</strong> en haut</li>
        <li>Sélectionnez <strong>Abonnements</strong></li>
        <li>Choisissez <strong>IntimateMap</strong></li>
        <li>Appuyez sur <strong>Annuler l'abonnement</strong></li>
      </ol>
      <p>L'abonnement reste actif jusqu'à la fin de la période payée.</p>

      <h3>Puis-je changer de plan ?</h3>
      <p><strong>OUI</strong> :</p>
      <ol>
        <li>Paramètres IntimateMap &gt; Abonnement</li>
        <li>Sélectionnez le nouveau plan</li>
        <li>Confirmez le changement</li>
      </ol>
      <p>Le nouveau tarif s'applique immédiatement avec ajustement au prorata.</p>

      <hr />

      <h2>🗺️ Carte et Navigation</h2>

      <h3>Pourquoi mes spots disparaissent quand je zoome ?</h3>
      <p>C'est normal ! La carte utilise un <strong>système de regroupement adaptatif</strong> :</p>
      <ul>
        <li><strong>Zoom mondial</strong> : Les spots sont regroupés en clusters (ex: "+50")</li>
        <li><strong>Zoom ville</strong> : Chaque spot individuel est visible</li>
      </ul>
      <p>Dézoomez pour voir tous vos spots !</p>

      <h3>Combien de spots puis-je créer ?</h3>
      <p><strong>Illimité</strong> ! Aucune limite sur le nombre de spots.</p>
      <p>Seule contrainte : <strong>Cooldown de 30 secondes</strong> entre deux créations (anti-spam).</p>

      <h3>Puis-je modifier un spot déjà créé ?</h3>
      <p><strong>NON</strong>, les spots ne peuvent pas être modifiés après création.</p>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Supprimez le spot</li>
        <li>Recréez-le avec les bonnes informations</li>
      </ol>

      <h3>La carte ne charge pas</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Vérifiez votre connexion internet (requis pour les spots publics)</li>
        <li>Redémarrez l'application</li>
        <li>Vérifiez les permissions de localisation</li>
        <li>Mettez à jour l'application</li>
      </ol>

      <hr />

      <h2>🏆 Badges et Achievements</h2>

      <h3>Combien y a-t-il de badges ?</h3>
      <p><strong>139 badges au total</strong> dans 15 catégories :</p>
      <ul>
        <li>Nombre de spots</li>
        <li>Voyages</li>
        <li>Altitude</li>
        <li>Pays</li>
        <li>Qualité</li>
        <li>Régularité (streaks)</li>
        <li>Horaires</li>
        <li>Jours fériés</li>
        <li>Intensité</li>
        <li>Partenaire</li>
        <li>Partage</li>
        <li>Lieux spéciaux</li>
        <li>Années</li>
        <li>Badges drôles</li>
        <li>Badges spéciaux</li>
      </ul>

      <h3>Comment débloquer les badges ?</h3>
      <p>Les badges se débloquent automatiquement selon vos actions :</p>
      <ul>
        <li>Créer des spots</li>
        <li>Voyager dans différents pays</li>
        <li>Maintenir des streaks</li>
        <li>Créer des spots à certaines heures</li>
        <li>Atteindre certaines altitudes</li>
        <li>Etc.</li>
      </ul>
      <p>Consultez la liste complète dans <strong>Menu &gt; Badges</strong>.</p>

      <h3>Y a-t-il des badges premium ?</h3>
      <p><strong>NON</strong>, tous les badges sont accessibles gratuitement.</p>
      <p>Les fonctionnalités premium sont :</p>
      <ul>
        <li>Emojis exclusifs (Essential+)</li>
        <li>Statistiques avancées (Plus+)</li>
        <li>Mode furtif 🥷 (Plus+)</li>
        <li>Sans publicité (Premium)</li>
      </ul>

      <h3>Comment fonctionnent les publicités ?</h3>
      <p>Les publicités interstitielles s'affichent selon votre plan :</p>
      <ul>
        <li><strong>Free et Essential</strong> : 1 pub après chaque spot créé</li>
        <li><strong>Plus</strong> : 1 pub pour 2 spots créés</li>
        <li><strong>Premium</strong> : 0 pub</li>
      </ul>

      <hr />

      <h2>📊 Statistiques</h2>

      <h3>Comment accéder aux statistiques ?</h3>
      <p><strong>Plans Plus et Premium</strong> : Accès direct dans Menu &gt; Statistiques</p>
      <p><strong>Plans Gratuit et Essential</strong> :</p>
      <ol>
        <li>Menu &gt; Statistiques</li>
        <li>Regardez une <strong>pub récompensée</strong></li>
        <li>Accès temporaire de <strong>2 minutes</strong></li>
      </ol>

      <h3>Quelles statistiques sont disponibles ?</h3>
      <ul>
        <li><strong>Activité par période</strong> : Graphiques quotidiens/hebdomadaires/mensuels</li>
        <li><strong>Fréquence</strong> : Tendances et patterns</li>
        <li><strong>Streaks</strong> : Jours consécutifs avec activité</li>
        <li><strong>Calendrier interactif</strong> : Vue d'ensemble annuelle</li>
        <li><strong>Lieux favoris</strong> : Villes et pays les plus visités</li>
        <li><strong>Progression</strong> : Évolution dans le temps</li>
      </ul>

      <hr />

      <h2>📱 Fonctionnalités Techniques</h2>

      <h3>Sur quelles plateformes est disponible IntimateMap ?</h3>
      <p>Actuellement :</p>
      <ul>
        <li>✅ <strong>iOS</strong> (iPhone et iPad)</li>
        <li>⏳ <strong>Android</strong> (à venir)</li>
      </ul>

      <h3>Quelle version iOS minimum ?</h3>
      <p><strong>iOS 13.0</strong> ou supérieur.</p>

      <h3>L'app fonctionne-t-elle hors ligne ?</h3>
      <p><strong>Partiellement</strong> :</p>
      <p>✅ <strong>Fonctionne hors ligne</strong> :</p>
      <ul>
        <li>Créer des spots privés</li>
        <li>Consulter l'historique</li>
        <li>Accéder au coffre-fort</li>
        <li>Voir les badges</li>
      </ul>
      <p>❌ <strong>Requiert internet</strong> :</p>
      <ul>
        <li>Charger les spots publics sur la carte</li>
        <li>Synchroniser les spots publics</li>
        <li>Regarder les publicités</li>
        <li>Vérifier les abonnements</li>
      </ul>

      <h3>Puis-je utiliser l'app sur plusieurs appareils ?</h3>
      <p><strong>OUI</strong>, mais avec limitations :</p>
      <ul>
        <li><strong>Spots privés</strong> : Non synchronisés entre appareils</li>
        <li><strong>Coffre-fort</strong> : Non synchronisé entre appareils</li>
        <li><strong>Abonnement</strong> : Partagé via Family Sharing iOS (si configuré)</li>
        <li><strong>Spots publics</strong> : Visibles sur tous les appareils (communauté)</li>
      </ul>

      <hr />

      <h2>🐛 Problèmes Techniques</h2>

      <h3>L'app plante au démarrage</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Redémarrez votre iPhone</li>
        <li>Vérifiez que vous avez la dernière version de l'app</li>
        <li>Désinstallez et réinstallez l'app (⚠️ sauvegardez vos données avant !)</li>
        <li><a href="https://github.com/yanis81/map/issues" target="_blank" rel="noopener noreferrer">Signalez le bug</a></li>
      </ol>

      <h3>Les notifications ne fonctionnent pas</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Vérifiez dans Réglages iOS &gt; Notifications &gt; IntimateMap</li>
        <li>Activez "Autoriser les notifications"</li>
        <li>Dans l'app : Paramètres &gt; Notifications &gt; Activer</li>
      </ol>

      <h3>La géolocalisation est imprécise</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Assurez-vous d'être en extérieur (GPS plus précis)</li>
        <li>Activez "Localisation précise" dans Réglages iOS</li>
        <li>Attendez quelques secondes que le GPS se stabilise</li>
      </ol>

      <h3>Les publicités ne se chargent pas</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Vérifiez votre connexion internet</li>
        <li>Attendez quelques secondes</li>
        <li>Redémarrez l'application</li>
        <li>Vérifiez que vous n'utilisez pas de bloqueur de pub système</li>
      </ol>

      <hr />

      <h2>💬 Support et Contact</h2>

      <h3>Comment signaler un bug ?</h3>
      <ol>
        <li><a href="https://github.com/yanis81/map/issues" target="_blank" rel="noopener noreferrer">Ouvrez une issue GitHub</a></li>
        <li>Décrivez le problème avec détails :
          <ul>
            <li>Version iOS</li>
            <li>Version de l'app</li>
            <li>Étapes pour reproduire</li>
            <li>Captures d'écran si possible</li>
          </ul>
        </li>
      </ol>

      <h3>Comment suggérer une fonctionnalité ?</h3>
      <ol>
        <li><a href="https://github.com/yanis81/map/discussions" target="_blank" rel="noopener noreferrer">Ouvrez une discussion GitHub</a></li>
        <li>Décrivez votre idée en détail</li>
        <li>Expliquez le cas d'usage</li>
      </ol>

      <h3>Où trouver les mises à jour ?</h3>
      <ul>
        <li><strong>App Store</strong> : Les mises à jour sont automatiques ou manuelles</li>
        <li><strong>Notes de version</strong> : Consultables dans l'App Store</li>
        <li><strong>Changelog</strong> : Disponible sur le <a href="https://github.com/yanis81/map" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>

      <hr />

      <h2>📚 Ressources Complémentaires</h2>
      <ul>
        <li><a href="/guide">🚀 Guide de Démarrage</a></li>
        <li><a href="/creer-un-spot">💘 Créer un Spot</a></li>
        <li><a href="/coffre-fort">🔐 Coffre-Fort</a></li>
      </ul>

      <hr />

      <p><strong>Votre question n'est pas listée ?</strong></p>
      <p><a href="https://github.com/yanis81/map/discussions" target="_blank" rel="noopener noreferrer">Posez votre question sur GitHub Discussions →</a></p>
    </PageLayout>
  );
}
