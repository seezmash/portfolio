<script>
  import BrowserHeader from '../components/layout/BrowserHeader.svelte'
  import Nav from '../components/layout/Nav.svelte'
  import Footer from '../components/layout/Footer.svelte'
  import SectionTitle from '../components/widgets/SectionTitle.svelte'
  import profileImage from '../assets/img/seez.jpg'
  import SkillCard from '../components/cards/SkillCard.svelte'
  import ProjectCard from '../components/cards/ProjectCard.svelte'
  import SocialLinkCard from '../components/cards/SocialLinkCard.svelte'

  // data
  import { mainSkills, secondarySkills } from '../db/skills'
  import projectsList from '../db/projects'
  import { socialMediaLinks } from '../db/socialMediaLinks'

  let shortProjectsList = Array.from(projectsList)
  shortProjectsList.splice(2)
  mainSkills.splice(9)
  secondarySkills.splice(15)
</script>

<BrowserHeader title="Welcome" />
<Nav selectedPageIndex={0} />
<main>
  <div class="page_width_wide mt-20 mx-auto flex w-full flex-col">
    <!-- ====================================================================== -->

    <div class="w-full text-sm flex">
      <div class="inline-block w-40 h-40 flex-grow-0 bg-gray-100 rounded-full overflow-hidden">
        <img
          draggable="false"
          class="w-full h-full object-cover"
          src={profileImage}
          alt="my most professional pose"
        />
      </div>
      <div class="w-1/2 flex-grow ml-10">
        <h1 class="text-3xl font-bold w-full text-gray-700 leading-snug">Hi there, I'm Sizwe</h1>
        <div class="mb-4 mt-3 h-5 inline-block text-baseF text-lg font-semibold text-stone-700">
          A
          <span class="text-2xl px-1 font-bold title_gradient"> Frontend Developer </span>
          from Johannesburg
        </div>

        {#if socialMediaLinks}
          <div class="relative mt-4 mb-5 flex w-full flex-wrap">
            {#each socialMediaLinks as item}
              <SocialLinkCard {item} />
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <!-- ====================================================================== -->

    <p class="block mt-7 w-full max-w-2xl flex-grow leading-relaxed text-lgF">
      I'm a self-taught JavaScript enthusiast who's enjoyed creating layouts and components since
      2017. My most familiar technologies include:
    </p>

    <!-- ====================================================================== -->

    {#if mainSkills}
      <div class="relative mt-10 mb-5 flex w-full flex-wrap">
        {#each mainSkills as item}
          <SkillCard {item} />
        {/each}
      </div>
    {/if}

    <!-- ====================================================================== -->
    <SectionTitle title="Recent projects" />

    {#if shortProjectsList}
      <div class="relative mt-2 flex w-full flex-wrap space-y-12">
        {#each shortProjectsList as item}
          <ProjectCard {item} />
        {/each}
      </div>
    {/if}

    <!-- ====================================================================== -->

    <SectionTitle title="Honorable mentions" />
    <p class=" w-full max-w-2xl flex-grow leading-relaxed">
      I'm on my way to becoming a rockstar with these technologies.
    </p>

    {#if secondarySkills}
      <div class="relative mt-10 flex w-full flex-wrap">
        {#each secondarySkills as item}
          <SkillCard {item} />
        {/each}
      </div>
    {/if}
  </div>
</main>
<Footer />
