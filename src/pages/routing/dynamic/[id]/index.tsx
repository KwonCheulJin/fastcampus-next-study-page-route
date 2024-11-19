import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  id: string;
}

interface Props {
  route: string | undefined;
}

export const getServerSideProps: GetServerSideProps<
  Props,
  Params
> = async context => {
  console.log(context.params?.id);

  return {
    props: {
      route: context.params?.id,
    },
  };
};

export default function DynamicRouting({ route }: Props) {
  return <main>DYNAMIC-ROUTE {route}</main>;
}
