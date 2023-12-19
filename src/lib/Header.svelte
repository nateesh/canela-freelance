<script>
  import { isMobileMenuOpen } from '../store.js';

  import Logo from "$lib/assets/canela-logo2.png";

  // Scroll event logic
  import { onMount } from 'svelte';
  let scrolled = false;

  onMount(() => {
    window.addEventListener('scroll', () => {
      scrolled = window.scrollY > 50;
    });
  });

  function toggleMenu() {
    isMobileMenuOpen.update(value => !value);
  }

</script>

<div class="{`${scrolled ? 'bg-background/80' : 'bg-background'} flex scroll w-screen fixed z-50`}">
  <div class="flex items-center sm:pl-8">
    <a href="#about">
      <img src={Logo} alt="Canela Logo" class={`${scrolled ? 'h-16 sm:h-20' : 'h-16 sm:h-24'} p-4 transition-height`} />
    </a>
    <a href="#about">
      <div class="pl-1">
        <p class="{`${scrolled ? 'text-3xl sm:text-3xl' : 'text-3xl sm:text-4xl'} font-bold italic font-serif text-blue ml-3`}">
        Canela GIS</p>
        <p class="{`${scrolled ? 'text-sm sm:text-lg' : 'text-sm sm:text-lg'} transition-fontSize font-jetbrains-mono font-bold text-gray-800`}">
        GIS - DATA - PROGRAMMING</p>
      </div>
    </a>  
  </div>
  <div class="hidden xs:flex ml-auto items-center text-lg pr-8">
    <a href="#about" class="py-4 px-2 text-gray-800 font-semibold uppercase
    hover:text-lime-700 hover:border-b-2 border-gray-700 transition duration-300">About</a>
    <a href="#services" class="py-4 px-2 text-gray-800 font-semibold uppercase
    hover:text-lime-700 hover:border-b-2 border-gray-700 transition duration-300">Packaged Services</a>
    <a href="#contact" class="py-4 px-2 text-gray-800 font-semibold uppercase
    hover:text-lime-700 hover:border-b-2 border-gray-700 transition duration-300">Contact</a>
  </div>
  <button class="xs:hidden block ml-auto sm:pr-8 pr-3" on:click={toggleMenu}>
    <svg
      class="h-6 w-6 fill-current"
      viewBox="0 0 24 24">
      {#if $isMobileMenuOpen}
        <path
          fill-rule="evenodd"
          d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
          clip-rule="evenodd"/>
      {:else}
        <path
          fill-rule="evenodd"
          d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5z"
          clip-rule="evenodd"/>
      {/if}
    </svg>
  </button>
  
</div>
