<script lang='ts'>
    import { Game } from 'phaser';
    import { config } from './config';
    import { Fragments } from './scenes/fragments';

    new Game({
        ...config,

        scene: [Fragments],
    });
</script>

<main>
    <div id="game" />
</main>
