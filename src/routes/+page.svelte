<script lang="ts">
  import Terminal from "lucide-svelte/icons/terminal";
  import * as Alert from "$lib/components/ui/alert";
</script>

<section>
  <div class="container h-screen">
    <div class="flex h-full items-center justify-center">
      <div class="block">
        <Alert.Root>
          <Terminal class="h-4 w-4" />
          <Alert.Title>Coincite — Coming soon!</Alert.Title>
          <Alert.Description
            >Expect a universe of innovation, a galaxy of creativity, and maybe, just maybe, a little bit of space magic.</Alert.Description
          >
        </Alert.Root>
      </div>
    </div>
  </div>
</section>