<script setup>
import { useFlash } from '@/composables/useFlash';


let {flash} = useFlash();

</script>

<template>
  <div>
    <p>
      <button @click="flash('Profolio check','Many to go', 'info')">Click Me</button>
    </p>
  </div>
</template>
