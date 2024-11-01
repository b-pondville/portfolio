<script setup>
//IMPORTS
const { share, isSupported: isShareSupported } = useShare();

//Sharing setup
const url = useRequestURL(); //get url
const currentUrl = url.href; //define href
const { copy, isSupported: isClipboardSupported } = useClipboard({
  currentUrl,
});

let copyTxt = ref("Copy link"); //declare the copy text in the button

const copyToClipboard = () => {
  copy(currentUrl); //copy to clipboard
  copyTxt.value = "Copied!";
  setTimeout(() => {
    copyTxt.value = "Copy link";
  }, 2000);
};

function startShare() {
  share({
    title: "Look at this awesome website!",
    text: "It is so cool!",
    url: currentUrl,
  });
}

let showContactInfo = ref(false);
let showShareOptions = ref(false);
</script>

<template>
  <main>
    <div id="hero">
      <h1>Benjamin<strong>Pondville</strong></h1>
      <button id="btn-contact" @click="showContactInfo = !showContactInfo">
        <NuxtImg src="icons/icon-contact.svg" />
      </button>
      <div v-show="showContactInfo" class="contact-infos">
        <BtnButtonRed
          :btnLink="'/'"
          :btnPicto="'/icons/icon-call.svg'"
          :btnText="'Appeler'"
          :reversePicto="true"
        />
        <BtnButtonRed
          :btnLink="'/'"
          :btnPicto="'/icons/icon-mail.svg'"
          :btnText="'Envoyer un mail'"
          :reversePicto="true"
        />
      </div>

      <button id="btn-share" @click="showShareOptions = !showShareOptions">
        <NuxtImg src="icons/icon-export.svg" />
      </button>
      <div v-show="showShareOptions" class="share-options">
        <BtnButtonRed
          :btnLink="'/'"
          :btnPicto="'/icons/icon-download.svg'"
          :btnText="'Download'"
        />

        <BtnButtonRed
          :btnLink="'/'"
          :btnPicto="'/icons/icon-print.svg'"
          :btnText="'Print'"
        />

        <BtnButtonRed
          v-if="isClipboardSupported"
          @click.prevent="copyToClipboard"
          :btnPicto="'/icons/icon-copy.svg'"
          :btnText="copyTxt"
        />

        <BtnButtonRed
          v-if="isShareSupported"
          @click.prevent="startShare"
          :btnPicto="'/icons/icon-export.svg'"
          :btnText="'Share'"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;

  #btn-contact {
    position: absolute;
    top: 1rem;
    right: 1rem;

    + .contact-infos {
      margin-top: 0.5rem;
      position: absolute;
      top: 3rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.5rem;
    }
  }

  #btn-share {
    position: absolute;
    bottom: 1rem;
    left: 1rem;

    + .share-options {
      margin-top: 0.5rem;
      position: absolute;
      bottom: 1rem;
      left: 4rem;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    min-width: 30px;
    max-height: 25px;
    height: auto;
  }
}
</style>
