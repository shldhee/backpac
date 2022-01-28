<template>
  <div class="card-page">
    <Card :rating="3" ratingText="Lorem ipsum dolor sit amet" />
    <Card :rating="4" />
    <Card />
    <Card direction="row" :rating="3" ratingText="Lorem" />
  </div>
</template>

<script>
import Card from '@/components/Card/Card'
export default {
  components: {
    Card,
  },
}
</script>

<style lang="scss" scoped>
.card-page {
  &::v-deep {
    .card {
      margin-bottom: 30px;
    }
  }
}
</style>
