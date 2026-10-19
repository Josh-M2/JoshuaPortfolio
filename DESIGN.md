---
name: Joshua L. Magdadaro Portfolio
description: A systems atlas for full-stack TypeScript, backend, and cloud work.
colors:
  mineral-canvas: "#f3f7f5"
  white-surface: "#ffffff"
  deep-teal-ink: "#173b3e"
  soft-teal-ink: "#375b5d"
  muted-teal: "#557273"
  sea-glass-line: "#c9dad4"
  route-teal: "#116c69"
  route-teal-deep: "#0b5553"
  route-teal-pressed: "#083d3b"
  warm-signal: "#9b432d"
  light-route-focus: "#d5f0e8"
  sea-glass-wash: "#dcebe6"
  project-blue-ink: "#416782"
  project-blue-wash: "#e2edf1"
  project-clay-ink: "#9b5c43"
  project-clay-wash: "#f1e6df"
  project-violet-ink: "#655d87"
  project-violet-wash: "#eae8f1"
  project-green-ink: "#55764f"
  project-green-wash: "#e6eee4"
typography:
  display:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(44px, 6vw, 84px)"
    fontWeight: 760
    lineHeight: 1.035
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(37px, 4.5vw, 62px)"
    fontWeight: 740
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "clamp(28px, 3vw, 43px)"
    fontWeight: 740
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 750
    lineHeight: 1.45
    letterSpacing: "0.08em"
rounded:
  stack-tag: "6px"
  chip: "7px"
  control: "8px"
  diagram-node: "9px"
  diagram-inset: "11px"
  panel: "12px"
  feature: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "28px"
  xl: "40px"
  section: "clamp(66px, 7vw, 110px)"
components:
  button-primary:
    backgroundColor: "{colors.deep-teal-ink}"
    textColor: "{colors.white-surface}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.route-teal-deep}"
    textColor: "{colors.white-surface}"
  button-primary-active:
    backgroundColor: "{colors.route-teal-pressed}"
    textColor: "{colors.white-surface}"
  link-inline:
    textColor: "{colors.route-teal-deep}"
    height: "44px"
  navigation-link:
    textColor: "{colors.soft-teal-ink}"
    height: "44px"
  diagram-panel:
    backgroundColor: "{colors.white-surface}"
    textColor: "{colors.deep-teal-ink}"
    rounded: "{rounded.feature}"
  diagram-node:
    backgroundColor: "{colors.sea-glass-wash}"
    textColor: "{colors.deep-teal-ink}"
    rounded: "{rounded.panel}"
    padding: "22px"
  project-card:
    backgroundColor: "{colors.white-surface}"
    textColor: "{colors.deep-teal-ink}"
    rounded: "{rounded.feature}"
  skill-chip:
    textColor: "{colors.soft-teal-ink}"
    rounded: "{rounded.chip}"
    padding: "9px 12px"
  contact-panel:
    backgroundColor: "{colors.deep-teal-ink}"
    textColor: "{colors.white-surface}"
    rounded: "{rounded.feature}"
  contact-link:
    textColor: "{colors.white-surface}"
    height: "52px"
---

# Design System: Joshua L. Magdadaro Portfolio

## Overview

**Creative North Star: "The Systems Atlas"**

The portfolio reads like a clear map of connected engineering work. A cool mineral ground, deep teal type, route lines, and annotated diagrams make interfaces, services, and cloud workflows legible without posing conceptual illustrations as product screenshots. The writing and layout are direct, spacious, and technical without becoming a dashboard.

Inter carries the whole site. White panels and pale sea-glass fields organize evidence; a warm signal marks the hero and the typed-services node, while a dark teal contact panel closes the route. The visual language is restrained enough for a hiring manager to scan, while the diagram grammar gives backend work a concrete form.

**Key Characteristics:**

- A light mineral canvas with deep teal ink, a teal action color, and one warm signal for editorial emphasis.
- Large, tightly spaced Inter headings beside concise supporting copy.
- Bordered, rounded diagram panels with labels and captions that explain their conceptual status.
- Clear keyboard focus, touch-sized links, and mobile diagrams that retain their sequence.

## Colors

The palette has a quiet mineral base, a route-teal action color, and a warm signal on the opening statement and central diagram node. Project diagram variants add muted blue, clay, violet, or green only to distinguish each conceptual cover.

