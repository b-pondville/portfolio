import { u as useRequestEvent, c as cvData, _ as _sfc_main$3 } from './cvData-DdprCfnQ.mjs';
import { useSSRContext, ref, resolveDirective, unref, mergeProps, computed, toValue as toValue$1, readonly, watch, shallowRef, getCurrentScope, onScopeDispose, getCurrentInstance, toRaw } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, d as useRoute, b as useNuxtApp } from './server.mjs';
import { r as getRequestURL } from '../runtime.mjs';
import './index-DyoJ9r-N.mjs';
import '@unhead/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const _sfc_main$2 = {
  __name: "ButtonRed",
  __ssrInlineRender: true,
  props: {
    btnText: {
      type: String,
      default: "Click me",
      required: true
    },
    btnColor: {
      type: String,
      default: "primary",
      required: false
    },
    btnPicto: {
      type: String,
      required: false
    },
    btnLink: {
      type: String,
      default: "/",
      required: false
    },
    reversePicto: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.btnLink,
        class: [__props.btnColor, "btn"]
      }, _attrs))} data-v-74aff2f1>`);
      if (__props.reversePicto) {
        _push(`<p data-v-74aff2f1>${ssrInterpolate(__props.btnText)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.btnPicto) {
        _push(`<img${ssrRenderAttr("src", __props.btnPicto)} alt="" data-v-74aff2f1>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.reversePicto) {
        _push(`<p data-v-74aff2f1>${ssrInterpolate(__props.btnText)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btn/ButtonRed.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-74aff2f1"]]);
const useAnchorScroll = (options = {}) => {
  const toAnchorSurfaces = computed(() => {
    var _a2, _b2, _c;
    var _a, _b;
    const unwrappedOptions = toValue$1(options);
    return (_c = (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.surfaces) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toAnchor) == null ? void 0 : _a.surfaces) != null ? _b2 : toValue$1((_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults.surfaces)) != null ? _c : [];
  });
  const toAnchorScrollOptions = computed(() => {
    var _a2, _b2;
    var _a, _b, _c;
    const unwrappedOptions = toValue$1(options);
    return (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.scrollOptions) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toAnchor) == null ? void 0 : _a.scrollOptions) != null ? _b2 : toValue$1((_c = (_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults) == null ? void 0 : _c.toAnchor);
  });
  const toTopSurfaces = computed(() => {
    var _a2, _b2, _c;
    var _a, _b;
    const unwrappedOptions = toValue$1(options);
    return (_c = (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.surfaces) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toTop) == null ? void 0 : _a.surfaces) != null ? _b2 : toValue$1((_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults.surfaces)) != null ? _c : [];
  });
  const toTopScrollOptions = computed(() => {
    var _a2, _b2;
    var _a, _b, _c;
    const unwrappedOptions = toValue$1(options);
    return (_b2 = (_a2 = unwrappedOptions == null ? void 0 : unwrappedOptions.scrollOptions) != null ? _a2 : (_a = unwrappedOptions == null ? void 0 : unwrappedOptions.toTop) == null ? void 0 : _a.scrollOptions) != null ? _b2 : toValue$1((_c = (_b = useNuxtApp().$anchorScroll) == null ? void 0 : _b.defaults) == null ? void 0 : _c.toTop);
  });
  return {
    scrollToAnchor(target) {
      var _a;
      const maybeElement = toValue$1(target);
      let anchorElement = null;
      if (typeof maybeElement === "string") {
        anchorElement = (void 0).getElementById(maybeElement.replace(/^#/, ""));
      } else if (maybeElement instanceof HTMLElement) {
        anchorElement = maybeElement;
      } else {
        const elementId = toValue$1(maybeElement.id);
        const elementSelector = toValue$1(maybeElement.sr);
        if (elementId) {
          anchorElement = (void 0).getElementById(elementId.replace(/^#/, ""));
        } else if (elementSelector) {
          try {
            anchorElement = (void 0).querySelector(elementSelector);
          } catch (error) {
            console.error("[useAnchorScroll]: While select element from document, next error occurred:", error);
          }
        } else {
          console.error(
            "[useAnchorScroll]: Wrong object provided to scrollToAnchor composable:",
            "either 'id' and 'sr' (selector) are not provided in object",
            maybeElement
          );
        }
      }
      if (!anchorElement)
        return false;
      const { top, left } = anchorElement.getBoundingClientRect();
      const { behavior, offsetLeft, offsetTop } = (_a = toValue$1(toAnchorScrollOptions)) != null ? _a : {};
      const scrollToAnchorOptions = {
        behavior,
        ...offsetLeft !== void 0 && { left: left + offsetLeft },
        ...offsetTop !== void 0 && { top: top + offsetTop }
      };
      for (const surface of toValue$1(toAnchorSurfaces))
        surface.scrollBy(scrollToAnchorOptions);
      return true;
    },
    scrollToTop() {
      var _a;
      const { behavior, offsetLeft, offsetTop } = (_a = toValue$1(toTopScrollOptions)) != null ? _a : {};
      const scrollToTopOptions = {
        behavior,
        left: offsetLeft,
        top: offsetTop
      };
      for (const surface of toValue$1(toTopSurfaces))
        surface.scrollTo(scrollToTopOptions);
    }
  };
};
const _sfc_main$1 = {
  __name: "NavSquares",
  __ssrInlineRender: true,
  setup(__props) {
    useAnchorScroll();
    const route = useRoute();
    let navLinks = route.meta.innerNavLinks;
    const returnStyleFromIndex = (index) => {
      const activeIndex = navLinks.findIndex((link) => link.active);
      const distance = Math.abs(activeIndex - index) || 1;
      const size = 12;
      const scaleFactor = 1 / distance + 0.1;
      return {
        width: `${size}px`,
        height: `${size}px`,
        transform: `scale(${scaleFactor})`
      };
    };
    const isHovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _directive_motion = resolveDirective("motion");
      const _directive_motion_fade_visible = resolveDirective("motion-fade-visible");
      let _temp0;
      _push(`<!--[--><div id="scroll-squares" data-v-4e5113aa><!--[-->`);
      ssrRenderList(unref(navLinks), (link, index) => {
        _push(`<button${ssrRenderAttr("name", index)} class="${ssrRenderClass([{ active: link.active }, "scroll-square"])}"${ssrRenderAttr("title", link.name)} data-v-4e5113aa><span class="square" style="${ssrRenderStyle(returnStyleFromIndex(index))}" data-v-4e5113aa></span><label${ssrRenderAttrs(mergeProps({
          initial: { opacity: 0, transform: "translate(-20px, -50%)" },
          visible: { opacity: 1, transform: "translate(0px, -50%" },
          style: unref(isHovered) ? null : { display: "none" },
          for: index
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4e5113aa>${ssrInterpolate(link.name)}</label></button>`);
      });
      _push(`<!--]--></div><div${ssrRenderAttrs(_temp0 = mergeProps({
        style: unref(isHovered) ? null : { display: "none" },
        id: "layer"
      }, ssrGetDirectiveProps(_ctx, _directive_motion_fade_visible)))} data-v-4e5113aa>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : (_a = _temp0.innerHTML) != null ? _a : ""}</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/header/NavSquares.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4e5113aa"]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, toValue(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
const defaultWindow = void 0;
const defaultNavigator = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useEventListener(...args) {
  let target;
  let events2;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events2, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events2, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events2))
    events2 = [events2];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events2.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "permissions" in navigator);
  const permissionStatus = shallowRef();
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = shallowRef();
  const update = () => {
    var _a, _b;
    state.value = (_b = (_a = permissionStatus.value) == null ? void 0 : _a.state) != null ? _b : "prompt";
  };
  useEventListener(permissionStatus, "change", update);
  const query = createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus.value) {
      try {
        permissionStatus.value = await navigator.permissions.query(desc);
      } catch (e) {
        permissionStatus.value = void 0;
      } finally {
        update();
      }
    }
    if (controls)
      return toRaw(permissionStatus.value);
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}
function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const permissionRead = usePermission("clipboard-read");
  const permissionWrite = usePermission("clipboard-write");
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value && isAllowed(permissionRead.value)) {
      navigator.clipboard.readText().then((value) => {
        text.value = value;
      });
    } else {
      text.value = legacyRead();
    }
  }
  if (isSupported.value && read)
    useEventListener(["copy", "cut"], updateText);
  async function copy(value = toValue(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value && isAllowed(permissionWrite.value))
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = (void 0).createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    (void 0).body.appendChild(ta);
    ta.select();
    (void 0).execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a, _b, _c;
    return (_c = (_b = (_a = void 0) == null ? void 0 : _a.call(void 0)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  function isAllowed(status) {
    return status === "granted" || status === "prompt";
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = useSupported(() => _navigator && "canShare" in _navigator);
  const share = async (overrideOptions = {}) => {
    if (isSupported.value) {
      const data = {
        ...toValue(shareOptions),
        ...toValue(overrideOptions)
      };
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { share, isSupported: isShareSupported } = useShare();
    const { contact } = cvData;
    const url = useRequestURL();
    const currentUrl = url.href;
    const { copy, isSupported: isClipboardSupported } = useClipboard({
      currentUrl
    });
    let copyTxt = ref("Copy link");
    const copyToClipboard = () => {
      copy(currentUrl);
      copyTxt.value = "Copied!";
      setTimeout(() => {
        copyTxt.value = "Copy link";
      }, 2e3);
    };
    function startShare() {
      share({
        title: "Look at this awesome website!",
        text: "It is so cool!",
        url: currentUrl
      });
    }
    let showContactInfo = ref(false);
    let showShareOptions = ref(false);
    const downloadPdf = () => {
      (void 0).open("/cv.pdf", "_blank");
    };
    const printPage = () => {
      (void 0).print();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      const _component_BtnButtonRed = __nuxt_component_1;
      const _component_LayoutHeaderNavSquares = __nuxt_component_2;
      const _directive_motion_slide_visible_right = resolveDirective("motion-slide-visible-right");
      const _directive_motion_slide_visible_left = resolveDirective("motion-slide-visible-left");
      _push(`<!--[--><div id="layout" data-v-d7466e98><button id="btn-contact" data-v-d7466e98>`);
      _push(ssrRenderComponent(_component_NuxtImg, { src: "icons/icon-contact.svg" }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(unref(showContactInfo) ? null : { display: "none" })}" class="contact-infos" data-v-d7466e98>`);
      _push(ssrRenderComponent(_component_BtnButtonRed, mergeProps({
        btnLink: "tel:" + unref(contact).phone,
        btnPicto: "/icons/icon-call.svg",
        btnText: "Call me",
        reversePicto: true
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_right)), null, _parent));
      _push(ssrRenderComponent(_component_BtnButtonRed, mergeProps({
        btnLink: "mailto:" + unref(contact).email,
        btnPicto: "/icons/icon-mail.svg",
        btnText: "Email me",
        reversePicto: true
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_right)), null, _parent));
      _push(`</div><button id="btn-share" data-v-d7466e98>`);
      _push(ssrRenderComponent(_component_NuxtImg, { src: "icons/icon-export.svg" }, null, _parent));
      _push(`</button><div style="${ssrRenderStyle(unref(showShareOptions) ? null : { display: "none" })}" class="share-options" data-v-d7466e98>`);
      _push(ssrRenderComponent(_component_BtnButtonRed, mergeProps({
        btnPicto: "/icons/icon-download.svg",
        btnText: "Download",
        onClick: downloadPdf
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_left)), null, _parent));
      _push(ssrRenderComponent(_component_BtnButtonRed, mergeProps({
        btnPicto: "/icons/icon-print.svg",
        btnText: "Print",
        onClick: printPage
      }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_left)), null, _parent));
      if (unref(isClipboardSupported)) {
        _push(ssrRenderComponent(_component_BtnButtonRed, mergeProps({
          onClick: copyToClipboard,
          btnPicto: "/icons/icon-copy.svg",
          btnText: unref(copyTxt)
        }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_left)), null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isShareSupported)) {
        _push(ssrRenderComponent(_component_BtnButtonRed, mergeProps({
          onClick: startShare,
          btnPicto: "/icons/icon-export.svg",
          btnText: "Share"
        }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_visible_left)), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LayoutHeaderNavSquares, null, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7466e98"]]);

export { _default as default };
//# sourceMappingURL=default-DCnJtkMP.mjs.map
