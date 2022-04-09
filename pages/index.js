import React from "react";
import Head from 'next/head';

export async function getStaticProps() {
  // {
  //   "data": {
  //     "repository": {
  //       "issue": {
  //         "reactionGroups": [
  //           { "content": "THUMBS_UP", "users": { "totalCount": 0 } },
  //           { "content": "THUMBS_DOWN", "users": { "totalCount": 0 } },
  //           { "content": "LAUGH", "users": { "totalCount": 0 } },
  //           { "content": "HOORAY", "users": { "totalCount": 0 } },
  //           { "content": "CONFUSED", "users": { "totalCount": 0 } },
  //           { "content": "HEART", "users": { "totalCount": 0 } },
  //           { "content": "ROCKET", "users": { "totalCount": 0 } },
  //           { "content": "EYES", "users": { "totalCount": 0 } }
  //         ]
  //       }
  //     }
  //   }
  // }
  const props = { ts : Date().toString() };

  // const res = await fetch('https://api.github.com/graphql', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  //   },
  //   body: JSON.stringify({
  //     query: `query {
  //       repository(owner:"vercel", name:"reactions") {
  //         issue(number:1) {
  //           reactionGroups {
  //             content
  //             users(first: 0) {
  //               totalCount
  //             }
  //           }
  //         }
  //       }
  //     }`,
  //   }),
  // });

  // const json = await res.json();
  // if (res.status !== 200) {
  //   console.error(json);
  //   throw new Error('Failed to fetch API');
  // }

  // [0, 0, 0, 0, 0, 0, 0, 0]
//  const reactions = json.data.repository.issue.reactionGroups.map(
//     (item) => item.users.totalCount
//   );

//   props.reactions = reactions;

  console.log('New page generated time: ' + props.ts);

  return {
    props,
    // revalidate: 10,
  };
}

export default function Home(props) {

  const {ts} = props;
  // const {reactions} = props;
  return (
    <div className="container">
      <Head>
        <title>On-Demand ISR Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{ts}</h1>

        <button
                onClick={() => fetch('/api/revalidate')}
            >Invalidate</button>
      </main>
    </div>
  );
}
