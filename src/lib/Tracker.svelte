<script>
    let repo = '';
    function track() {
        // TODO
    }

    function untrack(repo) {
        // TODO
    }
</script>

<form
    on:submit|preventDefault={track}
    class="mx-auto min-w-[350px] max-w-[1100px] w-[50%] border border-gray-500 rounded my-4 px-6 py-4"
>
    <h1 class="text-center text-3xl m-4">GitHub tracker</h1>

    <input
        type="text"
        class="rounded px-4 py-2 border border-gray-300 w-full outline-none"
        placeholder="Enter the repository's URL"
        aria-label="Repository URL"
        bind:value={repo}
    />
    <button class="mt-2 border border-transparent bg-blue-500 text-white rounded px-4 py-2 w-full"
        >Track repository</button
    >

    <h2 class="mt-4 text-2xl">Tracked repositories</h2>
    <ul class="m-2 list-decimal">
        <!-- We'll use a loop to automatically add repositories here later on. -->
        <li class="py-1 flex items-center justify-between">
            <a class="text-gray-500 hover:underline" href="https://github.com/test/test">https://github.com/test/test</a
            >
            <button class="text-red-500 cursor-pointer" on:click={() => untrack('')}>Untrack</button>
        </li>
    </ul>
</form>
