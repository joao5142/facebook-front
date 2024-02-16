<template>
  <div class="settings">
    <app-box :hover-effect="true">
      <img :src="MessengerIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Messenger</app-text>
    </app-box>
    <app-box :hover-effect="true">
      <img :src="FollowersIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Followers</app-text>
    </app-box>
    <app-box :hover-effect="true">
      <img :src="GroupsIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Groups</app-text>
    </app-box>
    <app-box :hover-effect="true">
      <img :src="PagesIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Pages</app-text>
    </app-box>
    <app-box :hover-effect="true">
      <img :src="EventLinkIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Events</app-text>
    </app-box>
    <app-box :hover-effect="true">
      <img :src="FoundationsIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Foundations</app-text>
    </app-box>
    <app-box :hover-effect="true">
      <img :src="MemoriesIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Memories</app-text>
    </app-box>
    <app-box :hover-effect="true">
      <img :src="VideosIcon" alt="Icon" />
      <app-text as="span" color="text-900" size="sm" class="mt-3">Videos</app-text>
    </app-box>
  </div>
</template>

<script setup lang="ts">
import EventLinkIcon from '@/assets/img/aside/events-link.svg?url_default'
import FollowersIcon from '@/assets/img/aside/followers-link.svg?url_default'
import FoundationsIcon from '@/assets/img/aside/foundations-link.svg?url_default'
import GroupsIcon from '@/assets/img/aside/groups-link.svg?url_default'
import MemoriesIcon from '@/assets/img/aside/memories-link.svg?url_default'
import MessengerIcon from '@/assets/img/aside/messenger-link.svg?url_default'
import PagesIcon from '@/assets/img/aside/pages-link.svg?url_default'
import VideosIcon from '@/assets/img/aside/videos-link.svg?url_default'
</script>

<style scoped lang="scss">
.settings {
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  & > * {
    cursor: pointer;

    padding: 1.5rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 45px;
    height: 45px;
  }
}
</style>