### Primary

- **Deep Teal Ink:** Main headings, body anchors, primary controls, emphasized diagram nodes, and the contact panel.
- **Route Teal:** Connectors, interactive links, and the visible focus outline.
- **Warm Signal:** The hero's key phrase, typed-services node, and project category labels. White and pale warm text retain readable contrast on the node.
- **Deep Route Teal:** Hover surfaces, text links, and explanatory diagram strokes. A darker pressed shade marks active controls.
- **Light Route Focus:** A pale sea-glass outline identifies keyboard focus inside the dark contact panel; the same shade supports the emphasized diagram node's small text.

### Secondary

- **Project Blue, Clay, Violet, and Green:** Paired ink and wash tokens give individual project diagrams a recognizable accent while keeping the same component grammar. These colors do not imply a product brand or a screenshot.

### Neutral

- **Mineral Canvas:** Default page background; it frames white cards and section changes.
- **White Surface:** Cards, diagram panels, and the resume sheet.
- **Soft Teal Ink:** Supporting paragraphs and summaries.
- **Muted Teal:** Dates, metadata, captions, and location.
- **Sea-Glass Line:** Quiet borders and section dividers.
- **Sea-Glass Wash:** Default project visual field and hover fill in the mobile menu.

**The Labeled Diagram Rule.** A color shift may help distinguish a node, but each stage must keep a text label and the preview must say when it is conceptual.

## Typography

**Display Font:** Inter, self-hosted by Next.js at build time, with Arial and sans-serif fallbacks.
**Body Font:** Inter with the same fallback stack.

**Character:** Firm, open, and functional. Strong headings carry the hierarchy; compact labels act as annotations rather than decoration.

### Hierarchy

- **Display:** Bold and tightly tracked, used for the home hero. At small phone widths it resolves to a fixed (42px) size.
- **Headline:** Section titles, balanced to short line lengths. Supporting copy appears only when it adds context.
- **Title:** Project names on editorial rows; shorter titles remain prominent without forcing long descriptions into the same scale.
- **Body:** Paragraphs generally use (16px) text with generous leading; key project summaries use (17px), while metadata uses smaller text.
- **Label:** Small uppercase annotations with visible letter spacing, used inside conceptual diagrams and related cards.

**The One Typeface Rule.** Keep Inter as the visible type family across headings, controls, labels, and long-form text; use weight, size, and spacing for contrast.

## Layout

The content container is capped at (1240px). It keeps (20px) side gutters on larger screens and (16px) gutters below (700px). Sections use clamped vertical spacing, and quiet border lines separate the major chapters. The hero pairs a broad statement with a narrower role and action column, followed by a full-width three-stage diagram. Its top padding and diagram gap keep the opening compact enough to reach project evidence sooner.

At (900px) the hero becomes one column. At (850px) the desktop navigation gives way to a native `details` menu. At (700px), project rows, experience entries, skills groups, contact content, case-study bodies, related-work cards, and resume columns become single-column. The system diagram and project flows turn vertical; connectors change orientation so the reading order is retained. At (390px) and below, the hero title uses (42px), and the masthead name may wrap. The minimum supported body width is (320px).

**The Readable Route Rule.** Do not rely on a wide diagram to communicate the engineering story; maintain the same labeled sequence at narrow widths.

## Elevation & Depth

The system is mostly flat. Borders and subtle changes between mineral canvas, white surface, and colored project washes provide structure. The hero diagram has a diffuse ambient shadow (`0 16px 46px #0b2d2b0e`), the mobile menu uses a stronger local shadow (`0 14px 30px #0b2d2b1c`), and the resume sheet has a print-like lift (`0 16px 48px #0b2d2b12`). Project rows remain bordered and unshadowed.

**The Tonal-First Rule.** Use surface contrast and thin borders before adding elevation; reserve shadows for overlays and a small number of featured sheets.

## Shapes

The recurring silhouette is a crisp rounded rectangle: controls use gentle corners, diagram nodes have slightly larger corners, and full panels have the largest corners. One-pixel sea-glass borders hold the layout together; dark emphasized nodes use their own fill and border. Connectors are simple rules with arrowheads, while skill tags and stack labels are lightly bordered and compact.

## Components

### Buttons and Links

