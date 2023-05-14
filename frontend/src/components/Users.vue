<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  name: "UserList",
  setup() {
    const users = ref([]);

    const { result } = useQuery(gql`
      query Users {
        user {
          id
          name
          email
        }
      }
    `);

    watch(result, (newValue) => {
      if (newValue && newValue.data) {
        users.value = newValue.data.users;
      }
    });

    return { users };
  },
};
</script>
