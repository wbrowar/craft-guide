# Guide Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

{"guides":[{"content":"<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Creating an Alert Bar\r\n\r\nHello\r\n\r\n1. Do something\r\n1. Do another things\r\n\r\n{% endfilter %}\r\n</div>","contentSource":"field","contentUrl":"","slug":"adding-an-alert-bar","summary":"","title":"Adding an Alert Bar","template":"__none__"},{"content":"<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Article Layout\r\n\r\nThe Desktop Layout field lets you decide how wide a block of content is in a six-column grid (when the site is displayed on a wider monitor). For example, setting it to three columns will set it to half of the width of the page—letting you put two three-column blocks side by side.\r\n\r\nThe Desktop Layout field deals with horizontal layout. If you want to put two content blocks next to one, taller content block. You can use the Desktop Height field on the taller block to let it know how many items should fit to its left.\r\n\r\n{% endfilter %}\r\n</div>","contentSource":"field","contentUrl":"","slug":"article-layout","summary":"","title":"Article Layout","template":"__none__"},{"content":"{# Set the type of element to be displayed. Options: assets, categories, entries, users #}\r\n{% set elementType = 'entries' %}\r\n\r\n{# If showing content stats for entries, specifcy the section. Leave this as null to get all sections. #}\r\n{% set entrySection = 'codeArticle' %}\r\n\r\n{# Set a label that sits under the total number. Leave this as blank to default to the element type. #}\r\n{% set label = 'Code Articles' %}\r\n\r\n{% if elementType == 'assets' %}\r\n  {% set labelDefault = 'Assets' %}\r\n  {% set statuses = ['live'] %}\r\n  {% set live = craft.assets.limit(null).status('live').count() %}\r\n{% elseif elementType == 'categories' %}\r\n  {% set labelDefault = 'Categories' %}\r\n  {% set statuses = ['live', 'disabled'] %}\r\n  {% set live = craft.categories.limit(null).status('enabled').count() %}\r\n  {% set disabled = craft.categories.limit(null).status('disabled').count() %}\r\n{% elseif elementType == 'entries' %}\r\n  {% set labelDefault = 'Entries' %}\r\n  {% set statuses = ['live', 'disabled', 'pending', 'expired'] %}\r\n  {% set live = craft.entries.limit(null).section(entrySection ?? null).status('live').count() %}\r\n  {% set disabled = craft.entries.limit(null).section(entrySection ?? null).status('disabled').count() %}\r\n  {% set pending = craft.entries.limit(null).section(entrySection ?? null).status('pending').count() %}\r\n  {% set expired = craft.entries.limit(null).section(entrySection ?? null).status('expired').count() %}\r\n{% elseif elementType == 'users' %}\r\n  {% set labelDefault = 'Users' %}\r\n  {% set statuses = ['live', 'disabled'] %}\r\n  {% set live = craft.users.limit(null).status('enabled').count() %}\r\n  {% set disabled = craft.users.limit(null).status('disabled').count() %}\r\n{% endif %}\r\n\r\n<div class=\"g-text-center g-mt-6\">\r\n  <p class=\"g-mb-0\" style=\"font-size: 3rem\"><b>{{ live|default('') }}</b></p>\r\n  <h2>{{ label|default(labelDefault) }}</h2>\r\n</div>\r\n\r\n<div class=\"g-grid g-grid-cols-2 g-w-full\">\r\n  {% if 'live' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status live\"></span><div class=\"label\"><span class=\"title\">Live</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ live }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'disabled' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status disabled\"></span><div class=\"label\"><span class=\"title\">Disabled</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ disabled }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'pending' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status pending\"></span><div class=\"label\"><span class=\"title\">Pending</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ pending }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'expired' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status expired\"></span><div class=\"label\"><span class=\"title\">Expired</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ expired }}</b></div>\r\n  {% endif %}\r\n</div>","contentSource":"field","contentUrl":"","slug":"code-article-stats","summary":"","title":"Code Article Stats","template":"__none__"},{"content":"{# Set the type of element to be displayed. Options: assets, categories, entries, users #}\r\n{% set elementType = 'entries' %}\r\n\r\n{# If showing content stats for entries, specifcy the section; for assets, the volume, or for categories, the group. #}\r\n{# Leave this as null to get all entries, assets, or category groups. #}\r\n{% set subType = null %}\r\n\r\n{# Set a label that sits under the total number. Leave this as blank to default to the element type. #}\r\n{% set label = 'Entries' %}\r\n\r\n{% if elementType == 'assets' %}\r\n  {% set labelDefault = 'Assets' %}\r\n  {% set statuses = ['live'] %}\r\n  {% set live = craft.assets.limit(null).volume(subType ?? null).status('live').count() %}\r\n{% elseif elementType == 'categories' %}\r\n  {% set labelDefault = 'Categories' %}\r\n  {% set statuses = ['live', 'disabled'] %}\r\n  {% set live = craft.categories.limit(null).group(subType ?? null).status('enabled').count() %}\r\n  {% set disabled = craft.categories.limit(null).group(subType ?? null).status('disabled').count() %}\r\n{% elseif elementType == 'entries' %}\r\n  {% set labelDefault = 'Entries' %}\r\n  {% set statuses = ['live', 'disabled', 'pending', 'expired'] %}\r\n  {% set live = craft.entries.limit(null).section(subType ?? null).status('live').count() %}\r\n  {% set disabled = craft.entries.limit(null).section(subType ?? null).status('disabled').count() %}\r\n  {% set pending = craft.entries.limit(null).section(subType ?? null).status('pending').count() %}\r\n  {% set expired = craft.entries.limit(null).section(subType ?? null).status('expired').count() %}\r\n{% elseif elementType == 'users' %}\r\n  {% set labelDefault = 'Users' %}\r\n  {% set statuses = ['live', 'disabled'] %}\r\n  {% set live = craft.users.limit(null).status('enabled').count() %}\r\n  {% set disabled = craft.users.limit(null).status('disabled').count() %}\r\n{% endif %}\r\n\r\n<div class=\"g-text-center g-mt-6\">\r\n  <p class=\"g-mb-0\" style=\"font-size: 3rem\"><b>{{ live|default('') }}</b></p>\r\n  <h2>{{ label|default(labelDefault) }}</h2>\r\n</div>\r\n\r\n<div class=\"g-grid g-grid-cols-2 g-w-full\">\r\n  {% if 'live' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status live\"></span><div class=\"label\"><span class=\"title\">Live</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ live }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'disabled' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status disabled\"></span><div class=\"label\"><span class=\"title\">Disabled</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ disabled }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'pending' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status pending\"></span><div class=\"label\"><span class=\"title\">Pending</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ pending }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'expired' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status expired\"></span><div class=\"label\"><span class=\"title\">Expired</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ expired }}</b></div>\r\n  {% endif %}\r\n</div>","contentSource":"field","contentUrl":"","slug":"content-stats-all-entries","summary":"","title":"Content Stats – All Entries","template":"__none__"},{"content":"<div class=\"g-flex g-gap-6\" style=\"flex-wrap: wrap; justify-content: space-around;\">\r\n  <div style=\"flex: 0 1 250px\">\r\n    {{ craft.guide.include({ slug: 'code-article-stats' }) }}\r\n  </div>\r\n  <div style=\"flex: 0 1 250px\">\r\n    {{ craft.guide.include({ slug: 'maker-article-stats' }) }}\r\n  </div>\r\n</div>","contentSource":"field","contentUrl":"","slug":"content-stats-articles","summary":"","title":"Content Stats – Articles","template":"__none__"},{"content":"","contentSource":"iframe","contentUrl":"https://craftcms.com/docs/3.x/","slug":"craft-cms-docs","summary":"","title":"Craft CMS Docs","template":"__none__"},{"content":"<div class=\"g-grid md:g-grid-cols-2 g-gap-6\">\r\n  <div>\r\n    <div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Article Entries\r\n\r\nEntries that are in the Blog, News, Webinar Events and Basic Page sections all share several content fields:\r\n\r\n{% endfilter %}\r\n    </div>\r\n    \r\n    <div class=\"tldr-hide g-space-y-6\">\r\n      <table class=\"g-table g-max-w-prose g-mt-3\">\r\n        <thead>\r\n          <tr>\r\n            <th>Field</th>\r\n            <th>Description</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td><strong>Featured Image</strong></td>\r\n            <td>This image appears around this site as this entry’s thumbnail. It is also used as it’s default social media image. Featured Image can select from the Article Meta Images and People asset volumes. If an article is about a person who already has an image in the People volume, please select an existing image isntaed of re-upload their image. This will allow us to replace the image in all articles that share the same image.</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Summary</strong></td>\r\n            <td>This field is shown on article thumbnails and it also populates the SEO description for this article page.</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Body</strong></td>\r\n            <td>The main content of the article is made up of content blocks. See Article Layout, below, for ways to customize the article layout.</td>\r\n          </tr>\r\n          <tr>\r\n            <td><strong>Content Categories</strong></td>\r\n            <td>Found in the Meta + SEO tab, the Content Categories field selects the categories that determine related content and which pages this content appears in the Provoke section.</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"tldr-show g-mt-3 g-space-y-6\">\r\n      <p>Click <strong>TL;DR</strong> to show this table.</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"ll-container g-prose g-prose-sm\">\r\n    <div class=\"ll-image tldr-hide g-space-y-6\">\r\n      {{ craft.guide.component('image', { asset: craft.assets.filename('little-layout.png').volume('guide').one() }) }}\r\n    </div>\r\n    \r\n{% filter markdown('gfm') %}\r\n\r\n## Article Layout\r\n\r\nThe Desktop Layout field lets you decide how wide a block of content is in a six-column grid (when the site is displayed on a wider monitor). For example, setting it to three columns will set it to half of the width of the page—letting you put two three-column blocks side by side.\r\n\r\n<div class=\"tldr-hide g-space-y-6\">\r\n\r\nThe Desktop Layout field deals with horizontal layout. If you want to put two content blocks next to one, taller content block. You can use the Desktop Height field on the taller block to let it know how many items should fit to its left.\r\n\r\n</div>\r\n\r\n{% endfilter %}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"tldr-hide g-space-y-6\">\r\n  <hr>\r\n  \r\n  {{ craft.guide.include({ slug: 'content-stats-articles' }) }}\r\n</div>\r\n\r\n{% css %}\r\n.guide-editing-article-entries .ll-image :is(figure, img) {\r\n  margin-top: 0 !important;\r\n}\r\n.guide-editing-article-entries.guide-tldr .ll-container h2 {\r\n  margin-top: 0 !important;\r\n}\r\n{% endcss %}","contentSource":"field","contentUrl":"","slug":"editing-article-entries","summary":"","title":"Editing Article Entries","template":"__none__"},{"content":"<h2>Entries</h2>\r\n\r\n{{ craft.guide.component('image', { asset: craft.assets.filename('content-section-types.png').one(), lazyLoad: false }) }}\r\n\r\n<p>Craft stores your website&rsquo;s content in the <a href=\"{{ url('entries') }}\">Entries</a> section of Craft’s Control Panel. There are three types of sections that your entries can be stored as:</p>\r\n\r\n<table>\r\n    <tbody>\r\n    <tr>\r\n        <td>Singles</td>\r\n        <td>One-off pages that have a specific purpose, require a specific URL, and often are displayed in their own unique page template. Singles can only be created by an Admin or a developer, but they can be edited by content editors.</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Channels</td>\r\n        <td>Channels are used to create multiple entries that are grouped together by content type.</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Structures</td>\r\n        <td>Structures can be used to create multiple entries that can be manually organized within a hierarchy.</td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<hr>\r\n\r\n<grid grid-type=\"text-sidebar\">\r\n    <div>\r\n        <h2>Creating New Entries</h2>\r\n        <p>Channel and Structure entries can be created from the Entries page by clicking on the \"+&nbsp;New Entry\" button in the top-right. If you&rsquo;re already within a Channel or Structure section, a new entry of that section type will be created. Alternatively, you may use the downward caret to the right of the \"+&nbsp;New Entry\" button to select the type of entry you will be creating.</p>\r\n        <p>By selecting the new entry&rsquo;s section, you&rsquo;ll be taken to the Create Entry page.</p>\r\n    </div>\r\n    <div>\r\n        {{ craft.guide.component('image', { asset: craft.assets.filename('content-new.png').one() }) }}\r\n    </div>\r\n</grid>\r\n\r\n<grid grid-type=\"2-column\">\r\n    <div>\r\n        <h3>Populating Fields</h3>\r\n        <p>There are several different field types within Craft. Some fields are used for content entry, whereas others may be used to determine the layout of the page.</p>\r\n        <p>If a field is required for a particular entry type, you must enter something into the field before you may publish the entry. If a required field is not filled out during publishing, it will be highlighted in red and an error message will indicate what is missing.</p>\r\n    </div>\r\n    <div>\r\n        {{ craft.guide.component('image', { asset: craft.assets.filename('content-fields.png').one() }) }}\r\n    </div>\r\n</grid>\r\n\r\n<h3>Live Preview</h3>\r\n\r\n<p>To get an idea as to how a page is starting to look as you begin to enter content into it, you may use the Live Preview feature in Craft. Live Preview updates as you type, helping you make layout and design decisions as your content is being created.</p>\r\n<p>Some entry types may appear in multiple places within your website. For example, a News article may live on its own page, on a news collection page, and in a \"Related Article\" secton on other pages. To view how an entry is displayed on multiple pages, use the dropdown found above the preview area to switch Live Preview’s preview URL to the other locations.</p>\r\n<p>To exit Live Preview, use the \"Close Live Preview\" button in the top-left.</p>\r\n\r\n<hr>\r\n\r\n<h2>Content Blocks</h2>\r\n\r\n<p>Some entry types allow for your content to be built in a modular fashion. Content blocks allow for multiple blocks of similar components&mdash;that can be mixed and matched&mdash;so you can create unique layouts for the type of content you are presenting to your audience.</p>\r\n\r\n<h3>Matrix Fields</h3>\r\n\r\n<grid grid-type=\"text-sidebar\">\r\n    <div>\r\n        {{ craft.guide.component('image', { asset: craft.assets.filename('content-matrix.png').one() }) }}\r\n    </div>\r\n    <div>\r\n        <p>To create content within a matrix field, start by selecting the type of content block you would like to create. A new content block will appear and you will be presented with a set of fields that are specific to that block type. In this block there may be fields that are required for the block to be displayed properly.</p>\r\n        <p>If you need to re-order a series of matrix blocks use the move icon (✜) in the top-right of the block to drag your content blocks up and down.</p>\r\n    </div>\r\n</grid>\r\n\r\n<p>Clicking on the gear in the top-right will allow you to perform bulk actions:</p>\r\n\r\n<table>\r\n    <tbody>\r\n    <tr>\r\n        <td>Collapse</td>\r\n        <td>Get large content blocks out of the way by collapsing them down. The content in these blocks will still appear on the page, and collapsing them only affect the how your content blocks look on the edit page. <em>NOTE: you can quickly collapse a content block by double-clicking the header of the matrix block.</em></td>\r\n    </tr>\r\n    <tr>\r\n        <td>Disable</td>\r\n        <td>Disabling a matrix block is useful in that if you don&rsquo;t want to delete a block of content but you would like to remove it from the page, disabling a block prevents the content from appearing on the page&mdash;while making it easy to bring back later.</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Delete</td>\r\n        <td>Removed the content block and all of the content within it.</td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<p>Bulk actions can be applied to multiple content blocks at once by checking the box in the top-left corner of each content block before selecting the desired action.</p>\r\n\r\n<hr>\r\n\r\n<h2>Drafts and Revisions</h2>\r\n\r\n<p>Drafts are versions of your content that are unpublished and can be shared with others while the current version of your content exists on your site. To start a new draft, click on the \"Save as a Draft\" button.</p>\r\n<p>Craft will automatically save new drafts as you make changes to the fields on a piece of content. You’ll see the revisions drop down change and a green check mark will appear next to it letting you know that a new draft has been saved.</p>\r\n<p>When you are satisfied with the current draft, clicking \"Update entry\" will publish the new draft and save it as the \"Current\" version.</p>\r\n<p>Content can be rolled backwards between old drafts and revisions by selecting a previous revision from the revisions drop down and clicking the \"Revert entry to this revision\" button.</p>\r\n\r\n<hr>\r\n\r\n<h2>Publishing</h2>\r\n\r\n<p>An entry is published when the \"Enabled\" switch in the edit page sidebar is turned on. Depending on the section type, this sidebar can contain more publishing options.</p>\r\n<p>In Channel entries, you will find the following options:</p>\r\n\r\n<table>\r\n    <tbody>\r\n    <tr>\r\n        <td>Slug</td>\r\n        <td>The slug helps determine the URL of the entry. Each slug is unique and will be generated from the entry Title field, however you may manually change the slug if needed.</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Author</td>\r\n        <td>The entry author affects the permissions for who may edit and publish the entry. The author is pulled from users within Craft.</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Post Date</td>\r\n        <td>The Post Date of the entry helps when listing content in chronological order. Content can be scheduled for publishing by selecting a future date and time for the Post Date.</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Expiry Date</td>\r\n        <td>You can schedule content to become unpublished by setting an Expiry Date.</td>\r\n    </tr>\r\n    <tr>\r\n        <td>Notes about your changes</td>\r\n        <td>All content types allow you to write a note about what had been changed in an update. This is useful for communicating to multiple team members who may work together to create and edit content.</td>\r\n    </tr>\r\n    </tbody>\r\n</table>","contentSource":"field","contentUrl":"","slug":"editing-content","summary":"","title":"Editing Content","template":"__none__"},{"content":"<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Front-End Deployment\r\n\r\nThis CMS is used to manage the content of the {{ craft.guide.var('projectName') }}. The customer facing front-end is hosted on a seperate server which allows the CMS to get updated and some of its content to change without disturbing the customer experience.\r\n\r\nA webhook is used to notifiy the front-end that content has changed and that it’s time to rebuild itself. Webhooks fire as soon as an entry is updated, and you can also manually trigger a webhook using the Webhook Deploy Dashboard widget.\r\n\r\nTo trigger a webhook, add the Webhook Deploy widget to your Dashboard, then click the Deploy button. The front-end takes a couple of minutes to re-build before your changes are visible on the front-end.\r\n\r\nIf you make changes to a navigation or replace assets on the site, you can use the Webhook Deploy widget to trigger the front-end build without making a change to an entry.\r\n\r\n{% endfilter %}\r\n\r\n\r\n{{ craft.guide.component('tip', { text: 'If you are making several changes at once, you can disable the webhook using the Webhook Deploy widget. Then once you are ready to push your changes to the front-end, enable the webhook and use the Deploy button to trigger the build.' }) }}\r\n\r\n</div>","contentSource":"field","contentUrl":"","slug":"front-end-deploy","summary":"","title":"Front-End Deploy","template":"__none__"},{"content":"{# Set the type of element to be displayed. Options: assets, categories, entries, users #}\r\n{% set elementType = 'entries' %}\r\n\r\n{# If showing content stats for entries, specifcy the section. Leave this as null to get all sections. #}\r\n{% set entrySection = 'makerArticle' %}\r\n\r\n{# Set a label that sits under the total number. Leave this as blank to default to the element type. #}\r\n{% set label = 'Maker Articles' %}\r\n\r\n{% if elementType == 'assets' %}\r\n  {% set labelDefault = 'Assets' %}\r\n  {% set statuses = ['live'] %}\r\n  {% set live = craft.assets.limit(null).status('live').count() %}\r\n{% elseif elementType == 'categories' %}\r\n  {% set labelDefault = 'Categories' %}\r\n  {% set statuses = ['live', 'disabled'] %}\r\n  {% set live = craft.categories.limit(null).status('enabled').count() %}\r\n  {% set disabled = craft.categories.limit(null).status('disabled').count() %}\r\n{% elseif elementType == 'entries' %}\r\n  {% set labelDefault = 'Entries' %}\r\n  {% set statuses = ['live', 'disabled', 'pending', 'expired'] %}\r\n  {% set live = craft.entries.limit(null).section(entrySection ?? null).status('live').count() %}\r\n  {% set disabled = craft.entries.limit(null).section(entrySection ?? null).status('disabled').count() %}\r\n  {% set pending = craft.entries.limit(null).section(entrySection ?? null).status('pending').count() %}\r\n  {% set expired = craft.entries.limit(null).section(entrySection ?? null).status('expired').count() %}\r\n{% elseif elementType == 'users' %}\r\n  {% set labelDefault = 'Users' %}\r\n  {% set statuses = ['live', 'disabled'] %}\r\n  {% set live = craft.users.limit(null).status('enabled').count() %}\r\n  {% set disabled = craft.users.limit(null).status('disabled').count() %}\r\n{% endif %}\r\n\r\n<div class=\"g-text-center g-mt-6\">\r\n  <p class=\"g-mb-0\" style=\"font-size: 3rem\"><b>{{ live|default('') }}</b></p>\r\n  <h2>{{ label|default(labelDefault) }}</h2>\r\n</div>\r\n\r\n<div class=\"g-grid g-grid-cols-2 g-w-full\">\r\n  {% if 'live' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status live\"></span><div class=\"label\"><span class=\"title\">Live</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ live }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'disabled' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status disabled\"></span><div class=\"label\"><span class=\"title\">Disabled</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ disabled }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'pending' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status pending\"></span><div class=\"label\"><span class=\"title\">Pending</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ pending }}</b></div>\r\n  {% endif %}\r\n  \r\n  {% if 'expired' in statuses %}\r\n    <div class=\"element small hasstatus\" title=\"Live elements\"><span class=\"status expired\"></span><div class=\"label\"><span class=\"title\">Expired</span></div></div>\r\n    <div class=\"g-text-right\" style=\"font-size: 1.5em\"><b>{{ expired }}</b></div>\r\n  {% endif %}\r\n</div>","contentSource":"field","contentUrl":"","slug":"maker-article-stats","summary":"","title":"Maker Article Stats","template":"__none__"},{"content":"<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Creating a New User\r\n\r\nTo add a user to a User Group, start by clicking on the Users tab in the Control Panel. To add a user, click the red &ldquo;+&nbsp;New User&rdquo; button and fill in as many fields as you can under the Account tab.\r\n\r\n{{ craft.guide.component('tip', { text: 'Each user must have a unique username and email address.' }) }}\r\n\r\nTo set user permissions, start by clicking on the Permissions tab. In most cases, you can simply assign a user to a User Group. You may also assign a specific permission to a user by checking the appropriate boxes in the Permissions section.\r\n\r\nClick the red &ldquo;Save&rdquo; button to add the new user or to update an existing user&rsquo;s settings.\r\n\r\n<hr>\r\n\r\n## User Account Activation and Passwords\r\n\r\nTo activate a new user&rsquo;s account, start on the Users tab. Click on the username of that user to go to their user edit page. On this page, you&rsquo;ll see a black gear button with options for that particular user.\r\n\r\nWhen a new user is added, their account status is set to &ldquo;Unverified&rdquo;. To change this, click on the gear and click the &ldquo;Send activation email&rdquo; option. The user will receive an activation email that will allow them to set their password and log in. Once the user has logged in for the first time, their status is then changed to &ldquo;Active&rdquo;.\r\n\r\nYou may immediately activate a user account by clicking on the &ldquo;Activate account&rdquo; option.\r\n\r\n{% endfilter %}\r\n</div>","contentSource":"field","contentUrl":"","slug":"managing-users","summary":"","title":"Managing Users","template":"__none__"},{"content":"{% if currentUser.id in [14940, 6283, 1, 15968] %}\r\n  {% set phrases = [\r\n        { author: 'McGinnis', phrase: 'I feel like I need to purchase a frisbee immediately' },\r\n        { author: 'Adam', phrase: 'It&rsquo;s a bunch of monkey work' },\r\n        { author: 'McGinnis', phrase: 'Ian, this is going to sound weird but I think about you more than you know' },\r\n        { author: 'Jen', phrase: 'You can&rsquo;t cure a kidney stone with a throut lozenge' },\r\n        { author: 'Jen', phrase: 'Otherwise I&rsquo;m coming to the party naked' },\r\n        { author: 'Marc', phrase: 'I mean I&rsquo;ve been gluing cheese together over there' },\r\n        { author: 'Jen', phrase: 'I&rsquo;ll throw the cheek hard' },\r\n        { author: 'Jen', phrase: 'It&rsquo;s like a polka-dotted pony over here!' },\r\n        { author: 'Marc', phrase: 'I&rsquo;m pretty sure someone switched chairs with me. It&rsquo;s okay, but this one bothers me' },\r\n        { author: 'Jen', phrase: 'You&rsquo;ve been Mom&rsquo;d' },\r\n        { author: 'Marc', phrase: 'You&rsquo;re the Steph Curry of ???' },\r\n        { author: 'Jen', phrase: 'I, 100%, would be able to stick my hand up a cow&rsquo;s butt' },\r\n        { author: 'Jen', phrase: 'Small Bananas' },\r\n        { author: 'Aiden', phrase: 'Made me feel hot inside' },\r\n        { author: 'McGinnis', phrase: 'This is the arcade of life. It&rsquo;s just not fair' },\r\n        { author: 'Will', phrase: 'This is the worst arcade ever!' },\r\n        { author: 'Roger', phrase: 'You&rsquo;re all to pedantic for me. I&rsquo;m an ??? cosmopolitan' },\r\n        { author: 'Will', phrase: 'It sets the coding mood' },\r\n        { author: '???', phrase: 'Therapy Fabio' },\r\n        { author: 'Mike R.', phrase: 'How many days into our tour does the stabbing start?' },\r\n        { author: 'Mike R.', phrase: 'Yea, go listen to Johnny Cash. He&rsquo;s a bad mama jama' },\r\n        { author: 'Jen', phrase: 'It&rsquo;s like social media is Yoko Ono and broke up the band' },\r\n        { author: 'Will', phrase: 'I think you should just stop at butt' },\r\n        { author: 'Cathleen', phrase: 'CRAY CRAY' },\r\n        { author: 'Charles', phrase: 'This is me stepping outside of myself' },\r\n        { author: 'Will', phrase: 'I&rsquo;m not a fan of anyone' },\r\n        { author: 'Will', phrase: 'Guys, I feel ashamed of my bad jokes lately' },\r\n        { author: 'Jen', phrase: 'I haven&rsquo;t punched Marc since I&rsquo;ve returned' },\r\n        { author: 'Wayne', phrase: 'Baby Jesus don&rsquo;t need no text updates' },\r\n        { author: 'Megan', phrase: 'It&rsquo;s never not nuts' },\r\n        { author: 'Wayne', phrase: 'You&rsquo;re as old as you are' },\r\n        { author: 'Cathleen', phrase: 'I got a degree from Trump University' },\r\n        { author: 'McGinnis', phrase: 'Dietrich is the worst!' },\r\n        { author: 'Will', phrase: 'Egg technology is so much better these days' },\r\n        { author: 'Adam', phrase: 'You can&rsquo;t hit!' },\r\n        { author: 'Roger', phrase: 'It&rsquo;s the classic loose bun' },\r\n        { author: 'Adam', phrase: 'Awareness isn&rsquo;t gonna feed the chickens' },\r\n        { author: 'Mike R.', phrase: 'Ah! I just poured bean juice in my drawer' },\r\n        { author: 'McGinnis', phrase: 'There&rsquo;s nothing worse than a grumpy hangover badger!' },\r\n        { author: 'Adam', phrase: 'Six boguses on the malarkey scale' },\r\n        { author: 'Jen', phrase: 'It looks like a dime bag (talking about pumpkin seeds)' },\r\n        { author: 'Wayne', phrase: 'You better tell me it looks great even if it doesn&rsquo;t' },\r\n        { author: 'Jen', phrase: 'The shh-nike&rsquo;s are HOT!!!' },\r\n        { author: 'Nick', phrase: 'These are not ??? fingers. THESE are ??? fingers' },\r\n        { author: 'McGinnis', phrase: '<i>To Roger:</i><br>Pretty good teeth over there' },\r\n        { author: 'Wayne', phrase: 'Pride of the GORMONTS' },\r\n        { author: 'McGinnis', phrase: 'Me covering a camera. I mean that&rsquo;s very out of character' },\r\n        { author: 'Adam', phrase: 'Is chilli technically a salad?' },\r\n        { author: 'Adam', phrase: 'He&rsquo;s got a fluffy ball guy in China' },\r\n        { author: 'Adam', phrase: 'I don&rsquo;t joke about analytics<br>(in Batman voice)' },\r\n        { author: 'Jen', phrase: 'Crud in a bucket' },\r\n        { author: 'Wayne', phrase: 'I usually try to sneak but I&rsquo;m bad at it' },\r\n        { author: 'Marc', phrase: 'What are your intentions with the DVD?' },\r\n        { author: 'Wayne', phrase: 'I&rsquo;m not a princess!' },\r\n        { author: 'Jen', phrase: 'I want a 3 foot Snickers bar' },\r\n        { author: 'Mike ???', phrase: 'Sometimes I just want to kick stuff in excitement' },\r\n        { author: 'Jordan', phrase: 'That&rsquo;s only for at home!' },\r\n        { author: 'Marc', phrase: 'The Biebs has a hold of him' },\r\n        { author: 'Roger', phrase: 'I felt like a derpy Anne Hathaway' },\r\n        { author: 'McGinnis', phrase: 'My inner genius was just like WOOO000ooo!' },\r\n        { author: 'Will', phrase: 'It&rsquo;s about the brownies at the end' },\r\n        { author: 'Marc', phrase: 'She&rsquo;s jacked too! She can hold a whole girl' },\r\n        { author: 'Adam', phrase: 'We&rsquo;re all Casey Neistat&rsquo;s wife right now' },\r\n        { author: 'Nick', phrase: 'There&rsquo;s no stab button, right?' },\r\n        { author: 'Jen', phrase: 'I itched my eyeball with my chicken wing finger and now my eye is burning!' },\r\n        { author: 'Jen', phrase: 'I couldn&rsquo;t give 2 poops out the window' },\r\n        { author: 'Nick', phrase: 'Can I eat that?' },\r\n        { author: 'Adam', phrase: 'I was briefly turdy to you' },\r\n        { author: 'Cathleen', phrase: 'Either someone&rsquo;s getting murdered or there is a pterodactyl outside my house' },\r\n        { author: 'Jen', phrase: 'I didn&rsquo;t get STUPID!!!' },\r\n        { author: 'Jen', phrase: 'Respect the peanut butter' },\r\n        { author: 'Jen', phrase: 'What do you think we are? The Interactive Department?' },\r\n        { author: 'Charles', phrase: 'But I&rsquo;m cutesy!' },\r\n        { author: 'Jen', phrase: 'I have never done anything wrong. I am a perfect person' },\r\n        { author: 'Marc', phrase: 'I&rsquo;m a terrible estimator of time' },\r\n        { author: 'Wayne', phrase: 'You got something against the Fonz?!' },\r\n        { author: 'Adiba', phrase: 'It was like the faceless assasin in Game of Thrones' },\r\n        { author: 'Jen', phrase: 'On the inside that&rsquo;s who I really am. Just a grumpy man with a mustache who wants to eat meat' },\r\n        { author: 'Mike R.', phrase: 'I couldn&rsquo;t find the arm emoji so instead I used the drum stick' },\r\n        { author: 'Adam', phrase: 'It&rsquo;s a bear related, Russian related thing' },\r\n        { author: 'Marc', phrase: 'It&rsquo;s like Jell-o meat' },\r\n        { author: 'Shawn', phrase: 'The internet can&rsquo;t handle me' },\r\n        { author: 'Mike R.', phrase: 'Lit like a night light' },\r\n        { author: 'McGinnis', phrase: 'It&rsquo;s like taking a banana, an apple, and a pear and turning them into a pineapple!' },\r\n        { author: 'McGinnis', phrase: 'It feels like I&rsquo;m always here' },\r\n        { author: 'McGinnis', phrase: 'You&rsquo;re not gonna ride that Big Mac wave forever!' },\r\n    ] %}\r\n    {% set phrases = shuffle(phrases) %}\r\n{% else %}\r\n  {% set phrases = [{ author: '', phrase: 'Welcome!' }] %}\r\n{% endif %}\r\n\r\n    <h1>&ldquo;{{ phrases[0].phrase|raw }}&rdquo;</h1>\r\n    <p style=\"padding-left: 20px; text-align: right;\"><i>{{ phrases[0].author }}</i></p>","contentSource":"field","contentUrl":"","slug":"random-quote","summary":"","title":"Random Quote","template":"__none__"},{"content":"{# Import _self to use macro below #}\r\n{% import _self as self %}\r\n\r\n{# Start Snippet Display #}\r\n<h2>Entry Search</h2>\r\n<div class=\"g-flex g-flex-nowrap g-gap-3\">\r\n  <div class=\"field\">\r\n    <div class=\"input\">\r\n      <input class=\"text fullwidth\" form=\"guide\" type=\"text\" v-model=\"{{ vueString1 }}\" @keyup.enter=\"$refs.searchButton.click()\" />\r\n    </div>\r\n  </div>\r\n  <a class=\"btn submit\" :href=\"'?search=' + {{ vueString1 }}\" ref=\"searchButton\">Search</a>\r\n</div>\r\n\r\n{% set query = craft.app.request.getQueryParam('search') %}\r\n{% if query ?? false %}\r\n  <on-load @loaded=\"{{ vueString1 }} = '{{ query }}'\"></on-load>\r\n  <div>\r\n    {% set elements = craft.entries.status(null).search(query).all() %}\r\n      \r\n    {# Table columns. Add more columns to show more entry data (such as the value of the field you are searching for). #}\r\n    {% set data = {\r\n      title: 'Search Results',\r\n      data: elements\r\n    } %}\r\n    \r\n    {# Display table #}\r\n    {% if elements|length %}\r\n      {{ self.table(data) }}\r\n    {% endif %}\r\n  </div>\r\n{% endif %}\r\n\r\n{# Use a macro to cut down on repeated code if you wanted to show more than one field at a time. #}\r\n{% macro table(data) %}\r\n  <table class=\"g-table\">\r\n    <thead>\r\n      <tr>\r\n        <td>{{ data.title }}</td>\r\n        <td>Edit Page</td>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n    {% for row in data.data %}\r\n      <tr>\r\n        <td><a href=\"{{ row.url }}\" target=\"_blank\" rel=\"nofollow noopener\" title=\"View element’s page in a new window.\"><span class=\"status {{ row.status }}\"></span><span>{{ row.title }}</span></a></td>\r\n        <td><a class=\"btn icon edit\" href=\"{{ row.cpEditUrl }}\" target=\"_blank\" rel=\"nofollow noopener\" title=\"Go to element edit page.\">Edit</a></td>\r\n      </tr>\r\n    {% endfor %}\r\n    </tbody>\r\n  </table>\r\n{% endmacro %}","contentSource":"field","contentUrl":"","slug":"search-entries","summary":"","title":"Search Entries","template":"__none__"},{"content":"<p>The {{ craft.guide.var(\"clientName\") }} website has been set up to automatically optimize your content for SEO and social sharing. SEO titles, descriptions and images are extracted from the fields that make up the content of your entries. These are also used to populate Twitter Cards and Facebook's OpenGraph when a page is shared on social media.</p>\r\n\r\n{% if plugin('seomatic') %}\r\n    <grid grid-type=\"text-sidebar\">\r\n        <div>\r\n            <h2>SEO and Social Previews</h2>\r\n            <p>When you save an entry, a basic preview of what is shown on Google, Twitter, and Facebook can be found in the sidebar, below the publishing options.</p>\r\n            <p>Best practices for titles and descriptions will be adhered to for each respective service. Images will be cropped to the suggested dimensions used when sharing on social media channels.</p>\r\n        </div>\r\n        <div>\r\n            {{ craft.guide.component('image', { asset: craft.assets.filename('seo-seomatic-seo-preview.png').one() }) }}\r\n        </div>\r\n    </grid>\r\n\r\n    <hr>\r\n\r\n    <grid grid-type=\"2-column\">\r\n        <div>\r\n            <h2>SEO Settings Fields</h2>\r\n            <p>On rare occasions, you may need to override the displayed information for search engines or for social sharing. This can be done with an SEO Field found within your entries.</p>\r\n            <p>You may choose which fields are overriden by adjusting the setting in the SEO field. For example, if you would like to change the SEO image on an entry, you may choose to select another fields where the image is pulled from or you may upload a new image.</p>\r\n        </div>\r\n        <div>\r\n            {{ craft.guide.component('image', { asset: craft.assets.filename('seo-seomatic-field.png').one() }) }}\r\n        </div>\r\n    </grid>\r\n\r\n    <hr>\r\n\r\n    <h2>Sitemap</h2>\r\n    <p>A sitemap is included that helps search engines crawl the content on your website. If you are using SEO tools, like Google Webmaster Tools, you may submit your sitemap by using this link: <code>{{ siteUrl }}sitemap.xml</code></p>\r\n\r\n    <hr>\r\n\r\n    <h2>Structured Data</h2>\r\n    <p>At a minimum, Google and other search engines look for a <code>title</code> tag and a <code>description</code> meta tag to display your page content in their search results. Search engines can also accept more information about your products and services by using a standard format, called structured data.</p>\r\n    <p>For example, a business location can inform search engines about its store hours by using the <a href=\"https://schema.org/LocalBusiness\" target=\"_blank\">LocalBusiness schema</a> and passing store hour information into their structured data.</p>\r\n    <p>The {{ craft.guide.var(\"clientName\") }} website uses JSON-LD to display structured data for search engines. Google provides a tool to see what data is being viewed by search engines, called the <a href=\"https://search.google.com/structured-data/testing-tool\">Structured Data Testing Tool</a>.</p>\r\n{% endif %}","contentSource":"field","contentUrl":"","slug":"seo","summary":"","title":"SEO","template":"__none__"},{"content":"<div {% if guideDisplayArea == 'uri' %}class=\"content-pane g-mb-3\"{% endif %}>\r\n<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## SEO Hierarchy\r\n\r\nSEOmatic uses a hierarchy to determine the SEO meta information for an entry. It starts with Global SEO at the base. The settings for each section in Content SEO will override Global SEO fields. If the meta information pulled from Content SEO in still not optimized, the SEO field can be used to set SEO values on a per-entry basis.\r\n\r\nSEOmatic is designed to pull from content fields so you don’t need to enter content into the SEO entry field unless you find an edge case where it’s necessary to do so.\r\n\r\n{% endfilter %}\r\n</div>\r\n</div>\r\n\r\n{% if guideDisplayArea == 'uri' %}\r\n  {% css %}\r\n  #content-container {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n  }\r\n  {% endcss %}\r\n{% endif %}","contentSource":"field","contentUrl":"","slug":"seo-hierarchy","summary":"","title":"SEO Hierarchy","template":"__none__"},{"content":"{# Find images within a specific asset volume. #}\r\n{% set volume = 'makerArticleImages' %}\r\n\r\n<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Images that need a focal point\r\n\r\nThese images are missing a focal point and might get cropped incorrectly.\r\n\r\n{% endfilter %}\r\n</div>\r\n\r\n{# Display images that are missing focal points. #}\r\n{% cache %}\r\n{% set assets = craft.assets.volume(volume ?? null).kind('image').all() %}\r\n\r\n{% for asset in assets %}\r\n  {% if not asset.hasFocalPoint %}\r\n    {% set relatedEntries = craft.entries.relatedTo(asset).all() %}\r\n    <div style=\"display: grid; grid-template-columns: 300px 1fr; gap: 10px; margin-top: 10px;\">\r\n      <img loading=\"lazy\" src=\"{{ asset.url }}\" width=\"300\" />\r\n      <div>\r\n        <a class=\"btn submit\" href=\"{{ asset.cpEditUrl }}\">Edit</a>\r\n        <p><strong>Title:</strong> {{ asset.title }}</p>\r\n        <p><strong>File name:</strong> {{ asset.filename }}</p>\r\n        <p><strong>Width:</strong> {{ asset.width }}px</p>\r\n        {% if relatedEntries|length %}\r\n          <p><strong>Appears in:</strong></p>\r\n          <ul>\r\n            {% for relatedEntry in relatedEntries %}\r\n                <li><a href=\"{{ relatedEntry.url }}\">{{ relatedEntry.title }}</a></li>\r\n            {% endfor %}\r\n          </ul>\r\n        {% endif %}\r\n      </div>\r\n    </div>\r\n  {% endif %}\r\n{% endfor %}\r\n{% endcache %}","contentSource":"field","contentUrl":"","slug":"to-do-missing-focal-point","summary":"","title":"To Do – Missing Focal Point","template":"__none__"},{"content":"{% cache %}\r\n{% set authors = craft.entries.section('person').type('contentAuthor, teamMember').all() %}\r\n\r\n<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Author Info\r\n\r\nHere is a list of all people entries (Content Authors and Team Member entry types) to identify which authors have bylines and which don’t.\r\n\r\n{% endfilter %}\r\n</div>\r\n\r\n{% if authors|length %}\r\n  <table class=\"g-table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Author Info</th>\r\n        <th>In Blog Posts?</th>\r\n        <th>Edit</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n    {% for author in authors %}\r\n      {% set relatedPosts = craft.entries.section('blogPost').relatedTo(author).one() %}\r\n      <tr>\r\n        <td>{{ author.title }}</td>\r\n        <td>{{ author.authorByline }}</td>\r\n        <td>{% if relatedPosts ?? false %}YES{% else %}NO{% endif %}</td>\r\n        <td><a class=\"btn submit\" href=\"{{ author.cpEditUrl }}\">Edit</a></td>\r\n      </tr>\r\n    {% endfor %}\r\n    </tbody>\r\n  </table>\r\n{% endif %}\r\n{% endcache %}","contentSource":"field","contentUrl":"","slug":"to-do","summary":"","title":"To Do – People Fields","template":"__none__"},{"content":"{% cache %}\r\n{% set width = 1008 %}\r\n{% set assets = craft.assets.volume('articleMetaImages').width('< ' ~ width).kind('image').all() %}\r\n\r\n<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Images that are too small (less than {{ width }}px wide)\r\n\r\nThese images should be replaced with a .jpg that is at least 3024px wide.\r\n\r\n{% endfilter %}\r\n</div>\r\n  \r\n{% for asset in assets %}\r\n  {% set relatedEntries = craft.entries.relatedTo(asset).all() %}\r\n  <div style=\"display: grid; grid-template-columns: 300px 1fr; gap: 10px; margin-top: 10px;\">\r\n    <img loading=\"lazy\" src=\"{{ asset.url }}\" width=\"300\" />\r\n    <div>\r\n      <a class=\"btn submit\" href=\"{{ asset.cpEditUrl }}\">Edit</a>\r\n      <p><strong>Title</strong><br>{{ asset.title }}</p>\r\n      <p><strong>File name</strong><br>{{ asset.filename }}</p>\r\n      <p><strong>Width</strong><br>{{ asset.width }}px</p>\r\n      <p><strong>Appears in</strong></p>\r\n      <ul>\r\n          {% for relatedEntry in relatedEntries %}\r\n              <li><a href=\"{{ relatedEntry.url }}\">{{ relatedEntry.title }}</a></li>\r\n          {% endfor %}\r\n      </ul>\r\n    </div>\r\n  </div>\r\n{% endfor %}\r\n{% endcache %}","contentSource":"field","contentUrl":"","slug":"to-do-small-images","summary":"","title":"To Do – Small Images","template":"__none__"},{"content":"<div class=\"g-prose g-prose-sm\">\r\n{% filter markdown('gfm') %}\r\n\r\n## Working With Files\r\n\r\n{% endfilter %}\r\n</div>\r\n\r\n<table class=\"g-table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Volume/Description</th>\r\n      <th>Image specs</th>\r\n      <th>Notes</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>Work Asset – Used in the body of work pages</td>\r\n      <td>Upload highest res image (up to 3516px wide). In most places these images will not be cropped, so the height can be based on the content of the image.</td>\r\n      <td>In the Work Asset volume, organized by project subfolders (kebab-case)</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Video Poster</td>\r\n      <td>\r\n        <p>These images are shown before a video is played. They should be based on the highest res screenshot of the video we can get, with no video player controls present.</p>\r\n        <p>These images will replace looping animation videos if the user turns off motion, so these can be treated like an image that represents what would have been shown in the video.</p>\r\n        <p>Upload highest res image (up to 3516px wide). In Case Studies and Provoke articles (blog, news, etc) these images will not be cropped, so the height can be based on the content of the image.</p>\r\n      </td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <td>Article Body Images – Used in the body of Blogs, News, Basic Pages and other content entries.</td>\r\n      <td>Upload highest res image (up to 3024px wide). These images will not be cropped, so the height can be based on the content of the image.</td>\r\n      <td>While we don’t have to organize these images, it might be easier to find images that are broken down into subfolders based on their content. We can leave that up to our content folks to determine if they want to move images into subfolders.</td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\nArticle Meta Images – Used as thumbnails around the site, SEO images, and at the top of article pages (blog, news, etc)</td>\r\n      <td>\r\n        <p>Upload highest res image (up to 3024px wide).</p>\r\n        <p>As image thumbnails, these images will get cropped to a 287:191 ratio.</p>\r\n        <p>As SEO images, these images will get cropped based on the specs for each social network. If the images works well as an image thumbnail, they should look fine as SEO images.</p>\r\n        <p>When displayed at the top of an article page (blog, news, etc) the image will not be cropped, so the full image can be seen.</p>\r\n      </td>\r\n      <td>Be sure to set a focal point, especially when people are the subject of an image, so we don’t cut off someone’s head or any other important portion of an image.</td>\r\n    </tr>\r\n    <tr>\r\n      <td>People – Used as bio headshots on the About page, or as author photos</td>\r\n      <td>\r\n        <p>Upload highest res image (up to 3024px wide).</p>\r\n        <p>When used as a bio photo, the photos will get cropped to a 450:317 ratio.</p>\r\n        <p>When used as an author photo, the image will get cropped to a square (1:1) format and it will be displayed in a circle on the site, so the corners will be hidden.</p>\r\n        <p>All people photos can also be used as article thumbs or on article pages, so images should be high res and cropped if needed since in some cases the full image will be shown.</p>\r\n      </td>\r\n      <td>\r\n        <p>It’s really important that we set focal points on people images. Once a focal point is set you can see all of the crops of the image in the image previews.</p>\r\n        <p>These images are all stored in one asset volume, so we might want to add some subfolders to organize files based on how they’re used on the site.</p>\r\n        <p>The culture and professional photos from the old site have been copied over into the People asset volume and we can use these images around the site. They can be dragged out of their existing subfolder if we want to organize those images differently.</p>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>Icons</td>\r\n      <td>\r\n        <p>Icons can be uploaded as SVG or PNG files, as long as the PNG files have transparent backgrounds. SVG is preferred when possible. These images will be scaled to 96px high, but PNGs should be uploaded at a height of at least 288px. If needed, some extra space can be added above or below the image to help with centering logos together.</p>\r\n        <p>The width of icons can be based on the width of the image. Where vertical padding can be used, there shouldn’t be any horizontal padding.</p>\r\n      </td>\r\n      <td></td>\r\n    </tr>\r\n    <tr>\r\n      <td>Documents – PDFs and other documents available for download by the user</td>\r\n      <td>These documents will not be resized or changed by the CMS (unless the file name has to be adjusted). Documents should be optimized to be as small as possible (file size) while maintaining desired quality.</td>\r\n      <td>File names should be kebab-case (lowercase and words separated by hyphens) and should be updated to remove DS naming conventions, like job numbers and version numbers.</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Animations</td>\r\n      <td>This volume is used solely for images and other files needed for animations around the site. Images here will not get resized, so they should be optimized before being uploaded.</td>\r\n      <td>SVG files should be added to the svg subfolder, and other files should be organized into a subfolder for each animation.</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Static</td>\r\n      <td>Assets that are used by developers as a way to upload and organize files onto the object storage bucket. These assets will not be resized and should be optimized before being uploaded.</td>\r\n      <td></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n","contentSource":"field","contentUrl":"","slug":"working-with-files","summary":"","title":"Working With Files","template":"__none__"}]}

