import React, { useState, useEffect } from "react";
// import { getEventTypes } from '../';
import { View, ScrollView, Text, TouchableOpacity, Alert, Linking, StyleSheet } from "react-native";
import { MyColors, MyFont } from "../../../Presentation/theme/AppTheme";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../App';
import FloatingMenu from '../../../Presentation/components/FloatingMenu';
import ConsultCard from '../../../Presentation/components/ConsultCard';
import ProcedureCard from '../../../Presentation/components/ProcedureCard';
import ButtonConsultationList from '../../../Presentation/components/BottomMasProcedimientos';
import Icons from '../../../Presentation/theme/Icons';
import ButtonProcedureList from '../../components/BottomMasProcedimientos';
import * as WebBrowser from 'expo-web-browser';

interface EventType {
  name: string;
}

const Home = () => {
  useEffect(() => {
    const handleDeepLink = (event: { url: any; }) => {
      const url = event.url;
      let queryParams = url.split('?')[1];
      let data = {};
      queryParams.split('&').forEach((param: { split: (arg0: string) => [any, any]; }) => {
        let [key, value] = param.split('=');
        data[key] = decodeURIComponent(value);
      });

      // Cerrar el navegador web
      WebBrowser.dismissBrowser();
      
      // Verificar el estado y ejecutar la función correspondiente
      if (data.estado === 'exitoso') {
        pagoConfirmado();
      } else if (data.estado === 'rechazado') {
        pagoRechazado();
      }
    };
  
    // Añade el event listener
    const subscription = Linking.addEventListener('url', handleDeepLink);
  
    // Limpia el listener al desmontar
    return () => {
      subscription.remove();
    };
  }, []);

  const pagoConfirmado = () => {
    navigation.navigate("Confirmado");
  }

  function pagoRechazado() {
    navigation.navigate("Rechazado");
  }

  const { UserIcon, ProcedimientoIcon, ConsultasIcon, AgendaIcon } = Icons;

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const [metodosDePago, setMetodosDePago] = useState([]);

  const consultCards = [
    {
      id: 1,
      image: require("../../../../assets/consultas/cuidado-del-cabello.jpg"),
      title: "Cuidado del cabello",
      description:
        "En Rogans entendemos lo desafiante que puede ser lidiar con la pérdida de cabello y sus efectos en la autoestima y la confianza. Te ofrecemos un enfoque integral y experto para abordar la alopecia y ayudarlo a recuperar su cabello y su confianza.",
      duracion_cita: "30 minutos",
      precio: "$ 80.000",
      category: 'Capilar',
    },
    {
      id: 2,
      image: require("../../../../assets/consultas/cuidado-de-la-piel.jpg"), // foto pendiente
      title: "Cuidado de la piel",
      description:
        "Reconocemos la importancia de mantener una piel saludable, radiante y rejuvenecida. Te brindamos soluciones personalizadas y tratamientos cosméticos de vanguardia para ayudarte a lograr tu apariencia ideal",
      duracion_cita: "30 minutos",
      precio: "$ 50.000",
    },
    {
      id: 3,
      image: require("../../../../assets/consultas/rendimiento-sexual.jpg"),
      title: "Rendimiento Sexual",
      description:
        "Reconocemos la importancia de mantener una piel saludable, radiante y rejuvenecida. Te brindamos soluciones personalizadas y tratamientos cosméticos de vanguardia para ayudarte a lograr tu apariencia ideal",
      duracion_cita: "30 minutos",
      precio: "$ 100.000",
    },
    {
      id: 4,
      image: require("../../../../assets/consultas/salud-mental.jpg"),
      title: "Salud Mental",
      description:
        "Tu salud mental es nuestra prioridad, y estamos comprometidos a trabajar contigo para que puedas vivir una vida más plena y equilibrada.",
      duracion_cita: "30 minutos",
      precio: "$ 80.000",
      category: 'Capilar',
    },
    {
      id: 5,
      image: require("../../../../assets/consultas/consulta-medica-general.jpg"),
      title: "Medicina General",
      description:
        "Nos enorgullece ofrecer atención médica integral para cuidar de tu salud en general. Con médicos altamente calificados que se dedican  a proporcionar atención médica personalizada y completa para toda tu familia",
      duracion_cita: "20 minutos",
      precio: "$ 50.000",
      category: 'Capilar',
    },
    {
      id: 6,
      image: require("../../../../assets/consultas/estetica-dental.jpg"),
      title: "Estética dental ",
      description:
        "Te ayudamos a lograr la sonrisa perfecta que siempre has deseado. Nuestro equipo de especialistas en odontología estética se dedica a transformar sonrisas y a mejorar la confianza de nuestros pacientes. ",
      duracion_cita: "30 minutos",
      precio: "$ 80.000",
      category: 'Capilar',
    },
    {
      id: 7,
      image: require("../../../../assets/consultas/nutricion.jpg"),
      title: "Nutriciòn",
      description:
        "Contamos con expertos en nutrición quienes te apoyan y diseñar planes personalizados que se ajusten a tu estilo de vida y necesidades individuales. Ya sea que desees perder peso, aumentar tu energía o mejorar tus hábitos alimenticios.",
      duracion_cita: "45 minutos",
      precio: "$ 80.000",
      category: 'Capilar',
    },
    {
      id: 8,
      image: require("../../../../assets/consultas/ADN.jpg"),
      title: "ADN",
      description:
        "Te ofrecemos una ventana a tu propia historia genética. Nuestro equipo de expertos en genética está dedicado a ayudarte a descubrir información valiosa sobre tus antecedentes familiares, predisposiciones genéticas y mucho más. ",
      duracion_cita: "40 minutos",
      precio: "$ 00.000",
      category: 'Capilar',
    }, 
  ];

  const procedureCards = [
    { 
      id: 1,
      departamento: 'Capilar',
      title: 'Transplante capilar', 
      image: require('../../../../assets/procedimientos/capilar/implante-capilar.jpg'), 
      description: 'Un trasplante capilar es un procedimiento médico en el que se toman folículos pilosos de una parte del cuerpo,para ser trasplantan a una zona receptora que ha experimentado pérdida de cabello. Este procedimiento se utiliza comúnmente para tratar la calvicie o la alopecia.',
      duracion_cita: "6 - 8 horas",
      tipo_cita: 'presencial',
      precio_cita: '$ 100.000',
    },
    { 
      id: 2,
      departamento: 'Capilar',
      title: 'Mesoterapia capilar ',  
      image: require('../../../../assets/procedimientos/capilar/mesoterapia-capilar.jpg'), 
      description: 'Es un tratamiento no quirúrgico utilizado para combatir la pérdida de cabello y estimular el crecimiento capilar. Consiste en la administración de pequeñas inyecciones de sustancias nutritivas, vitaminas, minerales y otros ingredientes beneficiosos directamente en el cuero cabelludo. ',
      duracion_cita: "1 hora",
      tipo_cita: 'presencial',
      precio_cita: '$ 80.000', 
    },
    { 
      id: 3,
      departamento: 'Capilar',
      title: 'Fototerapia Capilar', 
      image: require('../../../../assets/procedimientos/capilar/fototerapia-capiar.jpg'), 
      description: 'La fototerapia capilar, también conocida como terapia con luz para el cabello, es un tratamiento no invasivo que utiliza luz para estimular el crecimiento del cabello y mejorar la salud del cuero cabelludo.',
      duracion_cita: "1 hora",
      tipo_cita: 'presencial',
      precio_cita: '$ 90.000', 
    },
    { 
      id: 4,
      departamento: 'Facial',
      title: 'Cirugia Plastica Facial', 
      image: require('../../../../assets/procedimientos/facial/cirugia-plastica-facial.jpg'), 
      description: 'La cirugía plástica facial se enfoca en mejorar la apariencia y la función de la cara y el cuello. Incluyendo la corrección de defectos congénitos, traumatismos, enfermedades, procesos de envejecimiento o  para mejorar la apariencia estética.',
      duracion_cita: "1 a 3 horas",
      tipo_cita: 'presencial',
      precio_cita: '$ 90.000', 
    },
    { 
      id: 5,
      departamento: 'Facial',
      title: 'Botox', 
      image: require('../../../../assets/procedimientos/facial/botox.jpg'), 
      description: 'Es un procedimiento estètico  que se utiliza  principalmente para suavizar las arrugas faciales que son causadas por la actividad repetitiva de los músculos faciales.',
      duracion_cita: "45 minutos",
      tipo_cita: 'presencial',
      precio_cita: '$ Valoración sin costo', 
    },
    { 
      id: 6,
      departamento: 'Facial',
      title: 'Acido Hialuronico ', 
      image: require('../../../../assets/procedimientos/facial/Ácido-hialurónico.jpg'), 
      description: 'En procedimientos estéticos para mejorar la apariencia de la piel y restaurar el volumen facial.',
      duracion_cita: "45 minutos",
      tipo_cita: 'presencial',
      precio_cita: '$ Valoración sin costo', 
    },
  ];

  return (
    <View style={styles.container}>
      <FloatingMenu />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hola Juanito</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate("Perfil")}>
            <UserIcon width={27} height={27}/>
          </TouchableOpacity>
        </View>
            {/* ICONOS DE HEADER */}
            <View style={styles.containerRoundedBtn}>
              <TouchableOpacity onPress={() => navigation.navigate("ListaDeProcedimientos")} style={styles.roundedBtn}>
                  <ProcedimientoIcon style={styles.iconRoundedBtn} width={24} height={24}/>
                  <Text style={styles.textRoundedBtn}>
                    Procedimientos
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("ListaDeConsultas")} style={styles.roundedBtn}>
                  <ConsultasIcon style={styles.iconRoundedBtn} width={24} height={24}/>
                  <Text style={styles.textRoundedBtn}>
                    Consultas
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("MiAgenda")} style={styles.roundedBtn}>
                  <AgendaIcon style={styles.iconRoundedBtn} width={24} height={24}/>
                  <Text style={styles.textRoundedBtn}>
                    Mi Agenda
                  </Text>
              </TouchableOpacity>
            </View>
            {/* texto de consultas y botton de mas consultas */}
            <View style={styles.section}>
                <Text style={styles.titleSection}>Consultas{"\n"}para ti</Text>
                <ButtonConsultationList />
            </View>
            {/* cards de consultas capilares */}
            <View style={{marginBottom: 50}}>
              <ConsultCard cards={consultCards} />
            </View>
            <View style={styles.section}>
                <Text style={styles.titleSection}>Procedimientos{"\n"}para ti</Text>
                <ButtonProcedureList />
            </View>
            <View style={{marginBottom: 100}}>
              <ProcedureCard cards={procedureCards} />
            </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
    marginVertical: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 33,
    fontFamily: MyFont.bold,
  },
  iconContainer: {
    position:'relative',
    marginLeft: 16,
    width: 27,
    height: 27,
  },
  userIcon: {
    width: 27,
    height: 27,
  },
  containerRoundedBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  roundedBtn: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    // Sombras para Android
    elevation: 10,
    // Sombras para iOS
    shadowColor: "#F0F0F0",
    shadowOffset: { width: 4, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  iconRoundedBtn: {
    width: 20,
    height: 20,
    marginBottom: 8,
  },
  textRoundedBtn: {
    fontSize: 9.7,
    fontFamily: MyFont.regular,
  },
  section: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  titleSection: {
    fontSize: 18,
    lineHeight: 20,
    fontFamily: MyFont.medium,
    color: MyColors.secondary,
  },
});

export default Home;
