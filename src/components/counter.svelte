<script lang="ts">
    import { Button, ButtonType, Title, TitleTag } from '@iota/ui-kit';

    let count = 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<Title title="Interactive Counter in Svelte!" tag={TitleTag.H4} darkmode />

<div class="flex gap-x-4">
    <Button type={ButtonType.Secondary} label="-" on:click={decrement} darkmode />
    <span>{count}</span>
    <Button type={ButtonType.Secondary} label="+" on:click={increment} darkmode/>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    span {
        font-size: 2rem;
    }
</style>