<template>
  <v-app>
    <phonebook-page></phonebook-page>
  </v-app>
</template>

<script>
import PhonebookPage from '@/pages/PhonebookPage.vue';

export default {
  name: 'App',

  components: {
    PhonebookPage,
  },

  data: () => ({
    list: [],
  }),
};
</script>
