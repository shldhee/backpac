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
    <main class="main">
      <router-view />
    </main>
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

<style lang="scss">
#app {
  padding: 20px;
}
.nav {
  &__link {
    padding: 10px 11px;
    color: #666;
    font-size: 14px;
  }

  .router-link-exact-active {
    color: #ff7b30;
  }
}

.main {
  padding: 16px;
}
</style>
