<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { isMobileMenuOpen } from '../store.js';
  import { formMessage } from '../store.js';

  import About from "$lib/About.svelte";
  import Services from "$lib/Services.svelte";
  import ServicePackages from '$lib/ServicePackages.svelte';
  import Header from "$lib/Header.svelte";
  import ContactForm from "$lib/ContactForm.svelte";
  import Footer from "$lib/Footer.svelte";

  // Form Imports
  import { superForm } from "sveltekit-superforms/client"
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
	import { z } from "zod"
	import type { PageData } from "./$types"

	export let data: PageData

  // Form Validation
	const newContactSchema = z.object({
		name: z.string().min(1),
		phone: z.string().trim(),
		email: z.string().email(),
		company: z.string(),
		message: z.string().min(1),
	})

  const { form, errors, enhance, constraints } = superForm((data as { form: any }).form, {
		taintedMessage: "Are you sure you want leave?",
		validators: newContactSchema
	})


  // $form.message = "hello";
  $: {
    $form.message = $formMessage;
  }

 
  // Nav Menu Toggle

  /**
   * Toggles the menu.
   */
  function toggleMenu() {
    isMobileMenuOpen.update(value => !value);
  }

</script>

<!-- <SuperDebug data={$form} /> -->

<Header />
<div class="container bg-background-secondary mx-auto w-full xl:w-10/12 scroll-smooth
focus:scroll-auto min-h-screen pt-24 sm:pt-32 p-4 sm:p-9 z-20">
<div class="{`${$isMobileMenuOpen ? 'fixed text-center space-y-8 inset-0 bg-background/80 text-2xl z-10 pt-20' : 'hidden'} `}">
  <a href="#about" class="block py-8 px-2 text-gray-800 font-semibold uppercase bg-background-secondary
    hover:text-lime-700 hover:border-b-2 border-gray-700 transition duration-300" on:click={toggleMenu}>About</a>
  <a href="#services" class="block py-8 px-2 text-gray-800 font-semibold uppercase bg-background-secondary
    hover:text-lime-700 hover:border-b-2 border-gray-700 transition duration-300" on:click={toggleMenu}>Services</a>
  <a href="#contact" class="block py-8 px-2 text-gray-800 font-semibold uppercase bg-background-secondary
    hover:text-lime-700 hover:border-b-2 border-gray-700 transition duration-300" on:click={toggleMenu}>Contact</a>
</div>
  <div>
    <section class="-mt-20 pt-20 sm:pt-32 sm:-mt-32" id="about">
      <About />
    </section>
    <section class="-mt-20 pt-20 sm:pt-32 sm:-mt-32" id="service-packages">
      <h2 class="z-20 text-3xl font-mono sm:text-left text-center sm:pl-12 pl-5 italic text-lime-700 border-b-3 border-lime-800/20 pt-8 pb-5 mb-6 uppercase bg-lime-800/10 header-bg">Service Highlights</h2>  
      <ServicePackages />
    </section>
    <section class="-mt-20 pt-20 sm:pt-32 sm:-mt-32" id="services">
      <h2 class="z-20 text-3xl font-mono sm:text-left text-center sm:pl-12 pl-5 italic text-lime-700 border-b-3 border-lime-800/20 pt-8 pb-5 mb-6 uppercase bg-lime-800/10 header-bg mt-6">More Services</h2>
      <Services />
    </section>
    <section class="-mt-20 pt-20 sm:pt-32 sm:-mt-32" id="contact">
      <h2 class="z-20 text-3xl font-mono sm:text-left text-center sm:pl-12 pl-5 italic text-lime-700 border-b-3 border-lime-800/20 pt-8 pb-5 mb-6 uppercase bg-lime-800/10 header-bg-displaced mt-6">Contact Me</h2>
      <ContactForm>
      <article>
        <form method="POST" use:enhance>
            <div class="flex flex-col">
            <label class="text-md mb-2" for="name">First name</label>
            <input class="border hover:border-sky-800/70 hover:bg-slate-50 transition duration-300 border-gray-400 
            rounded-md p-2 focus:outline-none focus:ring-2 w-3/5" type="text" id="name" name="name" 
            bind:value={$form.name} />

            {#if $errors.name}
              <!-- <small>{$errors.name}</small> -->
              <small>Please add your name.</small>
            {/if}

            <label class="text-md mb-2 mt-5" for="phone">Phone/Mobile</label>
            <input class="border hover:border-sky-800/70 hover:bg-slate-50 transition duration-300 border-gray-400 
            rounded-md p-2 focus:outline-none focus:ring-2 w-3/5" type="text" id="phone" name="phone" 
            bind:value={$form.phone} />

            {#if $errors.phone}
              <small>{$errors.phone}</small>
            {/if}

            <label class="text-md mb-2 mt-5" for="email">Email address</label>
            <input class="border hover:border-sky-800/70 hover:bg-slate-50 transition duration-300 border-gray-400 
            rounded-md p-2 focus:outline-none focus:ring-2 w-3/5" type="email" id="email" name="email" 
            bind:value={$form.email} />

            {#if $errors.email}
              <small>{$errors.email}</small>
            {/if}

            <label class="text-md mb-2 mt-5" for="company">Company</label>
            <input class="border hover:border-sky-800/70 hover:bg-slate-50 transition duration-300 border-gray-400 
            rounded-md p-2 focus:outline-none focus:ring-2 w-3/5" type="text" id="company" name="company" 
            bind:value={$form.company} />

            {#if $errors.company}
            <small>{$errors.company}</small>
            {/if}
            
            <label class="text-md mb-2 mt-5" for="message">Message</label>
            <textarea class="border hover:border-sky-800/70 hover:bg-slate-50 transition duration-300 border-gray-400 
            rounded-md p-2 focus:outline-none focus:ring-2 h-40" id="message" name="message" placeholder="Write something.." 
            bind:value={$form.message} />

            {#if $errors.message}
            <small>Please add a message.</small>
            {/if}

            <button class="border-gray-400 hover:bg-slate-600/20 bg-slate-600/40 rounded-md py-5 mt-5 text-xl" type="submit">Send</button>
          </div>
          </form>
      </article>
      </ContactForm>
    </section>
  </div>
</div>
<Footer />


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.background);
  }
  :global(.section-header) {
    @apply 
z-20 text-3xl font-mono sm:text-left text-center sm:pl-12 pl-5 italic text-lime-700 border-b-3 border-lime-800/20 pt-8 pb-5 mb-6 uppercase bg-lime-800/10  }
  :global(.green-bold) {
      @apply text-lime-700
      font-bold;
  }
</style>
