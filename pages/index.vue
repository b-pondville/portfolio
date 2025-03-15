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
const animDuration = 300;

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
  const isMobile = window.innerWidth < 768;
});
</script>

<template>
  <main>
    <section id="hero">
      <h1 v-motion-slide-visible-once-bottom>
        {{ name }}<strong>{{ surname }}</strong>
      </h1>
      <p class="title" v-motion-slide-visible-once-bottom>
        Web & SaaS Developer - Freelancer
      </p>
    </section>

    <section id="about">
      <img src="~/public/pp.jpg" alt="" />
      <div class="highlight" v-motion-slide-visible-once-right>
        <h2>Shortcut</h2>
        <p>
          Hi, I'm Benjamin, a front-end developer specializing in Vue.js and
          Nuxt.js. Passionate about clean, maintainable code and intuitive user
          experiences, I focus on building high-performance web applications
          that seamlessly blend functionality and aesthetics.
        </p>
        <p>
          With a keen eye for detail and a strong problem-solving mindset, I
          thrive on crafting engaging interfaces, optimizing performance, and
          ensuring smooth user interactions. Beyond coding, I stay up to date
          with the latest web technologies to continuously refine my skills and
          deliver modern, efficient solutions.
        </p>
        <p>
          If you're looking for a dedicated front-end developer to enhance your
          team or project, let's connect!
        </p>
      </div>
    </section>

    <section id="education">
      <div class="content">
        <h2>Education</h2>
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
        <h2>Experience</h2>
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
      <h2 class="left">What for?</h2>
      <div class="content">
        <section
          v-for="(block, key, index) in skills"
          :class="key"
          v-motion-slide-visible-once-bottom
          :delay="animDelay"
          :duration="animDuration"
        >
          <div class="skill" v-for="(skill, key) in block">
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
      <h2 v-motion-slide-visible-once-bottom>Thank you for your time!</h2>
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
  gap: 0.5rem;
  background-color: $bkg-color;

  h1 {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .title {
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 1.2;
    font-weight: lighter;
    text-align: center;
  }

  @include breakpoint(tablet) {
    height: 50vh;
  }
}

#vertical-line {
  position: fixed;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: $primary-color;
  z-index: -1;

  @include breakpoint(tablet) {
    left: 50%;
  }

  @include breakpoint(mobile) {
    display: none;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 100px;

  img {
    max-width: 100%;
    justify-self: end;
  }

  @media screen and (max-width: 1024px) and (orientation: portrait) {
    height: auto;
  }

  @include breakpoint(tablet) {
    height: auto;
    grid-template-columns: 1fr;
    background-color: $bkg-color;

    img {
      max-width: 50%;
      height: auto;
      justify-self: center;
    }
  }

  @include breakpoint(mobile) {
    img {
      max-width: 80%;
      height: auto;
    }
  }

  .highlight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    justify-self: start;

    p + p {
      margin-top: 1.5rem;
    }

    @include breakpoint(tablet) {
      left: 0;
      max-width: 100%;
      height: auto;
      padding: 25px;
    }
  }
}

#education,
#experience {
  position: relative;
  margin-top: 100px;
  height: auto;

  .content {
    left: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: visible;
    width: 50%;

    @include breakpoint(tablet) {
      left: 50%;
    }

    @include breakpoint(mobile) {
      width: 100%;
      left: 0;
      padding: 0rem;
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
      padding: 0 25px;
      width: fit-content;
      text-align: right;

      @include breakpoint(mobile) {
        text-align: left;
        transform: translate(0) !important;
        padding: 0 25px;
      }
    }

    .right {
      padding: 0 25px;
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

  h2 {
    text-align: center;
    padding: 1rem;
    padding-top: 100px;
  }

  .content {
    display: grid;
    grid-template: auto / repeat(6, 1fr);
    gap: 1rem;
    padding: 2rem 5rem 0rem 5rem;

    @include breakpoint(tablet) {
      grid-template: auto / repeat(3, 1fr);
    }

    @include breakpoint(mobile) {
      padding: 25px;
    }

    section {
      display: grid;
      grid-template: subgrid / subgrid;
      background-color: #292929;
      border-radius: 25px;
      padding: 0.5rem;

      @include breakpoint(mobile) {
        padding: 1.5rem 0.5rem;
        gap: 2rem 1rem;
      }

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

        @include breakpoint(mobile) {
          padding: 0;

          img {
            max-width: 50px;
            max-height: 50px;
          }
        }
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
  padding: 25px;

  h2 {
    text-align: center;
    text-wrap: balance;
  }

  .talk {
    position: absolute;
    top: 130px;
    right: 55px;
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
    bottom: 75px;
    left: 65px;
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
