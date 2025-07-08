TITLE: Create Next.js App with API Routes Middleware Example
DESCRIPTION: Instructions to bootstrap a new Next.js project using the `create-next-app` utility, pre-configured with the API routes middleware example. This command sets up the project directory and installs necessary dependencies, allowing users to quickly get started with the example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-middleware/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-middleware api-routes-middleware-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-middleware api-routes-middleware-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-middleware api-routes-middleware-app
```

----------------------------------------

TITLE: Initialize Next.js Project with API Example
DESCRIPTION: Demonstrates how to use `create-next-app` with the `--api` flag to automatically include an example `route.ts` file, facilitating the creation of API endpoints in a new Next.js project.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/backend-for-frontend.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app@latest --api
```

----------------------------------------

TITLE: Bootstrap Next.js GraphQL API Example Project
DESCRIPTION: Commands to initialize a new Next.js project with the provided GraphQL API example. Choose your preferred package manager: npx (npm), yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-graphql/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-graphql api-routes-graphql-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-graphql api-routes-graphql-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-graphql api-routes-graphql-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Context API Example
DESCRIPTION: These commands initialize a new Next.js application using the `create-next-app` utility, specifically bootstrapping it with the `with-context-api` example template. This allows developers to quickly set up a project that demonstrates React Context API usage, using different package managers like npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-context-api/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-context-api with-context-api-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-context-api with-context-api-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-context-api with-context-api-app
```

----------------------------------------

TITLE: Example .env.local File Configuration
DESCRIPTION: Shows a complete example of the `.env.local` file with configured Sanity project ID, dataset, and API read token.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
NEXT_PUBLIC_SANITY_PROJECT_ID="r0z1eifg"
NEXT_PUBLIC_SANITY_DATASET="blog-vercel"
SANITY_API_READ_TOKEN="sk..."
```

----------------------------------------

TITLE: Bootstrap Next.js API Routes REST Example Project
DESCRIPTION: Commands to initialize a new Next.js project using the `api-routes-rest` example template. This sets up the project structure and dependencies, demonstrating usage with npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-rest api-routes-rest-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-rest api-routes-rest-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-rest api-routes-rest-app
```

----------------------------------------

TITLE: Bootstrap Next.js API Routes CORS Example Project
DESCRIPTION: These commands initialize a new Next.js project using the `create-next-app` utility, specifically bootstrapping it with the `api-routes-cors` example. Each command creates a new directory named `api-routes-cors-app` for the project using a different package manager.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-cors api-routes-cors-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-cors api-routes-cors-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-cors api-routes-cors-app
```

----------------------------------------

TITLE: Initialize Next.js TypeScript GraphQL Example Project
DESCRIPTION: These bash commands illustrate how to bootstrap the Next.js example project, which integrates TypeScript and GraphQL, using different package managers: `npx` (npm), `yarn`, and `pnpm`. Each command creates a new Next.js application pre-configured with the example's setup, allowing users to quickly get started.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-typescript-graphql/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-typescript-graphql with-typescript-graphql-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-typescript-graphql with-typescript-graphql-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-typescript-graphql with-typescript-graphql-app
```

----------------------------------------

TITLE: Initializing Next.js Project with an Example (CLI)
DESCRIPTION: This snippet demonstrates how to initialize a Next.js project using a specific example from the official Next.js examples collection. The `--example` flag allows users to bootstrap their application with pre-configured setups, such as `route-handlers`, accelerating development by providing a functional starting point.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npx create-next-app --example route-handlers
```

----------------------------------------

TITLE: Configure Umbraco Delivery API
DESCRIPTION: Adds or updates the Delivery API configuration within the Umbraco CMS settings in appsettings.json to enable the API and optionally set an API key for preview functionality.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_4

LANGUAGE: json
CODE:
```
"Umbraco": {
    "CMS": {
      "DeliveryApi": {
        "Enabled": true,
        "ApiKey": "my-secret-api-key"
      },
      ....

```

----------------------------------------

TITLE: Initial .env.local Configuration
DESCRIPTION: Example content for the `.env.local` file, showing the placeholder for the production Enterspeed API key and commented-out placeholders for preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_6

