<script lang="ts">
  import { toggleMode } from 'mode-watcher';
  import Terminal from "lucide-svelte/icons/terminal";
  import * as Resizable from "$lib/components/ui/resizable";
  import * as Alert from "$lib/components/ui/alert";
</script>


<Resizable.PaneGroup
  direction="horizontal"
  class="min-h-screen w-screen border"
>
  <Resizable.Pane defaultSize={20} minSize={10} maxSize={20}>
    <div class="flex h-full items-center justify-center p-6">
      <button on:click={toggleMode}>Toggle Mode</button>
    </div>
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane defaultSize={40}>
    <div class="flex h-full items-center justify-center p-6">
      <Alert.Root>
        <Terminal class="h-4 w-4" />
        <Alert.Title>Coincite — Coming soon!</Alert.Title>
        <Alert.Description
          >Expect a universe of innovation, a galaxy of creativity, and maybe, just maybe, a little bit of space magic.</Alert.Description
        >
      </Alert.Root>
    </div>
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane defaultSize={40}>
    <div class="flex h-full items-center justify-center p-6">
      <button>Log in with MetaMask</button>
    </div>
  </Resizable.Pane>
</Resizable.PaneGroup>