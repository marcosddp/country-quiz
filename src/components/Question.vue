<template>
  <div id="container-question">
    <img
      id="flag"
      v-if="questionTitle.img"
      :src="questionTitle.img"
      alt="flag"
    />
    <h2>{{ questionTitle.text }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    questionTitle: Object,
  },
  setup() {},
};
</script>
