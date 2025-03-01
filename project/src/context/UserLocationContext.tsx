import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface UserLocationContextType {
  userLocation: Coordinates | null;
  isLoading: boolean;
  error: string | null;
  requestLocationPermission: () => void;
}

const UserLocationContext = createContext<UserLocationContextType>({
  userLocation: null,
  isLoading: true,
  error: null,
  requestLocationPermission: () => {}
});

export const useUserLocation = () => useContext(UserLocationContext);

export const UserLocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getUserLocation = () => {
    setIsLoading(true);
    setError(null);
    
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setIsLoading(false);
      },
      (error) => {
        setError(`Unable to retrieve your location: ${error.message}`);
        setIsLoading(false);
      }
    );
  };

  const requestLocationPermission = () => {
    getUserLocation();
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <UserLocationContext.Provider value={{ userLocation, isLoading, error, requestLocationPermission }}>
      {children}
    </UserLocationContext.Provider>
  );
};