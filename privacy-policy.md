# Politique de Confidentialité - IntimateMap

**Dernière mise à jour : 6 janvier 2026**

---

## Introduction

IntimateMap est un journal intime numérique personnel conçu pour enregistrer et cartographier vos moments intimes en toute confidentialité. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données conformément au **Règlement Général sur la Protection des Données (RGPD)**.

**Éditeur de l'application :**  
IntimateMap team 
Email : contact@intimatmap.app  
Pays : France

---

## 1. Données Collectées

### 1.1 Données que nous collectons

IntimateMap collecte uniquement les données strictement nécessaires au fonctionnement de l'application :

**Données de l'application :**
- **Spots (lieux enregistrés)** : Coordonnées GPS, note (1-5), commentaire optionnel, emoji, date/heure de création
- **Préférences utilisateur** : Thème (clair/sombre), paramètres de notifications, langue de l'interface
- **Données d'utilisation** : Nombre de spots créés, fréquence d'utilisation (pour les statistiques personnelles uniquement)

**Données techniques (automatiques) :**
- **Identifiant appareil anonyme** : Généré localement pour RevenueCat (gestion des abonnements) - Ne contient aucune information personnelle
- **Données de diagnostic** : Type d'appareil, version iOS/Android, version de l'app (uniquement en cas de crash)

### 1.2 Données que nous ne collectons JAMAIS

- ❌ Nom, prénom, email, numéro de téléphone, adresse postale
- ❌ Photos, vidéos, ou tout autre média (ils restent sur votre appareil)
- ❌ Contacts, calendrier, ou autres données de votre téléphone
- ❌ Identifiant publicitaire (IDFA/GAID)
- ❌ Historique de navigation ou tracking cross-site
- ❌ Données biométriques (Face ID/Touch ID sont gérés localement par votre appareil)

---

## 2. Stockage et Traitement des Données

### 2.1 Spots Privés (Mode par défaut)

**Stockage local uniquement :**
- Tous vos spots privés sont stockés **exclusivement sur votre appareil** dans une base de données locale chiffrée
- **Aucune synchronisation cloud** : Vos spots privés ne quittent jamais votre téléphone
- **Aucun accès tiers** : Ni nous, ni aucun tiers ne peut voir vos spots privés
- **Suppression** : La désinstallation de l'app supprime définitivement tous vos spots privés

### 2.2 Spots Publics (Option de partage)

Si vous choisissez activement de partager un spot en mode public :

**Données transmises à nos serveurs (Supabase - hébergement UE) :**
- Coordonnées GPS (latitude/longitude)
- Note (1-5)
- Commentaire (optionnel)
- Emoji (optionnel)
- Date de création
- **Identifiant local anonyme** (pour permettre la suppression ultérieure)

**Données NON transmises :**
- ❌ Adresse exacte
- ❌ Nom du/de la partenaire
- ❌ Informations personnelles
- ❌ Aucun identifiant vous permettant d'être identifié

**Visibilité :** Les spots publics sont visibles par tous les utilisateurs de l'app sur la carte mondiale.

**Suppression :** Vous pouvez supprimer un spot public à tout moment (longue pression sur le marqueur).

### 2.3 Coffre Fort Sécurisé

Les photos et vidéos ajoutées au Coffre Fort :
- Sont stockées **localement** dans l'espace sécurisé de l'application
- Sont **chiffrées** avec AES-256
- Ne quittent **jamais** votre appareil
- Sont protégées par **Face ID/Touch ID** (authentification locale)
- Sont supprimées si vous désinstallez l'app (pensez à faire une sauvegarde !)

---

## 3. Services Tiers Utilisés

### 3.1 Supabase (Hébergement des spots publics)

**Service** : Base de données cloud  
**Localisation** : Union Européenne  
**Données stockées** : Uniquement les spots publics (voir section 2.2)  
**Conformité RGPD** : ✅ Certifié conforme  
**Politique** : https://supabase.com/privacy

### 3.2 RevenueCat (Gestion des abonnements)

