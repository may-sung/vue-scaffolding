<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="username">id: </label>
            <input
                id="username"
                v-model="username"
                type="text"
            >
        </div>
        <div>
            <label for="password">pw: </label>
            <input
                id="password"
                v-model="password"
                type="text"
            >
        </div>
        <div>
            <label for="nickname">nickname: </label>
            <input
                id="nickname"
                v-model="nickname"
                type="text"
            >
        </div>
        <button type="submit">
            login
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            nickname: '',
        };
    },
    methods: {
        submitForm() {
            console.log('폼 제출');
        },
    },
};
</script>

<style>

</style>
