# **fastify-typescript-boilerplate**

## **Usage**
### ***Generating Routes From Cli***
To generate a route boilerplate from cli, run:
```sh
npm run cli
```
Select the `Generate Router` option.
<br />
On proceeding further a file for the router will be generated in `src/routes`.
### ***Generating Schema And Types For Typescript***
Add your schema files as array of json to the `schema` folder in the root directory.
<br />
This json file extends the json schema and must also includes the additional properties:
  - `schemaType`: Type of the schema. (body, query, params, response)
<br />
To generate types for typescript using json schema, run:
```sh
npm run cli
```
Select the `Generate Schema` option. This will generate TypeScript types for your JSON schema in the `src/types/schema` folder.


## Tech Stack Used in the Boilerplate
- Fastify
- TypeScript
- Redis
