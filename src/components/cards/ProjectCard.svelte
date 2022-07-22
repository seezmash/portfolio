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
  class="relative w-full mb-12 pr-6F max-w-2xl flex-grow flex flex-col select-none bg-yellow-100F border-tF"
>
  <a
    href={item.externalUrl}
    target="_blank"
    rel="noreferrer"
    class="relative bg-gray-50 left-0 w-full h-96 box_radius shadowF border-8 border-gray-100 overflow-hidden border-tF cursor-pointer hover:shadow"
  >
    <img
      class="absolute object-cover object-top box_radius overflow-hidden w-full h-full  left-0"
      src={item.image}
      alt={item.title}
    />
  </a>
  <h3
    class=" text-lg font-semibold text-gray-800 w-full mt-4 h-14F overflow-hidden"
  >
    {item.title}
  </h3>
  <p
    class="group_text_medium text-base w-full text-centerF mt-2.5 h-14F overflow-hidden"
  >
    {item.overview}
  </p>

  <!-- <div class="overview_text flex mt-1">
    {#if projectTags}
      {#each projectTags as item}
        <div
          class="flex box_radius mr-2 rounded-fullF px-1.5 pt-1 pb-1.5 bg-gray-50F text-xs font-semibold text-gray-500 bg-gray-50 truncate"
        >
          {item}
        </div>
      {/each}
    {/if}
  </div> -->
</div>