- **Primary:** Deep teal fill, white text, a (1px) matching border, (8px) corners, (12px 20px) padding, and at least (50px) height. Hover deepens the teal and raises the control (2px); active darkens it and presses it (1px).
- **Focus:** The primary control retains the global (3px) route-teal focus outline with a (4px) offset.
- **Text Link:** Underlined deep route teal, at least (44px) high, with a (5px) underline offset. Hover strengthens the underline; active changes to deep ink and presses (1px).

### Navigation

The masthead mark is a deep teal square beside Joshua's name. The primary links—Projects, Experience, and Skills—lead to homepage sections; Contact is a filled desktop control and also leads to its homepage section. Desktop links have (44px) targets and a quiet bottom rule; hover uses route teal and reveals the rule. Below (850px), a keyboard-operable native `details` menu reveals a white, bordered panel with (46px) rows. The menu and all links inherit the visible focus outline. The full resume is linked from the experience section and footer as a separate document view.

### Project Rows and Previews

Project rows are two-column white cards with (16px) corners and a thin sea-glass border. Their visual and text sides alternate on wide screens. Verified public website captures appear in a restrained browser frame with a source label, caption, and date. Feel's verified mobile capture keeps its portrait aspect ratio in a centered phone-sized frame. Screenshots link to the corresponding public demo. Projects without a suitable image show explanatory diagrams with a “Conceptual view” label and caption. Diagram nodes use labeled rectangles and route lines, with a dark fill for one key stage. At mobile widths the visual precedes the text and diagram flows read top to bottom.

### Chips

Skill chips are passive labels with a transparent background, a one-pixel sea-glass border, soft teal text, (7px) corners, and (9px 12px) padding. Group headings and top rules, rather than chip colors, organize the taxonomy.

### Contact Panel

The contact panel is the only large dark surface. A large white invitation and subdued light paragraph sit alongside three underlined destination rows. Rows are at least (52px) high; Lucide icons supplement explicit text labels. Keyboard focus uses a pale sea-glass outline against the dark panel. On phones, the columns stack without hiding destinations.

### Resume Sheet

The on-site resume uses a white sheet on the mineral canvas, with compact typographic hierarchy and thin dividers. In print, the site chrome and shadow disappear, the sheet becomes full width, and sections avoid breaking internally.

The homepage experience list shows each role's title, dates, organization, and one summary sentence. The resume preserves the fuller reviewed descriptions and bullet points.

### Motion and Focus

The opening is a single route handoff. The header arrives first, then the headline and supporting copy, followed by the diagram panel. Its connectors draw into typed services and cloud workflows, vertically on phones. The sequence ends in about (1.4s), with each element remaining legible while it moves. Other page introductions and the resume sheet use a shorter version of the same arrival.

Scrolling advances a (3px) fixed route line. An Intersection Observer reveals section headings, project rows, experience entries, skills, and contact when they approach the viewport. Projects settle from a slight scale and cropped lower edge; conceptual diagram nodes and connectors then resolve. Experience dividers and skill-group rules get a single teal sweep. Related links and resume sections use smaller offsets so reading stays calm. Reveals occur once, with no repeated scroll loops. The mobile menu opens over (0.24s); hover and keyboard focus move link arrows only (3px) over (0.18s).

Server-rendered content starts visible. The motion controller prepares only below-viewport elements after hydration, reveals focused content immediately, and updates the route line with one animation-frame-throttled scroll listener. Under `prefers-reduced-motion: reduce`, entrance and scroll motion do not run, the route line is hidden, smooth scrolling becomes automatic, and control feedback keeps its color change without spatial movement. Print forces all content fully visible and removes animation and transitions. Focusable elements use the global visible route-teal outline, with a light outline override on the dark contact panel.

## Do's and Don'ts

### Do:

- **Do** use the mineral canvas, white surfaces, and deep teal ink as the default setting for new pages.
- **Do** label every diagram stage and keep a caption when a visual is conceptual.
- **Do** preserve the single-column sequence, touch targets, and visible focus treatment at phone widths.
- **Do** use Lucide for interface icons and keep descriptive text beside them.

### Don't:

- **Don't** treat project diagrams or GitHub cards as screenshots of running products.
- **Don't** add a second display font or an indiscriminate badge wall.
- **Don't** animate essential content into visibility or require animation to understand a route.
- **Don't** apply heavy shadows to ordinary project cards or skill chips.
