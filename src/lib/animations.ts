/**
 * Motion layer — a like-for-like replacement of the original theme's
 * GSAP + ScrollTrigger + SplitType stack.
 *
 * Why this is faster than what it replaces:
 *   - Motion compiles to the native Web Animations API, so transform and
 *     opacity tweens are handed to the compositor instead of being driven
 *     by a JS tick on the main thread.
 *   - Text is split into spans at BUILD time by SplitText.astro. The
 *     original ran SplitType in the browser, which forced a reflow per
 *     heading and shifted layout on load. Here there is none.
 *   - Everything is lazily imported and bails out early when the page has
 *     no matching elements, so pages that don't animate ship no work.
 *
 * Timings mirror themes/solor/assets/js/function.js exactly:
 *   duration 1s · delay 0.5s · stagger 0.05s · ease Power2.out.
 */
import { animate, inView, stagger, type AnimationPlaybackControls } from 'motion';

/** GSAP Power2.out === easeOutCubic. Kept in sync with --ease-out. */
const EASE_OUT: [number, number, number, number] = [0.215, 0.61, 0.355, 1];

const DUR = 1;
const DELAY = 0.5;
const STAGGER = 0.05;

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Run once per element, even if initialisers fire twice (view transitions). */
const once = (el: Element, key: string): boolean => {
  const flag = `anim${key}`;
  if ((el as HTMLElement).dataset[flag]) return false;
  (el as HTMLElement).dataset[flag] = '1';
  return true;
};

/**
 * Rest an element at its CSS-default state once its entrance has played.
 *
 * We hide elements with an INLINE style before animating. A WAAPI animation
 * does not write its final value back to the element, so as soon as the
 * animation finishes the inline `opacity: 0` applies again and the content
 * disappears. Clearing the inline styles on finish leaves the element at its
 * stylesheet value (visible) and makes the reveal survive reflows, viewport
 * resizes and full-page screenshots.
 */
const settle = (controls: { finished: Promise<unknown> }, els: HTMLElement[]) => {
  controls.finished
    .then(() => {
      els.forEach((el) => {
        el.style.removeProperty('opacity');
        el.style.removeProperty('transform');
      });
    })
    .catch(() => {
      /* Animation was cancelled (e.g. navigation) — force the visible state. */
      els.forEach((el) => {
        el.style.removeProperty('opacity');
        el.style.removeProperty('transform');
      });
    });
};

/* ------------------------------------------------------------------------ */
/* Image reveal                                                              */
/* ------------------------------------------------------------------------ */
/**
 * Wrapper slides in from the left while the inner image slides in from the
 * right at the same rate — the two cancel out, so the image appears to be
 * uncovered rather than to move. Mirrors the original's xPercent pair.
 */
export function initImageReveal(root: ParentNode = document) {
  const targets = root.querySelectorAll<HTMLElement>('.reveal-image');
  if (!targets.length) return;

  targets.forEach((container) => {
    if (!once(container, 'Reveal')) return;
    const img = container.querySelector('img');

    if (reducedMotion()) {
      container.style.visibility = 'visible';
      return;
    }

    inView(
      container,
      () => {
        container.style.visibility = 'visible';
        animate(
          container,
          { transform: ['translateX(-100%)', 'translateX(0%)'] },
          { duration: DUR, ease: EASE_OUT },
        );
        if (img) {
          animate(
            img,
            { transform: ['translateX(100%)', 'translateX(0%)'] },
            { duration: DUR, ease: EASE_OUT },
          );
        }
      },
      { amount: 0.15 },
    );
  });
}

/* ------------------------------------------------------------------------ */
/* Split heading reveals                                                     */
/* ------------------------------------------------------------------------ */
/**
 * `.split-words` animates whole words, `.split-chars` animates characters —
 * the two heading styles the original theme shipped. Spans already exist in
 * the HTML; we only tween them.
 */
