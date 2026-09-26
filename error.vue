<script setup>
import { Home } from "lucide-vue-next";

const props = defineProps({
  error: { type: Object, required: true },
});
const isNotFound = computed(() => props.error.statusCode === 404);

useHead(() => ({
  title: isNotFound.value
    ? "Page not found — Handwritten Symbols"
    : "Handwritten Symbols — Font Specimen",
  meta: [{ name: "robots", content: "noindex, follow" }],
}));

function goHome() {
  clearError({ redirect: "/" });
}
</script>

<template>
  <main class="not-found" aria-labelledby="not-found-title">
    <div class="not-found-petal petal-one" aria-hidden="true">✿</div>
    <div class="not-found-petal petal-two" aria-hidden="true">✽</div>
    <div class="not-found-card">
      <p class="eyebrow">A page gone wandering</p>
      <p class="not-found-code" aria-hidden="true">
        {{ error.statusCode || 404 }}
      </p>
      <h1 id="not-found-title">That page<br /><em>blossomed elsewhere.</em></h1>
      <p class="not-found-copy">
        The address may be misspelled, or the page may have moved. Let’s get you
        back to the specimen.
      </p>
      <div class="not-found-actions">
        <a class="button-link" href="/" @click.prevent="goHome"
          ><Home :size="16" /> Back to the specimen</a
        >
      </div>
    </div>
  </main>
</template>
