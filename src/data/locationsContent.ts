export type LocationMarket = {
  id: string
  city: string
  state: string
  memberCount: number
}

export const activeLocations: LocationMarket[] = [
  { id: 'portland-or', city: 'Portland', state: 'OR', memberCount: 120 },
  { id: 'seattle-wa', city: 'Seattle', state: 'WA', memberCount: 95 },
  { id: 'denver-co', city: 'Denver', state: 'CO', memberCount: 80 },
  { id: 'austin-tx', city: 'Austin', state: 'TX', memberCount: 75 },
  { id: 'phoenix-az', city: 'Phoenix', state: 'AZ', memberCount: 70 },
  { id: 'minneapolis-mn', city: 'Minneapolis', state: 'MN', memberCount: 60 },
  { id: 'ann-arbor-mi', city: 'Ann Arbor', state: 'MI', memberCount: 55 },
  { id: 'saline-mi', city: 'Saline', state: 'MI', memberCount: 40 },
  { id: 'nashville-tn', city: 'Nashville', state: 'TN', memberCount: 50 },
  { id: 'asheville-nc', city: 'Asheville', state: 'NC', memberCount: 45 },
]

export function getLocationById(id: string) {
  return activeLocations.find((location) => location.id === id)
}
