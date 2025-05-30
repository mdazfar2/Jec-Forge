# Jec Forge Contributing Guidelines


Thank you for taking the time to contribute to Jec Forge World. Your help is essential for keeping it great.


Please take a moment to read the following guidelines before contributing:

> **⚠️IMPORTANT**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether it's already opened or raised by you, and then create a Pull Request.**
>
> **An automated process has been implemented to ensure the timely management of Pull Requests (PRs) on this platform.**
>
> **PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**
>
>**Additionally, PRs that are improperly linted or have a failing build will not be merged. Ensure that your code passes linting checks and builds successfully before submitting your PR.**

## Prerequisites

- Open Source Etiquette: If you've never contributed to an open source project before, have a read of [Basic etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette) for open source projects.

- Basic familiarity with Git and GitHub: If you are also new to these tools, visit [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners) for a comprehensive introduction to them.

## How to contribute

To get started, look at the existing [**create a new issue**](https://github.com/mdazfar2/Jec Forge/issues)!

### Set up guildines


> [!NOTE]
> This is [MERN Stack](https://www.geeksforgeeks.org/mern-stack/) project.
> You must have installed Node.js on your local macahine. If you don't have it installed yet,                                                             
  We will recommend a video for you that you can view from [here](https://www.youtube.com/watch?v=8UwTd15dK-E).
> Make sure to restart your PC/Laptop after installation before proceeding to the next step.


***Actually, our website is currently built using only React and Tailwind CSS. In the future, we will incorporate the full MERN stack, including MongoDB, Node.js, and Express.js, you can raise an issue on that if you want to work on it.***

**Follow these steps to setup Jec Forge on your local machine 👇**

- Fork the Repository

- Clone the forked repository to you local system.

```bash
  git clone https://github.com/<your-github-username>/Jec Forge.git
```

- Now install dependency
   ```bash
    npm install
   ```
  - Run the Deployment Server
    ```bash
     npm run dev
    ```
  - `Open http://localhost:5173 with your browser to see the result.`

- Create a new branch to make your changes.

```bash
   git checkout -b <your_branch_name>
```

- Do whatever you want to change and then stage your changes and track as well

---

## 📚 Want to Contribute Resources to the `/resources` Page?

We'd love to have you contribute and expand the learning ecosystem of Jec Forge! Here's how you can help:

### 🧩 Add a New Subcategory
1. Navigate to the `resources/ResourcesSidebar.tsx` file.
2. Locate the appropriate category and append your new subcategory to the `subcategories` array.
3. Make sure it aligns with the project's structure and naming conventions (use `_` or `.` instead of spaces).

### 📦 Add a New Resource to an Existing Subcategory
1. Open the `data/resources.ts` file.
2. Scroll to the bottom and copy the format of the existing resource objects.
3. Add your new resource using the following structure:

```ts
{
  id: <next_sequential_id>,
  title: '<Resource Title>',
  description: '<Brief and clear description>',
  category: '<Main Category>',
  subcategory: '<Exact Subcategory>',
  difficulty: '<Beginner | Intermediate | Advanced>',
  url: '<https://your-resource-link.com>'
}

✅ **Important Notes:**

- Ensure the `id` is unique and sequential.
- Match `category` and `subcategory` exactly as defined in `ResourcesSidebar.tsx`.
- Double-check for duplicates and broken links before submitting.
- Keep titles concise and descriptions meaningful.
 
---

- Track and stage your changes.

```bash
   # Track the changes
   git status

   # Add changes to Index
   git add .
```

- Commit your changes.

```bash
   git commit -m "your_commit_message"
```
- Push your committed changes to the remote repo.

```bash
   git push origin <your_branch_name>
```

- Go to your forked repository on GitHub and click on `Compare & pull request`.

- Add an appropriate title and description to your pull request explaining your changes and efforts done.

- Click on `Create pull request`.

- Congrats! 🥳 You've made your first pull request to this project repo.

   - ***Now, wait. If the maintainer finds your pull request correct and useful, they will surely merge it. If any changes are needed, they will mention you, so make sure to pay attention to GitHub notifications to know what the project admin wants.***

### Guidelines for good commit message

1. **Be Concise and Descriptive**: Summarize the change in a way that’s easy to understand at a glance.
2. **Use the Imperative Mood**: Write as if giving a command (e.g., `Add`, `Fix`, `Update`), which is a convention in many projects.
3. **Include Context**: Provide context or reason for the change if it’s not immediately obvious from the summary.
4. **Reference Issues and Pull Requests**: Include `issue numbers` or PR references if the commit addresses them.
5. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

## Reporting Issues

- Before submitting an issue, please search to ensure it has not already been reported.

- When creating a new issue, provide as much detail as possible, including:

1. The steps to reproduce the issue
2. What was expected to happen and what actually happened
3. Screenshots or logs, if applicable
4. Information about your environment (OS, browser, etc.)

### Feature Requests

- Feel free to open an issue to request a new feature.
- Provide as much context and detail as possible. Why is the feature important? How do you envision it being used?
- Consider outlining how you think the feature could be implemented.

> **⚠️IMPORTANT**
>
> **Pull Requests _having no issue associated_ with them _will not be accepted_. Firstly get an issue assigned, whether > it's already opened or raised by you, and then create a Pull Request.**
>
> **An automated process has been implemented to ensure the timely management of Pull Requests (PRs) on this platform.**
>
> **PRs that have been open for a duration exceeding 45 days will be automatically closed, so please plan accordingly.**
>
>**Additionally, PRs that are improperly linted or have a failing build will not be merged. Ensure that your code passes linting checks and builds successfully before submitting your PR.**

### Updating Documentation

- If you make changes to the code, please update relevant documentation (README.md etc.).
- Keep documentation clear, concise, and up-to-date.