<script>
  import ServiceCard from "$lib/ServiceCard.svelte";

  // images
  import image1 from "$lib/assets/postgres.png";
  import image2 from "$lib/assets/three-dim-aerial.png";
</script>

<div class="grid xl:grid-cols-2 grid-cols-1 mt-6 gap-6 pt-6 border-t-lime-800/20 border-t-2">
  <div>
    <ServiceCard
      className=""
      title="<b>Cloud Database.</b> Collaborate with confidence."
      list={[
        "Choose your DB: PostgreSQL/PostGIS, SpatiaLite, SQL Server",
        "A single point of truth your team can work on.",
        "Versioning",
      ]}
      imageSrc={image1}
      imageCaption="PostgreSQL/PostGIS"
      imageHeight="h-40"
    />
  </div>
  <div>
    <ServiceCard
      title="<b>Visualise in 3D</b>. Make an impact with your data."
      list={[
        "Vibrant graphics for reports and marketing",
        "Video animations",
        "Location specific raster and vector data",
      ]}
      imageSrc={image2}
      imageCaption="3D aerial"
      imageHeight="h-40"
    />
  </div>
  <div>
    <ServiceCard
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
  <div>
    <ServiceCard
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
</div>

<style lang="postcss">
</style>
