<script setup>
//IMPORTS

// Fonction pour basculer la langue
const lang = ref("fr");

provide("lang", lang);
const toggleLang = () => {
  const currentLang = lang.value;
  const newLang = currentLang === "fr" ? "en" : "fr";
  lang.value = newLang;
};

const { share, isSupported: isShareSupported } = useShare();

import cvData from "~/public/data/cvData.json";

// Sélection des données réactives
const currentCvData = computed(() => cvData[lang.value] || cvData.en);

const { contact } = cvData.en;

//Sharing setup
const url = useRequestURL(); //get url
const currentUrl = url.href; //define href
const { copy, isSupported: isClipboardSupported } = useClipboard({
  currentUrl,
});

const copyTxt = computed(() =>
  lang.value === "en" ? "Copy link" : "Copier le lien"
);

const copyToClipboard = () => {
  copy(currentUrl); //copy to clipboard
  copyTxt.value = lang === "en" ? "Link copied!" : "Lien copié!"; //change the text in the button
  setTimeout(() => {
    copyTxt.value = lang === "en" ? "Copy link" : "Copier le lien";
  }, 2000);
};

function startShare() {
  share({
    title: "Check out this profile!",
    text: "I think you might be interested in Benjamin's skills.",
    url: currentUrl,
  });
}

let showContactInfo = ref(false);
let showShareOptions = ref(false);

// Fonction générique pour gérer l'ajout et la suppression du listener de scroll
const handleScrollClose = (stateRef) => {
  const windowScrollY = window.scrollY;

  const scrollHandler = () => {
    if (
      window.scrollY >= windowScrollY + 100 ||
      window.scrollY <= windowScrollY - 100
    ) {
      stateRef.value = false;
      window.removeEventListener("scroll", scrollHandler); // Supprime le listener après exécution
    }
  };

  // Ajoute le listener si l'état est vrai (affiché)
  if (stateRef.value) {
    window.addEventListener("scroll", scrollHandler);
  }
};

// Fonction pour basculer les informations de contact
const toggleContactInfo = () => {
  showContactInfo.value = !showContactInfo.value;
  handleScrollClose(showContactInfo);
};

// Fonction pour basculer les options de partage
const toggleShareOptions = () => {
  showShareOptions.value = !showShareOptions.value;
  handleScrollClose(showShareOptions);
};

// Fonction pour télécharger le CV
const downloadPdf = () => {
  window.open("/cv.pdf", "_blank");
};

// Fonction pour que si l'utilisateur est bientôt en bas de page scroll jusqu'au bas de page
if (import.meta.env.SSR === false) {
  let lastScrollPosition = 0;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    window.addEventListener("scroll", () => {
      const currentScrollPosition = window.scrollY;
      if (
        currentScrollPosition > lastScrollPosition && // Only trigger if scrolling down
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
      ) {
        scrollToBottom();
      }
      lastScrollPosition = currentScrollPosition;
    });
  }
}

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div id="layout">
    <button id="btn-contact" @click="toggleContactInfo">
      <NuxtImg src="icons/icon-contact.svg" />
    </button>
    <div v-show="showContactInfo" class="contact-infos">
      <BtnButtonRed
        v-motion-slide-visible-right
        :btnLink="'tel:' + contact.phone"
        :btnPicto="'/icons/icon-call.svg'"
        :btnText="lang === 'en' ? 'Call me' : 'Appelez-moi'"
        :reversePicto="true"
      />
      <BtnButtonRed
        v-motion-slide-visible-right
        :btnLink="'mailto:' + contact.email"
        :btnPicto="'/icons/icon-mail.svg'"
        :btnText="lang === 'en' ? 'Email me' : 'Email'"
        :reversePicto="true"
      />
    </div>

    <button id="btn-share" @click="toggleShareOptions">
      <NuxtImg src="icons/icon-export.svg" />
    </button>
    <div v-show="showShareOptions" class="share-options">
      <!-- <BtnButtonRed
        v-motion-slide-visible-left
        :btnPicto="'/icons/icon-download.svg'"
        :btnText="'Download'"
        @click.prevent="downloadPdf"
      /> -->

      <BtnButtonRed
        v-motion-slide-visible-left
        v-if="isClipboardSupported"
        @click.prevent="copyToClipboard"
        :btnPicto="'/icons/icon-copy.svg'"
        :btnText="copyTxt"
      />

      <BtnButtonRed
        v-motion-slide-visible-left
        v-if="isShareSupported"
        @click.prevent="startShare"
        :btnPicto="'/icons/icon-export.svg'"
        :btnText="lang === 'en' ? 'Share' : 'Partager'"
      />
    </div>

    <button id="btn-lang" @click="toggleLang">
      <p>
        {{ lang === "fr" ? "EN" : "FR" }}
      </p>
    </button>

    <LayoutHeaderNavSquares />
  </div>

  <slot />
</template>

<style lang="scss" scoped>
#layout {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;
}

#btn-contact {
  position: absolute;
  top: 1.5rem;
  right: 1rem;

  + .contact-infos {
    margin-top: 0.5rem;
    position: absolute;
    top: 1rem;
    right: 4rem;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
    flex-wrap: wrap;
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
    flex-wrap: wrap;
  }
}

#btn-lang {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 1;
  color: white;
}

// Expand button styles
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  img {
    width: 100%;
    min-width: 30px;
    max-height: 25px;
    height: auto;
  }
}
</style>
