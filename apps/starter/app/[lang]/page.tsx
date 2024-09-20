import { Locale } from "@repo/config/i18n-config";
import { getDictionary } from "../../get-dictionary";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  children?: React.ReactNode;
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary?.metadata?.title,
    openGraph: {},
  };
}

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  return <div className="container">{dictionary.test}</div>;
}
