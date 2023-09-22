<template>
    <reference-item title="Déploiement" reference="SPT-001">
        Afin de permettre l’accès de votre site sur Internet, il est nécessaire d’effectuer un
        déploiement. Cela consiste à entreposer le code source sur un serveur et d’y installer les
        logiciels utiles à son fonctionnement. Une configuration est également nécessaire pour
        optimiser votre site en fonction de la fréquentation attendue. Les frais inhérents à l’achat
        d’un nom de domaine et à la location du serveur seront à votre charge.
    </reference-item>
    <reference-item title="Certification HTTPS" reference="SPT-002">
        Cette prestation assure la certification HTTPS de votre site. Cela permet une connexion
        sécurisée entre le serveur et le visiteur. Pour des sites contenant des données sensibles
        (mots de passe, données bancaires, etc.), il est très fortement conseillé d’effectuer cette
        certification. Aujourd’hui, un très grand nombre de sites possèdent la certification HTTPS
        et son absence peut porter atteinte à la confiance que le visiteur éprouve pour votre site.
        Le certificat est renouvelé sans action de votre part grâce à un système d’automatisation.
    </reference-item>
    <reference-item title="Tracking utilisateur" reference="SPT-003">
        Le tracking est une méthode de collecte des données de vos visiteurs. Elle permet de
        récupérer les informations suivantes : heures d’affluence, zone géographique, temps moyen de
        connexion, nombre de pages visitées, appareil utilisé (ordinateur, téléphone), etc. Cela
        permet d’analyser le comportement d’un visiteur sur votre site afin de détecter les pages
        les plus fréquentées ou les potentielles zones de frictions. Il est également possible
        d’effectuer un suivi plus précis en implémentant un certain nombre d’événements déclenchés
        lors d’actions spécifiques de l’utilisateur.
    </reference-item>
    <reference-item title="Support annuel" reference="SPT-004">
        Le support annuel est un service de maintenance qui garantit le bon fonctionnement de votre
        site dans le temps. En cas de besoin (bug, erreur dans le contenu), le code source est
        modifié afin de résoudre le problème et d’éviter sa reproduction. Cette prestation est
        proposée sous forme de forfait annuel, avec possibilité de tacite reconduction.
    </reference-item>
    <reference-item title="Support ponctuel" reference="SPT-005">
        Le support ponctuel propose le même service de maintenance que le « Support Annuel », mais
        se facture à chaque intervention.
    </reference-item>
    <reference-item title="Sauvegarde automatique des données" reference="SPT-006">
        La mise en place d'un système de sauvegarde automatique des données de votre site est
        fortement recommandée si vous stockez des données client. Cette mesure de sécurité vous
        permet de vous prémunir contre toute perte ou corruption de vos données. Bien que ce genre
        d'incident soit rare, il est essentiel de disposer d'une sauvegarde en cas de besoin.
        Celle-ci peut être réalisée de manière quotidienne, hebdomadaire (conseillée) ou mensuelle
        et dans le format souhaitée (archive, fichier texte, e-mail).
    </reference-item>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Prestations - Support',
})
</script>