LANGUAGE: bash
CODE:
```
ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY=

# Only required if you want to enable preview mode
# ENTERSPEED_PREVIEW_ENVIRONMENT_API_KEY=
# ENTERSPEED_PREVIEW_SECRET
```

----------------------------------------

TITLE: Next.js API Routes for Todo Item Management
DESCRIPTION: Documents the API endpoints exposed by the Next.js application for managing todo items, including operations for fetching, adding, searching, updating, and deleting items.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_6

LANGUAGE: APIDOC
CODE:
```
pages/api/items/index.ts:
  GET /api/items - to get an array of to-do items as Array<TodoItem>
  POST /api/items - to add an item to the list

/pages/api/items/search.ts:
  GET /api/items/search?q=query - to find and return items matching the given query

pages/api/item/[id].ts:
  GET /api/item/{id} - to fetch an item
  PUT /api/item/{id} - to update the given item
  DELETE /api/item/[id] - to delete an item
```

----------------------------------------

TITLE: Next.js Preview Mode API Endpoint
DESCRIPTION: This API endpoint is used to enable Next.js Preview Mode, allowing users to view draft content from the CMS before it's published. It requires a secret string for authentication and the slug of the content to be previewed.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=<slug>
  <secret>: The string entered for TAKESHAPE_PREVIEW_SECRET
  <slug>: The post's slug attribute (from TakeShape)
```

----------------------------------------

TITLE: Module Entrypoints Configuration (Text)
DESCRIPTION: This configuration block illustrates how module entrypoints are mapped within the build system. It specifies the ModuleEvaluation starting point and explicitly lists named exports like 'GET' and 'runtime', associating them with their respective module parts for efficient bundling and resolution.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_3

LANGUAGE: text
CODE:
```
{
    ModuleEvaluation: 0,
    Export(
        "GET",
    ): 0,
    Export(
        "runtime",
    ): 2,
    Exports: 2,
}
```

----------------------------------------

TITLE: Next.js Preview Mode API Endpoint
DESCRIPTION: Describes the URL structure for enabling Next.js Preview Mode. This API endpoint allows viewing draft content by passing a secret key and the post's slug as query parameters.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=<slug>
```

----------------------------------------

TITLE: Example .env.local File Configuration
DESCRIPTION: This snippet illustrates the structure and required environment variables for the `.env.local` file. It includes placeholders for the TakeShape Project ID, API Key, and a secret string for Next.js Preview Mode, which are essential for connecting the application to the CMS.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
TAKESHAPE_PROJECT_ID=...
TAKESHAPE_API_KEY=...
TAKESHAPE_PREVIEW_SECRET=...
```

----------------------------------------

TITLE: Define Next.js GET API Route Handler (JavaScript)
DESCRIPTION: This code defines an asynchronous GET request handler for a Next.js API route. It takes a req (request) object and uses NextResponse.json to return a JSON payload containing the pathname extracted from req.nextUrl. This is a fundamental pattern for creating serverless API endpoints.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_1

LANGUAGE: js
CODE:
```
export const GET = (req)=>{
    return NextResponse.json({
        pathname: req.nextUrl.pathname
    });
};
```

----------------------------------------

TITLE: Bootstrap Next.js DatoCMS Example Project
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to initialize a new Next.js project based on the DatoCMS example. This command sets up the project structure and dependencies required to start development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-datocms/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-datocms cms-datocms-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-datocms cms-datocms-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-datocms cms-datocms-app
```

----------------------------------------

TITLE: WordPress REST API Endpoint Registrations for Sitemap
DESCRIPTION: These code blocks register custom REST API endpoints under the `sitemap/v1` namespace. Each endpoint is configured to use the `GET` method and calls a specific `wsra_generate_*_api` function to retrieve sitemap data.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_15

