import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  Button,
} from "@fluentui/react-components";
import { makeStyles, shorthands } from "@griffel/react";
import { ProviderButton } from "./ProviderButton";
import { getProviders } from "next-auth/react";
import Image from "next/image";

const useSignInDialogStyles = makeStyles({
  dialogRoot: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("35px"),
    maxWidth: "500px",
    textAlign: "center",
  },
  signInButtonWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexGrow: "1",
    ...shorthands.gap("10px"),
  },
});

export const SignInDialog = () => {
  const [providers, setProviders] = React.useState(null);
  const signInDialogStyles = useSignInDialogStyles();

  React.useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Sign in</Button>
      </DialogTrigger>
      <DialogSurface className={signInDialogStyles.dialogRoot}>
        <div>
          <Image
            src="/image/signinArt.svg"
            alt="Calendar app logo"
            height={200}
            width={200}
          />
          <DialogTitle>Stay organized, achieve your goals</DialogTitle>
        </div>

        <div className={signInDialogStyles.signInButtonWrapper}>
          {providers &&
            Object.values(providers).map((provider: any, index) => (
              <ProviderButton provider={provider} key={index} />
            ))}
        </div>
      </DialogSurface>
    </Dialog>
  );
};
