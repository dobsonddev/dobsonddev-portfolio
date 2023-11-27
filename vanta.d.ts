declare module 'vanta/dist/vanta.waves.min.js';

interface VantaEffectOptions {
    el: HTMLElement;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    shininess: number;
    scaleMobile: number;
    color: number;
}

interface VantaEffect {
    (options: VantaEffectOptions): { destroy: () => void };
}

interface Window {
    VANTA?: {
        WAVES: VantaEffect;
    };
}
