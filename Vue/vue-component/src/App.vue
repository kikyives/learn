<template>
  <div id="app">
    <my-head></my-head>
    <my-nav></my-nav>
    <transition>
      <router-view></router-view>
    </transition>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from './components/Header'
import myNav from './components/Nav'
import myFoot from './components/Footer'

export default {
  name: 'app',
  components: {
    myHead,
    myNav,
    myFoot
  }
}
</script>