## 3.0.0 - 2021-08-22
### Added
- The Organizer has been rewritten so a single guide can be displayed in multiple areas around the CP.
- Guides can be placed in unique places, based on CSS selector.
- Guides can be added to a specific page in the CP, based on page URI and CSS selector.
- Guides can be placed on Global edit pages.
- A variable, `guideDisplayArea`, can be used to modify guides based on what area they are placed in.
- When grouped together, guides can be navigated via a menu in the top-right side of the guide display.
- A new Guide Variable setting has been for Project Name and it can be rendered using `{{ craft.guide.var('projectName') }}`.
- A button, labeled `TL;DR`, has been added to let you hide or show portions of guides.
- The guide editor groups components by tabs when using the code editor.
- Snippet components have been added to the Editor.
- Tailwind CSS-based utility classes have been added to assist in styling.
- Vue 3 variables—along with Twig helpers—have been added so that guides can make some template-based state changes.
- An `on-load` Vue component has been added to set Vue variables upon guide render.

### Changed
- Guides no longer need to be selected for UI elements when in an environment where `allowAdminChanges` is enabled.
  - A Guide UI element can be placed in the field layout designer, then the guide that is populated there can be picked from within one of pages that use that field layout.
- Guides added to the Guide CP area now live together at `/guide`, instead of the Guide CP Section starting at the first guide’s individual page URI.
- When added to element edit pages, guides now live above or below the edit fields, instead of in the sidebar as buttons that open up modals.
- All guides are in the Twig format and the guide format setting has been removed.
  - You can use the `{% filter markdown('gfm') %}` filter around markdown content to render it in a guide.
