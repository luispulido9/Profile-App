import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRouterLink,
} from '@ionic/react';
import { fetchPosts } from '../features/info/infoSlice';
import type { RootState, AppDispatch } from '../app/store';
import { Link } from 'react-router-dom';

export default function CardInfo() {
  const state = useSelector((state: RootState) => state.info.data);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state.map((info) => (
        <IonCol size="auto" key={`IonCol-${info.id}`}>
          {' '}
          <Link
            to={`/profile/${info.username}`}
            style={{ textDecoration: 'none' }}
          >
            <IonCard>
              <img alt={info.username} src={info.image} />
              <IonCardHeader>
                <IonCardTitle>{`${info.firstName}  ${info.lastName}`}</IonCardTitle>
                <IonCardSubtitle>{info.birthDate}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Ciudad: {info.address.city}
                <br />
                Calle: {info.address.address}
              </IonCardContent>
            </IonCard>
          </Link>
        </IonCol>
      ))}
    </>
  );
}
