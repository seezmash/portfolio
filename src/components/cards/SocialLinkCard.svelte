<script>
  export let item
</script>

<a
  href={item.url}
  target="_blank"
  rel="noreferrer"
  class="bg-whiteF bg-gray-50 w-12 h-12 mr-3 mb-3 rounded-md bg-gray-100F shadowF cursor-pointer hover:shadow flex-growF"
>
  <img
    draggable="false"
    class="mt-3 mx-auto my-auto h-6 w-6 object-contain"
    src={item.image}
    alt=""
  />
</a>
