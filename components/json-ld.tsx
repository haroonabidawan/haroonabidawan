type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };
type JsonLdObject = { [key: string]: JsonLdValue };

type JsonLdProps = {
  data: JsonLdObject | readonly JsonLdObject[];
};

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
