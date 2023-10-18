import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";

const STARSHIPS_SERVICE = process.env.STARSHIPS_SERVICE;

export default async function PersonajesDetail({ params }) {
  const url = STARSHIPS_SERVICE + "/" + params.id;
  const character = await getData("starships", url);

  return (
    <>
      <DetailPage title="Naves" data={character} />
    </>
  );
}
