import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import { ArrowLeft, MapPin, Star, Clock, DollarSign, Tag } from 'lucide-react';
import { restaurants, Restaurant, MenuItem } from '../data/restaurants';
import { useUserLocation } from '../context/UserLocationContext';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Leaflet
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Component to recenter map when user location changes
const RecenterAutomatically = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [lat, lng, map]);
  return null;
};

const ItemDetails: React.FC = () => {
  const { restaurantId, itemId } = useParams<{ restaurantId: string; itemId: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [item, setItem] = useState<MenuItem | null>(null);
  const [relatedItems, setRelatedItems] = useState<MenuItem[]>([]);
  const { userLocation, isLoading: locationLoading, error: locationError, requestLocationPermission } = useUserLocation();
  
  // Restaurant coordinates (would come from a real API)
  const [restaurantCoords, setRestaurantCoords] = useState<[number, number] | null>(null);
  
  useEffect(() => {
    if (restaurantId && itemId) {
      const foundRestaurant = restaurants.find(r => r.id === parseInt(restaurantId));
      if (foundRestaurant) {
        setRestaurant(foundRestaurant);
        
        const foundItem = foundRestaurant.menu.find(i => i.id === parseInt(itemId));
        if (foundItem) {
          setItem(foundItem);
          
          // Find related items from the same restaurant with similar tags
          if (foundItem.tags.length > 0) {
            const related = foundRestaurant.menu
              .filter(i => i.id !== foundItem.id && i.tags.some(tag => foundItem.tags.includes(tag)))
              .slice(0, 3);
            setRelatedItems(related);
          }
          
          // Set mock restaurant coordinates based on distance
          // In a real app, these would come from your backend
          if (userLocation) {
            // Generate random coordinates near the user's location
            const distance = parseFloat(foundRestaurant.distance.split(' ')[0]);
            const randomOffset = distance * 0.01; // Rough approximation
            setRestaurantCoords([
              userLocation.latitude + (Math.random() * randomOffset - randomOffset/2),
              userLocation.longitude + (Math.random() * randomOffset - randomOffset/2)
            ]);
          }
        }
      }
    }
  }, [restaurantId, itemId, userLocation]);

  if (!restaurant || !item) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center p-4 text-indigo-600 hover:text-indigo-800 transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to recommendations</span>
      </Link>
      
      {/* Item header */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">{item.name}</h1>
            <div className="flex items-center mt-2">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="mr-4">{item.rating.toFixed(1)}</span>
              <DollarSign className="w-5 h-5 mr-1" />
              <span>${item.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Item details */}
      <div className="p-6">
        <div className="flex items-start justify-between flex-wrap">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
            <h2 className="text-xl font-semibold mb-2">About this dish</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Restaurant</h3>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">{restaurant.name} • {restaurant.cuisine}</span>
              </div>
              <div className="flex items-center mt-1">
                <Clock className="w-5 h-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">{restaurant.distance} away</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            
            {locationError && (
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-700">{locationError}</p>
                <button 
                  onClick={requestLocationPermission}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Grant Location Access
                </button>
              </div>
            )}
            
            {locationLoading && (
              <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            )}
            
            {userLocation && restaurantCoords && (
              <div className="h-64 rounded-lg overflow-hidden border border-gray-200">
                <MapContainer 
                  center={restaurantCoords} 
                  zoom={14} 
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {/* User location marker */}
                  <Marker 
                    position={[userLocation.latitude, userLocation.longitude]} 
                    icon={defaultIcon}
                  >
                    <Popup>
                      Your location
                    </Popup>
                  </Marker>
                  
                  {/* Restaurant location marker */}
                  <Marker 
                    position={restaurantCoords} 
                    icon={defaultIcon}
                  >
                    <Popup>
                      {restaurant.name}<br />
                      {restaurant.distance} from you
                    </Popup>
                  </Marker>
                  
                  <RecenterAutomatically lat={restaurantCoords[0]} lng={restaurantCoords[1]} />
                </MapContainer>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Related items */}
      {relatedItems.length > 0 && (
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedItems.map(relatedItem => (
              <Link 
                key={relatedItem.id} 
                to={`/item/${restaurant.id}/${relatedItem.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-32 overflow-hidden">
                  <img 
                    src={relatedItem.image} 
                    alt={relatedItem.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-800">{relatedItem.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-700">${relatedItem.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{relatedItem.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;