<script setup>
import { useFlash } from '@/composables/useFlash';


let {flash} = useFlash();
</script>

<template>
  <main>
    <div>
      <p>
        <button @click="flash('Test','it works on About page!', 'success')">Click Me</button>
      </p>
    </div>
  </main>
</template>