export function initSplitText(root: ParentNode = document) {
  const headings = root.querySelectorAll<HTMLElement>('.split-words, .split-chars');
  if (!headings.length) return;

  headings.forEach((heading) => {
    if (!once(heading, 'Split')) return;

    const parts = heading.querySelectorAll<HTMLElement>(
      heading.classList.contains('split-chars') ? '.split-char' : '.split-word',
    );
    if (!parts.length) return;

    if (reducedMotion()) {
      parts.forEach((p) => { p.style.opacity = '1'; });
      return;
    }

    // Hide only now that we know we can animate them back in.
    parts.forEach((p) => { p.style.opacity = '0'; });

    inView(
      heading,
      () => {
        const controls = animate(
          parts,
          { opacity: [0, 1], transform: ['translateX(20px)', 'translateX(0px)'] },
          { duration: DUR, delay: stagger(STAGGER, { startDelay: DELAY }), ease: EASE_OUT },
        );
        settle(controls, [...parts]);
      },
      { amount: 0.2 },
    );
  });
}

/* ------------------------------------------------------------------------ */
/* Generic entrance (replaces Elementor's fadeIn / fadeInUp)                 */
/* ------------------------------------------------------------------------ */
export function initFadeIn(root: ParentNode = document) {
  const targets = root.querySelectorAll<HTMLElement>('[data-anim]');
  if (!targets.length) return;

  targets.forEach((el) => {
    if (!once(el, 'Fade')) return;

    const kind = el.dataset.anim || 'up';
    const delay = parseFloat(el.dataset.animDelay || '0');
    const offset =
      kind === 'up' ? 'translateY(40px)'
      : kind === 'down' ? 'translateY(-40px)'
      : kind === 'left' ? 'translateX(-40px)'
      : kind === 'right' ? 'translateX(40px)'
      : 'none';

    if (reducedMotion()) { el.style.opacity = '1'; return; }

    el.style.opacity = '0';

    inView(
      el,
      () => {
        const controls = animate(
          el,
          offset === 'none'
            ? { opacity: [0, 1] }
            : { opacity: [0, 1], transform: [offset, 'translate(0,0)'] },
          { duration: 0.8, delay, ease: EASE_OUT },
        );
        settle(controls, [el]);
      },
      { amount: 0.15 },
    );
  });
}

/* ------------------------------------------------------------------------ */
/* Counters                                                                  */
/* ------------------------------------------------------------------------ */
export function initCounters(root: ParentNode = document) {
  const counters = root.querySelectorAll<HTMLElement>('[data-count-to]');
  if (!counters.length) return;

  counters.forEach((el) => {
    if (!once(el, 'Count')) return;
    const to = parseFloat(el.dataset.countTo || '0');
    const decimals = parseInt(el.dataset.countDecimals || '0', 10);

    if (reducedMotion()) { el.textContent = to.toFixed(decimals); return; }

    el.textContent = (0).toFixed(decimals);
    inView(
      el,
      () => {
        animate(0, to, {
          duration: 2,
          ease: EASE_OUT,
          onUpdate: (v) => { el.textContent = v.toFixed(decimals); },
        });
      },
      { amount: 0.5 },
    );
  });
}

/* ------------------------------------------------------------------------ */
/* Progress bars                                                             */
/* ------------------------------------------------------------------------ */
export function initProgressBars(root: ParentNode = document) {
  const bars = root.querySelectorAll<HTMLElement>('[data-progress]');
  if (!bars.length) return;

  bars.forEach((bar) => {
    if (!once(bar, 'Progress')) return;
    const pct = parseFloat(bar.dataset.progress || '0');
    const label = bar.parentElement?.querySelector<HTMLElement>('[data-progress-label]');

    if (reducedMotion()) {
      bar.style.width = `${pct}%`;
      if (label) label.textContent = `${pct}%`;
      return;
    }

    inView(
      bar,
      () => {
        animate(bar, { width: ['0%', `${pct}%`] }, { duration: 1.5, ease: EASE_OUT });
        if (label) {
          animate(0, pct, {
            duration: 1.5,
            ease: EASE_OUT,
            onUpdate: (v) => { label.textContent = `${Math.round(v)}%`; },
          });
        }
      },
      { amount: 0.6 },
    );
  });
}

/* ------------------------------------------------------------------------ */
/* Boot                                                                      */
/* ------------------------------------------------------------------------ */
export function initAnimations(root: ParentNode = document) {
  initImageReveal(root);
  initSplitText(root);
  initFadeIn(root);
  initCounters(root);
  initProgressBars(root);
}

export type { AnimationPlaybackControls };
