import { Main } from "~/app/_components/main";
import { auth } from "~/server/auth";

export default async function Home() {
  const session = await auth();
  return <Main>{JSON.stringify(session)}</Main>;
}