**Service** : Plateforme de gestion des achats in-app  
**Données transmises** :
- Identifiant appareil anonyme généré localement
- Plan d'abonnement actif (Essential, Plus, Premium)
- Date de souscription et de renouvellement

**Données NON transmises** : Informations de paiement (gérées par Apple/Google)  
**Conformité RGPD** : ✅ Certifié conforme  
**Politique** : https://www.revenuecat.com/privacy

### 3.3 Google AdMob (Publicités - uniquement version gratuite)

**Service** : Régie publicitaire  
**Utilisateurs concernés** : Uniquement utilisateurs gratuits (Free)  
**Données transmises** :
- Identifiant publicitaire anonyme (si consentement donné)
- Données techniques (type d'appareil, OS)
- Langue et pays

**Consentement GDPR** : Nous demandons systématiquement votre consentement avant d'afficher des publicités personnalisées (conforme TCF v2.2)  
**Publicités Premium** : Les abonnés Premium/Plus ne voient AUCUNE publicité  
**Politique** : https://policies.google.com/privacy

### 3.4 Apple App Store / Google Play Store

**Service** : Distribution et gestion des paiements  
**Données transmises** : Lors d'un achat, Apple/Google reçoit vos informations de paiement. Nous ne recevons que la confirmation de transaction.  
**Politiques** :
- Apple : https://www.apple.com/legal/privacy/
- Google : https://policies.google.com/privacy

---

## 4. Base Légale du Traitement (RGPD)

Conformément à l'article 6 du RGPD, nos traitements sont fondés sur :

| Traitement | Base légale |
|------------|-------------|
| Stockage des spots privés | Exécution du contrat (article 6.1.b) |
| Affichage des spots publics | Consentement (article 6.1.a) |
| Gestion des abonnements | Exécution du contrat (article 6.1.b) |
| Publicités personnalisées | Consentement (article 6.1.a) |
| Statistiques d'usage (anonymes) | Intérêt légitime (article 6.1.f) |
| Prévention des abus | Intérêt légitime (article 6.1.f) |

---

## 5. Durée de Conservation

| Type de données | Durée de conservation |
|-----------------|----------------------|
| Spots privés | Jusqu'à suppression par l'utilisateur ou désinstallation |
| Spots publics | Jusqu'à suppression manuelle ou 5 ans maximum |
| Données d'abonnement | Durée de l'abonnement + 1 an (comptabilité) |
| Logs techniques (crash) | 90 jours maximum |

---

## 6. Vos Droits (RGPD)

Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :

### 6.1 Droit d'accès (Article 15)
Vous pouvez demander une copie de toutes vos données personnelles.

### 6.2 Droit de rectification (Article 16)
Vous pouvez modifier vos spots à tout moment via l'application.

### 6.3 Droit à l'effacement (Article 17)
Vous pouvez :
- Supprimer un spot individuel (longue pression)
- Supprimer tous vos spots : **Paramètres → Supprimer toutes les données**
- Demander la suppression complète de votre compte : contact@intimatmap.app

### 6.4 Droit à la portabilité (Article 20)
Vous pouvez exporter vos données via la fonction **Sauvegarde** de votre appareil.

### 6.5 Droit d'opposition (Article 21)
Vous pouvez refuser :
- Les publicités personnalisées (via paramètres AdMob)
- Les notifications (via paramètres de l'app)

### 6.6 Droit de limitation (Article 18)
Vous pouvez demander la limitation du traitement de vos données.

### 6.7 Droit de réclamation
Vous pouvez déposer une plainte auprès de la **CNIL** (France) : https://www.cnil.fr/

**Pour exercer vos droits :** contact@intimatmap.app  
**Délai de réponse :** 1 mois maximum (article 12.3 RGPD)

---

## 7. Sécurité des Données

### 7.1 Mesures techniques

- **Chiffrement des communications** : HTTPS/TLS 1.3 pour tous les échanges réseau
- **Chiffrement local** : AES-256 pour le Coffre Fort
- **Authentification biométrique** : Face ID/Touch ID (gérée par l'OS)
- **Anonymisation** : Les spots publics ne contiennent aucune donnée identifiante
- **Hébergement sécurisé** : Serveurs Supabase certifiés ISO 27001

### 7.2 Mesures organisationnelles

- Accès aux serveurs limité au minimum nécessaire
- Logs d'accès et audits réguliers
- Plan de réponse aux incidents de sécurité

### 7.3 Votre responsabilité

⚠️ **Important** : Vous devez :
- Sécuriser votre appareil (code PIN, biométrie)
- Ne jamais partager votre appareil déverrouillé
- Faire des sauvegardes régulières (nous ne pouvons restaurer vos données locales)

---

## 8. Protection des Mineurs

**IntimateMap est strictement réservé aux personnes de 18 ans et plus.**

- Nous ne collectons jamais sciemment de données de mineurs
- L'app n'est pas disponible sur les profils Family Sharing pour enfants
- Contrôle parental : Activer les restrictions d'âge (17+) sur l'App Store/Play Store

**Si un mineur utilise l'app :** Contactez-nous immédiatement à contact@intimatmap.app

---

## 9. Transferts Internationaux

### 9.1 Localisation des données

- **Spots publics** : Serveurs Supabase (UE - Irlande)
- **Abonnements** : RevenueCat (USA - clauses contractuelles types approuvées par la Commission Européenne)
- **Publicités** : Google AdMob (USA - Privacy Shield Framework)

### 9.2 Garanties RGPD (Article 46)

Tous nos prestataires hors UE sont conformes via :
- Clauses contractuelles types de la Commission Européenne
- Certifications Privacy Shield
- Clauses de protection des données

---

## 10. Cookies et Technologies Similaires

IntimateMap **n'utilise AUCUN cookie web** (l'app est native).

**Stockage local uniquement :**
- Préférences utilisateur (AsyncStorage)
- Cache des images (optimisation performance)
- Session d'authentification RevenueCat

Aucun tracking cross-app. Aucun pixel de suivi.

---

## 11. Coopération avec les Autorités

Nous pouvons communiquer des données aux autorités judiciaires uniquement en cas de :

- **Réquisition légale** : Ordonnance d'un juge français
- **Signalement de contenu illégal** : Conformément à la loi LCEN
- **Danger imminent** : Protection d'une personne (article 6.1.d RGPD)

**Notification** : Nous vous informerons de toute demande légale, sauf interdiction judiciaire.

---

## 12. Modifications de la Politique

Nous pouvons modifier cette politique pour :
- Refléter des changements réglementaires (RGPD, ePrivacy)
- Ajouter de nouvelles fonctionnalités
- Améliorer la transparence

**Notification des modifications importantes :**
- Notification in-app
- Email (si vous nous avez communiqué votre adresse)
- Mise à jour de la date en haut de ce document

**Votre consentement :** Continuer à utiliser l'app après modification = acceptation de la nouvelle politique.

---

## 13. Contact - Délégué à la Protection des Données (DPO)

**Pour toute question concernant vos données personnelles :**

**Email** : contact@intimatmap.app  
**Délai de réponse** : 1 mois maximum (RGPD article 12.3)

**Autorité de contrôle (France) :**  
CNIL - Commission Nationale de l'Informatique et des Libertés  
3 Place de Fontenoy - TSA 80715  
75334 Paris Cedex 07  
https://www.cnil.fr/

---

## 14. Résumé (Version courte)

✅ **Vos spots privés ne quittent JAMAIS votre téléphone**  
✅ **Spots publics = anonymes (pas d'infos perso)**  
✅ **Pas de tracking publicitaire invasif**  
✅ **Coffre Fort chiffré localement**  
✅ **Vous contrôlez 100% de vos données**  
✅ **Conforme RGPD**  

---

**IntimateMap - Votre intimité est sacrée. Vos données aussi.**

*Dernière mise à jour : 6 janvier 2026*
