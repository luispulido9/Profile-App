import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonIcon,
  IonContent,
  IonGrid,
} from '@ionic/react';
import { home, personCircleOutline } from 'ionicons/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../components/UserInfo';

export default function UserProfile() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonBreadcrumbs>
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <IonBreadcrumb>
                  <IonIcon slot="start" icon={home}></IonIcon>
                  Home
                </IonBreadcrumb>
              </Link>
              <IonBreadcrumb>
                <IonIcon slot="start" icon={personCircleOutline}></IonIcon>
                Profile
              </IonBreadcrumb>
            </IonBreadcrumbs>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <UserInfo />
      </IonContent>
    </>
  );
}
