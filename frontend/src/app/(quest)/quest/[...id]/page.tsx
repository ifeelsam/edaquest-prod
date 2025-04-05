import { redirect } from "next/navigation"

export default function IndividualQuest({
  params,
}: {
  params: { id: string }
}) {
  const {id} = params;
  console.log(`id for the code ${id}`);
  if (id === "1") redirect("https://quant.edaquest.com/")
  else return <>something went wrong!</>
}
