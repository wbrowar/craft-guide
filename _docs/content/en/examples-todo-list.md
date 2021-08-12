---
title: To-Do List
description: 'Overview of Guide for Craft CMS'
position: 300
category: Recipes, Tips, and Tricks
version: 3.0.0
fullscreen: false
---

Create a list of entries that need to updated by content authors:

```twig
{# Gather all of the entries that need to be updated by modifying this query #}
{% set entries = craft.entries.all() %}

{# Display a list of the selected entries and provide the URL to their edit pages #}
{% if entries|length %}
  <table>
    <thead>
      <tr>
        <th>Entry</th>
        <th>Edit URL</th>
      </tr>
    </thead>
    <tbody>
      {% for entry in entries %}
        <tr>
          <td>{{ entry.title }}</td>
          <td>{{ craft.guide.component('button', { label: 'Edit', url: entry.cpEditUrl }) }}</td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
{% else %}
  <p>There’s nothing to update!</p>
{% endif %}
```

This might be added to a guide in a section that explains the publishing rules for this type of entry or maybe as the content of a Guide Dashboard widget.

To-do lists can also be handy for one-time migrations or to keep an eye on entries that lose required assets or relations as things get moved around or deleted.
