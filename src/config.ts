import type { Types } from 'phaser';
import { AUTO, Scale } from 'phaser';

export const scale = Object.freeze({
    width: 2000,
    height: 998,
});

export const center = Object.freeze({
    x: scale.width / 2,
    y: scale.height / 2,
});

export const config: Types.Core.GameConfig = {
    type: AUTO,
    parent: 'game',
    backgroundColor: '#33A5E7',
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
            gravity: {
                y: 0,
            },
            debug: {
                showBody: import.meta.env.VITE_DEBUG === 'true',
                showStaticBody: import.meta.env.VITE_DEBUG === 'true',
            },
        },
    },
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH,

        ...scale,
    },
};
