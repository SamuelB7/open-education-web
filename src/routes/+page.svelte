<script lang="ts">
    import { onMount } from "svelte";

    let hello = "";

    onMount(async () => {
        const res = await fetch("http://localhost:3333/hello-world");
        hello = await res.text();
        console.log("RESULT", hello);
    });

    export { hello };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<p>{hello}</p>
