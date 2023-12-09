<script>

  import About from "$lib/About.svelte";
  import Services from "$lib/Services.svelte";
  import Header from "$lib/Header.svelte";
  import ContactForm from "$lib/ContactForm.svelte";
  
  // images

  import portait from "$lib/assets/portrait.png";

</script>

<Header />
<div class="container bg-background-secondary mx-auto w-full xl:w-10/12 scroll-smooth
focus:scroll-auto min-h-screen pt-28 p-6 z-20">

  <div class="flex mb-8">
    <img src="{portait}" alt="portrait" class="h-48 pr-5" />
    <div class="text-xl font-jetbrains-mono italic">
      <p class="mb-4">Hi, I'm Nathan, welcome to my online page. <br>
        I'm here to help you get the most out of your data. <br>
        Helping clients in person around SE Queensland, and remotely across
        Australia in <b class="text-lime-700">mining/exploration, environment, and Government.</b></p>
      <p class="mb-4">I pride myself on providing prompt and diligent service to my customers</p>
      <br>
    </div>
  </div>
    
  <div class="grid p-6">
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="contact">
      <ContactForm />
    </section>
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.background);
  }

</style>
