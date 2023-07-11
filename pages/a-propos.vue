<template>
    <div class="wrapper">
        <div class="section">
            <h2>Qui suis-je ?</h2>
            <p>
                Je suis concepteur de site web depuis maintenant une dizaine d’année. J’ai tout
                d’abord intégré une école d’ingénieur. J’y ai appris la base de mes compétences, des
                différentes technologies permettant de créer des sites web à la gestion de projet.
                Une fois mes études finalisées j’ai commencé à travailler en tant que consultant, en
                CDI tout d’abord puis en freelance. Les nombreux projets sur lesquels j’ai travaillé
                m’ont permis d’avoir une vision globale du milieu, des avantages et inconvénients de
                chaque technologies et des bonnes pratiques à respecter.
            </p>
            <p>
                La création de site web est devenu une véritable passion au fil des années. Je me
                tiens régulièrement au courant des nouveautés et des technologies émergentes. Le
                développement web est milieu évoluant très vite, il est donc important d’effectuer
                cette veille.
            </p>
        </div>
        <div class="section">
            <h2>Mes valeurs</h2>
            <p>
                Le web est, pour moi, le futur des applications informatiques. Plus besoin
                d’installation, de longues configurations ou de limitations relatives à un système
                d’exploitation. Cela permet aux entreprises de proposer leurs services à un très
                grand nombre d’utilisateurs et à un cout réduit. De nombreuses société ont fait le
                choix de proposer leurs services directement à travers un site web.
            </p>
            <p>
                L’utilisation d’Internet est donc devenu une part prépondérante de notre vie. Il est
                important pour moi de veiller à ce que son utilisation soit la plus fluide possible.
                Je m’efforce, dans chacun des sites que je produis, de proposer au visiteur une
                expérience agréable et intuitive. Plus un site sera simple et agréable à utiliser,
                plus il sera marquant pour l’utilisateur et le taux de conversion se retrouvera
                augmenté. Il est également important de veiller à l’accessibilité du site, c’est à
                dire, à faciliter son utilisation pour des personnes malvoyantes ou ayant besoin
                d’outils aidant la consultation du site.
            </p>
            <p>
                Ces réflexions sur le design d’un site sont appelé UX/UI (user experience, user
                interface) et représentent une part importante de la conception d’un site.
            </p>
        </div>
        <div class="section mb-3">
            <h2>Comment se déroule la création d’un site web ?</h2>
            <p>
                Chaque projet commence par l’établissement d’un cahier des charges. Ce document
                décrit les besoins du client et l’ensemble des fonctionnalités qui devront être
                implémentée. Il définit également le design et la charte graphique du site. Mon
                travail consiste à accompagner le client dans la conception de ce document afin
                d’affiner ses besoins et de concevoir un site représentant son identité et les
                valeurs qu’il souhaite transmettre.
            </p>
            <p>
                Une fois le cahier des charges validé, le développement commence. Des réunions sont
                régulièrement organisées afin de montrer l’avancement et de vérifier que le site
                répond bien aux attentes du client. Cette partie du projet est la plus longue et
                peut durer plusieurs mois en fonction de la complexité des fonctionnalités
                demandées.
            </p>
            <p>
                La dernière étape de la conception d’un site web est appelé le déploiement. Cela
                consiste par l’achat d’un nom de domaine, la configuration d’un serveur et
                l’ouverture du site sur Internet.
            </p>
            <p>
                Si un projet est très conséquent il est conseillé de diviser le développement en
                plusieurs parties, ou release. Un déploiement est effectué à chaque release et
                permet au client de commencer l’utilisation de son site avant que celui-ci ne soit
                entièrement finalisé.
            </p>
        </div>
        <div class="section text-center">
            <h2>Mes réseaux</h2>
            <div class="social-networks">
                <NuxtLink
                    to="https://www.linkedin.com/in/raphael-beekmann-9379b9134/"
                    target="_blank">
                    <img
                        src="/icon/linkedin.svg"
                        alt="linkedin-logo"
                        class="social-networks__logo" />
                </NuxtLink>
                <NuxtLink to="https://www.instagram.com/raphael.beekmann/" target="_blank">
                    <img
                        src="/icon/instagram.svg"
                        alt="instagram-logo"
                        class="social-networks__logo" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    padding: 5rem;

    .section {
        margin-bottom: 2rem;

        &.mb-3 {
            margin-bottom: 3rem;
        }

        &.text-center {
            text-align: center;
        }

        h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        p {
            margin-bottom: 0.5rem;
        }
    }
}

.social-networks {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;

    &__logo {
        max-width: 75px;
        filter: grayscale(50%);
        transition: all 0.2s ease;

        &:hover {
            filter: grayscale(0);
        }
    }
}
</style>
