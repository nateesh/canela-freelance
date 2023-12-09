<script>
    export let className = "";
    export let title = "";
    /**
     * @type {string[]}
     */
    export let list = [];
    export let imageSrc = "";
    export let imageCaption = "";
    export let imageHeight = "h-48";
</script>

<div class="{className} flex items-start border-b-2 border-b-lime-800/60 border-r-2 border-r-lime-800/60 pb-4">
    <img src={imageSrc} alt={imageCaption} class="{imageHeight} p-4" />
    <div class="">
        <h3 class="text-2xl">{@html title}</h3>
        <ul class="">
            {#each list as item (item)}
                <li class="text-xl">{item}</li>
            {/each}
        </ul>
    </div>
</div>
<br />

<style lang="postcss">
    ul li:before {
        content: "✓ ";
    }
</style>
