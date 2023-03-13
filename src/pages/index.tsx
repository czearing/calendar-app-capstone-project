import { Button } from "@fluentui/react-components";
import Link from "next/link";

const IndexPage = () => (
  <div>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
      <Button>Hello</Button>
    </p>
  </div>
);

export default IndexPage;
