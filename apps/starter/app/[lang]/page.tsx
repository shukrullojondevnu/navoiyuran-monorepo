import { Locale } from "@repo/config/i18n-config";
import { Hero } from "@repo/ui/components/hero";
import { getDictionary } from "../../get-dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return <div className="container">{dictionary.test}</div>;
}
