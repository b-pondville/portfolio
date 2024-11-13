<script setup>
definePageMeta({
  innerNavLinks: [
    { name: "Hello", href: "#hero", active: ref(true) },
    { name: "About me", href: "#about", active: ref(false) },
    { name: "Education", href: "#education", active: ref(false) },
    { name: "Experience", href: "#experience", active: ref(false) },
    { name: "Skills", href: "#skills", active: ref(false) },
    { name: "Thank you", href: "#thankyou", active: ref(false) },
  ],
});

import cvData from "~/public/data/cvData.json";

const { name, surname, education, experience, skills } = cvData;

const indexIsPair = (index) => index % 2 !== 0;

//Animation
const animDelay = 200;
const animDuration = 500;

const pageBottomReached = ref(false);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const pageHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const bottomOfPage = pageHeight - windowHeight;

  if (scrollPosition >= bottomOfPage - 10) {
    pageBottomReached.value = true;
  } else {
    pageBottomReached.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<template>
  <main>
    <section id="hero">
      <h1 v-motion-slide-visible-bottom>
        {{ name }}<strong>{{ surname }}</strong>
      </h1>
    </section>

    <section id="about">
      <div class="highlight">
        <h2>Shortcut</h2>
        <p>
          As a passionate Frontend Developer with 4 years of experience, I
          specialize in creating intuitive and responsive user interfaces using
          modern web technologies like HTML, CSS and JavaScript. My journey in
          frontend development has sharpened my skills in building seamless user
          experiences that are both visually appealing and functionally robust.
        </p>

        <p>
          Driven by a desire to broaden my technical horizons and tackle more
          complex challenges, I'm now transitioning into a Fullstack Developer
          role. I'm currently expanding my knowledge of backend technologies. My
          goal is to master the full spectrum of web development, enabling me to
          build and maintain entire applications from start to finish.
        </p>
        <p>
          I'm excited to apply my growing skill set in new and innovative
          projects, and I'm always eager to connect with like-minded
          professionals who share a passion for technology and continuous
          learning.
        </p>
      </div>
    </section>

    <section id="education">
      <div class="content">
        <h2 class="left">Education</h2>
        <div
          v-for="(school, index) in education"
          :class="[indexIsPair(index) ? 'left' : 'right']"
          v-motion
          :initial="{
            opacity: 0,
            x: indexIsPair(index) ? '-120%' : '20%',
          }"
          :visible-once="{ opacity: 1, x: indexIsPair(index) ? '-100%' : '0%' }"
          :duration="animDuration"
          :delay="animDelay"
        >
          <p class="date">{{ school.start + " - " + school.end }}</p>
          <p class="txt-bold">
            {{ school.program + " / " + school.institution }}
          </p>
          <p>{{ school.degree }}</p>
        </div>
      </div>
    </section>

    <section id="experience">
      <div class="content">
        <h2 class="left">Experience</h2>
        <div
          v-for="(job, index) in experience"
          :class="[indexIsPair(index) ? 'left' : 'right']"
          v-motion
          :initial="{
            opacity: 0,
            x: indexIsPair(index) ? '-120%' : '20%',
          }"
          :visible-once="{ opacity: 1, x: indexIsPair(index) ? '-100%' : '0%' }"
          :duration="animDuration"
          :delay="animDelay"
        >
          <p class="date">{{ job.dates.start + " - " + job.dates.end }}</p>
          <p class="txt-bold">
            {{ job.position + " / " + job.company }}
          </p>
          <p class="txt-bold">Responsibilities</p>
          <ul class="responsibilities">
            <li v-for="line in job.responsibilities">
              {{ line }}
            </li>
          </ul>

          <p class="txt-bold">Technologies</p>
          <ul>
            <li v-for="tech in job.technologies">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="skills">
      <div class="content">
        <section
          v-for="(block, key, index) in skills"
          :class="key"
          v-motion-slide-visible-once-bottom
          :delay="animDelay"
          :duration="animDuration"
        >
          <div
            class="skill"
            v-for="(skill, key) in block"
            v-motion-pop-visible-once
            :delay="animDelay"
            :duration="animDuration"
          >
            <NuxtImg
              :src="skill.image"
              :alt="skill.name"
              width="70"
              height="70"
            />
            <p>{{ skill.title }}</p>
          </div>
        </section>
      </div>
    </section>

    <section id="thankyou">
      <h2 v-motion-slide-visible-bottom>Thank you for your time!</h2>
      <div
        class="talk"
        v-show="pageBottomReached"
        v-motion-slide-visible-bottom
        :delay="animDelay"
        :duration="animDuration"
      >
        <p>Any question?</p>
        <NuxtImg
          class="arrow"
          src="/icons/icon-arrow.svg"
          alt="Arrow Icon"
          width="100"
          height="100"
        />
      </div>

      <div
        class="share"
        v-show="pageBottomReached"
        v-motion-slide-visible-top
        :duration="animDuration"
        :delay="animDelay"
      >
        <NuxtImg
          class="arrow"
          src="/icons/icon-arrow.svg"
          alt="Arrow Icon"
          width="100"
          height="100"
        />
        <p>Passing this CV along!</p>
      </div>
    </section>
    <div id="vertical-line"></div>
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
  background-color: $bkg-color;
}

