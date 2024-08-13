"use client";
import { useSession, SessionProvider } from "next-auth/react";
import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
);

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  console.log("Session object:", session);
  if (!session || !session.user) {
    return <div>Please sign in</div>;
  }

  const { user } = session;
  const { name, email } = user;

  return (
    <div>
      Welcome {name}
      <br />
      <br />
      User Email: {email}
    </div>
  );
};

const PageWithProvider = () => (
  <PageWrapper>
    <Page />
  </PageWrapper>
);

export default PageWithProvider;
