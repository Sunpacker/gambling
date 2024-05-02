<script lang="ts" setup>
const crashStore = useCrashStore()

const model = ref({
  amount: null,
})
const rules = {
  amount: { required: true },
}

const betOptions = [
  { label: 'min' },
  { label: '½' },
  { label: '+5 ' },
  { label: '2X' },
  { label: 'max' },
]
</script>

<template>
  <div class="flex flex-col h-full">
    <NForm ref="formRef" :model="model" :rules="rules">
      <NFormItem path="amount" :label="$t('bet-amount')">
        <NInput
          v-model:value="model.amount"
          type="text"
          :placeholder="$t('enter-amount')"
        >
          <template #suffix>
            <UiIcon name="coin" width="18px" height="18px" />
          </template>
        </NInput>
      </NFormItem>
    </NForm>

    <div class="flex gap-3 mb-auto">
      <div v-for="option in betOptions" :key="option.label" class="bet-option">
        {{ option.label }}
      </div>
    </div>

    <NButton
      type="primary"
      :loading="crashStore.playing"
      style="--n-height: 73px"
      @click="crashStore.start"
    >
      {{ crashStore.playing ? $t('playing') : $t('play') }}
    </NButton>
  </div>
</template>

<style lang="scss" scoped>
.bet-option {
  @apply flex justify-center items-center w-[60px] px-5 py-3 font-semibold rounded-md bg-[#222646] cursor-pointer transition-all;
  @apply hover:text-white;
}
</style>
