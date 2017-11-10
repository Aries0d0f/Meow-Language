<template>
  <div>
    <input type="text" v-model="normal" :value="normal">
    <input type="text" v-model="meow" :value="meow">
  </div>
</template>

<script>
export default {
  data () {
    return {
      normal: '',
      meow: '',
      key: ['嗚', '喵']
    }
  },
  methods: {
    normal2meow: function () {
      var meow = this.normal.split('').map(e => {
        return e.charCodeAt(0).toString(2).split('').map(n => {
          return this.key[n]
        }).join('')
      })
      this.meow = meow.join(' ')
    },
    meow2normal: function () {
      this.normal = this.meow.split(' ').map(e => {
        let tmp = e.split('').map(n => {
          return '嗚喵'.indexOf(n)
        }).join('')
        return String.fromCharCode(parseInt(tmp, 2))
      }).join('')
    }
  },
  watch: {
    normal: function () {
      this.normal2meow()
    },
    meow: function () {
      this.meow2normal()
    }
  }
}
</script>
