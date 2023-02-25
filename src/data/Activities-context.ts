import React from "react";

export type Activitietype='rest' | 'work' | 'hobby';

export interface Activity{
    id:string;
    tittle:string;
    description:string;
    hour:string;
    activityType:Activitietype;
    imageUrl:string;
    isCompleted:boolean;
}

export interface ActivitiesContextModel{
    activities: Activity[];
    addActivity:(tittle:string,description:string,hour:string,activityType:Activitietype)=>void;
    completeActivity:(activityId:string)=>void;
}

const ActivitiesContext = React.createContext<ActivitiesContextModel>({
    activities: [],
    addActivity:()=>{},
    completeActivity:()=>{}
})

export default ActivitiesContext;