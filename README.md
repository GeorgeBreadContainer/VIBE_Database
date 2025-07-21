# Project

## How to access

In order to access the website you'll have to:
  1. Click on the [publicly accessible link](https://portfolio-git-master-georgebreadcontainers-projects.vercel.app).
  2. You'll need to sign up to Vercel, using: Google, GitHub, GitLab, Bitbucket or Email.
  3. Log in to your Vercel account.
  4. When on authorization page you'll need to send me an SMS with the account's name or e-mail on the phone number disclosed in CV.
  5. I authorize your access.
     
All done! You'll be able to browse through the website.

## How does it work?

Firstly in the backend there are 2 servers hosted on [Render](https://render.com/). Both are used for another project, that was integrated into the portfolio.

The first server hosts a database and the second express server is a middleman between the portfolio and the database, it uses the code from server/index.js.

Lastly there's the server on [Vercel](https://vercel.com) that hosts the website - this portfolio. All of these servers have their limitations, for example: CPU usage, outbound bandwith, active connections.

Vercel's [recommended approach](https://vercel.com/docs/deployments/sharing-deployments) to sharing websites is to manually invite users to see the website. The second approach is to share a public link and authorize an account - What I do. The third is to disable deployment protection, to disable authorization.

I can only have 1 other account see the website at any given point in time.
