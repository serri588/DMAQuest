<template>
  <div id="upgrades">
    <resources :resources="game.resources"></resources>
    <div id="purchasable" class="buttonContainer">
        <button v-for="item in game.upgrades" v-if="item.flags.visible" class="button" @click="onClick(item)" v-bind:class="{disabled: !item.flags.available, completed: item.value}">
            {{ item.name }}
        </button>
    </div>
  </div>
</template>

<script>

// import dependency
import Vue from 'vue'
import Component from 'vue-class-component'
import Helpers from '../../helpers'
import Resources from '../Resources'

// decorat vue class
@Component({
    props: ['game'],
    components: { Resources }
})
export default class Upgrade extends Vue {
    helpers = Helpers

    onClick = function(item){
        if(item.flags.available && !item.flags.completed){
            this.$emit('clickedUpgrade', item)
        }
    }

    resourceCost = function(item) {
        
    }
}
</script>

<style scoped>

#resources {
    border-bottom: 1px groove black;
    font-weight: bold;
}

.noBorder {
    border: none !important;
}

</style>