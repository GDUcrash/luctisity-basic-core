import CoreComponent from "./coreComponent"
import DataStorableComponent from "./dataStorableComponent"
import GraphicEffectsComponent from "./graphicEffectsComponent"
import ScriptableComponent from "./scriptableComponent"
import SoundPlayerComponent from "./soundPlayerComponent"

export type ComponentMap = {
    component?:      CoreComponent,

    graphicEffects?: GraphicEffectsComponent,
    soundPlayer?:    SoundPlayerComponent,
    scriptable?:     ScriptableComponent,
    dataStorable?:   DataStorableComponent,
    
    [key: string]:   any
}