<template lang="pug">
    router-link(
      tag="li"
      class="navbar__item"
      active-class="navbar__item--active"
      v-bind:exact="item.href === '/'"
      v-bind:to="item.href"
    )
      a(
        v-if="!item.icon" 
        v-html="item.text"
      )
      v-icon(v-else) {{ item.text }}
      slot
</template>

<script>
  import Itemable from '../../mixins/itemable'

  export default {
    name: 'navbar-item',

    mixins: [Itemable]
  }
</script>
