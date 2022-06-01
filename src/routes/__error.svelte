<script>
  import BrowserHeader from '../components/layout/BrowserHeader.svelte'
  import Nav from '../components/layout/Nav.svelte'
  import Footer from '../components/layout/Footer.svelte'
  import errorImage from '../assets/img/404.svg'
</script>

<BrowserHeader title="" />
<Nav selectedPageIndex={-1} />
<main>
  <div class="page_width_wide mx-auto flex w-full flex-col">
    <!-- ====================================================================== -->
    <div class="mb-10 w-full" />
    <div class=" w-96 h-96  overflow-hidden mx-auto">
      <img
        draggable="false"
        class="w-full h-full object-contain"
        src={errorImage}
        alt="my most professional pose"
      />
    </div>

    <h1 class="w-full text-center text-xl font-semibold text-gray-700">
      Well this is embarrassing, that page doesn't exist
    </h1>
    <!-- ====================================================================== -->
  </div>
</main>
<!-- <Footer /> -->
