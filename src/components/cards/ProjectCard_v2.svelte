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
  let shortTags = tagsList
  shortTags.splice(3)
</script>

<div
  class="relative w-full max-w-2xl flex-grow flex flex-col select-none"
>
  <a
    href={item.externalUrl}
    target="_blank"
    rel="noreferrer"
    class="relative bg-gray-50 left-0 w-full borderF h-96 rounded-lg shadow overflow-hidden border-tF cursor-pointer hover:shadow-md"
  >
    <img
      class="absolute object-cover object-top border-brF w-full h-full h-fullF left-0 image_visibility"
      src={item.image}
      alt={item.title}
    />
  </a>
  <div
    class=" text-lg font-bold text-gray-800 w-full mt-6 overflow-hidden"
  >
    {item.title}
  </div>
  <div
    class="group_text_medium mt-3 text-base w-full overflow-hidden"
  >
    {item.overview}
  </div>
<!-- 
  <div class="overview_text flex mt-1">
    {#if shortTags}
      {#each shortTags as item}
        <div
          class="flex box_radius mr-2 rounded-full px-1.5 pt-1 pb-1.5 bg-gray-50F text-xs font-semibold text-gray-500 bg-gray-50 truncate"
        >
          {item}
        </div>
      {/each}
    {/if}
  </div> -->
</div>
