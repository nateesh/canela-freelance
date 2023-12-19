<script>
  import MapContainer from "$lib/leaflet/MapContainer.svelte";

  import ServiceCard from "$lib/ServiceCard.svelte";

  // images
  import image1 from "$lib/assets/postgres.png";
  import image2 from "$lib/assets/three-dim-aerial.png";

  const borderClass =
    `" rounded border-2 border-r-3 border-b-4 bg-service-card/60 border-b-lime-800/40 
    border-r-lime-700/30 border-lime-700/10 py-8 h-full";`
</script>

<h2 class="section-header">Service Highlights</h2>
<div class="grid xl:grid-cols-2 grid-cols-1 round mt-6 gap-6">
  <div>
    <ServiceCard
      className={borderClass}
      title="<b>Cloud Database.</b> Collaborate with confidence."
      list={[
        "A single point of truth for team collaboration.",
        "Back-ups and versioning.",
        "Your choice of Database.",
      ]}
      imageSrc={image1}
      imageCaption="PostgreSQL/PostGIS"
      imageHeight="h-40"
    />
  </div>
  <div>
    <ServiceCard
      className={borderClass}
      title="<b>Visualise in 3D</b>.<br><span>Make an impact."
      list={[
        "Vibrant graphics for reports and marketing.",
        "Video animations.",
        "Location specific raster and vector data.",
      ]}
      imageSrc={image2}
      imageCaption="3D aerial"
      imageHeight="h-40"
    />
  </div>

  <div class="flex-none lg:flex items-start xl:col-span-2 p-8 {borderClass}">
    <div class="xl:w-72 md:w-5/12 w-full pr-5 pb-5">
      <h3 class="text-xl font-bold mb-3">Web Development + Mapping.</h3>
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
      className={borderClass}
      title="<b>Data Validation.</b>"
      list={[
        "Ensure data is accurate and up to date.",
        "Automate data validation.",
        "Customised data validation reports.",
      ]}
      imageSrc={image2}
      imageCaption="3D aerial"
    />
  </div>
  <div>
    <ServiceCard
      className={borderClass}
      title="<b>GIS Analysis.</b>"
      list={[
        "Harness the power of GIS to gain valuable spatial insights",
        "",
        "",
      ]}
      imageSrc={image2}
      imageCaption="3D aerial"
    />
  </div>
</div>
<div class="xl:col-span-2 mt-10">
  <h2 class="section-header">More Services</h2>

  <div class="mb-10 pl-3">
    <ul
      class="service-list list-none text-lg grid lg:grid-cols-2 grid-cols-1 gap-3 whitespace-pre-wrap"
    >
      <li>
        Vector and raster <span class="green-bold">Spatial analysis.</span>
      </li>
      <li>
        <span class="green-bold">Database management</span> (PostgreSQL, SpatiaLite).
      </li>
      <li><span class="green-bold">Enterprise</span> GIS Training - ArcGIS.</li>
      <li><span class="green-bold">Open-source</span> GIS Training - QGIS.</li>
      <li>
        Custom <span class="green-bold">Geo-spatial scripting</span> (Python).
      </li>
      <li>
        <span class="green-bold">Web mapping</span> and web development (Javascript).
      </li>
      <li>
        <span class="green-bold">VertiGIS Studio</span> and Workflow application
        development.
      </li>
      <li>Data visualisation and <span class="green-bold">dashboards</span></li>
      <li>
        Data processing, <span class="green-bold">automation</span>, Supervised
        machine-learning.
      </li>
    </ul>
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
