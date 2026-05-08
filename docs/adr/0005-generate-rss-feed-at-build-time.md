# ADR 0005: Generate RSS Feed at Build Time

## Status

Accepted

## Context

The personal portal is a static Angular application deployed to GitHub Pages. RSS readers expect a plain XML feed file and do not execute the Angular browser application.

## Decision

Generate the RSS feed at build time using a Node.js script. The generated file is written to `public/rss.xml`, allowing Angular's build process to include it in the final static output.

## Rationale

This keeps the portal static-hosting friendly, avoids runtime feed generation, and allows the same publishing workflow to support both the Angular site and RSS consumers.

## Consequences

The feed must be regenerated whenever notes are added or updated. This is handled automatically through the `prebuild` script.
