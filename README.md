# SkrivLet

> SkrivLet /skriːˀv let/ - Danish for Write Easily 

![SkrivLet Logo](https://raw.githubusercontent.com/mattbegent/Umbraco.Community.SkrivLet/main/images/skriv-let-logo.png)

A clean WYSIWYG property editor for distraction free writing in Umbraco. Designed for Umbraco 13 (v14+ version coming soon)

## Demo

![SkrivLet Demo](https://raw.githubusercontent.com/mattbegent/Umbraco.Community.SkrivLet/main/images/skriv-let.gif)

## Installation 

You can install SkrivLet using 

    dotnet install Umbraco.Community.SkrivLet
    
or

    install-package Umbraco.Community.SkrivLet

This will add the SkrivLet property editor to your site. You should be then able to add a new data type and add it to your documents types.

## Usage

To use SkrivLet in your views you can use the RenderSkrivLet extension, for example if you have a SkrivLet property on your document with the alias `textContent` you could do:

    @await Html.RenderSkrivLet(Model.TextContent)

You'll need to add 

    @using Umbraco.Community.SkrivLet

For the view to be able to use the extensions

SkrivLet comes with some basic views, If you want to override the defaults your can put a replacement in your project in `Views/Partials/SkrivLet/` and this will override the built in views. Refer to the [basic built in views](https://github.com/mattbegent/Umbraco.Community.SkrivLet/tree/main/Umbraco.Community.Skrivlet/Views/Partials/SkrivLet) to get an example of the code required

## Styling

SkrivLet is designed to integrate within your existing website styles.

Each SkrivLet element has classes applied to them with a prefix of `sl`, which you can use to style how you wish.

If you need some styles while developing you can add a basic theme using:

    <link rel="stylesheet" href="~/App_Plugins/SkrivLet/basic-theme.css">

For that basic theme, the following are the CSS variables used and their defaults:

    --sl-article-max-width: 800px;
    --sl-base-font-family: Georgia, 'Times New Roman', Times, serif;
    --sl-base-color: #242424;
    --sl-link-color: #006fc6;
    --sl-link-color-hover: #5c5367;
    --sl-heading-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    --sl-heading-font-weight: bold;
    --sl-quote-border-color: #242424;
    --sl-quote-font-family: Georgia, 'Times New Roman', Times, serif;
    --sl-quote-font-style: italic;
    --sl-code-background-color: #f1f1f1;
    --sl-code-border-color: #242424;
    --sl-code-font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
    --sl-check-border-color: #C9C9C9;

## Extending

We'll be adding ways to add your own block types soon.
