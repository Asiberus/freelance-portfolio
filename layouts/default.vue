<template>
    <div class="wrapper">
        <header class="header">
            <div class="header__title">
                <NuxtLink to="/">
                    <h1>Raphael <span class="primary">BEEKMANN</span></h1>
                </NuxtLink>
            </div>

            <nav class="header__menu hide-mobile">
                <template v-for="link of LINKS" :key="link.to">
                    <NuxtLink :to="link.to" class="header__menu__link" active-class="active">
                        {{ link.name }}
                    </NuxtLink>
                </template>
                <tile-link to="/contact" small>Demander un devis</tile-link>
            </nav>
            <nav class="hide-desktop">
                <button class="nav-menu-btn" @click="openMenu()">
                    <nuxt-icon name="menu" class="nav-menu-btn__icon"></nuxt-icon>
                </button>
                <div ref="menu" class="nav-menu">
                    <div class="nav-menu__header">
                        <h1>Raphael <span class="anti-primary">BEEKMANN</span></h1>
                        <button class="nav-menu__header__btn" @click="closeMenu()">
                            <nuxt-icon name="close" class="nav-menu__header__btn__icon"></nuxt-icon>
                        </button>
                    </div>
                    <nav>
                        <ul>
                            <li v-for="link of LINKS" :key="link.to">
                                <NuxtLink
                                    :to="link.to"
                                    class="nav-menu__link"
                                    active-class="active"
                                    @click="closeMenu()">
                                    {{ link.name }}
                                </NuxtLink>
                                <hr />
                            </li>
                            <li>
                                <tile-link
                                    to="/contact"
                                    class="nav-menu__tile-link"
                                    @click="closeMenu()"
                                    >Demander un devis</tile-link
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>

        <main>
            <slot />
        </main>

        <footer>
            <button
                type="button"
                class="up-btn"
                title="Cliquez pour revenir en haut"
                @click="scrollToTheTop()">
                <nuxt-icon name="up-arrow" filled></nuxt-icon>
            </button>

            <div class="plan">
                <template v-for="link of LINKS" :key="link.to">
                    <NuxtLink :to="link.to" class="hover-effect">{{ link.name }}</NuxtLink>
                    <span class="">|</span>
                </template>
                <NuxtLink to="/contact" class="hover-effect">Contact</NuxtLink>
            </div>
            <div class="contact-wrapper">
                <div class="name">
                    <h3 class="raphael">Raphael BEEKMANN</h3>
                    <span>•</span>
                    <h3>Design & Construction de site web</h3>
                </div>
                <div class="contact">
                    <NuxtLink to="mailto:contact@raphaelbeekmann.com" class="contact__item">
                        <nuxt-icon name="email2" filled></nuxt-icon>
                        <span>:</span>
                        contact@raphaelbeekmann.com
                    </NuxtLink>

                    <NuxtLink to="tel:+33 6 25 65 22 72" class="contact__item">
                        <nuxt-icon name="phone" filled></nuxt-icon>
                        <span>:</span>
                        +33 6 25 65 22 72
                    </NuxtLink>
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
                        to="https://www.codeur.com/-raphaelbeekmann"
                        target="_blank"
                        class="social-networks__item"
                        title="Codeur">
                        <img src="/icon/codeur_bw.svg" alt="linkedin-logo" />
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

const linksAnimationSteps = [
    { opacity: 0, transform: 'translateY(-15px)' },
    { opacity: 1, transform: 'translateY(0)' },
]
const linksAnimationOptions = {
    duration: 250,
    easing: 'ease-out',
    fill: 'forwards',
}

const menu = ref(null)

function openMenu(): void {
    menu.value.style.setProperty('display', 'block')
    menu.value.classList.add('mask-circle-in')
    document.documentElement.classList.add('hide-scroll')
    Array.from(menu.value.getElementsByTagName('li')).forEach((link, index) => {
        link.animate(linksAnimationSteps, { ...linksAnimationOptions, delay: (index + 1) * 75 })
    })

    setTimeout(() => menu.value.classList.remove('mask-circle-in'), 300)
}

