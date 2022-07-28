<template>
  <!-- Modal Structure -->
  <div id="sign-in-modal" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>{{ title }}</h4>
      <p>{{ message }}</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"
        >Agree</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    header: String,
  },
  data: () => ({
    // Parameters that change depending on the type of dialogue
    title: undefined,
    message: undefined, // Main text content
    okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
    cancelButton: "Go Back", // text for cancel button

    // Private variables
    resolvePromise: undefined,
    rejectPromise: undefined,
  }),
};
</script>