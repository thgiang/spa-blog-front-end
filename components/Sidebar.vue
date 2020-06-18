<template>
  <div>
    <!--<a href="/" v-if="showingSmallLogo">-->
    <a href="/">
    <img src="~assets/images/small_logo.png" title="Small logo" alt="Small logo" class="small-logo"/>
    </a>
    <ul>
      <template v-for="(category, index) in this.$store.state.categories">
        <li v-bind:class="(index%3 === 2)?'no-border-right':''">
          <nuxt-link :to="'/category/'+category.id">
            <div class="category-icon">
              <svg class="bi bi-droplet-half" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                <path fill-rule="evenodd"
                      d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                <path d="M14 10a6 6 0 0 1-12 0s2.5 2.5 6.5.5S14 10 14 10z"/>
              </svg>
            </div>
            {{category.name}}
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        showingSmallLogo: false
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll (event) {
        this.showingSmallLogo = window.pageYOffset > 100;
      }
    }
  }
</script>
<style scoped>
  .small-logo {
    width: 60px;
    height: 60px;
    display: block;
    margin: 15px auto;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background: #FFF;
  }
  li {
    padding: 20px 5px;
    width: 120px;
    text-align: center;
    border-bottom: 1px solid #EEE;
    border-right: 1px solid #EEE;
  }

  li:first-child {
    border-top: 1px solid #EEE;
  }

  li a {
    color: gray;
  }
  li a:hover {
    color: #000;
  }

  .no-border-right {
    border-right: 0 !important;
  }

  @media (max-width: 768px) {
    li {
      display: inline-block;
      width: calc(100% / 3);
      padding: 0;
    }
    li:first-child {
      border-top: none;
    }
    .small-logo {
      display: none;
    }
  }
</style>
