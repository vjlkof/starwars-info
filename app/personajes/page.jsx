import Character from "@/app/components/Character/Character.jsx";
import { getData } from "@/app/utils/apiCall.js";
import { urlBuilder } from "@/app/utils/urlBuilder.js";
import { LABELS, PAGINAS } from "@/app/constants/constants.js";

const CHARACTERS_SERVICE = process.env.CHARACTERS_SERVICE;

export default async function Personajes() {
  const { next: nextPage, results: characters } = await getData(
    CHARACTERS_SERVICE,
    urlBuilder(CHARACTERS_SERVICE)
  );
  return (
    <>
      <Character
        title={LABELS.CHARACTERS}
        service={CHARACTERS_SERVICE}
        charactersData={characters}
        url={CHARACTERS_SERVICE}
        paramData={nextPage}
        route={PAGINAS.CHARACTERS}
      />
    </>
  );
}
