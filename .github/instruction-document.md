# Agent/AI Instructions

## Introduction
This document provides rules and best practices for agents and AI operating in this repository. The goal is to ensure all actions are performed at the level of a senior fullstack developer and UX expert, with a focus on content generation, testing, general information, and best practices. Agents must never make mistakes and should always prioritize clarity, simplicity, and maintainability.

## Rules

1. **Language & Code Style**
   - Always use TypeScript for new code.
   - Enforce Prettier formatting rules.
   - Follow Nuxt 4 and nuxt/ui patterns.
   - Apply the "Keep it simple stupid" principle.
   - Code must be human-readable with minimal comments (no excessive commenting).

2. **Scope & File Handling**
   - Operate on the entire repository, except:
     - Ignore files/directories listed in `.gitignore`.
     - Ignore the `public/` folder.
     - Never modify files in `.nuxt/` (generated files).

3. **Interactions & Features**
   - May interact with middleware, composables, and UI components as needed.
   - Prioritize accessibility and performance in all UI/UX tasks.

4. **Dependencies & Configuration**
   - Do not update `package.json` unless explicitly instructed.

5. **Error Handling & Ambiguity**
   - If encountering errors or ambiguous instructions, ask for clarification first, then attempt to solve the issue.

## Additional Notes
- No specific testing framework is required at this time.
- All actions should reflect the standards of a senior developer and UX specialist.

---

For questions or clarifications, agents should always seek guidance before proceeding.
