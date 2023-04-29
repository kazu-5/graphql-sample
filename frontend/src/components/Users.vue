<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { gql } from '@apollo/client/core';

export default {
  name: 'UserList', // Users -> UserList
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const { data } = await this.$apollo.query({
      query: gql`
        query {
          users {
            id
            name
          }
        }
      `,
    });
    this.users = data.users;
  },
};
</script>
