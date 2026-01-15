import PageLayout from '@/components/PageLayout';

export default function GuidePage() {
  return (
    <PageLayout>
      <h1>🚀 Guide de Démarrage</h1>
      <p>Bienvenue sur <strong>IntimateMap</strong> ! Ce guide vous accompagnera dans vos premiers pas.</p>

      <hr />

      <h2>📱 Installation</h2>
      <ol>
        <li>Téléchargez l'application depuis l'<strong>App Store</strong> (iOS)</li>
        <li>Ouvrez l'application</li>
        <li>Accordez les permissions de localisation</li>
      </ol>

      <hr />

      <h2>🎯 Premier Lancement</h2>

      <h3>Étape 1 : Tutoriel Interactif</h3>
      <p>Au premier lancement, un tutoriel interactif vous guidera :</p>
      <ul>
        <li>✅ Présentation de l'interface</li>
        <li>✅ Explication du bouton "Drop the Love"</li>
        <li>✅ Différence entre spots privés et publics</li>
        <li>✅ Découverte du coffre-fort</li>
        <li>✅ Navigation dans l'historique</li>
        <li>✅ Aperçu des badges et statistiques</li>
      </ul>

      <blockquote>
        <strong>Astuce</strong> : Vous pouvez passer le tutoriel et le réactiver plus tard dans les paramètres.
      </blockquote>

      <h3>Étape 2 : Créer Votre Premier Spot</h3>
      <ol>
        <li><strong>Appuyez</strong> sur le bouton rose central "Drop the Love"</li>
        <li><strong>Choisissez</strong> votre note (1 à 5 étoiles)</li>
        <li><strong>Sélectionnez</strong> un emoji (gratuit ou premium)</li>
        <li><strong>Ajoutez</strong> un commentaire (optionnel)</li>
        <li><strong>Décidez</strong> : Privé ou Public</li>
        <li><strong>Validez</strong> !</li>
      </ol>

      <p>Votre premier spot apparaît sur la carte ! 🎉</p>

      <hr />

      <h2>🗺️ Navigation sur la Carte</h2>

      <h3>Zoom Adaptatif</h3>
      <p>La carte s'adapte automatiquement selon le niveau de zoom :</p>
      <ul>
        <li><strong>Zoom mondial</strong> : Vue d'ensemble avec regroupement des spots</li>
        <li><strong>Zoom pays/région</strong> : Affichage des zones populaires</li>
        <li><strong>Zoom ville</strong> : Détails de chaque spot individuel</li>
      </ul>

      <h3>Interagir avec un Spot</h3>
      <ul>
        <li><strong>Appuyez</strong> sur un marqueur pour voir les détails</li>
        <li><strong>Pour supprimer</strong> : Ouvrez la modal historique (bas à gauche) et cliquez sur l'icône poubelle</li>
      </ul>

      <hr />

      <h2>🔐 Spots Privés vs Publics</h2>

      <h3>Mode Privé</h3>
      <ul>
        <li>✅ Stocké <strong>uniquement sur votre appareil</strong></li>
        <li>✅ Jamais synchronisé sur internet</li>
        <li>✅ Total confidentialité</li>
        <li>✅ Visible uniquement par vous</li>
      </ul>

      <h3>Mode Public</h3>
      <ul>
        <li>🌍 Partagé <strong>anonymement</strong> avec la communauté</li>
        <li>🔒 Aucune donnée personnelle transmise</li>
        <li>📍 Localisation approximative uniquement</li>
        <li>🗑️ Supprimable à tout moment</li>
      </ul>

      <hr />

      <h2>💡 Conseils pour Bien Démarrer</h2>
      <ol>
        <li><strong>Créez votre premier spot</strong> en mode privé pour tester</li>
        <li><strong>Explorez l'historique</strong> pour retrouver vos spots</li>
        <li><strong>Découvrez le coffre-fort</strong> pour stocker des médias</li>
        <li><strong>Consultez les badges</strong> pour voir les défis</li>
        <li><strong>Testez les statistiques</strong> (version premium ou via pub)</li>
      </ol>

      <hr />

      <h2>⚙️ Paramètres Importants</h2>
      <p>Accédez aux paramètres via l'icône <strong>en bas à droite</strong> de l'écran :</p>

      <h3>Activer les Notifications</h3>
      <p>Paramètres &gt; Notifications &gt; Activer les rappels</p>

      <h3>Changer le Thème</h3>
      <p>Paramètres &gt; Apparence &gt; Mode sombre automatique</p>

      <h3>Confidentialité</h3>
      <p>Paramètres &gt; Confidentialité &gt; Gérer les données</p>

      <hr />

      <h2>🆘 Problèmes Courants</h2>

      <h3>L'app ne détecte pas ma localisation</h3>
      <ol>
        <li>Vérifiez les permissions dans Réglages iOS &gt; IntimateMap &gt; Localisation</li>
        <li>Assurez-vous que le GPS est activé</li>
        <li>Redémarrez l'application</li>
      </ol>

      <h3>Je ne vois pas mes spots</h3>
      <ul>
        <li><strong>Spots privés</strong> : Visibles uniquement en mode "Mes Spots"</li>
        <li><strong>Spots publics</strong> : Zoomez sur la zone pour les afficher</li>
      </ul>

      <h3>L'emoji premium ne se débloque pas</h3>
      <ol>
        <li>Regardez la publicité récompensée en entier</li>
        <li>Attendez 5 secondes après la fin</li>
        <li>L'accès temporaire est activé pour 5 minutes</li>
      </ol>

      <hr />

      <h2>📚 Étapes Suivantes</h2>
      <ul>
        <li><a href="/creer-un-spot">💘 Créer un Spot</a> (guide détaillé)</li>
        <li><a href="/coffre-fort">🔐 Utiliser le Coffre-Fort</a></li>
        <li><a href="/faq">❓ FAQ</a></li>
      </ul>
    </PageLayout>
  );
}
