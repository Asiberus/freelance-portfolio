<template>
    <div class="wrapper">
        <header class="header">
            <NuxtLink to="/" class="header__title">
                <h1>Raphael <span class="primary">BEEKMANN</span></h1>
            </NuxtLink>

            <nav class="header__menu">
                <template v-for="link of LINKS" :key="link.to">
                    <NuxtLink :to="link.to" class="header__menu__link" active-class="active">
                        {{ link.name }}
                    </NuxtLink>
                </template>
                <tile-link to="/contact" small>Demander un devis</tile-link>
            </nav>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <div class="plan">
                <template v-for="link of LINKS" :key="link.to">
                    <NuxtLink :to="link.to" class="hover-effect">{{ link.name }}</NuxtLink>
                    <span class="">|</span>
                </template>
                <NuxtLink to="/contact" class="hover-effect">Contact</NuxtLink>
                <button
                    type="button"
                    class="up-btn"
                    title="Cliquez pour revenir en haut"
                    @click="scrollToTheTop()">
                    <nuxt-icon name="up-arrow" filled></nuxt-icon>
                </button>
            </div>
            <div class="contact-wrapper">
                <div class="name">
                    <h3 class="raphael">Raphael BEEKMANN</h3>
                    <span>•</span>
                    <h3>Design & Construction de site web</h3>
                </div>
                <div class="contact">
                    <div class="contact__item">
                        <nuxt-icon name="email2" filled></nuxt-icon>
                        <span>:</span>
                        contact@raphaelbeekmann.com
                    </div>
                    <span>•</span>
                    <div class="contact__item">
                        <nuxt-icon name="phone" filled></nuxt-icon>
                        <span>:</span>
                        +33 6 25 65 22 72
                    </div>
                </div>
                <div class="social-networks">
                    <NuxtLink
                        to="https://www.linkedin.com/in/raphael-beekmann-9379b9134/"
                        target="_blank"
                        class="social-networks__item"
                        title="LinkedIn">
                        <img src="/icon/linkedin_bw.svg" alt="linkedin-logo" />
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.malt.fr/profile/raphaelbeekmann1"
                        target="_blank"
                        class="social-networks__item"
                        title="Malt">
                        <img src="/icon/malt_bw.svg" alt="linkedin-logo" />
                    </NuxtLink>
                    <NuxtLink
                        to="https://www.instagram.com/raphael.beekmann/"
                        target="_blank"
                        class="social-networks__item"
                        title="Instagram">
                        <img src="/icon/instagram_bw.svg" alt="linkedin-logo" />
                    </NuxtLink>
                </div>
                <div class="credit">Image by storyset on Freepik</div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const LINKS = [
    { name: 'Accueil', to: '/' },
    { name: 'Prestations', to: '/prestations' },
    { name: 'À propos', to: '/a-propos' },
]

function scrollToTheTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
.wrapper {
    min-height: 100vh;
    max-width: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    &__title {
        h1 {
            margin-bottom: 0;
            font-weight: 500;
            font-size: 2.5rem;

            .primary {
                color: var(--primary-800);
                font-weight: 800;
            }
        }
    }

    &__menu {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;

        &__link {
            padding: 0.5rem 1rem;
            transition: all 0.2s ease;

            &:hover {
                color: var(--primary-800);
            }

            &.active {
                color: var(--primary-900);
            }
        }
    }
}

footer {
    .plan {
        background-color: var(--primary-700);
        display: flex;
        justify-content: center;
        column-gap: 1.5rem;
        padding: 1rem;

        .up-btn {
            all: unset;
            font-size: 2rem;
            position: absolute;
            right: 2rem;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
                transform: translateY(-5px);
            }
        }
    }

    .contact-wrapper {
        background-color: var(--primary-900);
        padding: 3rem 1rem 1rem;

        .name {
            display: flex;
            justify-content: center;
            column-gap: 1.5rem;

            h3,
            span {
                font-size: 1.75rem;
                color: white;
                margin-bottom: 1rem;
            }
        }

        .contact {
            display: flex;
            justify-content: center;
            //align-items: center;
            //flex-direction: column;
            column-gap: 1.5rem;
            color: white;
            margin-bottom: 1rem;

            &__item {
                display: flex;
                column-gap: 0.5rem;

                .nuxt-icon {
                    font-size: 1.5rem;
                    color: white;
                }
            }
        }

        .social-networks {
            display: flex;
            justify-content: center;
            column-gap: 1.5rem;
            margin-bottom: 2rem;

            &__item {
                height: 40px;
                width: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--primary-300);
                cursor: pointer;
                transition: all 0.2s ease;

                &:hover {
                    background-color: var(--primary-25);
                }

                img {
                    max-width: 20px;
                }
            }
        }

        .credit {
            text-align: right;
            font-size: 0.75rem;
            font-style: italic;
            color: var(--primary-500);
        }
    }
}
</style>
