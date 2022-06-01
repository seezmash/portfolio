<script>
  export let item
  let itemTitle = item.title
  let itemImage = item.image
  let itemTags = item ? item.linkTags : null
</script>

<a
  href={item.externalUrl}
  target="_blank"
  rel="noreferrer"
  class="card_container box_radius relative mr-6 mb-6 inline-block w-60 flex-shrink-0 flex-grow cursor-pointer select-none overflow-hidden"
>
  <div
    class="bg-whiteF box_radius border-8 border-gray-100 relative top-0 left-0 h-40 w-full overflow-hidden"
  >
    <img
      class="border-br h-fullF image_visibility left-0 h-full w-full object-cover"
      src={itemImage}
      alt={itemTitle}
    />
  </div>
  <div class="bg-whiteF box_radiusF relative w-full flex-grow py-3">
    <div
      class="blog_title_medium font_style bold_text_color card_title text-lg font-semibold leading-snug"
    >
      {itemTitle}
    </div>
    <!-- <div class="blog_text_medium h-12 pt-2 overview_text truncate">
          {item.overview}
        </div> -->
    <div class="overview_text flex mt-3">
      {#if itemTags}
        {#each itemTags as item}
          <div
            class="flex box_radius mr-2 rounded-full px-1.5 pt-1 pb-1.5 bg-gray-50F text-xs font-semibold text-gray-500 bg-gray-50 truncate"
          >
            {item}
          </div>
        {/each}
      {/if}
    </div>
  </div>
</a>
