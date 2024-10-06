# Guide Editor JavaScript

Craft CMS has a Twig tag that is used to register JavaScript on any page, called `{% js %}`. However, this tag won’t work in all of the places where a guide can be embedded (for example, guides displayed in slideouts).

The **JavaScript** field in the **Guide Editor** lets you add JavaScript that is fired whenever your guide is displayed around the Craft CMS CP (Control Panel). Adding your JavaScript to this field will be more reliable, and you’ll be writing in a code editor field that is configured for the JavaScript syntax.

When adding JavaScript to a guide, it will be wrapped in a callback function and registered on all Craft CMS CP pages. When the guide is loaded onto the page it will fire that callback function once the guide has rendered.

## Adding JavaScript to a Guide

Each guide is wrapped in a class that includes the guide’s slug in the name. For a guide with a slug, `my-guide`, it can be selected with the following selector:

```javascript
const myGuide = document.querySelector('.guide-my-guide')

if (myGuide) {
  // Do something ...
}
```

## Considerations when Writing JavaScript for Guides

Issues can occur when a guide is displayed in more than one place on the same page or when a guide is embedded inside of another guide. The way you write your JavaScript code can get around these issues.

### Multiple Callback Calls on the Same Page

If a guide is displayed on a page, its callback will be fired when the page has loaded. If the same guide is popped up in a slideout, the callback will fire again. In this situation the following JavaScript code will work on the guide on the page, but not target the guide in the slideout:

```javascript
const textElement = document.querySelector('.guide-my-guide .my-custom-element')

if (textElement) {
  textElement.style.color = 'white'
}
```

This issue is that `document.querySelector` will find the first element on the page and it will stop there. In this scenario it will always stop at the guide on the page because it comes first in the HTML markup.

To get around this you could loop through all of the guides that match that slug, then make your changes to the element within each guide:

```javascript
const guides = document.querySelectorAll('.guide-my-guide')

guides.forEach((guide) => {
  const textElement = guide.querySelector('.my-custom-element')

  if (textElement) {
    textElement.style.color = 'white'
  }
})
```

This can work in some situations, however, it would be better if the changes were only made one time to each instance of the guide. One way around this is to add a class to the guide to keep track of which guides have already been targeted by the callback:

```javascript
const guides = document.querySelectorAll('.guide-my-guide:not(.loaded)')

guides.forEach((guide) => {
  const textElement = guide.querySelector('.my-custom-element')

  if (textElement) {
    textElement.style.color = 'white'
  }
  
  guide.classList.add('loaded')
})
```

Adding the `loaded` class will happen the first time this guide has been loaded. The next time the callback is fired the `:not(.loaded)` part of the selector will ignore any guide that has already been targeted by the callback.

When the page is re-loaded (or when you move to another page) all of the `loaded` classes will disappear and the whole loop will start again.

### Using JavaScript with Included Guides

Guides that are included into another guide—using the `{{ craft.guide.include() }}` Twig tag—do not get their callback called when they are displayed on the page.

For example, if a guide with the slug, `parent-guide`, includes a guide with the slug, `child-guide`, the callback for `parent-guide` will fire and the callback for `child-guide` will not.

The reason for this is because `{{ craft.guide.include() }}` only includes the value of the guide’s **Content** field and doesn’t include the **CSS** or **JavaScript** field. So in this case any CSS or JavaScript that target `.guide-child-guide` will not fire.

If you would like to make sure the callback for `child-guide` is called when `parent-guide` is displayed, add the following code into the **JavaScript** field on the guide with the slug, `parent-guide`.

```javascript
// Fires the JavaScript callback for the "Child Guide" guide.
window.guideCallback['child-guide']?.()
````

<div class="readable guide-component-tip">
  <blockquote class="note tip">The `?.()` might look a little strange here, but what it is doing is checking to see if the callback for `child-guide` exists before trying to call it. If the guide with the slug, `child-guide`, gets deleted this will make sure the callback for `parent-guide` doesn’t throw an error.</blockquote>
</div>

Even when calling the callback for `child-guide` through `parent-guide` there is an issue in that any JavaScript code that targeted the `.guide-child-guide` class will fail because the wrapping container will now be `.guide-parent-guide`. This situation is a little trickier to solve and it depends on what your JavaScript code is trying to do.

One way you could solve this is by handling multiple selectors in the `child-guide` callback:

```javascript
const guides = document.querySelectorAll('.guide-child-guide, .guide-parent-guide')

guides.forEach((guide) => {
  if (guide.classList.contains('guide-parent-guide')) {
    // Do somethign specific for when `child-guide` is included ...
  } else {
    // Do somethign for when `child-guide` is directly displayed ...
  }
})
```

## JavaScript Kill Switch

<div class="readable guide-component-tip">
  <blockquote class="note">Craft CMS uses JavaScript to perform many important actions around the CMS. Writing custom JavaScript can cause bugs to occur and can break important CMS functionality!</blockquote>
</div>

In the event where a bug is introduced that breaks something in Craft CMS there are a couple ways to fix it:

- If you can get to the **Guides** page (usually at the URI, `/admin/guide/list`), edit the **JavaScript** field for the guide to modify or comment out the offending code.
- If you cannot access any pages in the CP you can create a Guide config file that disables all JavaScript callback functions.

To create the Guide config file, follow these instructions:

1. Create a file in you project’s `/config` directory and title it, `guide.php`.
2. Copy the PHP code below and paste it into that config file. This will disable all Guide JavaScript callbacks:

```javascript
<?php

return [
  // Enable JavaScript to be displayed on the page.
  'registerGuideJavascript' => false,
];

```

<div class="readable guide-component-tip">
  <blockquote class="note tip">Disabling the <strong>Enable JavaScript Field</strong> setting in <strong>Guide Settings</strong> will also disable the JavaScript callbacks, however, you won’t be able to edit the guide causing the issue with the <strong>JavaScript</strong> field disabled.</blockquote>
</div>
