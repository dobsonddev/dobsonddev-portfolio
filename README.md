# Project Title

This project was created by [Dobson Dunavant](https://github.com/dobsonddev).

## Technologies

- [Next.js (TypeScript, Pages Router)](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- OpenAI's Assistant API v2
- Custom Notion CMS integration

## Getting Started

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo-url.git
   ```

2. **Install Dependencies**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

    - Duplicate the `.env.example` file and rename it to `.env` in the root directory:

      ```bash
      cp .env.example .env
      ```

    - Open the `.env` file and add your values to each environment variable as specified in the [Environment Variables Setup](#environment-variables-setup) section.

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

5. **View in Browser**

   Open [http://localhost:3000](http://localhost:3000) in your web browser to see the application.

## Environment Variables Setup

The project requires several environment variables to function correctly. Below are the variables and instructions on how to obtain their values:

### `NEXT_PUBLIC_GA_TRACKING_ID`

- **Description**: Your Google Analytics Tracking ID, used for website analytics.
- **How to Obtain**:
    1. Sign in to your [Google Analytics](https://analytics.google.com/) account.
    2. Click on **Admin** in the lower-left corner.
    3. Under the **Property** column, select the property you want to use.
    4. Click on **Tracking Info** > **Tracking Code**.
    5. Your Tracking ID will be at the top of the page, formatted like `UA-XXXXXXXXX-X` or `G-XXXXXXXXXX`.
- **Set in `.env`**:

  ```env
  NEXT_PUBLIC_GA_TRACKING_ID=YOUR_GOOGLE_ANALYTICS_TRACKING_ID
  ```

### `NOTION_API_KEY`

- **Description**: API key for accessing Notion's official API.
- **How to Obtain**:
    1. Visit [Notion's My Integrations](https://www.notion.so/my-integrations).
    2. Click on **+ New Integration**.
    3. Fill in the required details (name, associated workspace) and click **Submit**.
    4. After creation, you'll see an **Internal Integration Token**. This is your API key.
- **Set in `.env`**:

  ```env
  NOTION_API_KEY=YOUR_NOTION_API_KEY
  ```

### `NOTION_DATABASE_ID`

- **Description**: The unique ID of your Notion database used as a CMS.
- **How to Obtain**:
    1. Open the database page in Notion.
    2. Look at the URL in your browser; it will look something like `https://www.notion.so/YourWorkspace/Database-Name-xxxxxxxxxxxxxxxxxxxxxx`.
    3. The part after the last slash and before the question mark (`?`) is your Database ID.
        - Example: In `https://www.notion.so/YourWorkspace/Database-Name-**abcdef1234567890abcdef1234567890**`, the bolded part is the Database ID.
- **Set in `.env`**:

  ```env
  NOTION_DATABASE_ID=YOUR_NOTION_DATABASE_ID
  ```

### `OPENAI_API_KEY`

- **Description**: API key for accessing OpenAI services, necessary for chatbot functionality.
- **How to Obtain**:
    1. Log in or sign up at [OpenAI's Platform](https://platform.openai.com/).
    2. Navigate to the [API Keys](https://platform.openai.com/account/api-keys) page.
    3. Click on **Create new secret key**.
    4. Copy the generated API key.
- **Set in `.env`**:

  ```env
  OPENAI_API_KEY=YOUR_OPENAI_API_KEY
  ```

### `NOTION_TOKEN_V2` (Optional)

- **Description**: Legacy token used for certain Notion integrations. Required only if you're using unofficial APIs or specific features.
- **How to Obtain**:
    - **Warning**: Accessing `token_v2` may violate Notion's terms of service. Proceed only if you're certain you need this and understand the implications.
    1. Log in to Notion in your web browser.
    2. Open the browser's developer tools (usually by pressing `F12`).
    3. Navigate to the **Application** (Chrome) or **Storage** (Firefox) tab.
    4. Under **Cookies**, find `token_v2`.
    5. Copy its value.
- **Set in `.env`**:

  ```env
  NOTION_TOKEN_V2=YOUR_NOTION_TOKEN_V2
  ```

### `NOTION_ACTIVE_USER` (Optional)

- **Description**: The active user ID for Notion, sometimes needed alongside `token_v2`.
- **How to Obtain**:
    1. In the same browser developer tools where you found `token_v2`, look for a cookie named `notion_user_id`.
    2. Copy its value.
- **Set in `.env`**:

  ```env
  NOTION_ACTIVE_USER=YOUR_NOTION_ACTIVE_USER
  ```

## Customizing the Project

To personalize the project, make the following core changes:

1. **Update Content**

    - Most unique content is stored within `{componentName}Data.ts` files located in each component's folder.
    - Update these files with your own content to reflect your project's information.

2. **Modify Themes**

    - Change global themes by editing the `tailwind.config.js` file.
    - Customize colors, fonts, and other design elements as desired.

3. **Handle Vanta.js Backgrounds Carefully**

    - Vanta.js provides animated backgrounds that can be resource-intensive.
    - Use source control diligently (e.g., commit frequently) when modifying these to easily revert if issues arise.

### Disabling the Chatbot Feature

If you prefer not to use the chatbot, remove or comment out the following imports and usages in `components/Navbar.tsx`:

- **Imports to remove/comment out**:

  ```tsx
  import ChatbotFixedButton from '...';
  import ChatbotNavbarButton from '...';
  import ChatbotModal from '...';
  ```

- **Usages to remove/comment out**:

  ```tsx
  <ChatbotFixedButton />
  <ChatbotNavbarButton />
  <ChatbotModal />
  ```

## (Optional) Chatbot Setup

To enable the chatbot functionality, complete the following steps:

1. **Obtain OpenAI API Access**

    - Ensure you have a premium OpenAI account with API access.
    - As of 2023, you may need to request access or subscribe to a paid plan.

2. **Create an OpenAI Project and API Key**

    - Follow the steps under [`OPENAI_API_KEY`](#openai_api_key) to generate your API key.

3. **Configure Environment Variables**

    - Make sure your `OPENAI_API_KEY` is set in the `.env` file as detailed above.

4. **Update Structured Data**

    - Modify `content/structuredData.json` with the content you want the chatbot to reference during conversations.
    - **Note**: Adding a large amount of content may slow down response times, as the current setup doesn't scale well with larger datasets.

## Deployment

### Recommended Platforms

- **Vercel**

    - Vercel is highly recommended for its ease of configuration and deployment.
    - Features include analytics, optimization, and automatic redeployment upon changes to the `main` branch.
    - Visit [Vercel](https://vercel.com/) to get started.

- **GitHub Pages**

    - Alternatively, you can deploy using GitHub Pages if you prefer a simpler setup.

### Important Deployment Notes

- **Set Environment Variables**

    - Remember to set all your environment variables (e.g., `OPENAI_API_KEY`, `NOTION_API_KEY`, etc.) in your deployment platform's settings.
    - For Vercel:
        1. Go to your project dashboard on Vercel.
        2. Navigate to **Settings** > **Environment Variables**.
        3. Add each variable and its corresponding value.

- **Deploying with Vercel**

    - The easiest way to deploy your Next.js app is through the [Vercel Platform](https://vercel.com/new).
    - After connecting your GitHub repository, Vercel will automatically deploy your project.

- **Additional Resources**

    - Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
    - Vercel's [documentation](https://vercel.com/docs) also provides comprehensive guides.

---

Feel free to reach out if you have any questions or need further assistance!