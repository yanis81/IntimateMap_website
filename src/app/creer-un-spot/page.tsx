import PageLayout from '@/components/PageLayout';

export default function CreerSpotPage() {
  return (
    <PageLayout>
      <h1>💘 Créer un Spot</h1>
      <p>Un <strong>spot</strong> est un moment intime géolocalisé que vous enregistrez sur la carte.</p>

      <hr />

      <h2>🎯 Étapes de Création</h2>

      <h3>1. Ouvrir le Modal de Création</h3>
      <p>Appuyez sur le <strong>bouton rose central</strong> "Drop the Love" sur l'écran principal.</p>

      <h3>2. Choisir la Note</h3>
      <p>Sélectionnez une note de <strong>1 à 5 étoiles</strong> selon l'intensité de votre moment :</p>
      <ul>
        <li>⭐ Agréable</li>
        <li>⭐⭐ Bien</li>
        <li>⭐⭐⭐ Très bien</li>
        <li>⭐⭐⭐⭐ Excellent</li>
        <li>⭐⭐⭐⭐⭐ Exceptionnel</li>
      </ul>

      <h3>3. Sélectionner un Emoji</h3>
      <p>Choisissez un emoji qui représente votre moment :</p>

      <h4>Emojis Gratuits</h4>
      <p>Plus de 30 emojis de base disponibles :<br />
      💘 ❤️ 😍 🔥 💋 🌹 💑 😘 💖 💕 ...</p>

      <h4>Emojis Premium 👑</h4>
      <p>40+ emojis exclusifs disponibles avec :</p>
      <ul>
        <li>Abonnement <strong>Essential, Plus ou Premium</strong></li>
        <li>OU accès temporaire via <strong>pub récompensée</strong> (5 min)</li>
      </ul>

      <h3>4. Ajouter un Commentaire (Optionnel)</h3>
      <p>Décrivez votre moment en quelques mots. Le commentaire reste privé même en mode public.</p>

      <blockquote>
        <strong>Note</strong> : Pour les spots publics, seule la note et l'emoji sont partagés. Le commentaire reste privé.
      </blockquote>

      <h3>5. Choisir le Mode</h3>

      <h4>Mode Privé</h4>
      <ul>
        <li>Stocké uniquement sur votre appareil</li>
        <li>Jamais synchronisé</li>
        <li>Total confidentialité</li>
      </ul>

      <h4>Mode Public</h4>
      <ul>
        <li>Partagé anonymement avec la communauté</li>
        <li>Localisation approximative uniquement</li>
        <li>Aucune donnée personnelle</li>
      </ul>

      <h3>6. Valider</h3>
      <p>Appuyez sur <strong>"Enregistrer"</strong> pour créer votre spot !</p>

      <hr />

      <h2>📍 Géolocalisation</h2>

      <h3>Localisation Automatique</h3>
      <p>Par défaut, l'app utilise <strong>votre position actuelle</strong> au moment de la création.</p>

      <h3>Précision</h3>
      <ul>
        <li><strong>Spots privés</strong> : Localisation précise</li>
        <li><strong>Spots publics</strong> : Localisation légèrement arrondie pour l'anonymat</li>
      </ul>

      <h3>Sans GPS</h3>
      <p>Si le GPS est désactivé :</p>
      <ul>
        <li>L'app vous demandera d'activer la localisation</li>
        <li>Impossible de créer un spot sans position</li>
      </ul>

      <hr />

      <h2>⏳ Cooldown Anti-Spam</h2>
      <p>Pour éviter le spam, un <strong>délai de 30 secondes</strong> est imposé entre deux spots.</p>
      <p>Un compteur s'affiche si vous essayez de créer un spot trop rapidement.</p>

      <hr />

      <h2>📺 Publicités Interstitielles</h2>
      <p><strong>Utilisateurs gratuits et Essential/Plus</strong> :</p>
      <ul>
        <li>Une publicité apparaît tous les <strong>2 spots créés</strong></li>
        <li>Cooldown minimum de <strong>20 secondes</strong> entre deux pubs</li>
        <li><strong>Abonnement Premium</strong> = aucune publicité</li>
      </ul>

      <hr />

      <h2>🏆 Badges Débloqués</h2>
      <p>Créer des spots peut débloquer des badges :</p>
      <ul>
        <li>🎯 <strong>Premiers Pas</strong> : Créer votre 1er spot</li>
        <li>🎯 <strong>En Marche</strong> : 10 spots créés</li>
        <li>🎯 <strong>Aventurier</strong> : 50 spots créés</li>
        <li>🎯 <strong>Légende</strong> : 100 spots créés</li>
        <li>🔥 <strong>Streak de Feu</strong> : Spots plusieurs jours d'affilée</li>
        <li>📍 <strong>Explorateur de Lieux</strong> : Spots dans différentes villes</li>
        <li>✈️ <strong>Globe-Trotter</strong> : Spots dans plusieurs pays</li>
      </ul>

      <hr />

      <h2>💡 Conseils et Astuces</h2>

      <h3>Choisir la Bonne Note</h3>
      <ul>
        <li><strong>Ne pas tout noter 5 étoiles</strong> : Réservez-les aux moments exceptionnels</li>
        <li><strong>Soyez honnête</strong> : Les statistiques seront plus intéressantes</li>
      </ul>

      <h3>Emojis Stratégiques</h3>
      <ul>
        <li>Utilisez des emojis variés pour retrouver facilement vos spots</li>
        <li>Les emojis apparaissent dans les filtres de l'historique</li>
      </ul>

      <h3>Commentaires Privés</h3>
      <ul>
        <li>Écrivez ce que vous voulez : c'est 100% privé</li>
        <li>Utile pour retrouver le contexte plus tard</li>
      </ul>

      <h3>Mode Public avec Parcimonie</h3>
      <ul>
        <li>Ne partagez que ce que vous voulez</li>
        <li>La communauté voit uniquement : localisation approximative + note + emoji</li>
      </ul>

      <hr />

      <h2>🐛 Problèmes Courants</h2>

      <h3>"Localisation indisponible"</h3>
      <p><strong>Solution</strong> :</p>
      <ol>
        <li>Vérifiez dans Réglages iOS &gt; IntimateMap &gt; Localisation</li>
        <li>Sélectionnez "Toujours" ou "Pendant l'utilisation"</li>
        <li>Assurez-vous que les services de localisation sont activés</li>
      </ol>

      <h3>"Cooldown actif"</h3>
      <p><strong>Solution</strong> :</p>
      <ul>
        <li>Attendez 30 secondes entre deux créations</li>
        <li>Le compteur s'affiche automatiquement</li>
      </ul>

      <h3>L'emoji premium est grisé</h3>
      <p><strong>Solution</strong> :</p>
      <ol>
        <li>Regardez une <strong>pub récompensée</strong> (accès 5 min)</li>
        <li>OU souscrivez à <strong>Essential/Plus/Premium</strong></li>
      </ol>

      <h3>Le spot n'apparaît pas sur la carte</h3>
      <p><strong>Solution</strong> :</p>
      <ul>
        <li><strong>Spots privés</strong> : Vérifiez que le filtre "Mes spots" est activé</li>
        <li><strong>Spots publics</strong> : Attendez quelques secondes (synchronisation)</li>
        <li>Redémarrez l'application si le problème persiste</li>
      </ul>

      <hr />

      <h2>📚 Voir Aussi</h2>
      <ul>
        <li><a href="/coffre-fort">🔐 Associer des Médias du Coffre-Fort</a></li>
        <li><a href="/faq">❓ FAQ</a></li>
      </ul>
    </PageLayout>
  );
}
