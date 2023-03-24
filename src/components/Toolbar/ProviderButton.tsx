import React from "react";
import { Button } from "@fluentui/react-components";
import Image from "next/image";
import { signIn } from "next-auth/react";

type ProviderButtonProps = {
  provider: Record<string, any>;
  key: number;
};

export const ProviderButton = (props: ProviderButtonProps) => {
  const { provider, key } = props;

  const onSignIn = () => signIn(provider.id);

  switch (provider.name) {
    case "Google": {
      return (
        <Button
          size="large"
          onClick={onSignIn}
          key={key}
          icon={
            <Image
              src="/image/GoogleLogo.svg"
              alt="Google logo"
              height={24}
              width={24}
            />
          }
        >
          Sign in with Google
        </Button>
      );
    }
    case "GitHub": {
      return (
        <Button
          size="large"
          onClick={onSignIn}
          icon={
            <Image
              src="/image/GithubLogo.svg"
              alt="Github logo"
              height={24}
              width={24}
            />
          }
        >
          Sign in with Github
        </Button>
      );
    }
    default: {
      return <Button color="danger">Unknown</Button>;
    }
  }
};
