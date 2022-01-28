<template>
  <div class="card">
    <div class="card__header">
      <picture>
        <source srcset="http://via.placeholder.com/300" />
        <img
          class="card__thumbanil"
          src="http://via.placeholder.com/300"
          alt="thumbnail"
        />
      </picture>
    </div>
    <div class="card__body">
      <span class="card__label">{{ label }}</span>
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__description">{{ description }}</p>
    </div>
    <div class="card__footer">
      <span class="card__rating"></span>
      <p class="card__rating-text">{{ ratingText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: 'http://via.placeholder.com/300',
    },
    label: {
      type: String,
      default: 'Card Label',
    },
    title: {
      type: String,
      default: 'Card Title',
    },
    description: {
      type: String,
      default: 'Card Description',
    },
    rating: {
      type: Number,
      default: 3,
    },
    ratingText: {
      type: String,
      default: 'Rating Text',
    },
  },
}
</script>

<style lang="scss" scoped></style>
