import { StoreSetFn } from ".";

export interface Profile {
  bio: string;
  countryCode: string;
  countryName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
}

export interface SettingsState {
  profile: Profile;
}

export interface SettingsHandlers {
  updateProfile: (p: Profile) => void;
}

export type SettingsSetState = StoreSetFn<SettingsState>;

export type SettingsStore = SettingsHandlers & SettingsState;
