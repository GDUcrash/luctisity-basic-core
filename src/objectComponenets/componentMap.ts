import CoreComponent from "./coreComponent"
import GraphicEffectsComponent from "./graphicEffectsComponent"

export type ComponentMap = {
    component?:      CoreComponent,
    graphicEffects?: GraphicEffectsComponent,
    clonable?:       any,
    [key: string]:   any
}