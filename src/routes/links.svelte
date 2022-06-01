<script>
  import BrowserHeader from '../components/layout/BrowserHeader.svelte'
  import Nav from '../components/layout/Nav.svelte'
  import Footer from '../components/layout/Footer.svelte'
  import PageTitle from '../components/widgets/PageTitle.svelte'
  import UsefulLinkCard from '../components/cards/UsefulLinkCard.svelte'
  import usefulLinks from '../db/usefulLinks'
</script>

<BrowserHeader title="Useful links" />
<Nav selectedPageIndex={2} />
<main>
  <div class="page_width_wide mt-12 mx-auto flex w-full flex-col">
    <!-- ====================================================================== -->

    <PageTitle title="Resources from across the web" />

    {#if usefulLinks}
      <div class="relative mt-8 flex w-full flex-wrap">
        {#each usefulLinks as item}
          <UsefulLinkCard {item} />
        {/each}
      </div>
    {/if}
  </div>
</main>
<Footer />
