<template>
  <div
    class="card"
    :class="direction === 'column' ? 'card--column' : 'card--row'"
  >
    <div class="card__thumbnail-wrapper">
      <picture>
        <source srcset="http://via.placeholder.com/300/a9c7ac" />
        <img
          class="card__thumbanil"
          src="http://via.placeholder.com/300/a9c7ac"
          :alt="`${title} thumbnail`"
        />
      </picture>
    </div>
    <div class="card__content">
      <div class="card__body">
        <span class="card__label">{{ label }}</span>
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__description">{{ description }}</p>
      </div>

      <div v-if="isShowFooter" class="card__footer">
        <div v-if="rating" class="card__rating-wrapper">
          <span
            v-for="(rating, i) in computedRatingArray"
            :key="i"
            :class="{
              'card__rating--active': rating,
            }"
            class="card__rating"
          ></span>
        </div>
        <p v-if="ratingText" class="card__rating-text">{{ ratingText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'column',
    },
    img: {
      type: String,
      default: 'http://via.placeholder.com/300',
    },
    label: {
      type: String,
      default: 'Card Label Lorem ipsum dolor sit amet',
    },
    title: {
      type: String,
      default: 'Card Title Lorem ipsum dolor sit amet',
    },
    description: {
      type: String,
      default:
        'Card Description Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ',
    },
    rating: {
      type: Number,
      default: 0,
    },
    ratingText: {
      type: String,
      default: '',
    },
  },
  computed: {
    computedRatingArray() {
      return Array.from({ length: 5 }).map((_, i) => {
        return i < this.rating
      })
    },
    isShowFooter() {
      return this.rating || this.ratingText
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &--row {
    max-width: 600px;
    display: flex;
    flex-direction: row;
  }
  &__thumbnail-wrapper {
    @at-root .card--row & {
      max-width: 33.33%;
    }
  }
  &__thumbnail {
  }
  &__content {
    @at-root .card--row & {
      max-width: 66.66%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  &__body {
    padding: 8px;
    border-top: 1px solid #ccc;
    @at-root .card--row & {
      border-top: 0;
    }
  }
  &__label {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @at-root .card--row & {
      display: none;
    }
  }
  &__title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }
  &__description {
    width: 100%;
    margin-top: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
  &__footer {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    border-top: 1px solid #ccc;
    @at-root .card--row & {
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-top: none;
    }
  }
  &__rating-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &__rating {
    background-color: #ccc;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    border-radius: 50%;
    &--active {
      background-color: #ff7b30;
    }
    &::last-child {
      margin-right: 0;
    }
  }
  &__rating-text {
    margin-top: 8px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @at-root .card--row & {
      margin-top: 0;
    }
  }
}
</style>