LANGUAGE: APIDOC
CODE:
```
sitemap/v1/posts:
  Method: GET
  Callback: wsra_generate_posts_api
  Description: Retrieves a list of post URLs and their last modified dates.

sitemap/v1/taxonomy:
  Method: GET
  Callback: wsra_generate_taxonomy_api
  Description: Retrieves a list of taxonomy (category/tag) URLs.

sitemap/v1/author:
  Method: GET
  Callback: wsra_generate_author_api
  Description: Retrieves a list of author URLs.

sitemap/v1/totalpages:
  Method: GET
  Callback: wsra_generate_totalpages_api
  Description: Retrieves total counts for categories, tags, users, and published posts by type.
```

----------------------------------------

TITLE: Example .env.local configuration for Prepr
DESCRIPTION: Illustrates the structure and required environment variables for connecting a Next.js application to Prepr. It includes the GraphQL API endpoint, production and preview access tokens, and a custom preview secret for enabling preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
PREPRIO_API=https://graphql.prepr.io/graphql
PREPRIO_PRODUCTION_TOKEN='your Production access token'
PREPRIO_PREVIEW_TOKEN='your Preview access token'
PREPRIO_PREVIEW_SECRET='your secret id'
```

----------------------------------------

TITLE: Bootstrap Next.js Example with create-next-app
DESCRIPTION: These commands illustrate how to initialize a new Next.js project by cloning the 'with-passport-and-next-connect' example using different package managers. This process sets up the necessary project structure and dependencies, allowing users to quickly get started with the example application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-passport-and-next-connect/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-passport-and-next-connect with-passport-and-next-connect-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-passport-and-next-connect with-passport-and-next-connect-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-passport-and-next-connect with-passport-and-next-connect-app
```

----------------------------------------

TITLE: Bootstrap Next.js TakeShape Blog Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application pre-configured with the TakeShape CMS example using different package managers: npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-takeshape cms-takeshape-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-takeshape cms-takeshape-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-takeshape cms-takeshape-app
```

----------------------------------------

TITLE: MDX Example for Single and Multi-line Notes
DESCRIPTION: Shows the MDX syntax for creating 'Good to know' notes, including examples for both single-line and multi-line bulleted notes, used for important but non-critical information.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_15

LANGUAGE: mdx
CODE:
```
> **Good to know**: This is a single line note.

> **Good to know**:
>
> - We also use this format for multi-line notes.
> - There are sometimes multiple items worth knowing or keeping in mind.
```

----------------------------------------

TITLE: Create a Basic GET Route Handler
DESCRIPTION: Demonstrates how to create a simple GET request handler that returns a JSON response using the Web Response API.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx#_snippet_0

LANGUAGE: ts
CODE:
```
export async function GET() {
  return Response.json({ message: 'Hello World' })
}
```

LANGUAGE: js
CODE:
```
export async function GET() {
  return Response.json({ message: 'Hello World' })
}
```

----------------------------------------

TITLE: Bootstrap Next.js api.video example application
DESCRIPTION: Commands to initialize a new Next.js project using the `create-next-app` utility with the `with-apivideo` example template. This allows users to quickly set up the project structure and initial files using their preferred package manager (npx, yarn, or pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-apivideo/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-apivideo with-apivideo-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-apivideo with-apivideo-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-apivideo with-apivideo-app
```

----------------------------------------

TITLE: Install Dependencies and Run Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server using either npm or yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Implement Dynamic API Routes in Next.js
DESCRIPTION: This example demonstrates how to create dynamic API routes in Next.js, following the same file naming conventions as dynamic pages. It shows how to access dynamic parameters from the request query and use them in the response, enabling flexible routing based on URL segments.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_16

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
```

LANGUAGE: js
CODE:
```
export default function handler(req, res) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
```

----------------------------------------

TITLE: API Endpoints for Post Management
DESCRIPTION: Documentation for the REST API endpoints used to create, update, publish, and delete posts within the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-edgedb/README.md#_snippet_8

LANGUAGE: APIDOC
CODE:
```
POST /api/post:
  Description: Create a new post
  Body: {title: string; content: string; authorName: string}
```

LANGUAGE: APIDOC
CODE:
```
PATCH /api/post/:id:
  Description: Update a post by ID
  Body: {title?: string; content?: string;}
```

LANGUAGE: APIDOC
CODE:
```
PUT /api/publish/:id:
  Description: Publish a post by ID
