<script>
  import About from "$lib/About.svelte";
  import Services from "$lib/Services.svelte";
  import Header from "$lib/Header.svelte";
  import ContactForm from "$lib/ContactForm.svelte";
</script>

<Header />
<div class="container bg-background-secondary mx-auto w-10/12 scroll-smooth 
focus:scroll-auto min-h-screen pt-24 p-6">

  <p>Hello, I'm Nathan, welcome to my online page.</p>
  <p>I'm here to help you get the most out of your data.</p>
  <p>
    Helping clients in person around SE Queensland, and remotely across
    Australia in mining/exploration, environment, and Government.
  </p>
  

  <h1>Service examples:</h1>
  
  <h3><b>Cloud Database</b>. Collaborate with confidence.</h3>
  <ul>
    <li>PostgreSQL/PostGIS, SpatiaLite, SQL Server</li>
    <li>Single point of truth</li>
    <li>Versioning</li>
  </ul>
  <img src="src\lib\assets\postgres.png" alt="PostgreSQL" class="h-36 p-4" />
  <br />

  <h3><b>Visualise in 3D</b>. Make an impact with your data.</h3>
  <ul>
    <li>Vibrant graphics and charts for reports and marketing</li>
    <li>Video animations</li>
    <li>Location specific raster and vector data</li>
  </ul>
  <img src="src\lib\assets\three-dim-aerial.png" alt="3d-aerial" class="h-72 p-4" />
  <br />

  <h3>Analysis.</h3>

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

  /* ul {
    list-style: none;
  } */

  ul li:before {
    content: "✓ ";
  }
</style>
