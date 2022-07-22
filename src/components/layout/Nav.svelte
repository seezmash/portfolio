<script>
  export let selectedPageIndex = -1
  let navPageButtons = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Projects',
      link: '/projects'
    },
    // {
    //   name: 'Useful links',
    //   link: '/links'
    // }
  ]
</script>

<header>
  <nav class="relative top-0 w-full border-b border-gray-100 bg-gray-50">
    <div class="page_width_wide relative mx-auto h-16 hidden">
      <div class="align-center flex h-full w-full items-center justify-between">
        <!-- <Link to="/">
            <button class="h-4 w-44 cursor-pointer">
              <img
                class="h-full w-full object-contain"
                src="/logo_colorful.svg"
                alt="logo"
              />
            </button>
          </Link> -->
        <!-- ====================================================================== -->

        <!-- ====================================================================== -->
        <!-- <div class="relative h-9 w-44 flex-shrink flex justify-end">
            <button
              class="flex flex-nowrap items-center h-full cursor-pointer rounded border-transparent px-3 text-sm leading-8 text-gray-700 hover:bg-gray-200"
            >
              <img
                class="ml-0 inline-block h-4 w-4"
                src="./icons/ui/person.svg"
                alt=""
              />
              <span class="ml-2">Login</span>
            </button>
          </div> -->
      </div>
    </div>
    <!-- ====================================================================== -->
    <div class="bg-white">
      <div class="page_width_wide relative mx-auto h-12">
        <div class="relative h-full w-auto text-center text-sm font-semibold text-black">
          {#if navPageButtons}
            {#each navPageButtons as { name, link }, index}
              <a href={link}>
                <div class="nav_page_button">
                  <div class="inline-block text-sm font-normal">{name}</div>
                  {#if selectedPageIndex === index}
                    <div class="mt-0.5 h-0.5 w-full bg-blue-500" />
                  {/if}
                </div>
              </a>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </nav>
</header>
