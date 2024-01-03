<script lang="ts">
  import "$lib/global.css";
  import { formMessage } from '../store.js';

  // Function to update the formMessage store to 
  // 
  /**
   * Updates the form message with the provided message.
   * 
   * @param {string} message - The new message to be displayed in the form.
   */
  function updateFormMessage(message: string) {
    formMessage.update(() => message);
  }

</script> 

<p class="mb-8"></p>
<div class="grid lg:grid-cols-2 grid-cols-1 gap-8 text-gray-800">
  <div class="sm:text-xl text-xl space-y-6">
    <p>It is my mission to provide a prompt, and diligent service for your next project.</p>
    <p>Lets Chat!</p>
    <p>Feel free to pre-fill the form with an option below. "<span class="italic">I'd like to discuss...</span>"</p>
    <div class=" text-lg space-y-3 items-start ml-2">
      <button class="border-1 border-gray-800/40 bg-lime-100 hover:bg-lime-200/50 transition duration-300 rounded-xl px-4 py-2" 
      on:click="{() => updateFormMessage("Please give me a call-back.")}">A call-back</button>
      <button class="border-1 border-gray-800/40 bg-lime-100 hover:bg-lime-200/50 transition duration-300 rounded-xl px-4 py-2" 
      on:click="{() => updateFormMessage("I'd like to discuss a quote.")}">A quote</button>
      <button class="border-1 border-gray-800/40 bg-lime-100 hover:bg-lime-200/50 transition duration-300 rounded-xl px-4 py-2" 
      on:click="{() => updateFormMessage("I'd like to discuss a software project for my industry/domain.")}">Custom software for my industry</button>
      <button class="border-1 border-gray-800/40 bg-lime-100 hover:bg-lime-200/50 transition duration-300 rounded-xl px-4 py-2" 
      on:click="{() => updateFormMessage("I'm looking for advice on: ...")}">Some advice</button>
      <button class="border-1 border-gray-800/40 bg-lime-100 hover:bg-lime-200/50 transition duration-300 rounded-xl px-4 py-2" 
      on:click="{() => updateFormMessage("I'd like to discuss a potential collaboration.")}">Idea or collaboration</button>
    </div>
    <p>Current Respone Time: <br><span class="text-xl font-bold font-mono text-lime-900/70 italic">Usually same day.</span></p>
  </div>

  <div>
    <slot></slot>
  </div>
</div>

<style lang="postcss">
  
</style>