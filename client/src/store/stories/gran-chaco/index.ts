import { atom } from 'recoil';

export const stepAtom = atom({
  key: 'step',
  default: 0,
});

export const lastStepAtom = atom({
  key: 'lastStep',
  default: 0,
});

const granChacoStore = {
  step: stepAtom,
};

export default granChacoStore;
