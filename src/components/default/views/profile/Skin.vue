<template>
    <div :class="$style.skin">
        <canvas ref="canvas" :class="$style.skinCanvas">
            Вывод скинов недоступен
        </canvas>

        <div :class="$style.skinOperators">
            <button :class="$style.skinOperatorsItem" @click="openSkinLoader">
                Сменить скин
            </button>

            <button :class="$style.skinOperatorsItem" @click="openCapeLoader">
                Сменить плащ
            </button>
        </div>

        <div :class="$style.skinLoaders">
            <input ref="skinInput" type="file" @change="updateSkin" />
            <input ref="capeInput" type="file" @change="updateCape" />
        </div>
    </div>
</template>

<script>
import {
    FXAASkinViewer,
    createOrbitControls,
    WalkingAnimation,
} from 'skinview3d'

export default {
    name: 'Skin',
    emits: [
        'skin-updated',
        'skin-updating-failed',
        'cape-updated',
        'cape-updating-failed',
    ],
    data() {
        return {
            viewer: null,
            orbitControls: null,
            skinReader: null,
            capeReader: null,
        }
    },
    computed: {
        user() {
            return this.$store.getters['auth/user']
        },
    },
    mounted() {
        this.initViewer()
        this.initReaders()
    },
    methods: {
        initViewer() {
            this.viewer = new FXAASkinViewer({
                canvas: this.$refs.canvas,
                width: 215,
                height: 430,
                cape: this.user.resources.getCape(),
            })

            const loadSkin = (skin) => {
                this.viewer.loadSkin(skin)
            }

            this.user.resources.getSkin().then(loadSkin).catch(loadSkin)

            this.viewer.renderer.setClearColor(0xc6c9de)

            this.orbitControls = createOrbitControls(this.viewer)
            this.orbitControls.enableZoom = false

            this.viewer.animations.add(WalkingAnimation)
        },
        initReaders() {
            const updateSkinInViewer = () => {
                this.viewer.loadSkin(this.skinReader.result)
            }

            const updateCapeInViewer = () => {
                this.viewer.loadCape(this.capeReader.result)
            }

            this.skinReader = new FileReader()
            this.capeReader = new FileReader()

            this.skinReader.onload = updateSkinInViewer
            this.capeReader.onload = updateCapeInViewer
        },
        openSkinLoader() {
            this.$refs.skinInput.click()
        },
        openCapeLoader() {
            this.$refs.capeInput.click()
        },
        async updateSkin(event) {
            try {
                const skin = event.target.files[0]

                await this.user.resources.updateSkin(skin)

                this.$mitter.emit('skin-updated')
                this.skinReader.readAsDataURL(skin)

                this.$emit('skin-updated')
            } catch (e) {
                this.$emit('skin-updating-failed')
            }
        },
        async updateCape(event) {
            try {
                const cape = event.target.files[0]

                await this.user.resources.updateCape(cape)
                this.capeReader.readAsDataURL(cape)

                this.$emit('cape-updated')
            } catch (e) {
                console.error(e)
                this.$emit('cape-updating-failed')
            }
        },
    },
}
</script>

<style lang="scss" module>
.skin {
    display: flex;
    flex-direction: column;

    @include _812 {
        &__canvas {
            margin: 0 auto;
        }
    }

    &__operators {
        &-item {
            display: block;

            padding: 10px;
            width: 100%;

            composes: light-theme light-theme--v_2 from '~@default-scss-modules/theme';

            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }

    &__loaders {
        display: none;
    }
}
</style>
