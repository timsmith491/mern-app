import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlacesList";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in NYC",
      imageUrl:
        "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
      address: "20 W 34th St, New York, NY 10001, USA",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Ground Zero",
      description: "Site of the Freedom Tower",
      imageUrl:
        "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
      address: "20 W 34th St, New York, NY 10001, USA",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
      creator: "u2",
    },
  ];
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
