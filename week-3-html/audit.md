# Accessibility Audit Report
## Website Audited

Website: https://ieltsliz.com/

## Lighthouse Result

Accessibility Score: 90 / 100

Failed audits:
- Background and foreground colors do not have a sufficient contrast ratio.
- Links do not have a discernible name.
- Heading elements are not in a sequentially-descending order.
- Document does not have a main landmark.

## axe DevTools Result

Total Issues: 12

Automatic issues: 12  
Guided issues: 0  
Manual issues: 0  

Issues found:

Critical issues: 1 
- Buttons must have discernible text. `1 issue` 

Serious issues: 11  
- Elements must only use permitted ARIA attributes. `1 issue`
- Elements must meet minimum color contrast ratio thresholds. `1 issue`
- Links must have discernible text. `9 issues`

Moderate issues: 0  
Minor issues: 0  

## Keyboard Navigation Test

I tested the homepage by pressing the Tab key several times.

Focus visibility: Partly visible

When I tabbed through the IELTS Liz homepage, the focus was visible on some links and buttons, but it was not always very clear. Some selected elements were difficult to notice. This can make the website harder to use for people who navigate with only a keyboard.

Suggested fix:

Add a stronger focus indicator for links, buttons, and other interactive elements.

Example:

```css
a:focus,
button:focus {
    outline: 3px solid blue;
    outline-offset: 3px;
}
```
## Top 3 Accessibility Issues and Suggested Fixes

### 1. Elements must only use permitted ARIA attributes

axe DevTools found that one element uses an ARIA attribute incorrectly. The element is a `div` with an `aria-label`, but the `div` does not have a valid role. This can confuse screen readers because assistive technology may not understand the purpose of the element.

Suggested fix:
The website should remove the `aria-label` from the normal `<div>`, or add a valid role to the `<div>` if it needs an accessible label.

Example fix:

```html
<div id="movie_player" role="region" aria-label="YouTube video player">
</div>
```
### 2. Buttons must have discernible text

axe DevTools found one button that does not have a clear accessible name. The button only contains an image, so screen reader users may not understand what the button does.
Suggested fix:

The website should give the button a clear accessible name. This can be done by adding visible text inside the button, adding an `aria-label`, or adding a `title` attribute.

Example:

```html
<button aria-label="Open video channel">
    <img src="..." alt="">
</button>
```
### 3. Links Must Have Discernible Text

axe DevTools found 9 links that do not have discernible text. One example is a link to the IELTS Listening page, but the link does not contain visible text or an accessible label. This is a serious issue because screen reader users may not understand where the link goes.

Failing element example:

```html
<a href="https://ieltsliz.com/ielts-listening/" class="" target="">
```