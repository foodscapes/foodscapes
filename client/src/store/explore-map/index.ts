import { array, bool, dict, nullable, number, object, optional, string } from '@recoiljs/refine';
import { atom, selectorFamily } from 'recoil';
import { urlSyncEffect } from 'recoil-sync';

import { FiltersOmitProps, FiltersProps } from 'types/data';
import { Dataset } from 'types/datasets';
import { LayerSettings } from 'types/layers';

// Menus
export const sidebarOpenAtom = atom({
  key: 'sidebar-open',
  default: true,
});

export const layersOpenAtom = atom({
  key: 'layers-open',
  default: false,
});

// Map
export const basemapAtom = atom({
  key: 'basemap',
  default: 'light',
  effects: [
    urlSyncEffect({
      refine: string(),
    }),
  ],
});

export const layersAtom = atom<Dataset['id'][]>({
  key: 'layers',
  default: ['foodscapes'],
  effects: [
    urlSyncEffect({
      refine: array(string()),
    }),
  ],
});

const DEFAULT_SETTINGS = {
  opacity: 1,
  visibility: true,
  expand: true,
};

export const layersSettingsAtom = atom<Record<Dataset['id'], LayerSettings<Dataset['id']>>>({
  key: 'layers-settings',
  default: {
    foodscapes: { group: false, ...DEFAULT_SETTINGS },
    'foodscapes-intensities': { ...DEFAULT_SETTINGS },
    crops: { group: false, ...DEFAULT_SETTINGS },
    'land-use-risk': { ...DEFAULT_SETTINGS },
    'climate-risk': { ...DEFAULT_SETTINGS },
    'pollution-risk': { ...DEFAULT_SETTINGS },
    locations: { ...DEFAULT_SETTINGS },
    countries: { ...DEFAULT_SETTINGS },
    provinces: { ...DEFAULT_SETTINGS },
  } satisfies Record<Dataset['id'], LayerSettings<Dataset['id']>>,
  effects: [
    urlSyncEffect({
      refine: dict(
        object({
          opacity: number(),
          visibility: bool(),
          expand: bool(),
          group: optional(bool()),
        })
      ),
    }),
  ],
});

export const popupAtom = atom({
  key: 'point',
  default: null,
});

export const tabAtom = atom({
  key: 'tab',
  default: 'foodscapes',
  effects: [
    urlSyncEffect({
      refine: string(),
    }),
  ],
});

// Filters
export const foodscapesAtom = atom({
  key: 'foodscapes',
  default: [],
  effects: [
    urlSyncEffect({
      refine: array(number()),
    }),
  ],
});

export const intensitiesAtom = atom({
  key: 'intensities',
  default: [],
  effects: [
    urlSyncEffect({
      refine: array(number()),
    }),
  ],
});

export const cropsAtom = atom({
  key: 'crops',
  default: [],
  effects: [
    urlSyncEffect({
      refine: array(number()),
    }),
  ],
});

export const landUseRiskAtom = atom({
  key: 'landUseRisk',
  default: [],
  effects: [
    urlSyncEffect({
      refine: array(number()),
    }),
  ],
});

export const climateRiskAtom = atom({
  key: 'climateRisk',
  default: [],
  effects: [
    urlSyncEffect({
      refine: array(number()),
    }),
  ],
});

export const pollutionRiskAtom = atom({
  key: 'pollutionRisk',
  default: [],
  effects: [
    urlSyncEffect({
      refine: array(number()),
    }),
  ],
});

export const countryAtom = atom({
  key: 'country',
  default: null,
  effects: [
    urlSyncEffect({
      refine: nullable(number()),
    }),
  ],
});

export const provinceAtom = atom({
  key: 'province',
  default: null,
  effects: [
    urlSyncEffect({
      refine: nullable(number()),
    }),
  ],
});

export const filtersSelector = selectorFamily<FiltersProps, FiltersOmitProps>({
  key: 'filters',
  get:
    (omit) =>
    ({ get }) => ({
      ...(omit !== 'foodscapes' && { foodscapes: get(foodscapesAtom) }),
      ...(omit !== 'intensities' && { intensities: get(intensitiesAtom) }),
      ...(omit !== 'crops' && { crops: get(cropsAtom) }),
      ...(omit !== 'climateRisk' && { climateRisk: get(climateRiskAtom) }),
      ...(omit !== 'landUseRisk' && { landUseRisk: get(landUseRiskAtom) }),
      ...(omit !== 'pollutionRisk' && { pollutionRisk: get(pollutionRiskAtom) }),
      ...(omit !== 'country' && { country: get(countryAtom) }),
      ...(omit !== 'province' && { province: get(provinceAtom) }),
    }),
});

// export function useSyncExploreMap() {
//   const layers = useRecoilValue(layersAtom);

//   const syncAtoms = useRecoilCallback(
//     ({ snapshot, set, reset }) =>
//       async () => {
//         const lys = await snapshot.getPromise(layersAtom);
//         const lysSettings = await snapshot.getPromise(layersSettingsAtom);

//         // Remove layersettings that are not in layers
//         (Object.keys(lysSettings) as Array<Dataset['id']>).forEach((ly) => {
//           if (!lys.includes(ly)) {
//             set(layersSettingsAtom, (prev) => {
//               const { [ly]: l, ...rest } = prev;
//               return rest as Record<Dataset['id'], LayerSettings<Dataset['id']>>;
//             });
//           }
//         });

//         if (lys.length === 0) {
//           reset(layersSettingsAtom);
//           reset(popupAtom);
//         }
//       },
//     []
//   );

//   // Sync layersettings when layers change
//   useEffect(() => {
//     syncAtoms();
//   }, [layers]); // eslint-disable-line react-hooks/exhaustive-deps

//   return null;
// }
