<template>
    <div class="bar">
      <div :class="{colored: true, full:limit < val}" :style="{width: (limit < val ? 100 : val/limit*100)+'%'}">
        <span v-if="val > 0" class="text">{{val}} ({{Math.round(val / limit * 1000) / 10}}%)</span>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Bar',
  props: ['limit', 'val']
}
</script>
