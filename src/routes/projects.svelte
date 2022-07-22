<script>
  import BrowserHeader from '../components/layout/BrowserHeader.svelte'
  import Nav from '../components/layout/Nav.svelte'
  import Footer from '../components/layout/Footer.svelte'
  import PageTitle from '../components/widgets/PageTitle.svelte'
  import ProjectCard from '../components/cards/ProjectCard.svelte'
  import projectsList from '../db/projects'

  let shortProjectsList = Array.from(projectsList)
  shortProjectsList.splice(4)
</script>

<BrowserHeader title="Projects" />
<Nav selectedPageIndex={1} />
<main>
  <div class="page_width_wide mt-14 mx-auto flex w-full flex-col">
    <!-- ====================================================================== -->
    <PageTitle title="Recent projects" />

    {#if shortProjectsList}
      <div class="relative mt-8 flex w-full flex-wrap">
        {#each shortProjectsList as item}
          <ProjectCard {item} />
        {/each}
      </div>
    {/if}
    <!-- ====================================================================== -->
  </div>
</main>
<Footer />
