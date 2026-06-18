const sendJson = (res, statusCode, payload) => {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(payload);
  }

  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
  return undefined;
};

export async function fetchPinnedRepos() {
  const githubToken = process.env.GITHUB_ACCESS_TOKEN || process.env.GITHUB_TOKEN;

  if (!githubToken) {
    return { repos: [], error: 'Missing GitHub token' };
  }

  const query = `
    {
      user(login: "AayushBarik07") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
              updatedAt
              homepageUrl
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              object(expression: "HEAD:README.md") {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${githubToken}`,
      'Content-Type': 'application/json',
      'User-Agent': 'MyPortfolioApp',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  if (!response.ok || data.errors) {
    console.error('GitHub API Error:', data);
    return { repos: [], error: 'GitHub API request failed' };
  }

  return { repos: data.data.user.pinnedItems.nodes };
}

export default async function handler(req, res) {
  try {
    const data = await fetchPinnedRepos();

    if (data.error) {
      return sendJson(res, 500, data);
    }

    return sendJson(res, 200, data);
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return sendJson(res, 500, { repos: [], error: 'Unable to fetch pinned repos' });
  }
}