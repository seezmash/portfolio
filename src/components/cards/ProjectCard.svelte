<script>
  export let item
  let tagsList = [
    'Gears of War',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'FB Gaming',
    'MOBA',
    'Cosplay'
  ]
  let projectTags = item ? item.projectTags : null
  let shortTags = tagsList
  shortTags.splice(3)
</script>

<div
  class="relative w-1/2 mb-10 pr-6 max-w-2xl flex-grow flex flex-col select-none bg-yellow-100F border-tF"
>
  <a
    href={item.externalUrl}
    target="_blank"
    rel="noreferrer"
    class="relative bg-gray-50 left-0 w-full borderF h-56 box_radius shadowF border-8 border-gray-100 overflow-hidden border-tF cursor-pointer hover:shadow"
  >
    <img
      class="absolute object-cover object-top border-brF box_radius overflow-hidden w-full h-full h-fullF left-0 image_visibility"
      src={item.image}
      alt={item.title}
    />
  </a>
  <div
    class=" text-lg font-bold text-gray-800 w-full mt-5 h-14F overflow-hidden"
  >
    {item.title}
  </div>
  <div
    class="group_text_medium text-base w-full text-centerF mt-3 h-14F overflow-hidden"
  >
    {item.overview}
  </div>

  <div class="overview_text flex mt-1">
    {#if projectTags}
      {#each projectTags as item}
        <div
          class="flex box_radius mr-2 rounded-fullF px-1.5 pt-1 pb-1.5 bg-gray-50F text-xs font-semibold text-gray-500 bg-gray-50 truncate truncate"
        >
          {item}
        </div>
      {/each}
    {/if}
  </div>
</div>
