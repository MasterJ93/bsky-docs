
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  | 'opensource' // link to source code required
  | 'client'
  | 'web'
  | 'iOS'
  | 'Android'
  | 'macOS'
  | 'CLI'
  | 'bridge'
  | 'customfeed'
  | 'stats'
  | 'domains'
  | 'firehose'
  | 'protocol'   // Protocol implementations
  | 'tutorial'
  | 'othertools';

const Users: User[] = [
  {
    title: 'bluesky client',
    description: 'i am a bluesky client',
    preview: require('./showcase/example-1.png'),
    website: 'https://blueskyweb.xyz/',
    source: 'https://github.com/bluesky-social/social-app',
    tags: ['opensource', 'favorite'],
  },
  {
    title: 'Japanese atproto docs',
    description: 'Japanese documentation for atproto',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://github.com/encrypteduse/atproto-website-docs-jp',
    source: 'https://github.com/encrypteduse/atproto-website-docs-jp',
    tags: ['tutorial'],
  },
  {
    title: 'TypeScript/Node atproto starter kit',
    description: 'TypeScript/Node template for atproto',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://github.com/aliceisjustplaying/atproto-starter-kit',
    author: 'https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf',
    tags: ['tutorial'],
  },
  {
    title: 'Bluesky bot using ATProto and OpenAI API',
    description: 'Guide on building a Bluesky bot with ATProto and OpenAI API',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://ashevat.medium.com/how-to-build-a-bluesky-bot-using-atproto-and-openai-api-77a26a154b',
    author: 'https://bsky.app/profile/did:plc:ua6usdc4hzvzjsokoenba4zt',
    tags: ['tutorial'],
  },
  {
    title: 'Bluesky bot tutorial',
    description: 'Tutorial for creating a Bluesky emoji bot',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://github.com/emilyliu7321/bluesky-emoji-bot/blob/main/TUTORIAL.md',
    author: 'https://bsky.app/profile/did:plc:vjug55kidv6sye7ykr5faxxn',
    tags: ['tutorial'],
  },
  {
    title: 'Getting started with #atdev',
    description: 'Introductory guide to ATProto development',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://graysky.app/blog/2023-10-17-getting-started-atproto',
    author: 'https://bsky.app/profile/did:plc:p2cp5gopk7mgjegy6wadk3ep',
    tags: ['tutorial'],
  },
]

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source?: string | null;
  author?: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: 'Favorite',
    description:'Staff picks',
    color: '#e9669e',
  },
  opensource: {
    label: 'Open-Source',
    description: 'Open-Source Bluesky projects',
    color: '#39ca30',
  },
  client: {
    label: 'Client',
    description: 'Alternative Bluesky clients',
    color: '#008080',
  },
  web: {
    label: 'Web',
    description: 'Web-based Bluesky applications',
    color: '#0066cc',
  },
  iOS: {
    label: 'iOS',
    description: 'iOS compatible Bluesky applications',
    color: '#ff9500',
  },
  Android: {
    label: 'Android',
    description: 'Android compatible Bluesky applications',
    color: '#a4c639',
  },
  macOS: {
    label: 'macOS',
    description: 'macOS compatible Bluesky applications',
    color: '#999999',
  },
  CLI: {
    label: 'CLI',
    description: 'Command Line Interface tools for Bluesky',
    color: '#555555',
  },
  bridge: {
    label: 'Bridge',
    description: 'Bridging tools between Bluesky and other platforms',
    color: '#1a73e8',
  },
  customfeed: {
    label: 'Custom Feed',
    description: 'Tools for customizing Bluesky feeds',
    color: '#fbbc05',
  },
  stats: {
    label: 'Stats',
    description: 'Statistics and analytics tools for Bluesky',
    color: '#34a853',
  },
  domains: {
    label: 'Domains',
    description: 'Domain management tools for Bluesky',
    color: '#ea4335',
  },
  firehose: {
    label: 'Firehose',
    description: 'Tools for manipulating the Bluesky firehose',
    color: '#4285f4',
  },
  protocol: {
    label: 'Protocol',
    description: 'Protocol implementations for Bluesky',
    color: '#0f9d58',
  },
  tutorial: {
    label: 'Tutorial',
    description: 'Resources and tutorials',
    color: '#f4b400',
  },
  othertools: {
    label: 'Other Tools',
    description: 'Miscellaneous tools for Bluesky',
    color: '#e8eaed',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();

// /**
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// import React from 'react';
// import {difference, sortBy} from '../utils/jsUtils';
// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiSvelte,
//   SiPython,
//   SiDjango,
//   SiGo,
//   SiDocker,
//   SiCelery,
//   SiRedis,
//   SiAmazonaws,
//   SiFlutter,
//   SiGraphql,
//   SiLine,
//   SiPokemon,
//   SiPostgresql,
//   SiMysql,
//   SiWebpack
// } from 'react-icons/si';



// /*
//  * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
//  *
//  * Requirements for adding your site to our showcase:
//  * - It is a production-ready site with real content and decent customizations (different from the init templates)
//  * - It is NOT a work-in-progress with empty pages
//  * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
//  *
//  * Instructions:
//  * - Add your site in the json array below
//  * - Add a local image preview (decent screenshot of your Docusaurus site)
//  * - Use relevant tags to qualify your site (read the tag descriptions bellow)
//  * - The image MUST be added to the GitHub repository, and use `require("image")`
//  * - Open a PR and check for reported CI errors
//  *
//  * Example PR: https://github.com/facebook/docusaurus/pull/3976
//  *
//  * If you edit this file through the Github interface, you can:
//  * - Submit first your users.js edit PR
//  * - This will create a branch on your Docusaurus fork (usually "patch-1")
//  * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
//  * - Drag-and-drop an image here to add it to your existing PR
//  *
//  * Please help us maintain this showcase page data:
//  * - Update sites with wrong data
//  * - Ensure site tags remains correct over time
//  * - Remove sites not using Docusaurus anymore
//  * - Add missing Docusaurus sites (if the site owner agreed)
//  *
//  */

// export type Tag = {
//   label: string;
//   description: string;
//   icon: JSX.Element;
// };

// export type TagType =
//   | 'favorite'
//   | 'opensource'
//   | 'bot'
//   | 'client'
//   | 'feedgenerator'
//   ;

// export type User = {
//   title: string;
//   description: string;
//   preview: any;
//   website: string;
//   source: string | null;
//   tags: TagType[];
// };

// // LIST OF AVAILABLE TAGS
// // Available tags to assign to your site
// // Please choose widely, we'll remove unappropriate tags
// export const Tags: Record<TagType, Tag> = {
//   // For open-source sites, a link to the source code is required
//   opensource: {
//     label: 'Open-Source',
//     description: 'Open-Source Docusaurus sites can be useful for inspiration!',
//     icon: <>👨‍💻</>,
//   },
//   favorite: {
//     label: 'Favorite',
//     description: 'Favorite project',
//     icon: <>👨‍💻</>,
//   },
//   bot: {
//     label: 'Bot',
//     description: 'Bot',
//     icon: <>👨‍💻</>,
//   },
//   client: {
//     label: 'Client',
//     description: 'client',
//     icon: <>👨‍💻</>,
//   },
//   feedgenerator: {
//     label: 'Feed Generator',
//     description: 'feed generator',
//     icon: <>👨‍💻</>,
//   },
// };

// // Add your site to this list
// // prettier-ignore
// const Users: User[] = [
//   {
//     title: 'one',
//     description: 'description one',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://timeline.line.me/user/_dVIuvfRKpnIF0fshFbeisWNMXSXo1yCFeUZWwFM',
//     source: 'https://github.com/pandawa-tech/arjuna',
//     tags: [
//       'opensource',
//     ],
//   },
//   {
//     title: 'Bima',
//     description: 'Algorithm Visualizer.',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://bima.priambudi.fyi/',
//     source: 'https://github.com/pandawa-tech/bima',
//     tags: [
//       'opensource',
//       'bot'
//     ],
//   },
//   {
//     title: 'Pokédex',
//     description: 'Pokédex and catch Pokémon!',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://pokedex.priambudi.fyi/',
//     source: 'https://github.com/priambudiLB/pokedex',
//     tags: [
//       'opensource',
//       'favorite'
//     ],
//   },
//   {
//     title: 'Mood Tracker',
//     description: 'Mood & Activity Tracker App.',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://play.google.com/store/apps/details?id=id.ac.ui.cs.modi.ModiApp&hl=in&gl=US',
//     source: null,
//     tags: [
//       'client'
//     ],
//   }

//   /*
//   Pro Tip: add your site in alphabetical order.
//   Appending your site here (at the end) is more likely to produce Git conflicts.
//    */
// ];

// export const TagList = Object.keys(Tags) as TagType[];
// function sortUsers() {
//   let result = Users;
//   // Sort by site name
//   result = sortBy(result, (user) => user.title.toLowerCase());
//   return result;
// }

// export const sortedUsers = sortUsers();

// // Fail-fast on common errors
// function ensureUserValid(user: User) {
//   function checkFields() {
//     const keys = Object.keys(user);
//     const validKeys = [
//       'title',
//       'description',
//       'preview',
//       'website',
//       'source',
//       'tags',
//     ];
//     const unknownKeys = difference(keys, validKeys);
//     if (unknownKeys.length > 0) {
//       throw new Error(
//         `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
//       );
//     }
//   }

//   function checkTitle() {
//     if (!user.title) {
//       throw new Error('Site title is missing');
//     }
//   }

//   function checkDescription() {
//     if (!user.description) {
//       throw new Error('Site description is missing');
//     }
//   }

//   function checkWebsite() {
//     if (!user.website) {
//       throw new Error('Site website is missing');
//     }
//     const isHttpUrl =
//       user.website.startsWith('http://') || user.website.startsWith('https://');
//     if (!isHttpUrl) {
//       throw new Error(
//         `Site website does not look like a valid url: ${user.website}`,
//       );
//     }
//   }

//   function checkPreview() {
//     if (
//       !user.preview ||
//       (user.preview instanceof String &&
//         (user.preview.startsWith('http') || user.preview.startsWith('//')))
//     ) {
//       throw new Error(
//         `Site has bad image preview=[${user.preview}].\nThe image should be hosted on Docusaurus site, and not use remote HTTP or HTTPS URLs`,
//       );
//     }
//   }

//   function checkTags() {
//     if (
//       !user.tags ||
//       !(user.tags instanceof Array) ||
//       (user.tags as string[]).includes('')
//     ) {
//       throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
//     }
//     const unknownTags = difference(user.tags, TagList);
//     if (unknownTags.length > 0) {
//       throw new Error(
//         `Unknown tags=[${unknownTags.join(
//           ',',
//         )}\nThe available tags are ${TagList.join(',')}`,
//       );
//     }
//   }

//   function checkOpenSource() {
//     if (typeof user.source === 'undefined') {
//       throw new Error(
//         "The source attribute is required.\nIf your Docusaurus site is not open-source, please make it explicit with 'source: null'",
//       );
//     } else {
//       const hasOpenSourceTag = user.tags.includes('opensource');
//       if (user.source === null && hasOpenSourceTag) {
//         throw new Error(
//           "You can't add the opensource tag to a site that does not have a link to source code.",
//         );
//       } else if (user.source && !hasOpenSourceTag) {
//         throw new Error(
//           "For open-source sites, please add the 'opensource' tag",
//         );
//       }
//     }
//   }

//   try {
//     checkFields();
//     checkTitle();
//     checkDescription();
//     checkWebsite();
//     checkPreview();
//     checkTags();
//     checkOpenSource();
//   } catch (e) {
//     throw new Error(
//       `Showcase site with title=${user.title} contains errors:\n${e.message}`,
//     );
//   }
// }

// Users.forEach(ensureUserValid);