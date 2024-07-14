import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
	base: '/algo-fetch',
	vite: {
		resolve: {
			preserveSymlinks: true
		}
	},
	integrations: [
		starlight({
			title: '@algofam/algo-fetch',
			editLink: {
				baseUrl: 'https://github.com/awesome-algorand/algo-fetch/edit/main/docs/',
			},
			social: {
				github: 'https://github.com/awesome-algorand/algo-fetch',
			},
			plugins: [
				starlightTypeDoc({
					sidebar: {
						label: "Packages",
						collapsed: true,
					},
					typeDoc: {
						"entryPointStrategy": "packages",
						"includeVersion": false,
						"readme": "../README.md",
					},
					output: `packages`,
					entryPoints: [`../packages/*`],
				}),
				//TODO: Fix the production openapi build, works in development

				// starlightOpenAPI([
					// {
					// 	base: 'api/algod',
					// 	label: 'Algod',
					// 	schema: 'https://raw.githubusercontent.com/algorand/go-algorand/v3.25.0-stable/daemon/algod/api/algod.oas3.yml',
					// },
					// {
					// 	base: 'api/indexer',
					// 	label: 'Indexer',
					// 	schema: 'https://raw.githubusercontent.com/algorand/indexer/v3.5.0/api/indexer.oas3.yml',
					// },
					// {
					// 	base: 'api/kmd',
					// 	label: 'KMD',
					// 	schema: 'https://raw.githubusercontent.com/algorand/go-algorand/v3.25.0-stable/daemon/kmd/api/swagger.json',
					// },
				// ]),
			],
			sidebar: [
				{
					label: "Overview",
					link: "/packages/readme"
				},
				{
				    label: "Guides",
					autogenerate: {
						directory: `guides`,
					}
				},
				typeDocSidebarGroup,
				// {
				// label: "Services",
				// 	collapsed: true,
				// 	items: openAPISidebarGroups
				// },
			],
		}),
	],
});
