<template>
  <div class="form">
    <div class="form__textarea-wrapper">
      <textarea
        class="form__textarea"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :value="textAreaValue"
        @input="handleInput"
        :maxlength="MAX_LETTER_LENGTH"
      ></textarea>
      <span class="form__limit-number">{{ limitNumber }}</span>
    </div>
    <button v-if="!isDisabledSaveButton" class="form__submit">Save</button>
  </div>
</template>

<script>
export default {
  props: {
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '텍스트를 입력해주세요',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      MAX_LETTER_LENGTH: 20,
      textAreaValue: '',
      isDisabledSaveButton: true,
    }
  },
  created() {
    this.textAreaValue = this.text.slice(0, this.MAX_LETTER_LENGTH)
  },
  computed: {
    limitNumber() {
      return this.MAX_LETTER_LENGTH - this.textAreaValue.length < 0
        ? 0
        : this.MAX_LETTER_LENGTH - this.textAreaValue.length
    },
  },
  methods: {
    handleInput(e) {
      this.textAreaValue = e.target.value
      if (e.target.value === this.text) {
        this.isDisabledSaveButton = true
        return
      }
      this.isDisabledSaveButton = false
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__textarea-wrapper {
    position: relative;
    flex: 1;
  }
  &__textarea {
    width: 100%;
    height: 100%;
    padding: 8px;
    resize: none;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    &:focus {
      border-color: skyblue;
    }
    &[disabled] {
      background-color: #eee;
      color: rgb(255, 0, 0, 0.5);
    }
    &[readonly] {
      background-color: #ddd;
    }
  }
  &__limit-number {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: #ccc;
  }
  &__submit {
    align-self: stretch;
    color: skyblue;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 2px;
    &[disabled] {
      color: #ccc;
    }
  }
}
</style>