```

LANGUAGE: APIDOC
CODE:
```
DELETE /api/post/:id:
  Description: Delete a post by ID
```

----------------------------------------

TITLE: Configure Webiny CMS API Key
DESCRIPTION: Instructions for creating an API key in Webiny's Headless CMS. The key should have custom access level for all content model groups with 'read' and 'preview' permissions to allow fetching both published and draft content.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
API Key Configuration:
  - Name: Any
  - Description: Any
  - Headless CMS Access: Custom
    - Content Model Groups: All
      - Permissions: read, preview
```

----------------------------------------

TITLE: Define GET Route Handlers in Next.js App Router
DESCRIPTION: Illustrates how to create custom GET request handlers using Route Handlers in the `app` directory. These handlers leverage Web Request and Response APIs, replacing traditional API Routes for server-side logic. Examples are provided for both TypeScript and JavaScript.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/app-router-migration.mdx#_snippet_30

LANGUAGE: ts
CODE:
```
export async function GET(request: Request) {}
```

LANGUAGE: js
CODE:
```
export async function GET(request) {}
```

----------------------------------------

TITLE: Next.js Docs File System Routing: Alphabetical Sorting
DESCRIPTION: Demonstrates how Next.js documentation uses file-system routing where pages are sorted alphabetically by default, as seen in the functions API reference.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_1

LANGUAGE: txt
CODE:
```
04-functions
├── after.mdx
├── cacheLife.mdx
├── cacheTag.mdx
└── ...
```

----------------------------------------

TITLE: URL API Documentation
DESCRIPTION: Documents the URL Web API, an object providing static methods for creating object URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_59

LANGUAGE: APIDOC
CODE:
```
URL:
  Description: Represents an object providing static methods used for creating object URLs
```

----------------------------------------

TITLE: Project File Structure Overview
DESCRIPTION: This snippet illustrates the directory and file organization of the Next.js Tigris example application, highlighting key folders like `lib`, `db`, and `pages` which contain Tigris client configuration, database models, and API routes respectively.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_7

LANGUAGE: text
CODE:
```
├── package.json
├── lib
│   ├── tigris.ts
├── db
│   └── models
│       └── todoItems.ts
└── pages
    ├── index.tsx
    └── api
        ├── item
        │   ├── [id].ts
        └── items
            ├── index.ts
            └── search.ts
```

----------------------------------------

TITLE: Cache a GET Route Handler in Next.js
DESCRIPTION: Illustrates how to enable static caching for a GET Route Handler in Next.js by setting `export const dynamic = 'force-static'`. The example fetches data from an external API and returns it as JSON, demonstrating a common use case for cached GET requests.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/15-route-handlers-and-middleware.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
```

LANGUAGE: js
CODE:
```
export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: These commands install project dependencies and then start the Next.js development server. This allows you to view your blog locally at `http://localhost:3000` and enables hot-reloading for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-builder-io/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js Xata Example Project
DESCRIPTION: These commands use different package managers (npm, Yarn, pnpm) to create a new Next.js application based on the 'with-xata' example template. This sets up the initial project structure, allowing users to quickly get started with a pre-configured Next.js and Xata integration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-xata/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx create-next-app --example with-xata with-xata-app
```

LANGUAGE: shell
CODE:
```
yarn create next-app --example with-xata with-xata-app
```

LANGUAGE: shell
CODE:
```
pnpm create next-app --example with-xata with-xata-app
```

----------------------------------------

TITLE: Adding Sanity API Read Token to .env.local
DESCRIPTION: Adds the `SANITY_API_READ_TOKEN` to your `.env.local` file. This token is crucial for authentication when Sanity Studio live previews the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_6

LANGUAGE: bash
CODE:
```
SANITY_API_READ_TOKEN="<paste your token here>"
```

----------------------------------------

TITLE: Bootstrap Next.js Apollo Server Example with create-next-app
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application by cloning the `api-routes-apollo-server` example. Users can choose their preferred package manager (npm, Yarn, or pnpm) to quickly set up the project for local development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-apollo-server/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-apollo-server api-routes-apollo-server-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-apollo-server api-routes-apollo-server-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-apollo-server api-routes-apollo-server-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Instructions to install project dependencies and start the Next.js development server locally using npm or Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-ghost/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Registering Taxonomy Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving taxonomy sitemap data. It defines the route `sitemap/v1/taxonomy` with a GET method, which calls the `wsra_generate_taxonomy_api` function to handle the request and return the taxonomy URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_17

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/taxonomy', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_taxonomy_api',
  ));
});
```

