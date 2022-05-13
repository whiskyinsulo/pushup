<script>
    let username = '';
    async function submit() {
        // todo
    }
</script>

<form
    on:submit|preventDefault={submit}
    class="mx-auto min-w-[350px] max-w-[1100px] w-[50%] border border-gray-500 rounded my-4 px-6 py-4"
>
    <h1 class="text-center text-3xl m-4">Enter a username</h1>
    <p class="text-center text-xl m-4">Engter a username to use this tracker</p>
    <input
        type="text"
        class="rounded px-4 py-2 border border-gray-300 w-full outline-none"
        placeholder="Username"
        aria-label="Username"
        bind:value={username}
    />
    <button class="mt-4 border border-transparent bg-blue-500 text-white rounded px-4 py-2 w-full">Submit</button>
</form>
