import React, { useState } from "react";
import ActivitiesContext, { ActivitiesContextModel, Activitietype, Activity } from "./Activities-context";

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities, setactivities] = useState<Activity[]>(
        [
            {
                id: Math.random().toString(),
                tittle: "play basketball",
                description: "play basketball for 2 hours",
                hour: "15:00",
                activityType: "hobby",
                imageUrl: "/assets/images/hobby.jpeg",
                isCompleted: false
            },
            {
                id: Math.random().toString(),
                tittle: "study React",
                description: "study to get a good job",
                hour: "18:00",
                activityType: "work",
                imageUrl: "/assets/images/trabajo.jpg",
                isCompleted: false
            },
            {
                id: Math.random().toString(),
                tittle: "watch movies",
                description: "watch a movie with my pretty girlFriend",
                hour: "23:00",
                activityType: "rest",
                imageUrl: "/assets/images/descanso.jpg",
                isCompleted: false
            }
        ]
    );

    const addActivity = (tittle: string, description: string, hour: string, activityType: Activitietype) => {

        let imageUrl = '';
        switch (activityType) {
            case 'rest':
                imageUrl = "/assets/images/descanso.jpg";
                break;
            case 'work':
                imageUrl= "/assets/images/trabajo.jpg";
                break;
            case 'hobby':
                imageUrl = "/assets/images/hobby.jpeg";
                break;

            default:
                imageUrl= "/assets/images/trabajo.jpg";
                break;
        };

        const newActivity:Activity={
            id: Math.random().toString(),
            tittle,
            description,
            hour,
            activityType,
            imageUrl,
            isCompleted: false
        };

        setactivities(currActivities=>{
            return [...currActivities,newActivity];
        });

    }

    const completeActivity=(activityId:string)=>{
        
    };
    const activitiesContext: ActivitiesContextModel = {

    };
    return (
        <ActivitiesContext.Provider value={ }>
            {props.childern}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContextProvider;