<template>
    <div class="wrapper">
        <div class="section">
            <img src="/img/computer.svg" alt="computer" />
            <div>
                <h2 class="background-primary">Qui suis-je ?</h2>
                <p>
                    Je suis concepteur de site web depuis maintenant une dizaine d’année. J’ai tout
                    d’abord intégré une école d’ingénieur. J’y ai appris la base de mes compétences,
                    des différentes technologies permettant de créer des sites web à la gestion de
                    projet. Une fois mes études finalisées, j’ai commencé à travailler en tant que
                    consultant, en CDI tout d’abord puis en freelance. Les nombreux projets sur
                    lesquels j’ai travaillé m’ont permis d’avoir une vision globale du milieu, des
                    avantages et inconvénients de chaque technologie et des bonnes pratiques à
                    respecter.
                </p>
                <p>
                    La création de site web est devenue une véritable passion au fil des années. Je
                    me tiens régulièrement au courant des nouveautés et des technologies émergentes.
                    Le développement web est milieu évoluant très vite, il est donc important
                    d’effectuer cette veille.
                </p>
            </div>
        </div>
        <div class="section column-reverse">
            <div>
                <h2 class="background-primary">Mes valeurs</h2>
                <p>
                    Le web est, pour moi, le futur des applications informatiques. Plus besoin
                    d’installation, de longues configurations ou de limitations relatives à un
                    système d’exploitation. Cela permet aux entreprises de proposer leurs services à
                    un très grand nombre d’utilisateurs et à un coût réduit. De nombreuses sociétés
                    ont fait le choix de proposer leurs services directement à travers un site web.
                </p>
                <p>
                    L’utilisation d’Internet est donc devenue une part prépondérante de notre vie.
                    Il est important pour moi de veiller à ce que son utilisation soit la plus
                    fluide possible. Je m’efforce, dans chacun des sites que je produis, de proposer
                    au visiteur une expérience agréable et intuitive. Plus un site sera simple et
                    fluide à utiliser, plus il sera marquant pour l’utilisateur et le taux de
                    conversion se retrouvera augmenté. Il est également important de veiller à
                    l’accessibilité du site, c’est-à-dire faciliter son utilisation pour des
                    personnes malvoyantes ou ayant besoin d’outils pour consulter un site.
                </p>
                <p>
                    Ces réflexions sur le design d’un site sont appelées UX et UI (user experience,
                    user interface) et représentent une part importante de la conception d’un site.
                </p>
            </div>
            <img src="/img/values.svg" alt="values" />
        </div>
        <div class="section">
            <img src="/img/step.svg" alt="step" />
            <div>
                <h2 class="background-primary">Comment se déroule la création d’un site web ?</h2>
                <p>
                    Chaque projet commence par l’établissement d’un cahier des charges. Ce document
                    décrit les besoins du client et l’ensemble des fonctionnalités qui devront être
                    implémentées. Il définit également le design et la charte graphique du site. Mon
                    travail consiste à accompagner le client dans la conception de ce document afin
                    d’affiner ses besoins et de concevoir un site représentant son identité et les
                    valeurs qu’il souhaite transmettre.
                </p>
                <p>
                    Une fois le cahier des charges validé, le développement commence. Des réunions
                    sont régulièrement organisées afin de montrer l’avancement et de vérifier que le
                    site répond bien aux attentes du client. Cette partie du projet est la plus
                    longue et peut durer plusieurs mois en fonction de la complexité des
                    fonctionnalités demandées.
                </p>
                <p>
                    La dernière étape de la conception d’un site web est appelée le déploiement.
                    Cela consiste par l’achat d’un nom de domaine, la configuration d’un serveur et
                    l’ouverture du site sur Internet.
                </p>
                <p>
                    Si un projet est très conséquent il est conseillé de diviser le développement en
                    plusieurs parties, ou release. Un déploiement est effectué à chaque release et
                    permet au client de commencer l’utilisation de son site avant que celui-ci ne
                    soit entièrement finalisé.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const description =
    'Création de site web performant, impactant et moderne. Je vous accompagne dans la réalisation de votre projet,  que vous n’ayez qu’une simple idée ou bien une vision claire en tête'

useSeoMeta({
    title: 'A Propos',
    description,
    ogTitle: 'Raphael Beekmann - A Propos',
    ogDescription: description,
    ogUrl: 'https://www.raphael-beekmann.com/a-propos',
    twitterTitle: 'Raphael Beekmann - A Propos',
    twitterDescription: description,
})
</script>

<style scoped lang="scss">
.wrapper {
    padding: 1rem 1rem 2rem;

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;

        &.column-reverse {
            flex-direction: column-reverse;
        }

        img {
            max-width: 18rem;
        }

        h2 {
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
        }

        p {
            margin-bottom: 1rem;
            text-align: justify;
        }
    }
}

@media (min-width: 768px) {
    .wrapper {
        padding: 3rem;

        .section {
            flex-direction: row !important;
            align-items: start;

            h2 {
                font-size: 2rem;
            }
        }
    }
}

@media (min-width: 1200px) {
    .wrapper {
        padding: 5rem 10rem;

        .section h2 {
            font-size: 2.5rem;
        }
    }
}
</style>