----------------------------------------

TITLE: Example .env.local Configuration for Sanity
DESCRIPTION: This snippet shows an example `.env.local` file with essential environment variables for a Next.js and Sanity project. It includes the Sanity Project ID, Dataset name, and a read token for API access and live preview.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_10

LANGUAGE: plaintext
CODE:
```
NEXT_PUBLIC_SANITY_PROJECT_ID="r0z1eifg"
NEXT_PUBLIC_SANITY_DATASET="blog-vercel"
SANITY_API_READ_TOKEN="sk..."
```

----------------------------------------

TITLE: Registering Posts Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving post sitemap data. It defines the route `sitemap/v1/posts` with a GET method, which calls the `wsra_generate_posts_api` function to handle the request and return the post URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_16

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/posts', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_posts_api',
  ));
});
```

----------------------------------------

TITLE: Fixing Dynamic API Call in Next.js API Route
DESCRIPTION: This example shows how to resolve the 'Dynamic API called outside request' error in a Next.js API route by moving the `headers()` function call from the global scope into the `GET` async function, ensuring it's executed within the request scope.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/next-dynamic-api-wrong-context.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
```diff filename="app/foo/route.js"
import { headers } from 'next/headers'

- const headersList = await headers()
export async function GET() {
+ const headersList = await headers()
  return ...
}
```
```

----------------------------------------

TITLE: Import Kontent.ai Content Models using Backup Manager
DESCRIPTION: This command installs the Kontent.ai Backup Manager globally and then uses it to restore content models and data into a Kontent.ai project. It requires a Management API key and the Project ID, along with the path to the backup zip file, to populate the project with predefined content structures.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/README.md#_snippet_1

LANGUAGE: sh
CODE:
```
npm i -g @kontent-ai/backup-manager
kbm --action=restore --apiKey=<Management API key> --projectId=<Project ID> --zipFilename=kontent-ai-backup
```

----------------------------------------

TITLE: Registering Author Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving author sitemap data. It defines the route `sitemap/v1/author` with a GET method, which calls the `wsra_generate_author_api` function to handle the request and return the author URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_18

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/author', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_author_api',
  ));
});
```

----------------------------------------

TITLE: Caching a GET Route Handler in JavaScript
DESCRIPTION: This example shows how to enable caching for a GET Route Handler by setting `export const dynamic = 'force-static'`. The handler fetches data from an external API and returns it as JSON, demonstrating how to make a static data fetch within a cached route.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
```

----------------------------------------

TITLE: Next.js Docs Required Page Metadata (YAML)
DESCRIPTION: Example of a YAML front matter block defining the essential `title` and `description` fields required for every Next.js documentation page, crucial for SEO and page rendering.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_3

LANGUAGE: yaml
CODE:
```
---
title: Page Title
description: Page Description
---
```

----------------------------------------

TITLE: Create Next.js App with Neo4j Example
DESCRIPTION: Initializes a new Next.js project using the `create-next-app` utility, specifically bootstrapping it with the `with-neo4j` example template. This can be done using `npx`, `yarn`, or `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-neo4j/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-neo4j with-neo4j-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-neo4j with-neo4j-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-neo4j with-neo4j-app
```

----------------------------------------

TITLE: ReactDOM.preload API Reference
DESCRIPTION: API documentation for the `ReactDOM.preload` method, which is used to start loading a resource early in the browser's rendering lifecycle. It takes a `href` string and an `options` object with an `as` property.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/generate-metadata.mdx#_snippet_43

LANGUAGE: APIDOC
CODE:
```
ReactDOM.preload(href: string, options: { as: string })
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: This snippet provides commands to install project dependencies and start the Next.js application in development mode. It includes options for both npm and yarn, allowing developers to choose their preferred package manager to get the application running locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-datocms/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev

# or

yarn install
yarn dev
```

