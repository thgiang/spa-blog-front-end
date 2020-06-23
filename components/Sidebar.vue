<template>
  <div>
    <!--<a href="/" v-if="showingSmallLogo">-->
    <nuxt-link to="/">
      <img src="~assets/images/small_logo.png" title="Small logo" alt="Small logo" class="small-logo"/>
    </nuxt-link>
    <ul v-if="this.$store.state.auth.user.role === 'admin' || this.$store.state.auth.user.role === 'writer'" class="manager-menu">
      <li v-if="this.$store.state.auth.user.role === 'admin'">
        <span class="admin-protect-icon">
          Admin
        </span>
        <nuxt-link to="/user-manager">
          <div class="category-icon">
            <svg class="bi bi-people-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </div>
          QL thành viên
        </nuxt-link>
      </li>
      <li class="wtf-mobile-issue" v-if="this.$store.state.auth.user.role === 'admin'">
        <span class="admin-protect-icon">
          Admin
        </span>
        <nuxt-link to="/comment-manager">
          <div class="category-icon">
            <svg class="bi bi-chat-dots-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
          </div>
          QL comment
        </nuxt-link>
      </li>
      <li class="no-border-right">
        <span class="admin-protect-icon">
          Writer
        </span>
        <nuxt-link to="/blog-manager/create">
          <div class="category-icon">
            <svg class="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </div>
          Viết bài mới
        </nuxt-link>
      </li>
    </ul>

    <ul>
      <template v-for="(category, index) in this.$store.state.categories">
        <li v-bind:class="(index%3 === 2)?'no-border-right':''">
          <nuxt-link :to="{name: 'category-id', params: {id: category.id}}"
                     :class="{'nuxt-link-exact-active active-link': isTabActive(category.id) }">
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
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      isTabActive(category_id) {
        if (this.$route.name === 'blog-id' && this.$store.state.blog.blog.cat_id === category_id) {
          return true;
        } else if (this.$route.name === 'category-id' && this.$route.params.id === category_id) {
          return true;
        }
        return false;
      },
      handleScroll(event) {
        this.showingSmallLogo = window.pageYOffset > 100;
      }
    }
  }
</script>
<style scoped>
  .manager-menu li {
    position: relative;
  }
  .manager-menu .admin-protect-icon {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 10px;
    text-transform: uppercase;
    background: #007339;
    padding: 1px 3px;
    color: #FFF;
    border-radius: 1px;
  }
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
    .wtf-mobile-issue {
      margin-left: -5px;
      margin-right: -5px;
    }
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