function closeMenu(): void {
    menu.value.classList.add('mask-circle-out')

    Array.from(menu.value.getElementsByTagName('li'))
        .reverse()
        .forEach((link, index) => {
            link.animate(linksAnimationSteps, {
                ...linksAnimationOptions,
                delay: index * 75,
                direction: 'reverse',
                duration: 100,
            })
        })

    setTimeout(() => {
        menu.value.classList.remove('mask-circle-out')
        menu.value.style.setProperty('display', 'none')
        document.documentElement.classList.remove('hide-scroll')
    }, 300)
}

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

    --title-size: clamp(1.4rem, 3vw, 3rem);
    --btn-size: clamp(1.5rem, 6vw, 2.5rem);

    &__title {
        padding: 1rem 0.75rem 1rem 1rem;

        h1 {
            margin-bottom: 0;
            font-weight: 500;
            font-size: var(--title-size);
            white-space: nowrap;

            .primary {
                color: var(--primary-800);
                font-weight: 800;
            }
        }
    }

    &__menu {
        display: flex;
        align-items: center;
        column-gap: clamp(0.5rem, 1.5vw, 2rem);

        &__link {
            transition: all 0.2s ease;
            white-space: nowrap;

            &:hover {
                color: var(--primary-800);
            }

            &.active {
                color: var(--primary-900);
            }
        }
    }

    .nav-menu-btn {
        all: unset;
        padding: 1rem;
        cursor: pointer;

        &__icon {
            font-size: var(--btn-size);
            color: var(--primary-800);
        }
    }
}

@keyframes maskCircleIn {
    from {
        clip-path: circle(0 at var(--mask-right) var(--mask-top));
    }

    to {
        clip-path: circle(200vh at var(--mask-right) var(--mask-top));
    }
}

.nav-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: var(--primary-800);
    overflow: auto;

    --mask-right: calc(100vw - 1rem - var(--btn-size) / 2);
    --mask-top: 2.1rem;

    &.mask-circle-in {
        animation: 0.3s ease-in forwards maskCircleIn;
    }

    &.mask-circle-out {
        animation: 0.3s ease-out reverse forwards maskCircleIn;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            margin-bottom: 0;
            padding: 1rem 0.75rem 1rem 1rem;
            font-size: var(--title-size);
            color: var(--anti-primary-25);
            font-weight: 500;
            white-space: nowrap;

            .anti-primary {
                font-weight: 800;
                color: var(--anti-primary-500);
            }
        }

        &__btn {
            all: unset;
            padding: 1rem;
            cursor: pointer;

            &__icon {
                font-size: var(--btn-size);
                color: var(--anti-primary-25);

                &:hover {
                    color: var(--anti-primary-100);
                }
            }
        }
    }

    nav {
        padding: 3rem;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                opacity: 0;

                .nav-menu__link {
                    display: block;
                    width: 100%;
                    height: 100%;
                    padding: 1.5rem;
                    font-size: 1.5rem;
                    color: var(--anti-primary-25);
                    text-align: center;

                    &:hover {
                        color: var(--anti-primary-100);
                    }
                }

                .nav-menu__tile-link {
                    display: block;
                    margin: 1rem auto;
                    width: 100%;
                    text-align: center;
                    font-size: clamp(1rem, 5vw, 1.5rem);
                    background-color: var(--anti-primary-25);
                    color: var(--primary-800);

                    &:hover {
                        background-color: var(--anti-primary-100);
                    }
                }

                hr {
                    margin: 0;
                    border-color: var(--anti-primary-25);
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .header {
        padding: 1.5rem;

        &__title {
            padding: 0;
        }
    }
}

footer {
    position: relative;

    .up-btn {
        all: unset;
        font-size: 2.5rem;
        position: absolute;
        top: -3rem;
        right: 0.5rem;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            transform: translateY(-5px);
        }
    }

    .plan {
        background-color: var(--primary-700);
        display: flex;
        justify-content: center;
        padding: 1rem 2rem;
        flex-wrap: wrap;
        column-gap: clamp(0.5rem, 5vw, 1.5rem);
        font-size: clamp(0.5rem, 5vw, 1rem);
    }

    .contact-wrapper {
        background-color: var(--primary-900);
        padding: 3rem 1rem 1rem;

        .name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            column-gap: 1.5rem;
            margin-bottom: 1rem;

            h3,
            span {
                font-size: clamp(1.5rem, 5vw, 1.75rem);
                color: white;
                margin: 0;
                text-align: center;
            }

            @media (min-width: 1060px) {
                flex-direction: row;
            }
        }

        .contact {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
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
                background-color: var(--primary-25);
                cursor: pointer;
                transition: all 0.2s ease;

                img {
                    max-width: 20px;
                }
            }
        }

        .credit {
            text-align: right;
            font-size: 0.6rem;
            font-style: italic;
            color: var(--primary-700);
        }
    }
}
</style>
