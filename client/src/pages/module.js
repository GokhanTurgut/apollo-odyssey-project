import { useQuery, gql } from "@apollo/client";
import Layout from "../components/layout";
import { QueryResult, ModuleDetail } from "../components";

const GET_MODULE = gql`
  query TrackModules($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE, {
    variables: {
      trackId,
      moduleId,
    },
  });

  return (
    <Layout fullWidth={true}>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
