<script lang='ts'>
    export let className = "";
    export let title = "";
    export let list: string[] = [];
    export let imageSrc = "";
    export let imageCaption = "";
    export let imageClass = "";
</script>

<div class="{className} xl:flex md:max-lg:flex no-flex md:justify-between p-8">
    <div class="pr-4">
        <h3 class="text-xl mb-3">{@html title}</h3>
        <ul class="">
            {#each list as item, index (index)}
                <li class="text-lg mb-2">{item}</li>
            {/each}
        </ul>
    </div>

    <img src={imageSrc} alt={imageCaption} class="mt-6 2xl:mt-0 mx-auto 2xl:mx-0 {imageClass} h-48" />
</div>

<style lang="postcss">
    ul li {
        display: flex;
    }
    ul li:before {
        content: "▪️ ";
        margin-right: 0.5em;
    }
</style>
