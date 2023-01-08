import {
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
  IonBreadcrumbs,
  IonBreadcrumb,
  IonIcon,
} from '@ionic/react';
import Home from '../components/Home';
import { home } from 'ionicons/icons';

const Profiles: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonBreadcrumbs>
              <IonBreadcrumb href="Home">
                <IonIcon slot="start" icon={home}></IonIcon>
                Home
              </IonBreadcrumb>
            </IonBreadcrumbs>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid fixed={true}>
          <IonRow>
            <Home />
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Profiles;
