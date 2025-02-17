import { c as cvData, _ as _sfc_main$1 } from './cvData-DdprCfnQ.mjs';
import { ref, resolveDirective, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-DyoJ9r-N.mjs';
import '@unhead/shared';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';

const animDelay = 200;
const animDuration = 500;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { name, surname, education, experience, skills } = cvData;
    const indexIsPair = (index2) => index2 % 2 !== 0;
    const pageBottomReached = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _directive_motion_slide_visible_bottom = resolveDirective("motion-slide-visible-bottom");
      const _directive_motion = resolveDirective("motion");
      const _directive_motion_pop_visible_once = resolveDirective("motion-pop-visible-once");
      const _directive_motion_slide_visible_once_bottom = resolveDirective("motion-slide-visible-once-bottom");
      const _directive_motion_slide_visible_top = resolveDirective("motion-slide-visible-top");
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-449b511d><section id="hero" data-v-449b511d><h1${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))} data-v-449b511d>${ssrInterpolate(unref(name))}<strong data-v-449b511d>${ssrInterpolate(unref(surname))}</strong></h1></section><section id="about" data-v-449b511d><div class="highlight" data-v-449b511d><h2 data-v-449b511d>Shortcut</h2><p data-v-449b511d> As a passionate Frontend Developer with 4 years of experience, I specialize in creating intuitive and responsive user interfaces using modern web technologies like HTML, CSS and JavaScript. My journey in frontend development has sharpened my skills in building seamless user experiences that are both visually appealing and functionally robust. </p><p data-v-449b511d> Driven by a desire to broaden my technical horizons and tackle more complex challenges, I&#39;m now transitioning into a Fullstack Developer role. I&#39;m currently expanding my knowledge of backend technologies. My goal is to master the full spectrum of web development, enabling me to build and maintain entire applications from start to finish. </p><p data-v-449b511d> I&#39;m excited to apply my growing skill set in new and innovative projects, and I&#39;m always eager to connect with like-minded professionals who share a passion for technology and continuous learning. </p></div></section><section id="education" data-v-449b511d><div class="content" data-v-449b511d><h2 class="left" data-v-449b511d>Education</h2><!--[-->`);
      ssrRenderList(unref(education), (school, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [indexIsPair(index2) ? "left" : "right"],
          initial: {
            opacity: 0,
            x: indexIsPair(index2) ? "-120%" : "20%"
          },
          "visible-once": { opacity: 1, x: indexIsPair(index2) ? "-100%" : "0%" },
          duration: animDuration,
          delay: animDelay
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-449b511d><p class="date" data-v-449b511d>${ssrInterpolate(school.start + " - " + school.end)}</p><p class="txt-bold" data-v-449b511d>${ssrInterpolate(school.program + " / " + school.institution)}</p><p data-v-449b511d>${ssrInterpolate(school.degree)}</p></div>`);
      });
      _push(`<!--]--></div></section><section id="experience" data-v-449b511d><div class="content" data-v-449b511d><h2 class="left" data-v-449b511d>Experience</h2><!--[-->`);
      ssrRenderList(unref(experience), (job, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [indexIsPair(index2) ? "left" : "right"],
          initial: {
            opacity: 0,
            x: indexIsPair(index2) ? "-120%" : "20%"
          },
          "visible-once": { opacity: 1, x: indexIsPair(index2) ? "-100%" : "0%" },
          duration: animDuration,
          delay: animDelay
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-449b511d><p class="date" data-v-449b511d>${ssrInterpolate(job.dates.start + " - " + job.dates.end)}</p><p class="txt-bold" data-v-449b511d>${ssrInterpolate(job.position + " / " + job.company)}</p><p class="txt-bold" data-v-449b511d>Responsibilities</p><ul class="responsibilities" data-v-449b511d><!--[-->`);
        ssrRenderList(job.responsibilities, (line) => {
          _push(`<li data-v-449b511d>${ssrInterpolate(line)}</li>`);
        });
        _push(`<!--]--></ul><p class="txt-bold" data-v-449b511d>Technologies</p><ul data-v-449b511d><!--[-->`);
        ssrRenderList(job.technologies, (tech) => {
          _push(`<li data-v-449b511d>${ssrInterpolate(tech)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></section><section id="skills" data-v-449b511d><div class="content" data-v-449b511d><!--[-->`);
      ssrRenderList(unref(skills), (block, key, index2) => {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: key,
          delay: animDelay,
          duration: animDuration
        }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_once_bottom)))} data-v-449b511d><!--[-->`);
        ssrRenderList(block, (skill, key2) => {
          _push(`<div${ssrRenderAttrs(mergeProps({
            class: "skill",
            delay: animDelay,
            duration: animDuration
          }, ssrGetDirectiveProps(_ctx, _directive_motion_pop_visible_once)))} data-v-449b511d>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: skill.image,
            alt: skill.name,
            width: "70",
            height: "70"
          }, null, _parent));
          _push(`<p data-v-449b511d>${ssrInterpolate(skill.title)}</p></div>`);
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]--></div></section><section id="thankyou" data-v-449b511d><h2${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom))} data-v-449b511d>Thank you for your time!</h2><div${ssrRenderAttrs(mergeProps({
        class: "talk",
        style: unref(pageBottomReached) ? null : { display: "none" },
        delay: animDelay,
        duration: animDuration
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_bottom)))} data-v-449b511d><p data-v-449b511d>Any question?</p>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "arrow",
        src: "/icons/icon-arrow.svg",
        alt: "Arrow Icon",
        width: "100",
        height: "100"
      }, null, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({
        class: "share",
        style: unref(pageBottomReached) ? null : { display: "none" },
        duration: animDuration,
        delay: animDelay
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_top)))} data-v-449b511d>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "arrow",
        src: "/icons/icon-arrow.svg",
        alt: "Arrow Icon",
        width: "100",
        height: "100"
      }, null, _parent));
      _push(`<p data-v-449b511d>Passing this CV along!</p></div></section><div id="vertical-line" data-v-449b511d></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-449b511d"]]);

export { index as default };
//# sourceMappingURL=index-DOraSrAK.mjs.map
