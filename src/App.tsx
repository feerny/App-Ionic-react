import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AllActivities from "./pages/allActivities/AllActivities";
import { Redirect, Route } from "react-router-dom";
import AddActivities from "./pages/addActivitie/AddActivitie";

import { accessibilityOutline } from "ionicons/icons";
import {addCircleOutline} from 'ionicons/icons'

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="RegaloEliIdMenu">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonMenuToggle>
              <IonItem
                routerLink="/all-activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="medium"
                  slot="start"
                  icon={accessibilityOutline}
                />
                <IonLabel>all activities</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                routerLink="/add-activities"
                routerDirection="none"
                lines="none"
              >
                <IonIcon
                  color="medium"
                  slot="start"
                  icon={addCircleOutline}
                />
                <IonLabel>add activities</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="RegaloEliIdMenu">
        <Route  path="/all-activities" component={AllActivities} exact  />
        <Route path="/add-activities" component={AddActivities} exact />
        <Redirect to={"all-activities"} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
