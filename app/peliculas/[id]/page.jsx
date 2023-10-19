import DetailPage from "@/app/components/DetailPage/DetailPage.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS } from "@/app/constants/constants.js";

const MOVIES_SERVICE = process.env.MOVIES_SERVICE;

export default async function MovieDetail({ params }) {
  const movie = await getData(
    MOVIES_SERVICE,
    urlBuilder(MOVIES_SERVICE, params.id)
  );

  return (
    <>
      <DetailPage title={LABELS.MOVIES} data={movie} />
    </>
  );
}
