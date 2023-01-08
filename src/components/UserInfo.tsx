import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonIcon,
  IonContent,
  IonGrid,
  IonRow,
  IonAvatar,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useParams } from 'react-router';
import './UserInfo.css';

export default function UserProfile() {
  const state = useSelector((state: RootState) => state.info.data);
  const { username: us } = useParams() as any;
  const user = state.find((user) => user.username === us);

  return (
    <>
      <IonHeader className="header">
        <IonItem>
          <IonAvatar slot="start">
            <img alt={user?.username} src={user?.image} />
          </IonAvatar>
          <IonLabel>
            <h1>{`${user?.firstName}  ${user?.lastName}`}</h1>
            <p>Edad: {user?.age}</p>
            <p>🎂 {user?.birthDate}</p>
            <p>☎ {user?.phone}</p>
          </IonLabel>
        </IonItem>
      </IonHeader>
    </>
  );
}
