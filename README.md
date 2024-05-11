# 🚀Cybernetic Template - Astro + React

![Cybernetic Template](/src/static/images/preview.webp)
[<img src="/src/static/images/link-pro.png">](https://codexcode.store/themes/cybernetic-website-template)
[<img src="/src/static/images/link-live.png">](https://cybernetic-astro.netlify.app/)
[<img src="/src/static/images/link-contact.png">](https://codexcode.store/contact)

## ⚠️ How to keep good performance?

If you make some changes (for example image) - make sure image is saved as .WEBP & its small! - avoid large images, because performance will drop!
use https://tinypng.com/ to reduce you'r images

## 🚀 Static Media

Static media (not for single posts ect)
There are 3 folders

-   fonts - setup there you'r all fonts - you don't want to get link to google - this can slow down you'r page, but if you needed, you can delete it and use google tags

-   images - Images are setup with typescript, so this component is easy to use & when you import image there you don't need to worry about use import for every single image

-   icons - Right now we don't have solution to import SVGA files into React with Astro, so its working the same as Images

#### 🖼️ Images

Images can be stored in static/images and use it with srcLocal (typescript will give you types),
also Image component can be display with "custom" link - use src instead of scrLocal:

```
  <Image src="logo" alt="logo" width="50px" height="50px" />
```

To register new image check the images object and add image there

#### 🎨 Icons

icons are stored in static/icons and use it with iconData (typescript will give you types)

```
  <Icon iconData="home" alt="home" />
```

Use those components for media to keep best performance or in astro files use images from astro - also good!

# 💻 Sitemap & robots.tsx & SEO

## ⚠️ IMPORTANT ⚠️

1. Go to astro.config.mjs & change the ⚠️ siteURL ⚠️ replace url with you'r domain https

2. search for ⚠️ CHANGEME ⚠️ in files & replace all instances

3. Seo: search for ⚠️ YOUR META DESCRIPTION FOR SEO ⚠️ and change this with your meta description of page - do the same for all you'r pages

SITEMAP: Sitemap is created by astro, but you need yo configure it a little bit

1. Go to astro.config.mjs
2. check how sitemap data is added (when you need more customization, check the commented lines)

## 📞 Contact Form

If project contains Contact form

For contact form you need to replace those ID with the correct one.
API: https://emailjs.com
Other solution: If you want to add other solution, then change axios request with other solution - should work

```
    service_id: "service_ID",
    template_id: "template_TEMPLATE_ID",
    user_id: "USER_ID",
```

## 🚀 Styles

All global styles like, colors, fonts, normalize or things like mediaQuery are stored in styles folder,

MediaQuery can be used with MIN & MAX OR BETWEEN - that means code will display depends on what we need to do:

```
    @returns @media example: (min-width: 768px)
    ${MediaQuery.min(breakpoint)} {
        //code
    }
```

```
    @returns @media example: (min-width: 768px)
    ${MediaQuery.max(breakpoint)} {
        //code
    }
```

```
    @returns @media example: (min-width: 768px) and (max-width: 991px)
    ${MediaQuery.between("breakpoint1", "breakpoint2")} {
        //code
    }
```

## 🚀 Theme colors

All colors are used as css var to have easier access in app

## 🧞 Commands

#### All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📞🧞 Contact & Support

If you bought our theme, you get 100% our support!
have any problems or questions, please let us know here: [Contact Form](https://www.codexcode.store/pages/contact)

## 🧞 Authors

-   [@codexcode](https://www.codexcode.pl)
