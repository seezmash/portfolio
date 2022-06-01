<script>
  export let item
</script>

<a
  href={item.url}
  target="_blank"
  rel="noreferrer"
  class="bg-whiteF bg-gray-50 w-28 pt-2 pb-3 mr-6 mb-6 rounded-md bg-gray-100F shadowF cursor-pointer hover:shadow flex-growF"
>
  <img
    draggable="false"
    class="mt-2 mx-auto my-auto h-12 w-12 object-contain"
    src={item.image}
    alt=""
  />
  <h4 class="mt-2 py-1 text-center text-stone-600 font-semiboldF text-sm">
    {item.title}
  </h4>
</a>
