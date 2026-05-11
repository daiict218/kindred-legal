#!/usr/bin/env node
// render.js — converts ../kindred-docs/018-privacy-notice.md → index.html
// Run via: node render.js  (or npm run build)
// Dependencies: markdown-it, markdown-it-attrs, markdown-it-anchor (local node_modules)

'use strict';

const fs = require('fs');
const path = require('path');

const MarkdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');

const SRC = path.resolve(__dirname, '../kindred-docs/018-privacy-notice.md');
const OUT = path.resolve(__dirname, 'index.html');

const md = MarkdownIt({ html: false, linkify: true, typographer: true })
  .use(markdownItAttrs)          // handles {#id .class} attribute syntax
  .use(markdownItAnchor, {       // auto-slugs headings; respects explicit {#id} from attrs
    level: [1, 2, 3, 4],
    slugify: (s) =>
      s
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-'),
  });

const raw = fs.readFileSync(SRC, 'utf8');
const body = md.render(raw);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kindred — Privacy Notice</title>
  <style>
    /* ---- reset ---- */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ---- base ---- */
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                   "Helvetica Neue", Arial, sans-serif;
      font-size: 1rem;
      line-height: 1.7;
      color: #1a1a1a;
      background: #fff;
      padding: 1.5rem 1rem 4rem;
    }

    /* ---- container ---- */
    .content {
      max-width: 720px;
      margin: 0 auto;
    }

    /* ---- headings ---- */
    h1 {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    h2 {
      font-size: 1.15rem;
      font-weight: 700;
      margin-top: 2.2rem;
      margin-bottom: 0.5rem;
      line-height: 1.35;
    }
    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-top: 1.5rem;
      margin-bottom: 0.4rem;
    }
    h4 {
      font-size: 0.95rem;
      font-weight: 600;
      margin-top: 1.2rem;
      margin-bottom: 0.3rem;
    }

    /* ---- body text ---- */
    p { margin-top: 0.75rem; }
    ul, ol { margin-top: 0.6rem; padding-left: 1.6rem; }
    li { margin-top: 0.3rem; }
    li > ul, li > ol { margin-top: 0.2rem; }

    /* ---- strong / em ---- */
    strong { font-weight: 600; }

    /* ---- code / inline code ---- */
    code {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: 0.88em;
      background: #f3f4f6;
      border-radius: 3px;
      padding: 0.1em 0.35em;
      word-break: break-all;
    }

    /* ---- links ---- */
    a { color: #0066cc; text-decoration: underline; }
    a:hover { color: #004499; }

    /* ---- horizontal rule ---- */
    hr {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 2rem 0;
    }

    /* ---- blockquote — used for grievance callout ---- */
    blockquote {
      border-left: 4px solid #d1d5db;
      background: #f9fafb;
      margin: 1rem 0;
      padding: 0.75rem 1.1rem;
      border-radius: 0 4px 4px 0;
    }
    blockquote p { margin-top: 0.3rem; }
    blockquote p:first-child { margin-top: 0; }

    /* ---- tables ---- */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
      font-size: 0.92rem;
    }
    th, td {
      border: 1px solid #d1d5db;
      padding: 0.5rem 0.75rem;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #f3f4f6;
      font-weight: 600;
    }
    tr:nth-child(even) td { background: #f9fafb; }

    /* ---- status / draft badge ---- */
    /* The first <p> after <h1> contains the bold status line */
    .content > p:first-of-type {
      font-size: 0.85rem;
      color: #6b7280;
      margin-top: 0.25rem;
    }

    /* ---- mobile tweaks ---- */
    @media (max-width: 480px) {
      body { font-size: 0.97rem; padding: 1rem 0.85rem 3rem; }
      h1 { font-size: 1.35rem; }
      h2 { font-size: 1.05rem; }
      table { font-size: 0.82rem; }
      th, td { padding: 0.4rem 0.5rem; }
    }
  </style>
</head>
<body>
  <div class="content">
${body}
  </div>
</body>
</html>`;

fs.writeFileSync(OUT, html, 'utf8');
console.log('Rendered:', OUT);
