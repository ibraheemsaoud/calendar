export interface IEvent {
  // Identity
  id: string; // some weird ass id
  date: string; // UTC standard 
  duration: number; // in minutes

  // Description
  name: string;
  description: string;

  // Extra Connections
  apps: string[]; // an arry of app ids
}