#vertical-line {
  position: fixed;
  top: 0;
  left: 60%;
  width: 2px;
  height: 100%;
  background-color: $primary-color;
  z-index: -1;

  @include breakpoint(tablet) {
    left: 50%;
  }
}

#about,
#formation,
#experience,
#stack,
#thankyou {
  position: relative;
}

#about {
  height: 100vh;
  overflow: scroll;

  @include breakpoint(tablet) {
    height: auto;
  }

  .highlight {
    position: relative;
    top: 0;
    left: 60%;
    max-width: calc(30% - 6rem);
    height: calc(100% - 6rem);
    padding: 3rem;
    background-color: $primary-color;

    display: flex;
    flex-direction: column;
    justify-content: center;

    p + p {
      margin-top: 1.5rem;
    }

    @include breakpoint(tablet) {
      left: 0;
      max-width: 100%;
      height: auto;
      padding: 3rem 5rem;
    }
  }
}

#education,
#experience {
  position: relative;
  margin-top: 100px;
  height: auto;

  .content {
    left: 60%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: visible;
    width: 40%;

    @include breakpoint(tablet) {
      left: 50%;
    }

    h2 {
      background-color: $primary-color;
      width: fit-content;
      padding: 15px 25px;
    }

    .date {
      font-weight: bold;
      color: $primary-color;
    }

    .left {
      transform: translateX(-100%);
      padding-right: 25px;
      width: fit-content;
      text-align: right;
    }

    .right {
      padding-left: 25px;
      width: fit-content;
    }
  }
}

#education {
  p {
    margin: 0.5rem 0;
  }
}

#experience {
  .txt-bold {
    margin: 1rem 0 0 0;
  }
}

#skills {
  background-color: $bkg-color;

  .content {
    display: grid;
    grid-template: auto / repeat(6, 1fr);
    gap: 1rem;
    padding: 5rem;

    @include breakpoint(tablet) {
      grid-template: auto / repeat(3, 1fr);
    }

    section {
      display: grid;
      grid-template: subgrid / subgrid;
      background-color: #292929;
      border-radius: 25px;
      padding: 0.5rem;

      &.front {
        grid-column: 1 / 4;
        grid-row: 1 / 4;

        @include breakpoint(tablet) {
          grid-column: 1 / 4;
          grid-row: 1 / 4;
        }
      }

      &.devtools {
        grid-column: 5 / 7;
        grid-row: 1 / 2;

        @include breakpoint(tablet) {
          grid-column: 2 / 4;
          grid-row: 4 / 5;
        }
      }

      &.package {
        grid-column: 4 / 5;
        grid-row: 1 / 2;

        @include breakpoint(tablet) {
          grid-column: 1 / 2;
          grid-row: 4 / 5;
        }
      }

      &.back {
        grid-column: 4 / 6;
        grid-row: 3 / 4;

        @include breakpoint(tablet) {
          grid-column: 1 / 3;
          grid-row: 6 / 7;
        }
      }

      &.database {
        grid-column: 6 / 7;
        grid-row: 3 / 4;

        @include breakpoint(tablet) {
          grid-column: 3 / 4;
          grid-row: 6 / 7;
        }
      }

      &.versioning {
        grid-column: 4 / 7;
        grid-row: 2 / 3;

        @include breakpoint(tablet) {
          grid-column: 1 / 4;
          grid-row: 5 / 6;
        }
      }

      &.soft {
        grid-column: 4 / 7;
        grid-row: 4 / 6;

        @include breakpoint(tablet) {
          grid-column: 1 / 4;
          grid-row: 7 / 9;
        }
      }

      &.project {
        grid-column: 1 / 3;
        grid-row: 4 / 5;

        @include breakpoint(tablet) {
          grid-column: 1 / 3;
          grid-row: 9 / 10;
        }
      }

      &.design {
        grid-column: 3 / 4;
        grid-row: 4 / 5;

        @include breakpoint(tablet) {
          grid-column: 3 / 4;
          grid-row: 9 / 10;
        }
      }

      &.designtools {
        grid-column: 1 / 4;
        grid-row: 5 / 7;

        @include breakpoint(tablet) {
          grid-column: 1 / 4;
          grid-row: 10 / 12;
        }
      }

      &.app {
        grid-column: 4 / 6;
        grid-row: 6 / 7;

        @include breakpoint(tablet) {
          grid-column: 2 / 4;
          grid-row: 12 / 13;
        }
      }

      &.learning {
        grid-column: 6 / 7;
        grid-row: 6 / 7;

        @include breakpoint(tablet) {
          grid-column: 1 / 2;
          grid-row: 12 / 13;
        }
      }

      .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        text-align: center;
        gap: 1rem;
      }
    }
  }
}

#thankyou {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $bkg-color;

  .talk {
    position: absolute;
    top: 5rem;
    right: 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .arrow {
      position: relative;
      top: -25px;
      left: 10px;
    }
  }

  .share {
    position: absolute;
    bottom: 4.5rem;
    left: 3.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .arrow {
      position: relative;
      top: 28px;
      left: -10px;
      transform: rotate(180deg);
    }
  }
}
</style>
