import { redirect } from "next/navigation"

export default async function IndividualQuest({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  console.log(`id for the code ${id}`);
  if (id == "1") redirect("https://quant.edaquest.com/")
  else return <>something went wrong!</>
}
