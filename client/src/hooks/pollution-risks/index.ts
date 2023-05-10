import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { ClimateChangerisks } from 'types/climate-risks';

const DATA_JSON = [
  {
    id: 0,
    label: 'Not risked',
    value: -1,
  },
  {
    id: 1,
    label: 'Risked',
    value: 1,
  },
];

export function usePollutionRisks(
  queryOptions: UseQueryOptions<ClimateChangerisks[], unknown> = {}
) {
  const fetchPollutionRisks = () => {
    return new Promise((resolve) => {
      resolve(DATA_JSON);
    });
  };

  const query = useQuery(['pollution-pesticide-risk'], fetchPollutionRisks, {
    placeholderData: [],
    ...queryOptions,
  });

  return query;
}