----------------------------------------

TITLE: Parsing User Inputs for WordPress API Queries
DESCRIPTION: This PHP function `wsra_get_user_inputs` parses `GET` request parameters (`pageNo`, `perPage`, `taxonomyType`, `postType`) to construct arguments for WordPress queries. It sanitizes and defaults values, preparing arrays (`$args`, `$postArgs`) suitable for functions like `get_users` or `WP_Query`, and determines the taxonomy type for sitemap generation or other API endpoints.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_9

LANGUAGE: PHP
CODE:
```
function wsra_get_user_inputs()
{
  $pageNo = sprintf("%d", $_GET['pageNo']);
  $perPage = sprintf("%d", $_GET['perPage']);
  // Check for array key taxonomyType
  if (array_key_exists('taxonomyType', $_GET)) {
    $taxonomy = $_GET['taxonomyType'];
  } else {
    $taxonomy = 'category';
  }
  $postType = $_GET['postType'];
  $paged = $pageNo ? $pageNo : 1;
  $perPage = $perPage ? $perPage : 100;
  $offset = ($paged - 1) * $perPage;
  $args = array(
    'number' => $perPage,
    'offset' => $offset,
  );
  $postArgs = array(
    'posts_per_page' => $perPage,
    'post_type' => strval($postType ? $postType : 'post'),
    'paged' => $paged,
  );

  return [$args, $postArgs, $taxonomy];
}
```

----------------------------------------

TITLE: Configure Agility CMS Environment Variables for Next.js
DESCRIPTION: This step involves copying the example environment file and populating it with specific Agility CMS API keys and GUIDs. These variables are crucial for the Next.js application to establish a connection with the CMS, enabling content fetching and preview mode functionalities.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-agilitycms/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

LANGUAGE: bash
CODE:
```
AGILITY_CMS_GUID=...
AGILITY_CMS_API_FETCH_KEY=...
AGILITY_CMS_API_PREVIEW_KEY=...
AGILITY_CMS_SECURITY_KEY=...
```

----------------------------------------

TITLE: Construct Next.js Preview Mode URL
DESCRIPTION: Illustrates the required format for accessing the Next.js preview mode API endpoint. This URL requires a secret token for authentication, which should match the one defined in your `.env.local` file, and the slug of the content you wish to preview.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-graphcms/README.md#_snippet_3

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<YOUR_SECRET_TOKEN>&slug=<SLUG_TO_PREVIEW>
```

----------------------------------------

TITLE: Bootstrap Next.js Contentful Blog Example
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to quickly set up the Next.js blog example integrated with Contentful.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-contentful cms-contentful-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-contentful cms-contentful-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-contentful cms-contentful-app
```

----------------------------------------

TITLE: Direct Streaming with Web APIs in Next.js Route Handlers
DESCRIPTION: This example illustrates how to implement server-side streaming directly using native Web APIs like `ReadableStream` and `TextEncoder` in a Next.js Route Handler. It defines helper functions to convert an async iterator to a stream and simulate delays, then generates a stream of HTML paragraphs. The `GET` handler returns a `Response` object with the created stream.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_15

LANGUAGE: TypeScript
CODE:
```
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

LANGUAGE: JavaScript
CODE:
```
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  })
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

----------------------------------------

TITLE: Bootstrap Next.js Elasticsearch Example Application
DESCRIPTION: Commands to initialize a new Next.js project based on the 'with-elasticsearch' example. This sets up the basic project structure and dependencies required to start developing with Elasticsearch integration. Users can choose between npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-elasticsearch/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-elasticsearch with-elasticsearch-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-elasticsearch with-elasticsearch-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-elasticsearch with-elasticsearch-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Provides commands to install project dependencies and start the Next.js application in development mode, allowing access via http://localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev

# or

yarn install
yarn dev
```

----------------------------------------

TITLE: Registering Total Pages Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving total page counts for various content types. It defines the route `sitemap/v1/totalpages` with a GET method, which calls the `wsra_generate_totalpages_api` function to handle the request and return the aggregated counts.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_19

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/totalpages', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_totalpages_api',
  ));
});
```

----------------------------------------

TITLE: Next.js Docs Optional Page Metadata (YAML)
DESCRIPTION: Example of a YAML front matter block showcasing optional metadata fields like `nav_title`, `source`, `related`, and `version` to customize navigation, share content, and link related pages in Next.js documentation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_4

LANGUAGE: yaml
CODE:
```
---
nav_title: Nav Item Title
source: app/building-your-application/optimizing/images
related:
  description: See the image component API reference.
  links:
    - app/api-reference/components/image
version: experimental
---
```

----------------------------------------

TITLE: Next.js: Example Preview Mode API Route URL
DESCRIPTION: Provides an example URL structure for accessing the preview API route, including secret for authentication and slug for content identification. This URL is used to initiate preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/preview-mode.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
https://<your-site>/api/preview?secret=<token>&slug=<path>
```

----------------------------------------

TITLE: MDX Example for Using Check and Cross Icons
DESCRIPTION: Provides an MDX snippet demonstrating how to embed `<Check>` and `<Cross>` components with a specified size, which are available for use in the documentation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_14

LANGUAGE: mdx
CODE:
```
<Check size={18} />
<Cross size={18} />
```

----------------------------------------

TITLE: Common Module Part 0 (JavaScript)
DESCRIPTION: This JavaScript code represents a common module part used in both development and production builds. It includes the NextResponse import, the GET API route definition, and various exports, including Turbopack-specific re-exports (__TURBOPACK_VAR__). This part forms a foundational segment of the compiled module.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_4

LANGUAGE: js
CODE:
```
import { NextResponse } from "next/server";
import "next/server";
const GET = (req)=>{
    return NextResponse.json({
        pathname: req.nextUrl.pathname
    });
};
export { GET };
export { GET as a } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};
export { };
```

----------------------------------------

TITLE: Create Next.js App with Jotai Example
DESCRIPTION: Bootstraps a new Next.js application using the `create-next-app` utility, pre-configured with the Jotai example. This command initializes a project directory named `with-jotai-app` and includes the necessary Jotai setup.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-jotai/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-jotai with-jotai-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-jotai with-jotai-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-jotai with-jotai-app
```

----------------------------------------

TITLE: Defining and Exporting a GET API Route Handler
DESCRIPTION: Presents a standard JavaScript function GET that is exported, typical for Next.js API routes. This function returns a JSON response, demonstrating how imported client components can be referenced within a server-side API endpoint.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/typeof-1/output.md#_snippet_1

LANGUAGE: javascript
CODE:
```
export function GET() {
    return NextResponse.json({
        clientComponent: typeof ClientComponent,
        myModuleClientComponent: typeof MyModuleClientComponent
    });
}
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: Starts the Next.js development server, making the application accessible locally for development and testing.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mysql/README.md#_snippet_9

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: Configure Contentful Environment Variables for Next.js
DESCRIPTION: Explains how to copy the example .env.local file and set Contentful API keys and secrets required for the Next.js application. This includes Space ID, Access Token, Preview Access Token, Preview Secret, and Revalidate Secret.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

LANGUAGE: bash
CODE:
```
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_SECRET=...
CONTENTFUL_REVALIDATE_SECRET=...
```

----------------------------------------

TITLE: Enable Next.js Preview Mode
DESCRIPTION: URL endpoint to activate Next.js Preview Mode, requiring a secret string for authentication.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_9

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<secret>
```

----------------------------------------

TITLE: Bootstrap Next.js Project with XState Example
DESCRIPTION: Provides commands to quickly set up a new Next.js application pre-configured with the XState example using `create-next-app` via npm, Yarn, or pnpm. This is the recommended way to start with the example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-xstate/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-xstate with-xstate-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-xstate with-xstate-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-xstate with-xstate-app
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Webiny Example
DESCRIPTION: These commands demonstrate how to quickly initialize a new Next.js application using the `create-next-app` utility, pre-configured with the Webiny CMS example. Choose your preferred package manager (npm, Yarn, or pnpm) to set up the project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-webiny cms-webiny-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-webiny cms-webiny-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-webiny cms-webiny-app
```
