<script lang="ts">
import { ProfileCard } from '../components'
import type { IProfileCard } from '../lib/interfaces'
import { Position } from '@iota/ui-kit/enums'
import { TitleSize, Title } from '@iota/ui-kit'

const PROFILES: IProfileCard[] = [
  {
    username: 'Jean',
    image: 'https://avatars.githubusercontent.com/u/88061365?v=4',
    github: 'https://github.com/VmMad',
  },
  {
    username: 'Juli',
    image: 'https://avatars.githubusercontent.com/u/115430927?v=4',
    github: 'https://github.com/Juligs',
  },
]
</script>


<Title
title='Testing the Astro Framework'
size={TitleSize.Medium}
position={Position.Center}
darkmode
/>

<ul class='flex flex-row gap-x-6'>
    {#each PROFILES as user}
        <ProfileCard {...user} />
    {/each}
</ul>

<hr class='w-full my-6' />
