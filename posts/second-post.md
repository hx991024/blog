---
title: '在开发过程中遇到的一些问题'
date: '2026-01-11'
excerpt: '通过大模型进行学习时，遇到一些开发上的问题并进行解决'
tags: ['Next.js', 'Tailwindcss', 'Bug']
---

# Tailwindcss

1. 在引入 @tailwindcss/typography 插件时，大模型依旧介绍的是 tailwind v3 版本的办法。通过创建 tailwind.config.ts 来配置插件。然而，项目中使用的是 tailwind v4 版本。只需要在 global.css 中引入即可

```css
@import 'tailwindcss';
@plugin "@tailwindcss/typography";
```
