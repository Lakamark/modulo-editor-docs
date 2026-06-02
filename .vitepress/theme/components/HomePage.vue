<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>ModuloEditor</h1>

    <p>
      A flexible and extensible Markdown editor built with TypeScript.
    </p>

    <div class="actions">
      <a href="/guide/introduction">
        Get Started
      </a>

      <a href="https://github.com/lakamark/modulo-editor">
        GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.actions a {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid var(--vp-c-divider);
}
</style>