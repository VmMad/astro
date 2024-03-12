<script lang="ts">
  import { Position } from '@iota/ui-kit/enums'
  import { Title, TitleSize, TitleTag } from '@iota/ui-kit'

  export let username: string
  export let image: string
  export let github: string
</script>

<a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col justify-center items-center py-6 before:ease relative overflow-hidden border border-blue-500/0.08 bg-iota-blue-600/15 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-full before:w-12 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 before:blur-md hover:shadow-iota-blue-600/15 hover:before:-translate-x-96"
>
    <img src={image} alt={username} />
    <card-body>
        <Title
        title={username}
        position={Position.Center}
        size={TitleSize.ExtraSmall}
        tag={TitleTag.H4}
        darkmode
        />
    </card-body>
</a>

<style>
  card-body {
    margin-top: 1rem;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>