- Tip Callout guide component has been replaced by Tip and Warning components that look more like native Craft info boxes.
- Guides are now rendered in Vue 3.
- Guide now welcomes you in three dimensions.

### Fixed
- Guide template syntax errors are now caught in try/catch blocks and throw an error.
- Fixed times where the Guide code editor sometimes didn’t load correctly.
- Fixed some Guide 2 UI styling issues.

### Removed
- See [Upgrading from Guide 2](https://guide.wbrowar.com/upgrading) for suggestions around removed features.
- Rebrand settings have been removed.
- Per-guide user permissions have been removed.
- The `<grid>` tag has been removed.
  - To eventually be replaced by container query utility variants.
- Removed the `craft.guide.getAllForUser()` Twig variable.
- Guide no longer supports using `.md` templates.
- Guides no longer imports guide data and assets from an external repo.

## 2.2.1 - 2020-10-31
### Fixed
- Composer 2 compatibility [#34](https://github.com/wbrowar/craft-guide/issues/34)

## 2.2.0 - 2020-08-04
### Added
- Add guides to element edit pages using a Guide IU element in the Craft 3.5 field layout designer.
- Add guides to asset edit pages.
- In situations where guides can get lost due to project config changes, a new Guide Recovery button in the Guide Utility can reset all guides to the Available Guides column of the Guide Organizer.

### Changed
- Guide now requires Craft 3.5+
- Deprecated Header icon asset field and added a header icon text input in Guide Settings.
- Minor CSS changes.
- Documentation has been moved to a [separate URL](https://guide.wbrowar.com).

### Fixed
- Fixed some style issues after upgrading to Craft 3.5.


## 2.1.5 - 2020-07-26
### Fixed
- Fixed an issue saving guides when using Postgres [#31](https://github.com/wbrowar/craft-guide/issues/31)


## 2.1.4 - 2020-04-25
### Added
- A new max-width setting has been added to the main wrapper of all guide content.
- A warning is displayed when the `{ craft.guide.component() }` Twig variable is used in the LITE edition of Guide.

### Changed
- Twig image components now display a message when a valid asset or image URL has not been passed in.
- Twig image components now use the native `loading` attribute to lazy load images. All existing Twig image components will use native lazy loading, and the `lazyLoad` argument will be ignored.
- New Markdown image components will have the `loading` attribute added to them by default.

### Fixed
- Fixed an error that occurs on some pages in the CP [#27](https://github.com/wbrowar/craft-guide/issues/27#issue-587394637).
- Fixed an error when adding template guides in a Windows environment [#29](https://github.com/wbrowar/craft-guide/issues/29).
- Fixed an error that prevented guides templates from being imported when an Organizer hadn’t been created yet [#30](https://github.com/wbrowar/craft-guide/issues/30).


## 2.1.3.3 - 2020-01-29
### Changed
- Bumped required version of Craft to 3.4.0.

### Fixed
- Fixed style bug on Guide Dashboard widgets based on a change from Craft 3.4 RC to 3.4 release.


## 2.1.3.2 - 2020-01-16
### Fixed
- Fixed style bug on Guide Dashboard widgets.


## 2.1.3.1 - 2020-01-15
### Fixed
- Fixed issue preventing plugin Javascript from loading.


## 2.1.3 - 2020-01-15
### Added
- Added drop targets to make it easier to drag-and-drop guides in the Organizer [#25](https://github.com/wbrowar/craft-guide/issues/25).

### Changed
- Bumped minimum Craft version to `^3.4.0-RC1`.
- Updated styles for Craft 3.4.
  - _NOTE: This involved making some changes to Guide’s default styles and custom styles may need to be adjusted._
- Changed the label of "Unused Guides" to "Available Guides" in the Organizer [#23](https://github.com/wbrowar/craft-guide/issues/23).
- Images loaded through the Twig component are now lazy loaded via the native lazy attribute.

### Fixed
- Fixed a bug that didn't display guides when creating a new category.
- Fixed path to Widget icon.


## 2.1.2 - 2019-08-25
### Fixed
- Fixed a bug that occurred when templates were removed from the Templates Path directory.


## 2.1.1 - 2019-08-16
### Fixed
- Fixed a bug where the Guide utility wasn’t available in the FREE edition.


## 2.1.0 - 2019-08-13
### Added
- File contents in guide templates can be moved to the Content Field in one click—making it easier to go from importing templates to editing their content in the Guide Editor.
- A Guide utility has been added to the Utilities CP section.
  - Guides can be imported from [Craft Guide Templates](https://github.com/wbrowar/craft-guide-templates)
  - Guide data stored in the database can be exported from one environment (dev, staging, etc...) then imported into another environment.
  - The layout of guides in the Organizer are exported and imported, too.
- Guides can now be duplicated from the Guide Organizer via a new action button found on each guide (click on the gear to see guide actions).

### Changed
- Importing guides from [Craft Guide Templates](https://github.com/wbrowar/craft-guide-templates) has been moved from Settings to the Guide Utility.
  - This makes it possible to import guides on a server where `allowAdminChanges` is set to false.
- When saving a guide, `-1` will be appended to the slug if the slug is not unique.


## 2.0.1 - 2019-07-27
### Added
- A new variable, `craft.guide.include()`, lets you include the content of one guide into another guide.
  - Using this variable renders the guide content in a Twig-based guide regardless of whether the format of the imported guide is Twig or Markdown.
- An "Include Guide" component has been added for Twig-based guides
  - If you do not see the "Include Guide" component, try visiting the Components settings page in Guide Settings, make sure "Include Guide" is enabled, then re-save the Component settings page.
- Added a [Recipes, Tips, and Tricks](https://github.com/wbrowar/craft-guide/blob/master/README.md#recipes-tips-and-tricks) section to the README.

### Changed
- The "Markdown" component now defaults to GitHub Flavored Markdown to match Guide’s default Markdown flavor.

### Fixed
- Fixed a bug that did’t allow the editor to work when `devMode` was set to `false`.
- Made the CSS selector of Guide iframe content more specific to avoid affecting Live Preview iframes.
- Gave import options unique IDs to avoid multiple selects when clicking on a checkbox label.


## 2.0.0 - 2019-07-24

> {warning} Please upgrade to Guide 1.4.0 before upgrading to 2.0.0. [Tips for upgrading from Guide 1 can be found here.](https://github.com/wbrowar/craft-guide/blob/master/README.md#upgrading-from-guide-1)

### Added
- Guides can be imported from [Craft Guide Templates](https://github.com/wbrowar/craft-guide-templates) within Guide’s settings page
- Added Organizer
  - Drag and drop interface for creating and managing guides
- Added Ace to the guide editor for syntax highlighting in Markdown and Twig
- Added component snippets
  - Drag a component into the editor to place it's code
  - Automatically generated image components are created based on image assets in your Guide Assets Volume
  - Less-used components can be hidden from the guide editor using the Guide settings page
- External documentation can be used for the content of a guide as an iframe
  - Works great with VuePress-style docs where everything is self contained
- Guides can be added to the sidebar on categories edit pages and user edit pages
- Guides can now use Twig's `include` functions to pull in external templates
- Styling guide content can now be done through color fields in the CMS
- A custom logo can be uploaded to replace the Guide icon in guide headers
- A print style sheet is added to Guide pages to remove Craft’s UI and to extend the content to fill a piece of paper

### Changed
- Guide widgets now pull their content from guides created in the Organizer
- Permissions for who may edit guides have been moved out of plugin settings and into individual guides
- Minimum requirement for Craft has been changed to `3.2`

### Removed
- Removed table-based Navigation
  - CP Navigation is now managed in the Organizer
- Removed Email Support, Welcome Widget, and Website Updates widgets
  - The functionality of these widgets can be found in a new plugin, [Communicator](https://plugins.craftcms.com/communicator)
- Custom Variables settings have been removed
  - Use Craft’s `alias()` and `getenv()` functions to get
- Removed the `updateGuideCpNav()` Twig function


## 1.4.0 - 2018-03-31
### Added
- Added a new `Edit Guide Navigation` permission
- Added Guide 2.0 deprecation warnings for widget features
  - Guide 2.0 is in the works! The Email Support, Website Updates, and Welcome Widget will all be removed from Guide in 2.0, but a new plugin, called Communicator, is available for free and includes all of these widgets. You can download it in the Craft Plugin Store: https://plugins.craftcms.com/communicator 

### Changed
- Bumped the minimum required version of Craft to `3.1.20.1`
- CP navigation management has been moved from the Guide plugin settings page to its own CP tab

### Fixed
- Fixed user permissions set in the navigation not getting validated correctly


## 1.3.2 - 2018-09-18
### Fixed
- Fixed an issue that occurred when converting template guides to User Guides on some servers ([#10](https://github.com/wbrowar/craft-guide/issues/10))


## 1.3.1 - 2018-08-21
### Fixed
- Fixed an issue that caused subnav to disappear when in Guide CP section pages ([#2](https://github.com/wbrowar/craft-guide/issues/2))
- Fixed a bug that occurred when all Guide Nav items are removed ([#9](https://github.com/wbrowar/craft-guide/issues/9))


## 1.3.0 - 2018-07-09
### Added
- Added a new widget, Email Support, that lets clients send a custom message and basic browser and site details to a support contact
  - Support contacts can be added in Guide plugin settings
- Added options to turn off entire features from the Guide plugin settings page
  - These settings can also be multi-environment aware by adding them to config/guide.php
  - NOTE: Craft cannot globally disable widgets, so disabling a widget requires that instances of that widget are manually removed

### Changed
- Updated the plugin icon
- Changed the name of "Admin‘s Log" to "Website Updates" throughout
- Cleaned up unused classes

### Fixed
- Fixed a bug where the Guide CP section navigation wasn‘t scrolling upon click


## 1.2.1 - 2018-04-29
### Fixed
- Fixed an issue where the icon wasn’t appearing in PHP 7.2

## 1.2.1 - 2018-03-25
### Changed
- In places where the template mode is being set, the template mode is returned back to what it previously was

### Fixed
- Fixed a bug that occurred when `{{ guideVar() }}` was called and no Custom Variables were set
- Fixed a bug that prevented User Guides from being deleted on Entry Edit pages
- Hid the "Delete" button on new User Guides


## 1.2.0 - 2018-03-09
### Added
- Added the ability to add, edit, and delete User Guides in the Guide CP Section
  - Existing template-based guides can continue to be edited via Twig templates, or can be "converted" over to a User Guide—stored in the database
  - Guides in the CP section can be created using Twig or Markdown
- Added a new Welcome Widget
  - Unlike the Guide Widgets that are created for individual users, this widget can be set in one place and updated across all users who have this widget installed
  - To edit Welcome Widget's content, use the "Guide > Welcome Widget" tab in the global sidebar
- Added an Admin's Log widget
  - Create a changelog for your clients and collaborators
  - Manage the log in the "Guide > Admin's Log" tab in the global sidebar
  - Logs are shown with the newest first and users can choose how many log entries they would like to see on their dashboard

### Changed
- `updateGuideCpNav` now only sets the Guide CP Section subnav when no navigation has been created
  - Going forward, use `updateGuideCpNav` in your Guide CP templates to set the initial subnav links, then edit the subnav in Guide plugin settings
  - This was changed to help facilitate the ability to manage the subnav in plugin settings, as well as to help reduce unneeded re-setting of the subnav on every page load

### Fixed
- Fixed a bug when looking for a Content Guide on an entry edit page when an entry wasn't enabled


## 1.1.5 - 2018-02-17
### Changed
- Added `margin` above and below `hr` tags

### Fixed
- Fixed a bug that duplicated encrypted custom `guideVars()`


## 1.1.4 - 2018-02-16
### Added
- You can now store custom `guideVar()` variables by setting their keys and values in Guide Plugin Settings
  - You can store plain strings, as well as encrypted strings for displaying passwords and sensitive information in your CMS guide 

### Changed
- Modified the style of the Sections dropdown to show hierarchy based on element types (`h1, h2, h3, and h4`)

### Fixed
- Fixed some wonky migration bugs
- Fixed a bug that occurred when Admin Bar wasn't installed
- Fixed guide CP section not displaying the currently selected page in the sidebar nav


## 1.1.3 - 2018-02-10
### Added
- Added a `guide_fpo` class that outlines an element in a bright pink color so you don't forget to change it
  - Added this class around the output of `guideVar()` variables that haven't been set in Settings
- Admin Bar Widget is now validated via PHP
- Added the ability to change `guideQuery()` from `all` to either `one` or `count` by passing in a second parameter
- Added more examples to Components page

### Fixed
- Removed header styles that bled out of Admin Bar widget


## 1.1.2 - 2018-02-05
### Fixed
- Fixed Admin Bar widget not getting removed


## 1.1.1 - 2018-02-04
### Added
- Added Custom CSS preview in Guide plugin settings to make re-branding easier
- Add an [Admin Bar Widget](https://github.com/wbrowar/craft-3-adminbar)
  - If a user is on an entry that has a Content Guide it will appear in Admin Bar
- Added `guideAsset()` twig tag to get image assets based on their filename
- Added `guideQuery()` twig tag to query existing Content Guides
- Added `pluginEnabled()` twig tag to check to see if a plugin is installed
- Added a `config.php` file to override plugin settings (copy this to `config/guide.php` to get it to work)


## 1.1.0 - 2018-01-27
### Added
- Added collaborative guides to Entry edit pages
  - For each Entry Type you can set instructions that appear when clicking on a button in the sidebar
  - Users with the right permissions can edit these guides using either Markdown, Twig, or by pointing to a frontend template in the site's `templates` directory
- Added Twig extensions that make it easier to personalize guides that are copied from one client to another. See Settings for more information
- Added a "More info" button to the bottom of guides that appear in edit pages
  - This button can link to the Guide CP section, or anywhere else that could be useful for content editors (like Craft documentation pages)
- Added "Create Guides" and "Delete Guides" permissions
- Added CSS Custom Properties defaults above the Settings > Custom CSS field to make it easier to rebrand style containers
- Added a `max-width` to guides in the Guide CP Section. This can be adjusted in Setting > Custom CSS

### Changed
- Changed "Sections" button in Guide CP Section over to a button that should be clicked/tapped to show section links. Clicking or tapping the button will hide the sections links
- For consistency, changed `guide__code_block` to `guide_code_block` and `guide__code_inline` to `guide_code_inline`
- Updated Schema version
  - [looks at camera and breaks the fourth wall] This is my first time creating a migration, so if it doesn't work, please let me know.

### Fixed
- Fixed an issue that prevented Guide from being installed via the console
- Fixed a Javascript bug that prevented the ability to jump to sections on the Guide CP Section


## 1.0.2 - 2017-12-12
### Added
- Added a drop down subnavigation to jump down to a sections on a page
- Added a way to flag header elements as `data-guide-section`, which adds the element to the drop down subnav
- Added styles for table elements
- Added a new grid style for featuring screenshot images or other media

### Changed
- Made some tweaks and added some default CSS Custom Properties to guide.css.


## 1.0.1 - 2017-12-11
### Added
- Added new page to preview style components.

### Changed
- Made some tweaks and added some defaults to guide.css.

### Fixed
- Restrict loading guide.js to CP only.
- Fixed paths to all GitHub files


## 1.0.0 - 2017-12-05
### Added
- Initial release