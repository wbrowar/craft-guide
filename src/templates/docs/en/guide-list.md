# Guides

Guides are the pieces of content you can move around the Craft CMS CP (Control Panel). A guide can appear on the CMS Guide page, in a dashboard widget, on their own pages, popped out in slideouts, or any other page within the Craft CMS CP.

## CMS Guide

Multiple Guides can be collected together to form a CMS Manual on the CMS Guide. To get to this page click on the **Guide** menu item in the main menu.

If there are no guides on the CMS Guide page, clicking on the **Guide** menu item will take you to the **Guides** list page.

## Guides

The **Guides** page shows a list of the guides created in your Craft CMS project. From here you may manage your guides, create a new guide, and add guides to the CMS Guide page. The buttons in the **Actions** column let you preview a guide in a slideout, edit a guide’s content, or delete a guide that is no longer needed.

In order to view the **Guides** page, a Craft CMS user will need the `Edit Guides` permission, in addition to permissions for `Access the control panel` and `Access Guide`.

### Visiting a Guide Page

Each guide gets its own page in the CP. On the **Guides** page, the title of the guide links to its page in the CP. From here you can copy the URL and paste it in other places around the CP if you’d like your users to visit this guide directly.

<div class="readable guide-component-tip">
  <blockquote class="note tip">Guide pages are great places for site-specific data. Because you can use Craft CMS’s built-in Twig features, you can show lists of entries, image contact sheets, Commerce sales info, etc...</blockquote>
</div>

### Guide Slugs

Just like entries, each guide has a unique, machine-readable slug that identifies it. The slug can be used in Guide Components when embedding one guide inside of another guide or when creating a button that pops a guide up in a slideout.

The slug is generated from the guide’s **Title** field when a guide is brand new but you can customize it. Because a slug can be used in guide content, it’s a good idea to keep a slug once it’s created, but if you change a slug you can always go through your content and update it. The slug is also used as part of the page’s URL for a guide.

### Adding a Guide to the CMS Guide Page

When Guide is first installed the CMS Guide page will be empty. To add guides to the **Guide** page, click on the toggle in the **CMS Guide** column. A message will pop up confirming that the guide has been added. Next time you visit the **Guide** page you should see your guide there.

### Editing a Guide

Clicking on the **Edit** button for a guide will open the guide up in the Guide Editor. Changes made to a guide are immediately propagated throughout all places where a guide id displayed.

### Deleting a Guide

Clicking the **Delete** button will take you to a confirmation page. If you click on **Delete** here, the guide will permanently be deleted.
