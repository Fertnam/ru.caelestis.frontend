export {}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $style: any
        $timeout: (time: number) => Promise<unknown>
    }
}
