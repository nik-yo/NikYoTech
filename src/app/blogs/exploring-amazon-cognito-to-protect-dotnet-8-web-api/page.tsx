import Content from "@/components/content";
import RegularLink from "@/components/regular -link";

export default function BlogPost() {
  return (
    <Content className="my-4 space-y-2">
      <h1 className="text-2xl font-bold">Exploring Amazon Cognito to protect .NET 8 Web API backend.</h1>
      <p className="italic">9/27/2024</p>
      <div className="space-y-4">
        <div>
          <p>In the past, I have explored various authentication tools and frameworks. From ASP.NET Membership and ASP.NET Identity, IdentityServer4 (roll out your own OpenID connect and OAuth 2.0 server), and Auth0. Auth0 was very easy and they have many guides for major frameworks and libraries which makes it very fast to implement. But AWS Cognito has better free tier offering, so I want so see how I can use AWS Cognito for authentication and to protect my .NET backend.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">AWS setup</h2>
          <p>I started by creating user pool, user pool domain, and user pool client. It&apos;s obvious to me to start with user pool because I have learned enough about AWS security offering. However, I can&apos;t find a good written documentation. The closest is probably this guide to <RegularLink href="https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-test-application-react.html">Set up an example React single page application</RegularLink>.</p>

          <p>Next is the user pool domain. This is optional, but I need it for <RegularLink href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html">Hosted UI</RegularLink>. Hosted UI will let identity provider such as AWS Cognito to host the login screen (the one that shows username and password), so we don&apos;t have to build it in our application. There two kinds of domains that we can set up, one is Amazon Cognito domain and the other one is custom domain. Amazon Cognito domain is simpler to setup, but custom domain looks better since it doesn&apos;t look like your user is being sent elsewhere for authentication.</p>

          <p>After that is the user pool client. This will represent our application. It&apos;s pretty straightforward if you are familiar with OpenID connect/OAuth 2.0 configurations.</p>

          <p>Overall, the first part is pretty easy to do with IaC (Infrastructure as Code) of your choice.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">React frontend setup</h2>

          <p>Now comes the slightly harder part. Unlike Auth0, where they provide a straightforward guide on how to implement it on your frontend. AWS only provides examples at best. I needed two things on the frontend, one is to manage tokens and another is to protect routes/pages, but first I need to configure the frontend to use Amazon Cognito. To make things easier, I ended up using AWS Amplify Auth and since I already setup Amazon Cognito, I can use AWS Amplify with <RegularLink href="https://docs.amplify.aws/react/build-a-backend/auth/use-existing-cognito-resources/">existing Cognito resources</RegularLink>. Alternatively, AWS Amplify can help setup the backend Amazon Cognito resources, so it can replace the AWS setup part above.</p>
          
          <p>One thing to note is AWS Amplify Auth has two generations, gen 1 and gen 2, but from my experience, rather than gen 2 replaces gen 1, it is more like gen 2 complements gen 1 in terms of functionality, so gen 1 documentation is still valid for some cases that gen 2 doesn&apos;t cover.</p>

          <p>The documentation on <RegularLink href="https://docs.amplify.aws/react/build-a-backend/auth/set-up-auth/">AWS Amplify Auth setup</RegularLink>, by default, is using the self-hosted UI. To use hosted UI, we need to replace the loginWith section from email to oauth similar to this example on <RegularLink href="https://docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories/#authentication-amazon-cognito">Authentication (Amazon Cognito)</RegularLink>.</p>

          <p>Next is token management. AWS Amplify Auth package already provides convenient functions for it, such as <RegularLink href="https://docs.amplify.aws/gen1/react/build-a-backend/auth/add-social-provider/#set-up-your-frontend">signInWithRedirect</RegularLink> (to send user to hosted UI), <RegularLink href="https://docs.amplify.aws/gen1/react/build-a-backend/auth/manage-user-session/#retrieve-your-current-authenticated-user">getCurrentUser</RegularLink> (to check if user is authenticated and get current user basic information), <RegularLink href="https://docs.amplify.aws/gen1/react/build-a-backend/auth/manage-user-session/#retrieve-a-user-session">fetchUserSession</RegularLink> (to get access token, id token, etc.).</p>

          <p>For route protection, there are generally two options for React frontend. One is to use <RegularLink href="https://legacy.reactjs.org/docs/higher-order-components.html">HOC (High Order Components)</RegularLink>, slightly not recommended anymore, but I would argue that it&apos;s very effective in this case. Another way to use hooks which can replace most HOC use cases. Either one works. On top of that, I use <RegularLink href="https://react.dev/reference/react/useContext">React Context</RegularLink> with Provider to provide the user data to components.</p>

          <p>Frontend is pretty much done at this point.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">.NET 8 Web API backend setup</h2>

          <p>Backend setup takes me more time but still fairly easy once I understand the quirks. I wanted to protect my backend with JWT Bearer token, so all I need is to setup Authentication and Authorization. It is usually very straighforward, but apparently there&apos;s breaking change in .NET 8 and it&apos;s not fixed by default. Basically, the token received is valid, but the middleware doesn&apos;t think so and throws an error that the token is malformed. Using newer package version as mentioned in <RegularLink href="https://github.com/dotnet/aspnetcore/issues/52075">the issue thread</RegularLink> fixed the problem.</p>

          <p>Another quirk comes from AWS. By default, the access token doesn&apos;t have audience (aud) field, so the default configuration in .NET won&apos;t work since it will try to validate the audience field. So we need custom validator to validate the client_id field instead as mentioned in this article on <RegularLink href="https://aws.amazon.com/blogs/dotnet/implement-fine-grained-authorization-in-your-net-api-using-amazon-cognito-custom-scopes/">Implement fine-grained authorization in your .NET API using Amazon Cognito Custom Scopes</RegularLink>.</p>
        </div>
        <div>
          <p>At the end, the amount of work is not too bad, but it is pretty confusing for first timer.</p>
        </div>
      </div>
    </Content>
  )
}