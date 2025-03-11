type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: Location;
};

type TypePlace = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
};

export type { TypePlace, Location };

