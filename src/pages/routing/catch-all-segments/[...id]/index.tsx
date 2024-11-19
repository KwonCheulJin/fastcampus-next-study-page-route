import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  id: string[];
}

interface Props {
  params: string[] | undefined;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  Params
> = async context => {
  return {
    props: { params: context.params?.id },
  };
};

export default function CatchAllSegments({ params }: Props) {
  return (
    <main>
      <h1>CATCH-ALL-SEGMENTS</h1>
      <ol>
        {params?.map(param => (
          <li key={param}>{param}</li>
        ))}
      </ol>
    </main>
  );
}
