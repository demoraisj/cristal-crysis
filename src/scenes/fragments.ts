import { Scene } from 'phaser';
import { center } from '../config';

export class Fragments extends Scene {
    constructor() {
        super('Fragments');
    }

    preload() {
        this.load.image('background', 'assets/background/fragments.jpg');
    }

    create() {
        this.add.image(center.x, center.y, 'background');

        const rocks = {
            a: this.matter.body.create({
                label: 'rock A',
                position: { x: center.x + 100, y: center.y + 268 },
                vertices: [
                    { x: -30, y: -27 },
                    { x: -80, y: 10 },
                    { x: 45, y: 10 },
                    { x: 20, y: -10 },
                ],
            }),
        };

        Object.values(rocks).forEach((rock) => {
            this.matter.world.add(rock);
        });
    }
}
