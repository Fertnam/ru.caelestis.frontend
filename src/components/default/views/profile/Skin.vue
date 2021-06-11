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
            <input ref="skinInput" type="file" @change="changeSkin" />
            <input ref="capeInput" type="file" @change="changeCape" />
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
    data() {
        return {
            viewer: null,
            orbitControls: null,
        }
    },
    mounted() {
        this.viewer = new FXAASkinViewer({
            canvas: this.$refs.canvas,
            width: 215,
            height: 430,
            skin: 'images/global/fake-skin.png',
            cape: 'images/global/fake-cape.png',
        })

        this.viewer.renderer.setClearColor(0xc6c9de)

        this.orbitControls = createOrbitControls(this.viewer)
        this.orbitControls.enableZoom = false

        this.viewer.animations.add(WalkingAnimation)
    },
    methods: {
        openSkinLoader() {
            this.$refs.skinInput.click()
        },
        openCapeLoader() {
            this.$refs.capeInput.click()
        },
        changeSkin(event) {
            this.viewer.loadSkin(event.target.value)
        },
        changeCape(event) {
            this.viewer.loadCape(event.target.value)
        },
    },
}
</script>

<style lang="scss" module>
.skin {
    display: flex;
    flex-direction: column;

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
