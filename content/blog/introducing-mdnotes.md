---
title: "MdNotes – Local Markdown Notes with Native Mermaid Diagrams"
date: 2026-10-24T12:00:00+02:00
description: "A small, local, Obsidian-style notes app for Windows, macOS and Linux. Now public, with the first downloads out."
---
**MdNotes** is now public, and the first prebuilt downloads are out with release **v0.1.1**.

It's a small, local, Obsidian-style notes app for Windows, macOS and Linux. You point it at a folder (the "vault") and every note is just a plain `.md` file in that folder.

![MdNotes](/img/projects/mdnotes.png)

## The Idea

A lot of note apps keep your notes in a database, a cloud account or a format only that app understands. MdNotes is built on three simple rules:

- **Your notes are plain files.** Open them in any editor, put them in git, sync them however you like.
- **Nothing leaves your machine.** No account, no cloud and no telemetry.
- **No embedded browser.** The preview isn't a web page. Markdown is parsed with Markdig and drawn as native controls, so the app stays light.

## Mermaid, Drawn Natively

Mermaid diagrams are usually rendered with JavaScript in a browser. MdNotes draws them natively instead: flowchart, sequence, class, state, ER, gantt, pie, mindmap and more. You write the diagram in a code block and it shows up in the preview, with no web view involved.

## What It Can Do

- **Edit, split and reading views** (`Ctrl+E`) with a live preview
- **`[[Wikilinks]]`** to notes and `[[Folder/]]` links to folders. Clicking a link to a note that doesn't exist yet creates it.
- **Quick switcher** (`Ctrl+O`) and accent-insensitive full-text search
- **Vault-wide search and replace** (`Ctrl+Shift+H`) with match case, whole word and regex. You can untick single matches before replacing, and undo the whole replace in one step.
- **Configurable autosave**: after a delay, when you leave the note, or only on `Ctrl+S`. Useful when the vault is a git repo or a synced folder.
- **Note templates** with `{{title}}`, `{{date}}` and `{{time}}` placeholders
- **`.mdnotesignore`** to keep folders like `node_modules` out of the sidebar and search
- **System, light and dark themes**. The sidebar also follows changes made to the folder outside the app.

## Under the Hood

MdNotes is built with **.NET 10** and **Avalonia 12**, using MVVM with CommunityToolkit.Mvvm. Markdig parses the Markdown, and Mermaid diagrams are rendered to SVG with Mermaider and drawn with Svg.Skia.

## Try It

Prebuilt builds for Windows and Linux (x64) are on the [MdNotes project page](/projects/mdnotes/) and on [GitHub Releases](https://github.com/neisep/MdNotes/releases). They don't need anything else installed:

- **Linux:** `mdnotes-linux-x86_64.tar.gz`, compiled ahead of time (Native AOT) for a fast start. Needs glibc 2.34 or newer.
- **Windows:** `mdnotes-windows-x86_64.exe`, a single executable. There's also an experimental Native AOT zip that starts faster. The builds aren't signed yet, so SmartScreen may ask before the first start.
- **macOS:** build from source with the .NET 10 SDK.

The source is on [GitHub](https://github.com/neisep/MdNotes).

**Notes are just text files. The app should treat them that way.**
