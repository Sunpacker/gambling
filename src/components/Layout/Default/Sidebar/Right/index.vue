<script lang="ts" setup>
import LayoutDefaultSidebarRightBet from '@/components/Layout/Default/Sidebar/Right/Bet.vue'
import LayoutDefaultSidebarRightAutobet from '@/components/Layout/Default/Sidebar/Right/Autobet.vue'

const { t } = useI18n({ useScope: 'global' })

const panels = [
  { name: 'bet', label: t('bet'), component: LayoutDefaultSidebarRightBet },
  {
    name: 'autobet',
    label: t('autobet'),
    component: LayoutDefaultSidebarRightAutobet,
  },
]
const currentPanel = ref(panels[0])
</script>

<template>
  <aside class="sidebar-right">
    <div class="flex">
      <div
        v-for="panel in panels"
        :key="panel.name"
        :class="['panel-head', { active: currentPanel.name === panel.name }]"
        @click="currentPanel = panel"
      >
        {{ panel.label }}
      </div>
    </div>

    <div class="panel">
      <KeepAlive>
        <component :is="currentPanel.component" />
      </KeepAlive>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar-right {
  @apply hidden flex-col h-full min-w-[385px] max-w-[385px] border-l border-blue-800;
  @apply lg:flex;
}

.panel-head {
  @apply flex justify-center items-center flex-1 h-[75px] text-[16px] bg-blue-900 font-semibold cursor-pointer transition-all;

  &.active {
    @apply text-white bg-[#131525];
  }
}

.panel {
  @apply w-full h-full px-5 py-8 bg-[#131525];
}
</style>
