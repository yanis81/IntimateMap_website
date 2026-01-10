import PageLayout from '@/components/PageLayout';

export default function CoffreFortPage() {
  return (
    <PageLayout>
      <h1>🔐 Coffre-Fort Sécurisé</h1>
      <p>Le <strong>Coffre-Fort</strong> est un espace privé pour stocker vos photos et vidéos intimes en toute sécurité.</p>

      <hr />

      <h2>🎯 Qu'est-ce que le Coffre-Fort ?</h2>
      <p>Un espace de stockage <strong>entièrement local</strong> sur votre appareil pour :</p>
      <ul>
        <li>📸 <strong>Photos intimes</strong></li>
        <li>🎬 <strong>Vidéos privées</strong></li>
        <li>🔒 <strong>Stockage 100% local</strong> (jamais synchronisé sur internet)</li>
        <li>🔐 <strong>Accès sécurisé</strong> (optionnel : Face ID / Touch ID)</li>
      </ul>

      <hr />

      <h2>📂 Accéder au Coffre-Fort</h2>

      <h3>Depuis l'Écran Principal</h3>
      <ol>
        <li>Ouvrez le <strong>menu des paramètres</strong> (icône en haut à droite)</li>
        <li>Sélectionnez <strong>"Coffre-Fort"</strong></li>
      </ol>

      <h3>Depuis l'Historique</h3>
      <ol>
        <li>Ouvrez un spot dans l'historique</li>
        <li>Appuyez sur <strong>"Associer un média"</strong></li>
        <li>Accédez directement au coffre-fort</li>
      </ol>

      <hr />

      <h2>📸 Ajouter des Médias</h2>

      <h3>Importer une Photo</h3>
      <ol>
        <li>Ouvrez le <strong>Coffre-Fort</strong></li>
        <li>Appuyez sur <strong>"+ Ajouter"</strong></li>
        <li>Sélectionnez <strong>"Importer une photo"</strong></li>
        <li>Choisissez une photo depuis votre galerie</li>
        <li>Validez l'importation</li>
      </ol>

      <h3>Prendre une Photo</h3>
      <ol>
        <li>Appuyez sur <strong>"+ Ajouter"</strong></li>
        <li>Sélectionnez <strong>"Prendre une photo"</strong></li>
        <li>Utilisez l'appareil photo intégré</li>
        <li>Validez pour ajouter au coffre-fort</li>
      </ol>

      <h3>Importer une Vidéo</h3>
      <ol>
        <li>Appuyez sur <strong>"+ Ajouter"</strong></li>
        <li>Sélectionnez <strong>"Importer une vidéo"</strong></li>
        <li>Choisissez une vidéo depuis votre galerie</li>
        <li>La vidéo est copiée dans le coffre-fort</li>
      </ol>

      <h3>Enregistrer une Vidéo</h3>
      <ol>
        <li>Appuyez sur <strong>"+ Ajouter"</strong></li>
        <li>Sélectionnez <strong>"Enregistrer une vidéo"</strong></li>
        <li>Filmez votre contenu</li>
        <li>Validez pour l'ajouter</li>
      </ol>

      <hr />

      <h2>🔗 Associer des Médias à des Spots</h2>

      <h3>Depuis l'Historique</h3>
      <ol>
        <li>Ouvrez <strong>Historique</strong> (icône liste en haut à droite)</li>
        <li>Appuyez sur un <strong>spot</strong></li>
        <li>Sélectionnez <strong>"Associer un média"</strong></li>
        <li>Choisissez un fichier du coffre-fort</li>
        <li>Validez l'association</li>
      </ol>

      <h3>Avantages de l'Association</h3>
      <ul>
        <li>📍 Retrouvez facilement les médias liés à un moment précis</li>
        <li>🗺️ Visualisez le contexte géographique</li>
        <li>📅 Organisation chronologique automatique</li>
        <li>🔐 Les médias restent locaux et privés</li>
      </ul>

      <hr />

      <h2>🗑️ Gérer les Médias</h2>

      <h3>Supprimer un Média</h3>
      <ol>
        <li>Ouvrez le coffre-fort</li>
        <li>Appuyez longuement sur un média</li>
        <li>Sélectionnez <strong>"Supprimer"</strong></li>
        <li>Confirmez la suppression</li>
      </ol>

      <blockquote>
        <strong>Attention</strong> : La suppression est définitive. Le fichier ne pourra pas être récupéré.
      </blockquote>

      <h3>Dissocier d'un Spot</h3>
      <ol>
        <li>Ouvrez l'historique</li>
        <li>Appuyez sur un spot avec média associé</li>
        <li>Sélectionnez <strong>"Dissocier"</strong></li>
        <li>Le média reste dans le coffre-fort mais n'est plus lié au spot</li>
      </ol>

      <h3>Visualiser un Média</h3>
      <ul>
        <li><strong>Photo</strong> : Appuyez pour afficher en plein écran</li>
        <li><strong>Vidéo</strong> : Appuyez pour lancer la lecture</li>
        <li><strong>Zoom</strong> : Pincez pour zoomer sur une photo</li>
        <li><strong>Partage</strong> : Impossible (sécurité)</li>
      </ul>

      <hr />

      <h2>🔒 Sécurité et Confidentialité</h2>

      <h3>Stockage Local Uniquement</h3>
      <p>✅ <strong>Tous les fichiers sont stockés sur votre appareil</strong></p>
      <ul>
        <li>Jamais synchronisés sur internet</li>
        <li>Jamais sauvegardés dans le cloud</li>
        <li>Accessibles uniquement via l'application</li>
      </ul>

      <h3>Protection Biométrique (Optionnel)</h3>
      <p>Activez <strong>Face ID</strong> ou <strong>Touch ID</strong> pour sécuriser l'accès :</p>
      <ol>
        <li>Paramètres &gt; Sécurité</li>
        <li>Activez <strong>"Protéger le coffre-fort"</strong></li>
        <li>Configurez Face ID / Touch ID</li>
      </ol>

      <h3>Désinstallation de l'App</h3>
      <p>⚠️ <strong>Attention</strong> : Si vous désinstallez l'application, <strong>tous les fichiers du coffre-fort seront supprimés</strong>.</p>

      <blockquote>
        <strong>Conseil</strong> : Exportez vos médias importants avant désinstallation.
      </blockquote>

      <hr />

      <h2>📊 Limites et Quotas</h2>

      <h3>Espace de Stockage</h3>
      <p>Le coffre-fort utilise l'espace disponible sur votre appareil :</p>
      <ul>
        <li><strong>Pas de limite artificielle</strong> imposée par l'app</li>
        <li>Limite = espace libre de votre iPhone/iPad</li>
      </ul>

      <h3>Formats Supportés</h3>

      <h4>Photos</h4>
      <ul>
        <li>JPG / JPEG</li>
        <li>PNG</li>
        <li>HEIC (iOS natif)</li>
      </ul>

      <h4>Vidéos</h4>
      <ul>
        <li>MP4</li>
        <li>MOV (iOS natif)</li>
        <li>M4V</li>
      </ul>

      <hr />

      <h2>💡 Conseils et Astuces</h2>

      <h3>Organisation</h3>
      <ul>
        <li>Associez systématiquement vos médias aux spots correspondants</li>
        <li>Utilisez des noms descriptifs si vous en ajoutez manuellement</li>
      </ul>

      <h3>Gestion de l'Espace</h3>
      <ul>
        <li>Vérifiez régulièrement l'espace disponible sur votre appareil</li>
        <li>Supprimez les médias inutiles</li>
        <li>Compressez les vidéos volumineuses avant import</li>
      </ul>

      <h3>Sauvegarde Externe</h3>
      <p>Pour une sécurité maximale :</p>
      <ol>
        <li>Exportez périodiquement vos médias importants</li>
        <li>Sauvegardez-les sur un disque dur externe chiffré</li>
        <li>Ne comptez pas uniquement sur le coffre-fort local</li>
      </ol>

      <hr />

      <h2>🐛 Problèmes Courants</h2>

      <h3>"Impossible d'importer la photo"</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Vérifiez les permissions Photos dans Réglages iOS</li>
        <li>Assurez-vous d'avoir assez d'espace disponible</li>
        <li>Redémarrez l'application</li>
      </ol>

      <h3>"Vidéo trop volumineuse"</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Compressez la vidéo avant import</li>
        <li>Utilisez une application de compression vidéo</li>
        <li>Limitez la durée des vidéos (max 5 min recommandé)</li>
      </ol>

      <h3>"Le média n'apparaît pas"</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Vérifiez que l'importation est terminée</li>
        <li>Redémarrez l'application</li>
        <li>Vérifiez l'espace disponible</li>
      </ol>

      <h3>"Face ID ne fonctionne pas"</h3>
      <p><strong>Solutions</strong> :</p>
      <ol>
        <li>Vérifiez dans Réglages iOS que Face ID est activé</li>
        <li>Réinitialisez Face ID dans Paramètres IntimateMap</li>
        <li>Redémarrez votre appareil</li>
      </ol>

      <hr />

      <h2>📚 Voir Aussi</h2>
      <ul>
        <li><a href="/creer-un-spot">💘 Créer un Spot</a></li>
        <li><a href="/faq">❓ FAQ</a></li>
      </ul>
    </PageLayout>
  );
}
