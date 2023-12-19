<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { isMobileMenuOpen } from '../store.js';


  import About from "$lib/About.svelte";
  import Services from "$lib/Services.svelte";
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
		firstName: z.string().min(1),
		lastName: z.string().min(1),
		email: z.string().email(),
		company: z.string().min(1),
		message: z.string().min(1),
	})

  const { form, errors, enhance, constraints } = superForm((data as { form: any }).form, {
		taintedMessage: "Are you sure you want leave?",
		validators: newContactSchema
	})

  // Nav Menu Toggle

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
    <section class="-mt-24 pt-24 sm:pt-32 sm:-mt-32" id="about">
      <About />
    </section>
    <section class="-mt-24 pt-24 sm:pt-32 sm:-mt-32" id="services">
      <Services />
    </section>
    <section class="-mt-24 pt-24 sm:pt-32 sm:-mt-32" id="contact">
      <ContactForm>
        <article>
          <form method="POST" use:enhance>
              <div class="flex flex-col">
              <label class="text-lg mb-2" for="firstName">First name</label>
              <input class="border border-gray-400 rounded-md p-2 mb-5 focus:outline-none focus:ring-2" type="text" id="firstName" name="firstName" bind:value={$form.firstName} />
              {#if $errors.firstName}
                <small>{$errors.firstName}</small>
              {/if}

              <label class="text-lg mb-2" for="lastName">Last name</label>
              <input class="border border-gray-400 rounded-md p-2 mb-5 focus:outline-none focus:ring-2" type="text" id="lastName" name="lastName" bind:value={$form.lastName} />
              {#if $errors.lastName}
                <small>{$errors.lastName}</small>
              {/if}

              <label class="text-lg mb-2" for="email">Email address</label>
              <input class="border border-gray-400 rounded-md p-2 mb-5 focus:outline-none focus:ring-2" type="email" id="email" name="email" bind:value={$form.email} />
              {#if $errors.email}
                <small>{$errors.email}</small>
              {/if}

              <label class="text-lg mb-2" for="company">Company</label>
              <input class="border border-gray-400 rounded-md p-2 mb-5 focus:outline-none focus:ring-2" type="text" id="company" name="company" bind:value={$form.company} />
              {#if $errors.company}
              <small>{$errors.company}</small>
              {/if}
              
              <label class="text-lg mb-2" for="message">Message</label>
              <textarea class="border border-gray-400 rounded-md p-2 mb-5 focus:outline-none focus:ring-2 h-40" id="message" name="message" placeholder="Write something.." bind:value={$form.message} />
              {#if $errors.message}
              <small>{$errors.message}</small>
              {/if}

              <button type="submit">Submit</button>
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
    z-20
    text-3xl 
    font-mono
    sm:text-left
    text-center
    sm:pl-20
    pl-5 
    italic 
    text-lime-700 
    border-b-2 
    border-lime-800/20 
    py-8
    mb-6
    bg-lime-800/10;
  }

  /* :global(.section-header::before) {
    content: "- ";
  } */

  :global(.green-bold) {
      @apply text-lime-700
      font-bold;
  }
</style>
