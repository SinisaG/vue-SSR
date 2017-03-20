<template>
  <section class="container">
    <img :src="$store.state.user.avatar_url" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ $store.state.user.login }}
    </h1>
    <h3>
      {{ $store.state.user.name }}
    </h3>
    <h5>
      {{ $store.state.user.company }}
    </h5>
    <div class="text-center">
      <a :href="$store.state.user.html_url">
        Visit
      </a>
    </div>
  </section>
</template>
<script>
  import axios from 'axios'

  export default {
    fetch ({ store, params }) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.github.com/users/${params.name}`)
          .then((res) => {
            store.commit('setUser', res.data)
            resolve(res.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    head () {
      return {
        meta: [
          { title: `${this.$store.state.user.login} | Profile` },
          {
            hid: 'description',
            name: 'description',
            content: `${this.$store.state.user.login} is a user on github.`
          },
          {
            name: 'description',
            content: `${this.$store.state.user.login} is a user on github.`
          },
          {
            name: 'og:description',
            content: `${this.$store.state.user.login} is a user on github.`
          },
          {
            name: 'og:title',
            content: `${this.$store.state.user.login} | Profile`
          },
          {
            name: 'og:image',
            content: this.$store.state.user.avatar_url
          }
        ]
      }
    }
  }
</script>

<style scoped>
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>
