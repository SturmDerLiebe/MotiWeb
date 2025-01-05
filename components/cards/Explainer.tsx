import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export function ExplainerCard({
    title,
    paragraph,
    source,
    altText,
}: {
    title: string;
    paragraph: string;
    source: StaticImport;
    altText: string;
}) {
    return (
        <article className="flex-1 shadow rounded-xl border bg-white">
            <Image className="w-full shadow-inner" src={source} alt={altText} />
            <div className="px-2 pb-2">
                <h2 className={`heading5 pt-8`}>{title}</h2>
                <p className="text-base font-medium pt-2">{paragraph}</p>
            </div>
        </article>
    );
}
