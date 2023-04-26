<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import PostIndex from './PostIndex.vue';

</script>

<template>
    <Head title="Post" />

    <AuthenticatedLayout>
        <template #header>
            <!-- <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Post</h2> -->
        </template>

        <PostIndex></PostIndex>
    </AuthenticatedLayout>
</template>
