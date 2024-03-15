import { createContext, useState, useEffect } from 'react';

import { gql,useQuery } from '@apollo/client';
const COLLECTIONS = gql`
  query GetCollections {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const{loading,error,data}=useQuery(COLLECTIONS)
  const [categoriesMap, setCategoriesMap] = useState({});
  console.log("loading",loading);
  console.log("data",data);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
