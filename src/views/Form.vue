<template>
  <div class="form-page">
    <Textarea text="초기값이 있습니다." />
    <Textarea />
    <Textarea text="disabled" disabled />
    <Textarea text="readonly" readonly />
  </div>
</template>

<script>
import Textarea from '@/components/Textarea/Textarea'
export default {
  components: {
    Textarea,
  },
}
</script>

<style lang="scss" scoped>
.form-page {
  &::v-deep .form {
    margin-bottom: 10px;
  }
}
</style>
