<script>
  import MapContainer from "$lib/leaflet/MapContainer.svelte";
  import ServiceCard from "$lib/ServiceCard.svelte";

  import "$lib/global.css";

  // images
  import imageDatabase from "$lib/assets/database.png";
  import imageAnalysis from "$lib/assets/analysis.png";
  import imageInfrastructure from "$lib/assets/infrastructure-validation.png";
  import image2 from "$lib/assets/three-dim-aerial.png";

  const customStyles = `"rounded border-2 border-r-3 border-b-4 bg-service-card/60 border-b-lime-800/40
    border-r-lime-700/30 border-lime-700/10 py-8 h-full items-stretch";`;
</script>

<div class="grid lg:grid-cols-2 bg-c_ grid-cols-1 round mt-6 gap-6">
  <div>
    <ServiceCard
      className={customStyles}
      title="<b class='text-2xl'>Data Validation.</b>"
      list={[
        "Automate data validation and reporting.",
        "Integrity checks across spatial and tabular features.",
        "Validate the itegrity of existing data",
      ]}
      imageSrc={imageInfrastructure}
      imageCaption="3D aerial"
      imageClass="border-1"
    />
  </div>
  <div>
    <ServiceCard
      className={customStyles}
      title="<b class='text-2xl'>GIS Analysis.</b>"
      list={[
        "Harness the power of GIS to gain valuable spatial insights",
        "Spatial analysis and modelling.",
        "Work across tabular, vector, and raster data.",
      ]}
      imageSrc={imageAnalysis}
      imageCaption="3D aerial"
      imageClass="border-1"
    />
  </div>

  <div class="flex-none lg:flex lg:col-span-2 p-8 {customStyles}">
    <div class="xl:w-72 lg:w-5/12 w-full pr-5 pb-5">
      <h3 class="text-2xl font-sans text-stone-800 mb-3 font-bold">
        Web Development + Mapping.
      </h3>
      <ul class="text-lg service-card">
        <li class="mb-2">Interactive web-mapping apps.</li>
        <li class="mb-2">Mobile friendly websites.</li>
        <li class="mb-2">Responsive pages and apps.</li>
      </ul>
    </div>
    <MapContainer></MapContainer>
  </div>
  <div>
    <ServiceCard
      className={customStyles}
      title="<b class='text-2xl'>Cloud Database.</b><br>Collaborate with confidence."
      list={[
        "A single point of truth for team collaboration.",
        "Integrate with workflows and GIS Software.",
        "keep back-ups and versioning.",
      ]}
      imageSrc={imageDatabase}
      imageCaption="PostgreSQL/PostGIS"
      imageClass="h-52"
    />
  </div>
  <div>
    <ServiceCard
      className={customStyles}
      title="<b class='text-2xl'>Visualise in 3D</b>.<br><span>Make an impact."
      list={[
        "Vibrant graphics for reports and marketing.",
        "Video animations.",
        "Location specific raster and vector data.",
      ]}
      imageSrc={image2}
      imageCaption="3D aerial"
      imageClass="border-1"
    />
  </div>
</div>

<style lang="postcss">
  .service-card {
    display: block;
    text-indent: -1.2em;
    padding-left: 1.2em;
  }
  .service-card li:before {
    content: "▪️ ";
    margin-right: 0.5em;
  }
  .service-list li {
    display: block;
    text-indent: -1.6em;
    padding-left: 1.2em;
  }
  .service-list li:before {
    content: "✓ ";
    margin-right: 0.5em;
  }
  .green-bold {
    @apply text-lime-700/70;
  }
</style>
