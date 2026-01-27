export type UserStatusState =
  | "Abroad"
  | "Hospital"
  | "Jail"
  | "Traveling"
  | "Okay"
  | string;

export type PlaneImageType =
  | "private_jet"
  | "airliner"
  | "business_jet"
  | string;

export type UserStatus = {
  description: string;
  details: string;
  state: UserStatusState;
  color: string;
  until: number;
  plane_image_type: PlaneImageType;
};

export type UserProfile = {
  id: number;
  name: string;
  level: number;
  gender: "Male" | "Female" | string;
  status: UserStatus;
};

export type UserProfileResponse = {
  profile: UserProfile;
};
