<template>
  <div id="app">
    <nav class="nav">
      <router-link
        class="nav__link"
        v-for="item in navList"
        :key="item.id"
        :to="item.path"
      >
        {{ item.name }}
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      navList: [
        {
          id: 'home',
          path: '/',
          name: 'Home',
        },
        {
          id: 'card',
          path: '/card',
          name: 'Card',
        },
        {
          id: 'form',
          path: '/form',
          name: 'Form',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__link {
    padding: 10px 11px;
    color: #666;
    font-size: 14px;
  }

  .router-link-active {
    color: #ff7b30;
  }
}
</style>
